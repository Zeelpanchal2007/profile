import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  // Scroll unrolling effect values
  const width = useTransform(scrollYProgress, [0.1, 0.8], ["10%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative min-h-screen flex items-center justify-center z-10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 z-0" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase tracking-widest mb-4 py-4 leading-normal">
            Ninja Profile
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Scroll Container Animation */}
        <motion.div 
          style={{ width, opacity, y }}
          className="relative max-w-6xl mx-auto flex shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden rounded-md"
        >
          
          {/* LEFT ROLLER (Green with Red Caps and Toad Tag) */}
          <div className="w-16 md:w-24 bg-[#4B7059] relative shrink-0 shadow-[5px_0_15px_rgba(0,0,0,0.4)_z-20] border-r border-[#2A4031] rounded-l-md flex items-center justify-center z-20">
            {/* Top and Bottom Caps */}
            <div className="absolute top-[-10px] w-full h-3 bg-[#111] rounded-t-sm" />
            <div className="absolute top-0 w-full h-8 bg-[#A64A4A] border-b-2 border-[#111] shadow-inner" />
            
            <div className="absolute bottom-[-10px] w-full h-3 bg-[#111] rounded-b-sm" />
            <div className="absolute bottom-0 w-full h-8 bg-[#A64A4A] border-t-2 border-[#111] shadow-inner" />

            {/* White Tag: 蝦蟇 (Gama / Toad) */}
            <div className="bg-[#fcf8e8] border-2 border-[#111] w-8 md:w-12 py-6 flex flex-col items-center shadow-md z-10">
              <span className="font-bold text-2xl md:text-4xl text-[#111]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', fontFamily: 'serif' }}>
                蝦蟇
              </span>
            </div>
          </div>

          {/* PARCHMENT CENTER */}
          <div className="flex-1 bg-[#F5EEDC] relative border-y-[12px] md:border-y-[16px] border-[#C8B28D] flex flex-col md:flex-row z-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')" }}>
            
            {/* Top border pattern */}
            <div className="absolute top-[-12px] md:top-[-16px] left-0 right-0 h-[12px] md:h-[16px] overflow-hidden flex items-center opacity-40 select-none pointer-events-none">
              <div className="flex space-x-4 text-[10px] md:text-xs whitespace-nowrap px-4">
                🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥
              </div>
            </div>
            
            {/* Bottom border pattern */}
            <div className="absolute bottom-[-12px] md:bottom-[-16px] left-0 right-0 h-[12px] md:h-[16px] overflow-hidden flex items-center opacity-40 select-none pointer-events-none">
              <div className="flex space-x-4 text-[10px] md:text-xs whitespace-nowrap px-4">
                🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸 🍥 🐸
              </div>
            </div>

            {/* Inner Content - Left Column (Profile Info) */}
            <div className="w-[300px] md:w-[400px] p-6 md:p-10 flex flex-col items-center justify-center text-center border-b-2 md:border-b-0 md:border-r-2 border-[#C8B28D]/30 relative z-10 shrink-0">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-[#2A2A2A] shadow-xl overflow-hidden mb-6 relative bg-[#1A1A1A]">
                <img 
                  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop" 
                  alt="Pug Profile" 
                  className="w-full h-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#111] mb-2 drop-shadow-sm">
                Zeel Panchal
              </h2>
              
              <h3 className="text-xl md:text-3xl font-bold uppercase tracking-widest text-[#C83200] drop-shadow-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                S-Rank Developer
              </h3>
            </div>

            {/* Inner Content - Right Column (Ninja Stats) */}
            <div className="flex-1 min-w-[300px] p-6 md:p-10 flex flex-col justify-center space-y-8 relative z-10">
              
              {/* Section 1: Background */}
              <div>
                <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] tracking-widest mb-3 border-b-2 border-[#111]/20 pb-2 inline-block">
                  Background
                </h4>
                <p className="text-base md:text-lg leading-relaxed font-bold text-[#222]">
                  A FULL STACK SHINOBI WALKING THE PATH OF MASTERY IN WEB DEVELOPMENT. I FORGE ROBUST APPLICATIONS USING REACT, FASTAPI, AND POSTGRESQL. JUST LIKE CRAFTING THE PERFECT JUTSU, I BLEND LOGIC AND CREATIVITY TO BUILD DIGITAL EXPERIENCES THAT LEAVE A LASTING IMPACT.
                </p>
              </div>

              {/* Grid for Village & Chakra Nature */}
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] tracking-widest mb-3 border-b-2 border-[#111]/20 pb-2 inline-block">
                    Village
                  </h4>
                  <p className="text-lg md:text-xl font-black text-[#333] uppercase">
                    Global / Remote
                  </p>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-bold uppercase text-[#111] tracking-widest mb-3 border-b-2 border-[#111]/20 pb-2 inline-block">
                    Chakra Nature
                  </h4>
                  <p className="text-lg md:text-xl font-black text-[#333] uppercase">
                    JavaScript / Python
                  </p>
                </div>
              </div>

              {/* Footer: Orange + Symbol */}
              <div className="pt-2 flex justify-end">
                <button className="text-4xl md:text-6xl font-black text-[#ff5722] hover:text-[#E11D48] transition-colors duration-300 hover:scale-110 active:scale-95 drop-shadow-md">
                  +
                </button>
              </div>

            </div>

            {/* Right Japanese Text Column */}
            <div className="hidden md:flex w-16 border-l-2 border-[#C8B28D]/50 items-center justify-center shrink-0 pt-8 pb-8 pr-2 relative z-10">
              <span className="font-black text-[#111] text-lg tracking-widest opacity-80" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', fontFamily: 'serif' }}>
                史上最強口寄せ忍蝦蟇契約書
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
