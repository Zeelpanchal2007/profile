import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const achievements = [
  {
    title: "Chunin Exams Winner",
    desc: "Top performer at the Global Web Hackathon 2024.",
    type: "medal"
  },
  {
    title: "Master of React",
    desc: "Completed advanced architecture certification.",
    type: "scroll"
  },
  {
    title: "Speed Demon",
    desc: "Achieved 100/100 Lighthouse score on 5 projects.",
    type: "badge"
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
        
        {/* Placeholder icons based on type */}
        {item.type === 'medal' && (
          <svg className="w-16 h-16 text-yellow-500 group-hover:text-yellow-400 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        )}
        {item.type === 'scroll' && (
          <svg className="w-16 h-16 text-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )}
        {item.type === 'badge' && (
          <svg className="w-16 h-16 text-secondary drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
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
