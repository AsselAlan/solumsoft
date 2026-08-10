import React from 'react';
import standImage from '../assets/stand.png';

const SuccessCase = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="success-case">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-16 md:mb-24 reveal-up">
           <h2 className="text-5xl md:text-6xl font-black text-platinum uppercase tracking-tighter font-heading">
             Por qué elegir <span className="text-flame">Solum Soft</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="relative z-10 bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] reveal-up">
              <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                Cercanía y <span className="text-flame">Empatía Real</span>
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed font-sans">
                Sabemos que el mercado de las PyMEs suele estar abrumado por sistemas enlatados ultra complejos. Por eso, en Solum Soft no vendemos sistemas cerrados ni te obligamos a encajar en procesos que no son tuyos. Nos sentamos con vos, mapeamos tu flujo de trabajo real y atacamos directamente los cuellos de botella que te hacen perder tiempo y dinero.
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="relative group order-1 lg:order-2 flex justify-center reveal-up">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={standImage}
                alt="Solum Soft Approach" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8 order-3 lg:order-3">
            <div className="relative z-10 bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] reveal-up">
              <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                Agilidad sin <span className="text-flame">Fricciones</span>
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed font-sans">
                Entendemos que necesitás soluciones rápidas. Gracias a nuestro ecosistema tecnológico validado, podemos prometerte un desarrollo a medida en un plazo promedio de 15 a 21 días. Nuestro objetivo es reemplazar rápidamente el papel y las planillas de cálculo propensas a errores por aplicaciones web robustas y fáciles de usar.
              </p>
            </div>

            <div className="relative z-10 bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] reveal-up">
              <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                Acompañamiento <span className="text-flame">Continuo</span>
              </h3>
              <p className="text-sm md:text-base text-white leading-relaxed font-sans">
                No te entregamos un sistema para luego desaparecer. Nuestro modelo incluye soporte técnico directo por WhatsApp para que nunca te sientas solo frente a la pantalla. Tu única preocupación debe ser hacer crecer tu empresa; de la tecnología nos encargamos nosotros.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SuccessCase;
