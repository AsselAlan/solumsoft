import { Handler } from '@netlify/functions';
import OpenAI from 'openai';
import { createClient } from '@supabase/supabase-js';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configure Supabase client for rate limiting
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export const handler: Handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages } = JSON.parse(event.body || '{}');
    
    if (!messages || !Array.isArray(messages)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Mensajes inválidos' }) };
    }

    // Identificar al usuario/IP
    // En producción en Netlify, podemos usar:
    const ip = event.headers['x-nf-client-connection-ip'] || 'unknown-ip';

    // Rate Limiting con Supabase: 
    // Consultamos cuántos mensajes ha enviado esta IP en la última hora
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: usageData, error: usageError } = await supabase
      .from('chat_logs')
      .select('id')
      .eq('ip_address', ip)
      .gte('created_at', oneHourAgo);

    if (usageError) {
      console.warn("No se pudo verificar rate limit en Supabase:", usageError.message);
      // Continuamos aunque falle (si la tabla aún no está creada, por ejemplo)
    } else if (usageData && usageData.length >= 10) {
      // Límite de 10 mensajes por hora
      return {
        statusCode: 429,
        body: JSON.stringify({ error: 'Has alcanzado el límite de mensajes. Por favor, intenta de nuevo más tarde.' })
      };
    }

    const systemPrompt = {
      role: 'system',
      content: `Eres un experto asesor de ventas de software a medida para la empresa 'Solum'. 
Tu objetivo es convencer al cliente potencial de los beneficios de contratar un software personalizado (ahorro de tiempo, optimización de procesos, automatización, mayor control).
Mantén las respuestas cortas, amables y persuasivas. No respondas preguntas de programación, matemáticas u otros temas que no estén relacionados con el desarrollo de software para empresas.
No ofrezcas precios específicos, diles que contacten al equipo de ventas para una cotización.`
    };

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Usamos un modelo económico
      messages: [systemPrompt, ...messages],
      max_tokens: 300, // Limita el costo por respuesta
      temperature: 0.7,
    });

    const reply = completion.choices[0].message;

    // Registrar el uso en Supabase de forma asíncrona
    if (supabaseUrl && supabaseServiceKey) {
      await supabase.from('chat_logs').insert([{
        ip_address: ip,
        message_length: messages[messages.length - 1].content.length,
        response_tokens: completion.usage?.total_tokens || 0
      }]);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error: any) {
    console.error('Error en el chatbot:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Ocurrió un error al procesar tu solicitud.' }),
    };
  }
};
