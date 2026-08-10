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

    tl.to(".hero-reveal", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-4 md:px-24 relative">


      <div className="absolute top-[85%] md:top-1/2 right-[-20%] md:right-24 -translate-y-1/2 pointer-events-none z-0">
        <div className="bg-watermark origin-center flex items-center justify-center scale-75 md:scale-100">
          <WatermarkLogo className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] object-contain drop-shadow-[0_0_40px_rgba(0,204,255,0.25)]" />
        </div>
      </div>

      <div className="w-full max-w-5xl brutalist-border bg-black overflow-hidden mb-16 mt-24 md:mt-0 relative z-10 border-platinum/20 shadow-[6px_6px_0px_0px_rgba(242,243,244,0.05)]">
        <div className="bg-carbon border-b border-platinum/10 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-flame terminal-dot"></div>
            <div className="w-3 h-3 rounded-full bg-technical-blue terminal-dot opacity-40"></div>
            <div className="w-3 h-3 rounded-full bg-technical-blue terminal-dot opacity-20"></div>
          </div>
          <div className="text-platinum/40 text-[10px] uppercase tracking-widest font-mono">
            solum_terminal_v4.0.0-industrial
          </div>
          <div className="flex gap-4 text-platinum/20 text-[8px] font-mono">
            <span>CPU: 42%</span>
            <span>RAM: 1.2GB</span>
          </div>
        </div>

        <div className="p-6 md:p-10 font-mono">
          <div className="flex items-center gap-3 mb-6">
            <LogoMarcaIcon className="h-20 md:h-32 w-auto object-contain" />
          </div>

          <div className="opacity-0 translate-y-4 hero-reveal">
            <p className="text-white text-base md:text-lg max-w-2xl mb-12 leading-relaxed border-l-2 border-technical-blue pl-6">
              Diseñamos y desarrollamos software que potencian tu empresa. Nos adaptamos por completo a tus procesos.<br /><br />
              Nacimos en Argentina para ayudar a negocios locales a crecer con herramientas tecnológicas simples, inteligentes y confiables.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a href="https://wa.me/5492216548471" target="_blank" rel="noopener noreferrer" className="bg-flame text-white px-4 py-3 md:px-10 md:py-5 text-sm md:text-base font-black uppercase tracking-[0.15em] md:tracking-[0.2em] hover:bg-technical-blue hover:text-onyx transition-all duration-300 flex items-center gap-2 md:gap-4 group w-fit">
                <span className="text-[10px] md:text-xs opacity-50">sh</span>
                ./iniciar_contacto
                <i className="ti ti-chevron-right group-hover:translate-x-1 transition-transform"></i>
              </a>
              <div className="flex flex-col">
                <span className="text-technical-blue text-[10px] font-bold uppercase tracking-widest mb-1">// STATUS_LOG</span>
                <div className="flex items-center gap-2 text-platinum/40 text-xs">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                  NÚCLEO_LISTO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-0 translate-y-4 hero-reveal flex flex-col md:flex-row items-baseline gap-8">
        <h1 className="text-6xl md:text-8xl font-black leading-[0.75] uppercase tracking-tighter font-heading">
          SOLUCIONES<br /><span className="text-flame">DIGI</span><span className="text-technical-blue">TALES.</span>
        </h1>
        <div className="text-platinum/30 text-xs font-mono max-w-[200px] leading-loose uppercase tracking-[0.1em]">
          [SOLUM SOFTWARE]<br />
          SOLUCIONES DE SOFTWARE PERSONALIZADAS PARA PYMES.
        </div>
      </div>
    </section>
  );
};

export default Hero;
