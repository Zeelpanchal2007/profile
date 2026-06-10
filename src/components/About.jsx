import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    trigger: containerRef,
    offset: ["start end", "end start"]
  });

  // Scroll unrolling effect values
  const width = useTransform(scrollYProgress, [0.1, 0.4], ["10%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], [100, 0]);

  return (
    <section id="about" ref={containerRef} className="py-32 relative overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary uppercase tracking-widest mb-4">
            Ninja Profile
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* The Scroll Container */}
        <motion.div 
          style={{ width, opacity, y }}
          className="relative max-w-4xl w-full mx-auto"
        >
          {/* Scroll roller left */}
          <div className="absolute top-0 bottom-0 left-0 w-6 md:w-10 bg-gradient-to-r from-[#2A2A2A] to-[#1A1A1A] rounded-l-full border-r border-[#444] z-20 shadow-[-10px_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-2 h-full bg-gradient-to-r from-transparent via-[#444] to-transparent opacity-50" />
            <div className="absolute top-0 w-full h-4 bg-[#111] rounded-t-full" />
            <div className="absolute bottom-0 w-full h-4 bg-[#111] rounded-b-full" />
          </div>
          
          {/* Scroll roller right */}
          <div className="absolute top-0 bottom-0 right-0 w-6 md:w-10 bg-gradient-to-l from-[#2A2A2A] to-[#1A1A1A] rounded-r-full border-l border-[#444] z-20 shadow-[10px_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
            <div className="w-2 h-full bg-gradient-to-l from-transparent via-[#444] to-transparent opacity-50" />
            <div className="absolute top-0 w-full h-4 bg-[#111] rounded-t-full" />
            <div className="absolute bottom-0 w-full h-4 bg-[#111] rounded-b-full" />
          </div>

          {/* Scroll content area */}
          <div className="bg-[#EBE5D9] text-[#1a1a1a] p-8 md:p-16 mx-4 md:mx-8 relative shadow-2xl border-y-8 border-[#1A1A1A]">
            {/* Paper texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiPjwvcmVjdD48cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIj48L3JlY3Q+PC9zdmc+')" }} />
            
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 relative z-10">
              {/* Profile Image Column */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-[#1A1A1A] p-2 relative">
                  <div className="absolute inset-0 border-2 border-primary/50 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
                  <img 
                    src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop" 
                    alt="Zeel Profile Placeholder" 
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold font-mono uppercase">Zeel Panchal</h3>
                  <p className="text-primary font-bold tracking-widest mt-1">S-RANK DEVELOPER</p>
                </div>
              </div>

              {/* Info Column */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-6">
                <div>
                  <h4 className="text-sm font-bold uppercase text-[#666] tracking-widest mb-2 border-b border-[#ccc] pb-2">Background</h4>
                  <p className="text-lg leading-relaxed font-medium">
                    A Full Stack Shinobi walking the path of mastery in web development. I forge robust applications using React, FastAPI, and PostgreSQL. Just like crafting the perfect Jutsu, I blend logic and creativity to build digital experiences that leave a lasting impact.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="text-sm font-bold uppercase text-[#666] tracking-widest mb-2 border-b border-[#ccc] pb-2">Village</h4>
                    <p className="font-mono text-lg font-bold">Global / Remote</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase text-[#666] tracking-widest mb-2 border-b border-[#ccc] pb-2">Chakra Nature</h4>
                    <p className="font-mono text-lg font-bold">JavaScript / Python</p>
                  </div>
                </div>

                <div className="pt-4">
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMTAgTDUwIDkwIE0xMCA1MCBMODAgNTAiIHN0cm9rZT0iI2ZmNmIwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PC9zdmc+" alt="Seal" className="w-16 h-16 opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
