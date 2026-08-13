import React from 'react';
import logo from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 md:top-0 md:h-screen md:w-20 bg-onyx/80 backdrop-blur-xl border-t md:border-t-0 md:border-r border-platinum/15 flex flex-row md:flex-col items-center md:py-8 z-50 px-4 md:px-0 shadow-[0_0_30px_rgba(0,0,0,0.9)]">
      <div className="hidden md:block mb-12 relative group">
        <a href="#hero">
          <img src={logo} alt="Solum Logo" className="w-12 h-auto hover:scale-110 drop-shadow-[0_0_15px_rgba(0,204,255,0.4)] transition-all duration-300" />
        </a>
      </div>
      
      <div className="flex flex-row md:flex-col justify-around md:justify-start w-full md:w-auto md:gap-8 flex-1 md:flex-initial h-full md:h-auto items-center">
        <a href="#hero" className="md:hidden flex items-center justify-center h-full text-platinum/40 hover:text-technical-blue transition-all duration-300">
           <img src={logo} alt="Solum Logo" className="w-8 h-auto" />
        </a>
        <a href="#tech-stack" className="relative group text-platinum/50 hover:text-technical-blue hover:scale-125 transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Módulo Logística & Stock">
          <i className="ti ti-terminal-2 text-2xl drop-shadow-[0_0_10px_rgba(0,204,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,204,255,0.8)]"></i>
          <span className="hidden md:block absolute left-20 bg-carbon border border-technical-blue/40 text-technical-blue font-mono text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Módulo_Logística
          </span>
        </a>
        <a href="#quadrants" className="relative group text-platinum/50 hover:text-technical-blue hover:scale-125 transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Arquitectura & Procesos">
          <i className="ti ti-box-model-2 text-2xl drop-shadow-[0_0_10px_rgba(0,204,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,204,255,0.8)]"></i>
          <span className="hidden md:block absolute left-20 bg-carbon border border-technical-blue/40 text-technical-blue font-mono text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Arquitectura
          </span>
        </a>
        <a href="#capability-ledger" className="relative group text-platinum/50 hover:text-technical-blue hover:scale-125 transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Cerebro IA & Datos">
          <i className="ti ti-database text-2xl drop-shadow-[0_0_10px_rgba(0,204,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,204,255,0.8)]"></i>
          <span className="hidden md:block absolute left-20 bg-carbon border border-technical-blue/40 text-technical-blue font-mono text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Cerebro_IA
          </span>
        </a>
        <a href="#success-case" className="relative group text-platinum/50 hover:text-technical-blue hover:scale-125 transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Por qué elegirnos">
          <i className="ti ti-bug text-2xl drop-shadow-[0_0_10px_rgba(0,204,255,0)] group-hover:drop-shadow-[0_0_12px_rgba(0,204,255,0.8)]"></i>
          <span className="hidden md:block absolute left-20 bg-carbon border border-technical-blue/40 text-technical-blue font-mono text-[10px] px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
            Propuesta_Valor
          </span>
        </a>
      </div>
      
      <div className="hidden md:flex flex-col gap-6 mt-auto items-center pb-4">
        <a href="https://www.instagram.com/solumsoft/" target="_blank" rel="noopener noreferrer" className="text-platinum/40 hover:text-flame transition-all duration-300" title="Instagram">
          <i className="ti ti-brand-instagram text-2xl"></i>
        </a>
        <a href="https://www.linkedin.com/company/110595068/" target="_blank" rel="noopener noreferrer" className="text-platinum/40 hover:text-technical-blue transition-all duration-300" title="LinkedIn">
          <i className="ti ti-brand-linkedin text-2xl"></i>
        </a>
        <a 
          href="https://wa.me/5492215735188?text=Hola!%20Vengo%20de%20visitar%20la%20web%20solumsoft.com%20y%20quiero%20que%20trabajemos%20juntos." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 mt-2 rounded-full bg-flame flex items-center justify-center text-white shadow-[0_0_25px_rgba(255,79,0,0.6)] hover:scale-110 hover:bg-technical-blue hover:shadow-[0_0_25px_rgba(0,204,255,0.8)] transition-all duration-300 relative group"
          title="WhatsApp Directo"
        >
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500 animate-ping"></span>
          <i className="ti ti-brand-whatsapp text-2xl"></i>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
