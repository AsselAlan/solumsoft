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
      lerp: 0.1,
      smoothWheel: true
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Global Scroll Reveal for all .reveal-up elements
      gsap.utils.toArray('.reveal-up').forEach((el: any) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out"
        });
      });

      // Staggered Reveal for Ledger Rows
      gsap.utils.toArray('.ledger-row').forEach((row: any, i: number) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: "top 95%" },
          opacity: 0,
          y: 40,
          duration: 1.5,
          ease: "power4.out",
          delay: i * 0.2
        });
      });

      // Tech Blueprint Cards
      gsap.utils.toArray('.blueprint-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 90%" },
          opacity: 0,
          y: 30,
          duration: 1.2,
          ease: "expo.out",
          delay: i * 0.1
        });
      });

      // Parallax Effects
      gsap.to(".bakery-image-wrap", {
        y: -120,
        scrollTrigger: {
          trigger: "#success-case",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to("#cta-watermark", {
        y: -180,
        scrollTrigger: {
          trigger: "#cta",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5
        }
      });
    });

    // Scramble Text Effect for Quadrants
    const scrambleElements = document.querySelectorAll('.scramble-trigger');
    scrambleElements.forEach((el: any) => {
      const originalText = el.dataset.scramble;
      if (!originalText) return;
      const scrambleChars = "X01$!@%*#<>/?";
      
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
        }, 30);
        
        el._scrambleInterval = interval;
      });

      el.addEventListener('mouseleave', () => {
        clearInterval(el._scrambleInterval);
        el.innerText = originalText;
      });
    });

    return () => {
      lenis.destroy();
      ctx.revert(); // Revert GSAP changes to prevent strict mode bugs
    };
  }, []);

  return (
    <div className="flex bg-onyx selection:bg-flame selection:text-white relative">
      <Sidebar />

      <main className="md:ml-20 pb-16 md:pb-0 flex-1 overflow-x-hidden w-full relative">
        {/* Honeycomb Abstract Patterns */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[10%] -left-10 w-[500px] md:w-[800px] h-[800px] bg-honeycomb opacity-80" style={{ maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[30%] -right-10 w-[500px] md:w-[800px] h-[1000px] bg-honeycomb opacity-80" style={{ maskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[55%] -left-10 w-[600px] md:w-[900px] h-[900px] bg-honeycomb opacity-80" style={{ maskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at left center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
          <div className="absolute top-[80%] -right-10 w-[500px] md:w-[800px] h-[800px] bg-honeycomb opacity-80" style={{ maskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)', WebkitMaskImage: 'radial-gradient(ellipse at right center, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0) 70%)' }}></div>
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
