import React, { useState, useEffect, useRef } from 'react';
import { HeartHandshake, Zap, Headphones } from 'lucide-react';
import standImage from '../assets/stand.png';

interface CardData {
  id: number;
  category: string;
  titleNode: React.ReactNode;
  desc: string;
  icon: React.ReactNode;
}

const cardsData: CardData[] = [
  {
    id: 0,
    category: "VALOR_01 // EMPATÍA",
    titleNode: <>Cercanía y <span className="text-flame">Empatía Real</span></>,
    desc: "Sabemos que el mercado de las PyMEs suele estar abrumado por sistemas enlatados ultra complejos. Por eso, en Solum Soft no vendemos sistemas cerrados ni te obligamos a encajar en procesos que no son tuyos. Nos sentamos con vos, mapeamos tu flujo de trabajo real y atacamos directamente los cuellos de botella que te hacen perder tiempo y dinero.",
    icon: <HeartHandshake className="w-10 h-10 text-technical-blue" />
  },
  {
    id: 1,
    category: "VALOR_02 // VELOCIDAD",
    titleNode: <>Agilidad sin <span className="text-flame">Fricciones</span></>,
    desc: "Entendemos que necesitás soluciones rápidas. Gracias a nuestro ecosistema tecnológico validado, podemos prometerte un desarrollo a medida en un plazo promedio de 15 a 21 días. Nuestro objetivo es reemplazar rápidamente el papel y las planillas de cálculo propensas a errores por aplicaciones web robustas y fáciles de usar.",
    icon: <Zap className="w-10 h-10 text-technical-blue" />
  },
  {
    id: 2,
    category: "VALOR_03 // SOPORTE",
    titleNode: <>Acompañamiento <span className="text-flame">Continuo</span></>,
    desc: "No te entregamos un sistema para luego desaparecer. Nuestro modelo incluye soporte técnico directo por WhatsApp para que nunca te sientas solo frente a la pantalla. Tu única preocupación debe ser hacer crecer tu empresa; de la tecnología nos encargamos nosotros.",
    icon: <Headphones className="w-10 h-10 text-technical-blue" />
  }
];

const SuccessCase = () => {
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;

            // Giro una por una con retardo secuencial
            setTimeout(() => {
              setFlippedCards((prev) => [true, prev[1], prev[2]]);
            }, 700);

            setTimeout(() => {
              setFlippedCards((prev) => [prev[0], true, prev[2]]);
            }, 1600);

            setTimeout(() => {
              setFlippedCards((prev) => [prev[0], prev[1], true]);
            }, 2500);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <section ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden" id="success-case">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="text-center mb-16 md:mb-24 reveal-up">
          <h2 className="text-5xl md:text-6xl font-black text-platinum uppercase tracking-tighter font-heading">
            Por qué elegir <span className="text-flame">Solum Soft</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
          
          {/* Columna Izquierda (Card 1) */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div 
              onClick={() => toggleCard(0)}
              className="relative w-full h-[360px] md:h-[320px] cursor-pointer [perspective:1000px] reveal-up group"
            >
              <div 
                className={`w-full h-full relative transition-transform duration-1000 [transform-style:preserve-3d] ${
                  flippedCards[0] ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* CARA FRONTAL: Icono central celeste */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] rounded-xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] group-hover:border-technical-blue transition-colors">
                  <span className="text-[10px] font-mono text-technical-blue tracking-widest uppercase mb-6">
                    {cardsData[0].category}
                  </span>
                  <div className="w-20 h-20 rounded-2xl bg-technical-blue/10 border border-technical-blue/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,204,255,0.25)] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {cardsData[0].icon}
                  </div>
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter font-heading">
                    {cardsData[0].titleNode}
                  </h3>
                  <div className="text-[10px] font-mono text-platinum/40 mt-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-technical-blue animate-pulse"></span>
                    VER DETALLES
                  </div>
                </div>

                {/* CARA TRASERA: Texto explicativo */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/40 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.3)] rounded-xl flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                    {cardsData[0].titleNode}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                    {cardsData[0].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Central - Imagen Stand */}
          <div className="relative group order-1 lg:order-2 flex justify-center reveal-up">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl border border-platinum/15 shadow-2xl">
              <img 
                src={standImage}
                alt="Solum Soft Approach" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>
          
          {/* Columna Derecha (Card 2 & Card 3) */}
          <div className="flex flex-col gap-8 order-3 lg:order-3">
            
            {/* Card 2 */}
            <div 
              onClick={() => toggleCard(1)}
              className="relative w-full h-[360px] md:h-[320px] cursor-pointer [perspective:1000px] reveal-up group"
            >
              <div 
                className={`w-full h-full relative transition-transform duration-1000 [transform-style:preserve-3d] ${
                  flippedCards[1] ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* CARA FRONTAL: Icono central celeste */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] rounded-xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] group-hover:border-technical-blue transition-colors">
                  <span className="text-[10px] font-mono text-technical-blue tracking-widest uppercase mb-6">
                    {cardsData[1].category}
                  </span>
                  <div className="w-20 h-20 rounded-2xl bg-technical-blue/10 border border-technical-blue/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,204,255,0.25)] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {cardsData[1].icon}
                  </div>
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter font-heading">
                    {cardsData[1].titleNode}
                  </h3>
                  <div className="text-[10px] font-mono text-platinum/40 mt-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-technical-blue animate-pulse"></span>
                    VER DETALLES
                  </div>
                </div>

                {/* CARA TRASERA: Texto explicativo */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/40 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.3)] rounded-xl flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                    {cardsData[1].titleNode}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                    {cardsData[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => toggleCard(2)}
              className="relative w-full h-[360px] md:h-[320px] cursor-pointer [perspective:1000px] reveal-up group"
            >
              <div 
                className={`w-full h-full relative transition-transform duration-1000 [transform-style:preserve-3d] ${
                  flippedCards[2] ? '[transform:rotateY(180deg)]' : ''
                }`}
              >
                {/* CARA FRONTAL: Icono central celeste */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/30 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.2)] rounded-xl flex flex-col items-center justify-center text-center [backface-visibility:hidden] group-hover:border-technical-blue transition-colors">
                  <span className="text-[10px] font-mono text-technical-blue tracking-widest uppercase mb-6">
                    {cardsData[2].category}
                  </span>
                  <div className="w-20 h-20 rounded-2xl bg-technical-blue/10 border border-technical-blue/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,204,255,0.25)] mb-6 group-hover:scale-110 transition-transform duration-500">
                    {cardsData[2].icon}
                  </div>
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter font-heading">
                    {cardsData[2].titleNode}
                  </h3>
                  <div className="text-[10px] font-mono text-platinum/40 mt-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-technical-blue animate-pulse"></span>
                    VER DETALLES
                  </div>
                </div>

                {/* CARA TRASERA: Texto explicativo */}
                <div className="absolute inset-0 w-full h-full bg-onyx p-8 border border-technical-blue/40 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.3)] rounded-xl flex flex-col justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <h3 className="text-2xl font-black text-platinum uppercase tracking-tighter leading-tight mb-4 font-heading">
                    {cardsData[2].titleNode}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed font-sans">
                    {cardsData[2].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default SuccessCase;

