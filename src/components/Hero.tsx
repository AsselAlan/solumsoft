import React, { useEffect } from 'react';
import gsap from 'gsap';
import LogoMarcaIcon from './LogoMarcaIcon';
import WatermarkLogo from './WatermarkLogo';

const Hero = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.fromTo(".bg-watermark", {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 0.6,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".bg-watermark", {
          y: -30,
          rotation: 3,
          scale: 1.05,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    gsap.fromTo(".logo-marca-path", {
      y: 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "back.out(1.5)"
    });

        gsap.to(".terminal-dot", {
          opacity: 0.2,
          duration: 0.8,
          stagger: 0.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });

    gsap.fromTo(".hero-reveal", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 md:px-24 relative">
      <div className="absolute top-[85%] md:top-1/2 right-[-20%] md:right-24 -translate-y-1/2 pointer-events-none z-0">
        <div className="bg-watermark origin-center flex items-center justify-center scale-75 md:scale-100">
          <WatermarkLogo className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] object-contain drop-shadow-[0_0_50px_rgba(0,204,255,0.3)]" />
        </div>
      </div>

      {/* Titulo Principal de la Web (Aparece primero en la historia) */}
      <div className="story-header mb-10 mt-20 md:mt-0 flex flex-col md:flex-row items-baseline gap-6 relative z-10">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.75] uppercase tracking-tighter font-heading text-platinum drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
          SOLUCIONES<br /><span className="text-flame">DIGI</span><span className="text-technical-blue">TALES.</span>
        </h1>
        <div className="text-technical-blue/70 text-xs font-mono max-w-[240px] leading-relaxed uppercase tracking-[0.15em] border-l-2 border-technical-blue/40 pl-4 py-1">
          [SOLUM SOFTWARE]<br />
          SOLUCIONES DE SOFTWARE PERSONALIZADAS PARA PYMES.
        </div>
      </div>

      {/* Ventana Consola Terminal (Aparece después como card/ventana interactiva) */}
      <div className="story-card w-full max-w-5xl brutalist-border bg-black/90 backdrop-blur-xl overflow-hidden relative z-10 border-technical-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(0,204,255,0.15)] hover:border-technical-blue/60 transition-all duration-500 rounded-xl">
        <div className="bg-carbon border-b border-platinum/10 px-5 py-3 flex items-center justify-between">
          <div className="flex gap-2.5 items-center">
            <div className="w-3 h-3 rounded-full bg-flame terminal-dot shadow-[0_0_10px_#ff4f00]"></div>
            <div className="w-3 h-3 rounded-full bg-technical-blue terminal-dot opacity-60 shadow-[0_0_10px_#00ccff]"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400 terminal-dot opacity-40"></div>
          </div>
          <div className="text-technical-blue/80 text-[11px] uppercase tracking-widest font-mono font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-technical-blue animate-ping"></span>
            solum_terminal_v4.0.0-industrial
          </div>
          <div className="flex gap-4 text-platinum/40 text-[9px] font-mono">
            <span className="text-emerald-400">CPU: 18%</span>
            <span className="text-technical-blue">LATENCIA: 2ms</span>
          </div>
        </div>

        <div className="p-6 md:p-10 font-mono relative overflow-hidden">
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-technical-blue/[0.03] to-transparent pointer-events-none animate-pulse"></div>

          <div className="flex items-center gap-3 mb-6">
            <LogoMarcaIcon className="h-20 md:h-32 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,79,0,0.3)]" />
          </div>

          <div className="hero-reveal">
            <p className="text-white/95 text-base md:text-lg max-w-2xl mb-10 leading-relaxed border-l-2 border-flame pl-6">
              Diseñamos y desarrollamos software que potencian tu empresa. Nos adaptamos por completo a tus procesos.<br /><br />
              Nacimos en Argentina para ayudar a negocios locales a crecer con herramientas tecnológicas simples, inteligentes y confiables.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a 
                href="https://wa.me/5492216548471" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-flame text-white px-5 py-3.5 md:px-10 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-technical-blue hover:text-onyx hover:shadow-[0_0_30px_rgba(0,204,255,0.6)] transition-all duration-300 flex items-center gap-3 md:gap-4 group w-fit rounded-lg"
              >
                <span className="text-[10px] md:text-xs opacity-60 font-mono">sh</span>
                ./iniciar_contacto
                <i className="ti ti-chevron-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <div className="flex flex-col">
                <span className="text-technical-blue text-[10px] font-bold uppercase tracking-widest mb-1">// STATUS_LOG</span>
                <div className="flex items-center gap-2 text-platinum/70 text-xs font-mono">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                  NÚCLEO_OPERATIVO_100%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
