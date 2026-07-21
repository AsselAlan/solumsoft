import React, { useEffect } from 'react';
import gsap from 'gsap';
import LogoMarcaIcon from './LogoMarcaIcon';
import logo from '../assets/logo.svg';

const Hero = () => {

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.fromTo(".bg-watermark", {
      opacity: 0,
      scale: 0.8
    }, {
      opacity: 0.5,
      scale: 1,
      duration: 1.5,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(".bg-watermark", {
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

    tl.to(".hero-reveal", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-12 md:px-24 relative overflow-hidden">


      <div className="absolute top-1/2 right-12 md:right-24 -translate-y-1/2 pointer-events-none z-0">
        <div className="bg-watermark opacity-50 origin-center flex items-center justify-center">
          <div
            className="w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-platinum/30"
            style={{
              WebkitMaskImage: `url(${logo})`,
              WebkitMaskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url(${logo})`,
              maskSize: 'contain',
              maskRepeat: 'no-repeat',
              maskPosition: 'center'
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-5xl brutalist-border bg-carbon overflow-hidden mb-16 relative z-10 border-flame/50 shadow-[6px_6px_0px_0px_rgba(0,204,255,0.1)]">
        <div className="bg-onyx border-b border-flame/50 px-4 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-flame"></div>
            <div className="w-3 h-3 rounded-full bg-technical-blue/40"></div>
            <div className="w-3 h-3 rounded-full bg-technical-blue/20"></div>
          </div>
          <div className="text-platinum/40 text-[10px] uppercase tracking-widest font-mono">
            solum_terminal_v4.0.0-industrial
          </div>
          <div className="flex gap-4 text-platinum/20 text-[8px] font-mono">
            <span>CPU: 42%</span>
            <span>RAM: 1.2GB</span>
          </div>
        </div>

        <div className="p-10 font-mono">
          <div className="flex items-center gap-3 mb-6">
            <LogoMarcaIcon className="h-20 md:h-32 w-auto object-contain" />
          </div>

          <div className="opacity-0 translate-y-4 hero-reveal">
            <p className="text-platinum/80 text-base md:text-lg max-w-2xl mb-12 leading-relaxed border-l-2 border-technical-blue pl-6">
              Diseñamos y desarrollamos software que potencian tu empresa. Nos adaptamos por completo a tus procesos.<br /><br />
              Nacimos en Argentina para ayudar a negocios locales a crecer con herramientas tecnológicas simples, inteligentes y confiables.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <button className="bg-flame text-white px-10 py-5 font-black uppercase tracking-[0.2em] hover:bg-technical-blue hover:text-onyx transition-all duration-300 flex items-center gap-4 group">
                <span className="text-xs opacity-50">sh</span>
                ./iniciar_contacto
                <i className="ti ti-chevron-right group-hover:translate-x-1 transition-transform"></i>
              </button>
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
