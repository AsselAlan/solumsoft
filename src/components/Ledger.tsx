import React, { useState } from 'react';
import { Database, Brain, MessageSquare, Sparkles, Send, FileText, CheckCircle2, Bot, LayoutDashboard, Files, BarChart3, Settings, HardDrive, Bell } from 'lucide-react';

interface PresetQA {
  question: string;
  answer: string;
  bulletList?: { label: string; value: string }[];
  followUp?: string;
}

const presetQAs: PresetQA[] = [
  {
    question: "¿Cuáles son nuestros productos más rentables en el último trimestre?",
    answer: "Según tus datos, los productos más rentables en el último trimestre fueron:",
    bulletList: [
      { label: "Producto 1", value: "32% de margen" },
      { label: "Producto 2", value: "28% de margen" },
      { label: "Producto 3", value: "21% de margen" }
    ],
    followUp: "¿Querés ver el detalle completo?"
  },
  {
    question: "¿Cuántas facturas pendientes de cobro tenemos este mes?",
    answer: "Analizando la base de datos de facturación y cobros:",
    bulletList: [
      { label: "Facturas pendientes", value: "14 pendientes" },
      { label: "Monto total", value: "$4.850.000 ARS" },
      { label: "Vencimiento promedio", value: "8 días" }
    ],
    followUp: "¿Querés enviar un recordatorio automático a los clientes?"
  },
  {
    question: "¿Cuál es el tiempo promedio de entrega del inventario?",
    answer: "Cruzando datos del módulo de logística y depósitos:",
    bulletList: [
      { label: "Tiempo promedio", value: "2.4 días hábiles" },
      { label: "Mejora vs mes anterior", value: "-18% en demoras" }
    ],
    followUp: "¿Querés descargar el reporte completo en PDF?"
  }
];

