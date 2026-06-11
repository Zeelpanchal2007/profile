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
    <section id="about" ref={containerRef} className="py-24 relative min-h-screen flex items-center justify-center z-10">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 z-0" />
      
      {/* Subtle background particles/chakra (simplified CSS version) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-32 h-32 bg-[#ff5722] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-40 h-40 bg-[#E11D48] rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase tracking-widest mb-4 py-4 leading-normal text-shadow-sm">
            Official Shinobi Registry
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_rgba(255,87,34,0.8)]" />
        </motion.div>

        {/* Scroll Container Animation */}
        <motion.div 
          style={{ width, opacity, y }}
          className="relative max-w-6xl mx-auto flex flex-col md:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden rounded-md"
        >
          
          {/* LEFT ROLLER (Green with Red Caps and Toad Tag) */}
          <div className="hidden md:flex w-16 md:w-20 bg-[#4B7059] relative shrink-0 shadow-[5px_0_15px_rgba(0,0,0,0.4)_z-20] border-r border-[#2A4031] rounded-l-md items-center justify-center z-20">
            {/* Top and Bottom Caps */}
            <div className="absolute top-[-10px] w-full h-3 bg-[#111] rounded-t-sm" />
            <div className="absolute top-0 w-full h-8 bg-[#A64A4A] border-b-2 border-[#111] shadow-inner" />
            
            <div className="absolute bottom-[-10px] w-full h-3 bg-[#111] rounded-b-sm" />
            <div className="absolute bottom-0 w-full h-8 bg-[#A64A4A] border-t-2 border-[#111] shadow-inner" />

            {/* White Tag: 蝦蟇 (Gama / Toad) */}
            <div className="bg-[#fcf8e8] border-2 border-[#111] w-8 md:w-10 py-6 flex flex-col items-center shadow-md z-10">
              <span className="font-bold text-2xl md:text-3xl text-[#111]" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', fontFamily: 'serif' }}>
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

            {/* Inner Content - Left Column (Profile Info) - STICKY ON DESKTOP */}
            <div className="w-full md:w-[350px] p-6 md:p-10 flex flex-col items-center justify-start text-center border-b-2 md:border-b-0 md:border-r-2 border-[#C8B28D]/30 relative z-10 shrink-0 md:sticky md:top-0 md:self-start md:pt-16">
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-full border-8 border-[#2A2A2A] shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden mb-6 relative bg-[#1A1A1A] cursor-pointer"
              >
                <img 
                  src="/profile.jpg" 
                  alt="Ninja Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop"; }}
                />
                {/* Overlay for gritty effect */}
                <div className="absolute inset-0 bg-[#0a0002]/20 mix-blend-overlay pointer-events-none"></div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111] mb-2 drop-shadow-sm">
                Panchal Zeel
              </h2>
              
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-widest text-[#C83200] drop-shadow-sm mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
                S-Rank Developer
              </h3>

              <div className="w-16 h-1 bg-[#111]/20 rounded-full my-4" />

              <p className="text-sm font-bold text-[#444] uppercase tracking-widest mb-1">Status</p>
              <div className="px-4 py-1 bg-green-800 text-[#F5EEDC] font-bold text-sm tracking-widest border-2 border-[#111] uppercase shadow-sm">
                Active Duty
              </div>

              {/* BINGO BOOK ENTRY (Wanted Poster) */}
              <div className="mt-12 w-full bg-[#DFD1B6] border-[3px] border-[#111] shadow-[6px_6px_0px_#111] p-5 flex flex-col items-center rotate-[-1.5deg] relative z-20 group hover:rotate-0 hover:shadow-[8px_8px_0px_#111] transition-all duration-300">
                
                {/* Red Classified Stamp */}
                <div className="absolute top-4 right-[-8px] border-2 border-[#A64A4A] text-[#A64A4A] font-black uppercase text-[10px] md:text-xs tracking-widest px-2 py-0.5 rotate-[15deg] opacity-90 z-10 shadow-sm mix-blend-multiply">
                  CLASSIFIED
                </div>

                <h4 className="text-xl md:text-2xl font-black text-[#111] uppercase tracking-[0.15em] border-b-[3px] border-[#111] pb-2 w-full text-center mb-5" style={{ fontFamily: 'var(--font-sans)' }}>
                  Bingo Book
                </h4>

                {/* Mugshot Placeholder */}
                <div className="w-24 h-24 md:w-28 md:h-28 border-[3px] border-[#111] bg-[#1a1a1a] mb-5 overflow-hidden shadow-inner flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 relative">
                  <img src="/profile.jpg" alt="Target Mugshot" className="w-full h-full object-cover mix-blend-luminosity opacity-90 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-900/50 pointer-events-none transition-colors" />
                </div>

                {/* Info Text Fields */}
                <div className="w-full text-left space-y-4 font-bold text-[#111] text-xs sm:text-sm uppercase tracking-wide">
                  
                  <div className="border-b-2 border-[#111]/30 pb-2">
                    <span className="text-[#8B3A3A] text-[10px] sm:text-xs tracking-widest block mb-1">Target Alias:</span>
                    <span className="text-sm sm:text-base">Panchal Zeel</span> <br/>
                    <span className="text-[10px] sm:text-xs text-[#555] normal-case">_picasso_expresso (Instagram)</span>
                  </div>
                  
                  <div className="border-b-2 border-[#111]/30 pb-2">
                    <span className="text-[#8B3A3A] text-[10px] sm:text-xs tracking-widest block mb-1">Threat Level:</span>
                    <span className="text-sm sm:text-base">S-Rank <span className="text-xs text-[#555]">(Full-Stack Engineer)</span></span>
                  </div>

                  <div className="pt-1">
                    <span className="text-[#8B3A3A] text-[10px] sm:text-xs tracking-widest block mb-3">Intel / Comm Channels:</span>
                    <ul className="space-y-3 text-[11px] sm:text-[13px] normal-case tracking-normal font-semibold text-[#222]">
                      <li className="flex items-center gap-3">
                        <span className="shrink-0 text-base drop-shadow-sm" title="Messenger Hawk (Email)">🦅</span>
                        <a href="mailto:panchalzeel2007@gmail.com" className="hover:text-[#A64A4A] transition-colors break-all border-b border-transparent hover:border-[#A64A4A]">panchalzeel2007@gmail.com</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="shrink-0 text-base drop-shadow-sm" title="Scroll Archive (GitHub)">📜</span>
                        <a href="https://github.com/Zeelpanchal2007" target="_blank" rel="noopener noreferrer" className="hover:text-[#A64A4A] transition-colors break-all border-b border-transparent hover:border-[#A64A4A]">github.com/Zeelpanchal2007</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="shrink-0 text-base drop-shadow-sm" title="Ninja Alliance (LinkedIn)">🤝</span>
                        <a href="https://www.linkedin.com/in/panchal-zeel-4b1b933b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-[#A64A4A] transition-colors break-all border-b border-transparent hover:border-[#A64A4A]">linkedin.com/in/panchal-zeel</a>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="shrink-0 text-base drop-shadow-sm" title="Ninja Info Card (Resume)">🌐</span>
                        <a href="/RESUME_Zeel.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-[#A64A4A] transition-colors break-all border-b border-transparent hover:border-[#A64A4A]">Ninja Info Card (Resume)</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Inner Content - Right Column (Ninja Stats & Info) */}
            <div className="flex-1 min-w-[300px] p-6 md:p-10 flex flex-col justify-start space-y-12 relative z-10">
              
              {/* Section: Background */}
              <div className="group">
                <h4 className="text-xl md:text-2xl font-black uppercase text-[#111] tracking-widest mb-4 border-b-4 border-[#111] pb-2 inline-block">
                  Background
                </h4>
                <p className="text-base md:text-lg leading-relaxed font-bold text-[#333] text-justify">
                  A FULL-STACK SHINOBI FROM THE HIDDEN CODE VILLAGE SPECIALIZING IN REACT, FASTAPI, POSTGRESQL, AND MACHINE LEARNING. I BUILD SCALABLE APPLICATIONS, CRAFT POWERFUL BACKEND JUTSU, AND SOLVE REAL-WORLD CHALLENGES THROUGH CLEAN ARCHITECTURE AND INTELLIGENT DESIGN. MY JOURNEY SPANS AI, BLOCKCHAIN, REST APIS, AND MODERN WEB TECHNOLOGIES AS I TRAIN TO BECOME A HOKAGE-LEVEL SOFTWARE ENGINEER.
                </p>
              </div>

              {/* Grid: Chakra Nature & Specialized Jutsu */}
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                {/* Chakra Nature */}
                <div>
                  <h4 className="text-xl font-black uppercase text-[#111] tracking-widest mb-4 border-b-4 border-[#111] pb-2 inline-block">
                    Chakra Nature
                  </h4>
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center gap-3 group/chakra cursor-default">
                      <span className="text-xl group-hover/chakra:scale-125 group-hover/chakra:-translate-y-1 transition-all drop-shadow-[0_0_8px_rgba(255,87,34,0)] group-hover/chakra:drop-shadow-[0_0_10px_rgba(255,87,34,0.8)]">🔥</span>
                      <span className="text-sm md:text-base font-bold uppercase text-[#444] group-hover/chakra:text-[#ff5722] transition-colors tracking-wide">Fire Release: JavaScript</span>
                    </div>
                    <div className="flex items-center gap-3 group/chakra cursor-default">
                      <span className="text-xl group-hover/chakra:scale-125 group-hover/chakra:-translate-y-1 transition-all drop-shadow-[0_0_8px_rgba(234,179,8,0)] group-hover/chakra:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">⚡</span>
                      <span className="text-sm md:text-base font-bold uppercase text-[#444] group-hover/chakra:text-yellow-600 transition-colors tracking-wide">Lightning Release: Python</span>
                    </div>
                    <div className="flex items-center gap-3 group/chakra cursor-default">
                      <span className="text-xl group-hover/chakra:scale-125 group-hover/chakra:-translate-y-1 transition-all drop-shadow-[0_0_8px_rgba(59,130,246,0)] group-hover/chakra:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">🌊</span>
                      <span className="text-sm md:text-base font-bold uppercase text-[#444] group-hover/chakra:text-blue-600 transition-colors tracking-wide">Water Release: FastAPI</span>
                    </div>
                    <div className="flex items-center gap-3 group/chakra cursor-default">
                      <span className="text-xl group-hover/chakra:scale-125 group-hover/chakra:-translate-y-1 transition-all drop-shadow-[0_0_8px_rgba(34,197,94,0)] group-hover/chakra:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">🌱</span>
                      <span className="text-sm md:text-base font-bold uppercase text-[#444] group-hover/chakra:text-green-700 transition-colors tracking-wide">Wood Release: PostgreSQL</span>
                    </div>
                  </div>
                </div>

                {/* Kekkei Genkai & Summoning Jutsu */}
                <div>
                  <h4 className="text-xl font-black uppercase text-[#111] tracking-widest mb-4 border-b-4 border-[#111] pb-2 inline-block">
                    Kekkei Genkai & Summons
                  </h4>
                  <div className="space-y-6">
                    <ul className="space-y-2 text-[#444] font-bold text-sm md:text-base uppercase tracking-wide">
                      <li className="flex items-center gap-2 hover:text-[#E11D48] transition-colors cursor-crosshair">
                        <span className="text-[#E11D48] text-xs">✦</span> AI / Machine Learning
                      </li>
                      <li className="flex items-center gap-2 hover:text-[#E11D48] transition-colors cursor-crosshair">
                        <span className="text-[#E11D48] text-xs">✦</span> Blockchain Architecture
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 border-2 border-[#111] text-[#111] font-bold uppercase text-xs hover:bg-[#111] hover:text-[#F5EEDC] transition-all cursor-crosshair shadow-[2px_2px_0_#111] hover:shadow-[1px_1px_0_#111] hover:translate-x-[1px] hover:translate-y-[1px]">
                        React
                      </span>
                      <span className="inline-block px-3 py-1 border-2 border-[#111] text-[#111] font-bold uppercase text-xs hover:bg-[#111] hover:text-[#F5EEDC] transition-all cursor-crosshair shadow-[2px_2px_0_#111] hover:shadow-[1px_1px_0_#111] hover:translate-x-[1px] hover:translate-y-[1px]">
                        FastAPI
                      </span>
                      <span className="inline-block px-3 py-1 border-2 border-[#111] text-[#111] font-bold uppercase text-xs hover:bg-[#111] hover:text-[#F5EEDC] transition-all cursor-crosshair shadow-[2px_2px_0_#111] hover:shadow-[1px_1px_0_#111] hover:translate-x-[1px] hover:translate-y-[1px]">
                        PostgreSQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mission Record */}
              <div>
                <h4 className="text-xl font-black uppercase text-[#111] tracking-widest mb-4 border-b-4 border-[#111] pb-2 inline-block">
                  Mission Record
                </h4>
                <div className="bg-[#EADFCD] p-6 border-4 border-[#C8B28D] rounded-sm shadow-inner space-y-4">
                  {[
                    "Django Backend Internship",
                    "AI Detection System",
                    "Blockchain MRV Platform",
                    "Open Source Missions"
                  ].map((mission, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-4 group cursor-crosshair"
                    >
                      <div className="w-8 h-8 rounded-full border-2 border-[#111] flex items-center justify-center bg-[#A64A4A] shrink-0 group-hover:bg-[#E11D48] group-hover:scale-110 transition-all shadow-sm">
                        <span className="text-[#F5EEDC] font-black text-sm">✓</span>
                      </div>
                      <span className="text-base md:text-lg font-black text-[#222] uppercase tracking-wider group-hover:text-[#E11D48] transition-colors border-b-2 border-transparent group-hover:border-[#E11D48]">
                        {mission}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Mission Box */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-8 border-4 border-[#111] p-6 md:p-8 relative bg-[#A64A4A] text-[#F5EEDC] shadow-[8px_8px_0_#111]"
              >
                <div className="absolute -top-4 left-6 bg-[#F5EEDC] text-[#A64A4A] px-4 py-1 font-black uppercase tracking-widest text-sm md:text-base border-4 border-[#111]">
                  Current Mission
                </div>
                <p className="text-lg md:text-xl font-bold leading-relaxed mt-2 italic tracking-wide">
                  "Becoming a world-class Software Engineer by mastering AI, scalable systems, and modern web technologies while contributing to impactful open-source projects."
                </p>
                {/* Decorative kunai or shuriken watermark could go here */}
                <div className="absolute bottom-4 right-4 opacity-20 text-6xl">
                  🍥
                </div>
              </motion.div>

            </div>

            {/* Right Japanese Text Column (Visible on large screens) */}
            <div className="hidden lg:flex w-16 xl:w-20 border-l-2 border-[#C8B28D]/50 items-center justify-center shrink-0 pt-8 pb-8 pr-2 relative z-10">
              <div className="sticky top-1/2 -translate-y-1/2">
                <span className="font-black text-[#111] text-xl tracking-widest opacity-80 drop-shadow-sm" style={{ writingMode: 'vertical-rl', textOrientation: 'upright', fontFamily: 'serif' }}>
                  史上最強口寄せ忍蝦蟇契約書
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
