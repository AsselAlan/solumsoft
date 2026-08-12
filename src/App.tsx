import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Lenis from 'lenis';

import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Quadrants from './components/Quadrants';
import Ledger from './components/Ledger';
import TechStack from './components/TechStack';
import SuccessCase from './components/SuccessCase';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // 1. Coreografía Secuencial de Secciones (Título primero, luego tarjetas/ventanas)
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const storyHeaders = section.querySelectorAll('.story-header, .reveal-up-header');
        const storyCards = section.querySelectorAll('.story-card, .reveal-up-card, .solum-card, .blueprint-card');

        // Secuencia Timeline por sección
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 82%",
            toggleActions: "play none none reverse"
          }
        });

        // Títulos / Cabeceras aparecen primero
        if (storyHeaders.length > 0) {
          tl.from(storyHeaders, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out"
          });
        }

        // Ventanas y Tarjetas aparecen en cascada después de los títulos
        if (storyCards.length > 0) {
          tl.from(storyCards, {
            y: 50,
            opacity: 0,
            scale: 0.96,
            duration: 1,
            stagger: 0.12,
            ease: "expo.out"
          }, "-=0.4");
        }
      });

      // 2. Global fallback para elementos .reveal-up tradicionales
      gsap.utils.toArray('.reveal-up:not(.story-header):not(.story-card)').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // 3. Staggered Reveal para filas del Ledger
      gsap.utils.toArray('.ledger-row').forEach((row: any, i: number) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: "top 92%" },
          opacity: 0,
          y: 35,
          duration: 1.2,
          ease: "power4.out",
          delay: i * 0.15
        });
      });

      // 4. Parallax sutiles para elementos flotantes
      gsap.to(".bakery-image-wrap", {
        y: -90,
        scrollTrigger: {
          trigger: "#success-case",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to("#cta-watermark", {
        y: -150,
        scrollTrigger: {
          trigger: "#cta",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2
        }
      });
    });

    // Scramble Text Effect para Cuadrantes y Títulos
    const scrambleElements = document.querySelectorAll('.scramble-trigger');
    scrambleElements.forEach((el: any) => {
      const originalText = el.dataset.scramble || el.innerText;
      if (!originalText) return;
      const scrambleChars = "X01$!@%*#<>/?_";
      
      el.addEventListener('mouseenter', () => {
        let iteration = 0;
        clearInterval(el._scrambleInterval);
        const interval = setInterval(() => {
          el.innerText = originalText.split("")
            .map((letter: string, index: number) => {
              if(index < iteration) return originalText[index];
              return scrambleChars[Math.floor(Math.random() * scrambleChars.length)]
            })
            .join("");
          
          if(iteration >= originalText.length) clearInterval(interval);
          iteration += 1/4;
        }, 25);
        
        el._scrambleInterval = interval;
      });

      el.addEventListener('mouseleave', () => {
        clearInterval(el._scrambleInterval);
        el.innerText = originalText;
      });
    });

    return () => {
      lenis.destroy();
      ctx.revert();
    };
  }, []);

  return (
    <div className="flex bg-onyx selection:bg-flame selection:text-white relative">
      <Sidebar />

      <main className="md:ml-20 pb-16 md:pb-0 flex-1 overflow-x-hidden w-full relative">
        {/* Honeycomb Abstract & Ambient Background Glows */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[5%] -left-20 w-[500px] md:w-[800px] h-[800px] bg-honeycomb opacity-70" style={{ maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[28%] -right-20 w-[500px] md:w-[800px] h-[1000px] bg-honeycomb opacity-70" style={{ maskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[55%] -left-20 w-[600px] md:w-[900px] h-[900px] bg-honeycomb opacity-70" style={{ maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[80%] -right-20 w-[500px] md:w-[800px] h-[800px] bg-honeycomb opacity-70" style={{ maskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          
          {/* Ambient Glow Orbs */}
          <div className="absolute top-[12%] right-[10%] w-[350px] h-[350px] bg-technical-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-[45%] left-[5%] w-[400px] h-[400px] bg-flame/10 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-[75%] right-[8%] w-[350px] h-[350px] bg-technical-blue/10 rounded-full blur-[130px] pointer-events-none"></div>
        </div>

        <div className="relative z-10">
          <Hero />
          <TechStack />
          <Quadrants />
          <Ledger />
          <SuccessCase />
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;

