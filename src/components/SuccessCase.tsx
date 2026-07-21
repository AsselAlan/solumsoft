import React from 'react';
import standImage from '../assets/stand.png';

const SuccessCase = () => {
  return (
    <section className="py-32 md:py-64 relative bg-onyx overflow-hidden" id="success-case">
      <div className="max-w-6xl mx-auto px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group reveal-up">
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={standImage}
                alt="Stand" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
          
          <div className="flex flex-col justify-center reveal-up">
            <div className="relative z-10 bg-onyx p-12 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)]">
              <h2 className="text-4xl md:text-5xl font-black text-platinum uppercase tracking-tighter leading-tight mb-8 font-heading">
                Exhibición de <span className="text-flame">Primer Nivel</span>
              </h2>
              <p className="text-lg text-platinum/80 leading-relaxed font-sans">
                Diseñamos cada espacio con precisión y atención al detalle. Nuestro stand no solo atrae las miradas, sino que ofrece una experiencia inmersiva que conecta directamente con la esencia de la marca, asegurando una presencia destacada en cualquier evento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCase;
