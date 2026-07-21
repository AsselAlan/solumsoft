import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-12 md:px-24 border-t border-platinum/10 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] text-platinum/30 uppercase tracking-[0.2em]">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          SISTEMA_ESTABLE
        </div>
        <div className="hidden md:block w-[1px] h-4 bg-platinum/10"></div>
        <div className="hidden md:block">TX_LOAD: 0.042ms // BUFF: 92%</div>
        <div className="hidden md:block w-[1px] h-4 bg-platinum/10"></div>
        <div>© 2024 SOLUM_SF</div>
      </div>
      
      <div className="flex gap-12">
        <button className="hover:text-technical-blue transition-colors">Política_de_Privacidad</button>
        <button className="hover:text-technical-blue transition-colors">Términos_de_Servicio</button>
      </div>
      
      <div className="font-bold text-flame">BUILD_4.0.12_STABLE</div>
    </footer>
  );
};

export default Footer;