const Ledger = () => {
  const [activeQAIndex, setActiveQAIndex] = useState<number>(0);
  const [inputVal, setInputVal] = useState<string>('');
  const [customQA, setCustomQA] = useState<PresetQA | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const currentQA = customQA || presetQAs[activeQAIndex];

  const handleSelectPreset = (index: number) => {
    setCustomQA(null);
    setIsTyping(true);
    setActiveQAIndex(index);
    setTimeout(() => setIsTyping(false), 400);
  };

  const handleSubmitCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    setIsTyping(true);
    const text = inputVal.trim();
    setInputVal('');

    setTimeout(() => {
      setCustomQA({
        question: text,
        answer: `Entendido. Procesando información sobre "${text}":`,
        bulletList: [
          { label: "Resultado de consulta RAG", value: "100% verificado" },
          { label: "Fuentes consultadas", value: "Base de Datos & Google Drive" }
        ],
        followUp: "¿Necesitás más detalles sobre este informe?"
      });
      setIsTyping(false);
    }, 600);
  };

  return (
    <section className="py-24 md:py-36 px-4 md:px-12 lg:px-20 relative overflow-hidden" id="capability-ledger">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Contenido y Beneficios (Aparece primero como título de historia) */}
          <div className="lg:col-span-5 flex flex-col justify-center story-header">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-technical-blue/10 border border-technical-blue/30 text-technical-blue font-mono font-bold tracking-widest text-xs uppercase mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-technical-blue animate-pulse"></span>
              IA QUE ENTIENDE TU NEGOCIO
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-platinum tracking-tighter leading-[1.05] font-heading mb-6 uppercase">
              PREGUNTA DATOS DE TU EMPRESA <span className="text-flame">A LA IA.</span>
            </h2>

            <p className="text-platinum/80 font-mono text-base md:text-lg mb-10 leading-relaxed">
              Convertimos toda la información de tu negocio en un <span className="text-flame font-bold">cerebro RAG</span>. Nuestra IA entiende cómo funciona tu empresa y te da respuestas precisas al instante.
            </p>

            {/* Lista de Funcionalidades */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-onyx border border-technical-blue/40 flex items-center justify-center flex-shrink-0 group-hover:border-technical-blue group-hover:shadow-[0_0_15px_rgba(0,204,255,0.25)] transition-all duration-300">
                  <Database className="w-6 h-6 text-technical-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-platinum font-heading group-hover:text-technical-blue transition-colors uppercase">
                    Tu información, conectada
                  </h3>
                  <p className="text-platinum/60 font-mono text-sm leading-relaxed mt-1">
                    Integramos tus datos, documentos y sistemas en una base centralizada y segura.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-onyx border border-technical-blue/40 flex items-center justify-center flex-shrink-0 group-hover:border-technical-blue group-hover:shadow-[0_0_15px_rgba(0,204,255,0.25)] transition-all duration-300">
                  <Brain className="w-6 h-6 text-technical-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-platinum font-heading group-hover:text-technical-blue transition-colors uppercase">
                    Cerebro RAG
                  </h3>
                  <p className="text-platinum/60 font-mono text-sm leading-relaxed mt-1">
                    Usamos Retrieval-Augmented Generation para que la IA entienda el contexto real de tu negocio.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-onyx border border-technical-blue/40 flex items-center justify-center flex-shrink-0 group-hover:border-technical-blue group-hover:shadow-[0_0_15px_rgba(0,204,255,0.25)] transition-all duration-300">
                  <MessageSquare className="w-6 h-6 text-technical-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-platinum font-heading group-hover:text-technical-blue transition-colors uppercase">
                    Respuestas precisas
                  </h3>
                  <p className="text-platinum/60 font-mono text-sm leading-relaxed mt-1">
                    Haz preguntas en lenguaje natural y obtené respuestas basadas 100% en tus datos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Dashboard Maqueta Interactiva de IA (Aparece como ventana interactiva) */}
          <div className="lg:col-span-7 relative story-card">
            
            {/* SVG Connecting Lines (Decorativas en pantalla grande) */}
            <svg className="hidden md:block absolute -top-12 left-16 w-48 h-20 pointer-events-none z-20 overflow-visible">
              <path d="M 40,5 Q 120,-15 160,35" fill="none" stroke="#00CCFF" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="160" cy="35" r="3" fill="#00CCFF" />
            </svg>

            <svg className="hidden md:block absolute -bottom-10 right-20 w-48 h-20 pointer-events-none z-20 overflow-visible">
              <path d="M 10,10 Q 50,55 120,40" fill="none" stroke="#FF4F00" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="10" cy="10" r="3" fill="#FF4F00" />
            </svg>

            {/* Badge Flotante Superior: "Tus datos" */}
            <div className="hidden md:flex absolute -top-10 left-4 z-30 items-center gap-3 bg-carbon/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-technical-blue/40 shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
              <div className="w-8 h-8 rounded-lg bg-technical-blue/15 border border-technical-blue/40 flex items-center justify-center text-technical-blue">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-heading font-bold text-xs">Tus datos</div>
                <div className="text-platinum/50 font-mono text-[10px]">Documentos, DB, archivos, etc.</div>
              </div>
            </div>

            {/* Container Principal del Dashboard */}
            <div className="w-full bg-[#0E0E10] rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden relative">
              
              {/* Header Top Bar */}
              <div className="bg-[#141416] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-flame flex items-center justify-center text-white font-black font-heading text-xs">
                    S
                  </div>
                  <span className="font-heading font-black text-sm tracking-widest text-platinum">SOLUM</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Bell className="w-4 h-4 text-platinum/50 hover:text-platinum cursor-pointer" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-flame"></span>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-technical-blue/20 border border-technical-blue/40 text-technical-blue font-mono font-bold text-xs flex items-center justify-center">
                    AD
                  </div>
                </div>
              </div>

              {/* Dashboard Layout: Sidebar + Main Content */}
              <div className="grid grid-cols-12 min-h-[500px]">
                
                {/* Mini Sidebar */}
                <div className="hidden sm:flex sm:col-span-3 bg-[#121214] border-r border-white/10 p-3 flex-col justify-between font-mono text-xs">
                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 rounded-lg bg-white/10 text-white font-semibold flex items-center gap-2.5">
                      <LayoutDashboard className="w-4 h-4 text-technical-blue" />
                      Resumen
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-platinum/50 hover:text-platinum hover:bg-white/5 transition-colors flex items-center gap-2.5">
                      <Database className="w-4 h-4" />
                      Datos
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-platinum/50 hover:text-platinum hover:bg-white/5 transition-colors flex items-center gap-2.5">
                      <Files className="w-4 h-4" />
                      Documentos
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg text-platinum/50 hover:text-platinum hover:bg-white/5 transition-colors flex items-center gap-2.5">
                      <BarChart3 className="w-4 h-4" />
                      Reportes
                    </button>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <button className="w-full text-left px-3 py-2 rounded-lg text-platinum/50 hover:text-platinum hover:bg-white/5 transition-colors flex items-center gap-2.5">
                      <Settings className="w-4 h-4" />
                      Configuración
                    </button>
                  </div>
                </div>

                {/* Dashboard Center & Chat Area */}
                <div className="col-span-12 sm:col-span-9 p-4 md:p-5 flex flex-col justify-between space-y-4 bg-[#09090A]">
                  
                  {/* Title & Stats */}
                  <div>
                    <h4 className="text-white font-heading font-bold text-base mb-3">Resumen</h4>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                      <div className="bg-[#161618] p-2.5 rounded-xl border border-white/10">
                        <div className="text-platinum/50 font-mono text-[10px]">Documentos</div>
                        <div className="text-white font-mono font-bold text-base mt-0.5">1,248</div>
                        <div className="text-technical-blue font-mono text-[9px] mt-0.5 flex items-center gap-1">
                          <span>+12%</span> <span className="text-platinum/40">vs mes anterior</span>
                        </div>
                      </div>

                      <div className="bg-[#161618] p-2.5 rounded-xl border border-white/10">
                        <div className="text-platinum/50 font-mono text-[10px]">Consultas IA</div>
                        <div className="text-white font-mono font-bold text-base mt-0.5">532</div>
                        <div className="text-technical-blue font-mono text-[9px] mt-0.5 flex items-center gap-1">
                          <span>+18%</span> <span className="text-platinum/40">vs mes anterior</span>
                        </div>
                      </div>

                      <div className="bg-[#161618] p-2.5 rounded-xl border border-white/10">
                        <div className="text-platinum/50 font-mono text-[10px]">Respuestas generadas</div>
                        <div className="text-white font-mono font-bold text-base mt-0.5">932</div>
                        <div className="text-technical-blue font-mono text-[9px] mt-0.5 flex items-center gap-1">
                          <span>+24%</span> <span className="text-platinum/40">vs mes anterior</span>
                        </div>
                      </div>

                      <div className="bg-[#161618] p-2.5 rounded-xl border border-white/10">
                        <div className="text-platinum/50 font-mono text-[10px]">Precisión promedio</div>
                        <div className="text-white font-mono font-bold text-base mt-0.5">94%</div>
                        <div className="text-technical-blue font-mono text-[9px] mt-0.5 flex items-center gap-1">
                          <span>+5%</span> <span className="text-platinum/40">vs mes anterior</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sources + Chat Widget Split */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
                    
                    {/* Fuentes Conectadas Column */}
                    <div className="md:col-span-5 bg-[#161618] p-3 rounded-xl border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="text-platinum/70 font-heading font-semibold text-xs mb-3 flex items-center gap-1.5">
                          <HardDrive className="w-3.5 h-3.5 text-technical-blue" />
                          Fuentes conectadas
                        </div>

                        <div className="space-y-2 font-mono text-xs">
                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#101012] border border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-flame/15 flex items-center justify-center text-flame text-[10px]">
                                🗄️
                              </div>
                              <div>
                                <div className="text-white text-[11px] font-medium">Base de datos</div>
                                <div className="text-technical-blue text-[9px]">Conectado</div>
                              </div>
                            </div>
                            <span className="text-platinum/40 text-[10px]">15 tablas</span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#101012] border border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-blue-500/15 flex items-center justify-center text-blue-400 text-[10px]">
                                📁
                              </div>
                              <div>
                                <div className="text-white text-[11px] font-medium">Google Drive</div>
                                <div className="text-technical-blue text-[9px]">Conectado</div>
                              </div>
                            </div>
                            <span className="text-platinum/40 text-[10px]">342 docs</span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#101012] border border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-white/15 flex items-center justify-center text-white text-[10px]">
                                📝
                              </div>
                              <div>
                                <div className="text-white text-[11px] font-medium">Notion</div>
                                <div className="text-technical-blue text-[9px]">Conectado</div>
                              </div>
                            </div>
                            <span className="text-platinum/40 text-[10px]">128 páginas</span>
                          </div>

                          <div className="flex items-center justify-between p-2 rounded-lg bg-[#101012] border border-white/5">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-red-500/15 flex items-center justify-center text-red-400 text-[10px]">
                                📑
                              </div>
                              <div>
                                <div className="text-white text-[11px] font-medium">Manuales Internos</div>
                                <div className="text-technical-blue text-[9px]">Conectado</div>
                              </div>
                            </div>
                            <span className="text-platinum/40 text-[10px]">76 archivos</span>
                          </div>
                        </div>
                      </div>

                      {/* Botones de Presets Rápido */}
                      <div className="mt-3 pt-2 border-t border-white/10">
                        <div className="text-platinum/40 text-[9px] font-mono mb-1.5 uppercase">Preguntas de prueba:</div>
                        <div className="space-y-1">
                          {presetQAs.map((item, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSelectPreset(idx)}
                              className={`w-full text-left px-2 py-1 rounded text-[10px] font-mono transition-colors truncate block ${
                                activeQAIndex === idx && !customQA 
                                  ? 'bg-technical-blue/20 text-technical-blue border border-technical-blue/40' 
                                  : 'text-platinum/60 hover:text-platinum hover:bg-white/5'
                              }`}
                            >
                              • {item.question}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Chat Widget Column ("Asistente IA") */}
                    <div className="md:col-span-7 bg-[#161618] p-3.5 rounded-xl border border-white/10 flex flex-col justify-between">
                      
                      {/* Widget Header */}
                      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-md bg-technical-blue/20 flex items-center justify-center text-technical-blue">
                            <Bot className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-white font-heading font-bold text-xs">Asistente IA</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          Online
                        </div>
                      </div>

                      {/* Messages Area */}
                      <div className="space-y-3 font-mono text-xs flex-1 mb-3">
                        
                        {/* User Bubble */}
                        <div className="flex justify-end">
                          <div className="max-w-[90%] bg-[#281810] border border-flame/40 p-2.5 rounded-xl rounded-tr-none text-white text-[11px] leading-relaxed">
                            {currentQA.question}
                          </div>
                        </div>

                        {/* AI Bubble */}
                        <div className="flex justify-start">
                          <div className="max-w-[95%] bg-[#222226] border border-white/10 p-3 rounded-xl rounded-tl-none text-platinum/90 text-[11px] leading-relaxed space-y-2">
                            {isTyping ? (
                              <div className="flex items-center gap-1.5 text-technical-blue py-1">
                                <span className="w-1.5 h-1.5 bg-technical-blue rounded-full animate-bounce"></span>
                                <span className="w-1.5 h-1.5 bg-technical-blue rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                <span className="w-1.5 h-1.5 bg-technical-blue rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                <span className="text-[10px] text-platinum/50 ml-1">Consultando RAG...</span>
                              </div>
                            ) : (
                              <>
                                <p>{currentQA.answer}</p>
                                
                                {currentQA.bulletList && currentQA.bulletList.length > 0 && (
                                  <ul className="space-y-1 my-1.5 pl-1 border-l-2 border-technical-blue/50">
                                    {currentQA.bulletList.map((bullet, idx) => (
                                      <li key={idx} className="text-white flex items-center justify-between text-[11px] pl-2">
                                        <span>• {bullet.label}:</span>
                                        <span className="font-bold text-flame ml-2">{bullet.value}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}

                                {currentQA.followUp && (
                                  <p className="text-technical-blue text-[10px] pt-1">{currentQA.followUp}</p>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Input Box */}
                      <form onSubmit={handleSubmitCustom} className="relative mt-auto">
                        <input
                          type="text"
                          value={inputVal}
                          onChange={(e) => setInputVal(e.target.value)}
                          placeholder="Escribí tu pregunta..."
                          className="w-full bg-[#101012] text-white placeholder-platinum/40 font-mono text-xs px-3 py-2.5 pr-10 rounded-lg border border-white/15 focus:outline-none focus:border-flame transition-colors"
                        />
                        <button
                          type="submit"
                          className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 bg-flame hover:bg-flame/80 text-white rounded-md flex items-center justify-center transition-colors"
                        >
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </form>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* Badge Flotante Inferior: "IA + RAG" */}
            <div className="hidden md:flex absolute -bottom-8 right-6 z-30 items-center gap-3 bg-carbon/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-flame/40 shadow-[0_8px_20px_rgba(0,0,0,0.4)]">
              <div className="w-8 h-8 rounded-lg bg-flame/15 border border-flame/40 flex items-center justify-center text-flame">
                <Brain className="w-4 h-4" />
              </div>
              <div>
                <div className="text-white font-heading font-bold text-xs">IA + RAG</div>
                <div className="text-platinum/50 font-mono text-[10px]">Entiende el contexto de tu negocio</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ledger;

