import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const achievements = [
  {
    title: "AI-NEXUS WINNER",
    desc: "TOP PERFORMER AT THE AI HACKATHON FOR TRAINING ADVANCED MODELS.",
    type: "ai"
  },
  {
    title: "ACADEMIC JONIN",
    desc: "ACHIEVED AN OUTSTANDING FINAL CGPA OF 9.17 IN COMPUTER ENGINEERING.",
    type: "academic"
  },
  {
    title: "API SUMMONER",
    desc: "Expert in designing, building, and comprehensively testing robust RESTful APIs and backend architectures.",
    type: "api"
  }
];

function AchievementItem({ item, index }) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex flex-col items-center text-center cursor-pointer"
    >
      <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
      
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-foreground/10 flex items-center justify-center bg-background relative z-10 overflow-hidden group-hover:border-primary transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Custom SVG icons based on type */}
        {item.type === 'ai' && (
          <svg className="w-16 h-16 text-purple-500 group-hover:text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Detailed Rinnegan Eye */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 21C6.477 21 2 12 2 12s4.477-9 10-9 10 9 10 9-4.477 9-10 9z" />
            <circle cx="12" cy="12" r="7.5" strokeWidth={1} strokeDasharray="1 2" />
            <circle cx="12" cy="12" r="5.5" strokeWidth={1} />
            <circle cx="12" cy="12" r="3.5" strokeWidth={1} />
            <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
            <circle cx="12" cy="12" r="0.5" strokeWidth={2} />
          </svg>
        )}
        {item.type === 'academic' && (
          <svg className="w-16 h-16 text-orange-500 group-hover:text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Detailed Ninja Scroll */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 7h16v10H4z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 8h2v8H2zM20 8h2v8h-2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 7v10M17 7v10" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 7v10" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 12h4" />
            <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 9h2m-2 4h2M17 9h2m-2 4h2" />
          </svg>
        )}
        {item.type === 'api' && (
          <svg className="w-16 h-16 text-teal-400 group-hover:text-teal-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {/* Detailed Chakra Sphere / Rasengan */}
            <circle cx="12" cy="12" r="10" strokeWidth={1.2} strokeDasharray="4 2" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 12a7 7 0 1014 0 7 7 0 00-14 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 5a7 7 0 100 14 7 7 0 000-14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M8.5 8.5a5 5 0 107 7 5 5 0 00-7-7z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.5 14.5a3.5 3.5 0 105-5 3.5 3.5 0 00-5 5z" />
            <circle cx="12" cy="12" r="1.5" strokeWidth={1.5} />
          </svg>
        )}
      </div>
      
      <h3 className="text-xl font-bold mt-6 mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h3>
      <p className="text-sm text-foreground/60">{item.desc}</p>
    </motion.div>
  );
}

export default function Achievements() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    trigger: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32 relative overflow-hidden" ref={containerRef}>
      <motion.div 
        className="absolute inset-0 opacity-20 ninja-scroll-bg pointer-events-none" 
        style={{ y: bgY }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
            Honor <span className="text-primary">&</span> Glory
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {achievements.map((item, index) => (
            <AchievementItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
