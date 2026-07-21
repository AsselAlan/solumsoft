import React from 'react';
import logo from '../assets/logo.svg';

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-onyx border-r border-platinum/10 flex flex-col items-center py-8 z-50">
      <div className="mb-12">
        <img src={logo} alt="Solum Logo" className="w-12 h-auto hover:scale-110 transition-transform duration-300" />
      </div>
      
      <div className="flex flex-col gap-8 flex-1">
        <button className="text-platinum/40 hover:text-technical-blue transition-all duration-300" title="Consola">
          <i className="ti ti-terminal-2 text-2xl"></i>
        </button>
        <button className="text-platinum/40 hover:text-technical-blue transition-all duration-300" title="Arquitectura">
          <i className="ti ti-box-model-2 text-2xl"></i>
        </button>
        <button className="text-platinum/40 hover:text-technical-blue transition-all duration-300" title="Base de Datos">
          <i className="ti ti-database text-2xl"></i>
        </button>
        <button className="text-platinum/40 hover:text-technical-blue transition-all duration-300" title="Depurar">
          <i className="ti ti-bug text-2xl"></i>
        </button>
      </div>
      
      <div className="mt-auto">
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
