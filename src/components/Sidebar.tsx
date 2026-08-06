import React from 'react';
import logo from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 md:top-0 md:h-screen md:w-20 bg-onyx border-t md:border-t-0 md:border-r border-platinum/10 flex flex-row md:flex-col items-center md:py-8 z-50 px-4 md:px-0">
      <div className="hidden md:block mb-12">
        <a href="#hero">
          <img src={logo} alt="Solum Logo" className="w-12 h-auto hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
      
      <div className="flex flex-row md:flex-col justify-around md:justify-start w-full md:w-auto md:gap-8 flex-1 md:flex-initial h-full md:h-auto items-center">
        <a href="#hero" className="md:hidden flex items-center justify-center h-full text-platinum/40 hover:text-technical-blue transition-all duration-300">
           <img src={logo} alt="Solum Logo" className="w-8 h-auto" />
        </a>
        <a href="#tech-stack" className="text-platinum/40 hover:text-technical-blue transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Consola">
          <i className="ti ti-terminal-2 text-2xl"></i>
        </a>
        <a href="#quadrants" className="text-platinum/40 hover:text-technical-blue transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Arquitectura">
          <i className="ti ti-box-model-2 text-2xl"></i>
        </a>
        <a href="#capability-ledger" className="text-platinum/40 hover:text-technical-blue transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Base de Datos">
          <i className="ti ti-database text-2xl"></i>
        </a>
        <a href="#success-case" className="text-platinum/40 hover:text-technical-blue transition-all duration-300 flex items-center justify-center h-full md:h-auto" title="Depurar">
          <i className="ti ti-bug text-2xl"></i>
        </a>
      </div>
      
      <div className="hidden md:flex mt-auto">
        <a 
          href="https://wa.me/solumsf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-flame flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,79,0,0.4)] hover:scale-110 hover:bg-technical-blue transition-all duration-300"
        >
          <i className="ti ti-brand-whatsapp text-2xl"></i>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
