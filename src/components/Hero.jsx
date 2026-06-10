import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroScene from './three/HeroScene';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll for the hero text
      gsap.to(textRef.current, {
        yPercent: 50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <HeroScene />
      </div>

      {/* Content */}
      <div 
        ref={textRef}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-primary font-mono tracking-[0.3em] uppercase mb-4 text-sm md:text-base font-bold">
            BUILDING DIGITAL JUTSU
          </h2>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter mb-6 text-shadow-glow text-primary">
            <span className="block">ZEEL</span>
            <span className="block mt-2">PANCHAL</span>
          </h1>

          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: [0.76, 0, 0.24, 1] }}
              className="text-xl md:text-3xl font-light text-foreground/90 mb-12"
            >
              Full Stack Shinobi
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#projects" 
              className="group relative px-10 py-4 bg-primary text-background font-bold uppercase tracking-widest overflow-hidden rounded-sm shadow-[0_0_20px_rgba(255,87,34,0.4)] hover:shadow-[0_0_30px_rgba(255,87,34,0.8)] transition-shadow duration-300"
            >
              <span className="relative z-10">MISSION ARCHIVES</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
            </a>
            
            <a 
              href="#about" 
              className="group px-10 py-4 border-2 border-foreground/30 hover:border-primary text-foreground hover:text-primary hover:shadow-[0_0_15px_rgba(255,87,34,0.3)] transition-all duration-300 font-bold uppercase tracking-widest rounded-sm flex items-center gap-2"
            >
              VIEW PROFILE <span className="font-mono ml-2">-&gt;</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with EXPLORE text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/40 font-mono">EXPLORE</span>
        <div className="w-[1px] h-12 bg-foreground/20 relative overflow-hidden mt-1">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
