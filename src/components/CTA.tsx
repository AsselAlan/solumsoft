import React from 'react';

const CTA = () => {
  return (
    <section className="min-h-screen flex items-center bg-onyx relative overflow-hidden border-t border-platinum/10" id="cta">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <div className="text-[20rem] font-black text-platinum/[0.03] leading-none ml-[-5%] font-heading mix-blend-overlay" id="cta-watermark">01</div>
      </div>
      
      <div className="w-full max-w-6xl mx-auto px-12 md:px-24 flex flex-col md:flex-row justify-between items-end gap-16 relative z-10">
        <div className="max-w-2xl reveal-up">
          <div className="text-technical-blue text-sm font-bold font-mono mb-8 tracking-[0.5em] uppercase font-mono">PROTOCOLO_INICIO</div>
          <h2 className="text-5xl md:text-7xl font-black text-platinum uppercase tracking-tighter leading-[0.8] mb-12 font-heading group">
            ¿LISTO PARA<br /><span className="text-flame group-hover:text-technical-blue transition-colors duration-500">ESCALAR?</span>
          </h2>
          <p className="text-platinum/60 text-xl font-mono mb-12 max-w-xl leading-relaxed">
            Visita la web, entiende el valor, mira el éxito. Inicia un chat directo por WhatsApp para transformar tu operación hoy.
          </p>
        </div>
        
        <div className="w-full md:w-auto reveal-up">
          <a 
            href="https://wa.me/solumsf" 
            className="block bg-flame text-white px-10 py-8 text-2xl font-black uppercase tracking-tighter hover:bg-technical-blue hover:text-onyx transition-all transform hover:-translate-y-3 brutalist-border border-white/10 shadow-[15px_15px_0px_0px_rgba(0,204,255,0.3)] font-heading group"
          >
            INICIAR CHAT
            <i className="ti ti-brand-whatsapp ml-4 group-hover:translate-x-2 transition-transform text-4xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
