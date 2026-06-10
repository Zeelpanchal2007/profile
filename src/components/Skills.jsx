import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
  { name: 'React', jutsu: 'Shadow Clone Jutsu', desc: 'Creating multiple identical component clones seamlessly.', color: 'from-[#61DAFB] to-[#2563EB]' },
  { name: 'FastAPI', jutsu: 'Rasengan API', desc: 'High-speed, concentrated power backend routing.', color: 'from-[#009688] to-[#047857]' },
  { name: 'PostgreSQL', jutsu: 'Sealing Database Jutsu', desc: 'Securely containing and structuring massive amounts of data.', color: 'from-[#336791] to-[#1E40AF]' },
  { name: 'Git', jutsu: 'Teleportation Technique', desc: 'Moving instantly between different timeline states.', color: 'from-[#F05032] to-[#B91C1C]' },
  { name: 'Docker', jutsu: 'Summoning Technique', desc: 'Instantly bringing complex environments into the battlefield.', color: 'from-[#2496ED] to-[#1D4ED8]' },
  { name: 'Tailwind CSS', jutsu: 'Transformation Jutsu', desc: 'Rapidly changing appearance and form on the fly.', color: 'from-[#38B2AC] to-[#0F766E]' }
];

function TiltCard({ skill, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative w-full aspect-[3/4] rounded-xl p-1 bg-gradient-to-br ${skill.color} group shadow-xl hover:shadow-primary/20 hover:shadow-2xl transition-shadow duration-300`}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" 
        style={{ transform: "translateZ(1px)" }} 
      />
      
      <div 
        className="h-full w-full bg-background/95 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Particle / Texture effect behind content */}
        <div className="absolute inset-0 opacity-10 ninja-scroll-bg pointer-events-none" />
        
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest border border-foreground/10 px-2 py-1 rounded-sm">
              {skill.name}
            </span>
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${skill.color} opacity-50 flex items-center justify-center`}>
              <div className="w-4 h-4 bg-background rounded-full" />
            </div>
          </div>
          
          <h3 className="text-2xl font-black mb-2 text-foreground uppercase tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
            {skill.jutsu}
          </h3>
          <p className="text-foreground/70 text-sm font-medium leading-relaxed">
            {skill.desc}
          </p>
        </div>
        
        <div className="flex items-center gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Activate Technique</span>
          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-2 block">Techniques</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              Jutsu <br/><span className="text-stroke-primary text-transparent">Arsenal</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 text-lg">
            Mastered techniques utilized in the field to conquer digital missions and scale architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: 1000 }}>
          {skills.map((skill, index) => (
            <TiltCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
