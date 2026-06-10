import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const colorMap = {
  purple: { 
    border: "group-hover:border-purple-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]", 
    bg: "from-purple-500/10 via-transparent to-transparent", 
    text: "text-purple-400" 
  },
  yellow: { 
    border: "group-hover:border-yellow-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]", 
    bg: "from-yellow-500/10 via-transparent to-transparent", 
    text: "text-yellow-400" 
  },
  red: { 
    border: "group-hover:border-red-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]", 
    bg: "from-red-500/10 via-transparent to-transparent", 
    text: "text-red-400" 
  },
  cyan: { 
    border: "group-hover:border-cyan-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]", 
    bg: "from-cyan-500/10 via-transparent to-transparent", 
    text: "text-cyan-400" 
  },
  emerald: { 
    border: "group-hover:border-emerald-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]", 
    bg: "from-emerald-500/10 via-transparent to-transparent", 
    text: "text-emerald-400" 
  },
  blue: { 
    border: "group-hover:border-blue-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]", 
    bg: "from-blue-500/10 via-transparent to-transparent", 
    text: "text-blue-400" 
  },
  indigo: { 
    border: "group-hover:border-indigo-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]", 
    bg: "from-indigo-500/10 via-transparent to-transparent", 
    text: "text-indigo-400" 
  },
  orange: { 
    border: "group-hover:border-orange-500/50", 
    shadow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]", 
    textGlow: "group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]", 
    bg: "from-orange-500/10 via-transparent to-transparent", 
    text: "text-orange-400" 
  },
};

const skills = [
  {
    technique: "Sharingan Vision",
    tech_stack: "Machine Learning & AI",
    tag: "AI / ML",
    lore: "Analyzing patterns, predicting outcomes, and seeing hidden insights before the enemy even moves.",
    desc: [
      "Work with Scikit-learn, TensorFlow, PyTorch, OpenCV, NumPy, and Pandas",
      "Build ML pipelines for detection, prediction, and intelligent decision-making systems",
      "Transform raw data into actionable insights through AI-powered techniques"
    ],
    chakraColor: "purple",
  },
  {
    technique: "Sage Mode Programming",
    tech_stack: "Python",
    tag: "PYTHON",
    lore: "Harnessing natural energy to create powerful automation, backend systems, and intelligent solutions.",
    desc: [
      "Build scalable applications and backend services using Python",
      "Develop automation tools and efficient business logic",
      "Create clean, maintainable, and production-ready code"
    ],
    chakraColor: "yellow",
  },
  {
    technique: "Forbidden Scroll Technique",
    tech_stack: "Blockchain & Django",
    tag: "BLOCKCHAIN",
    lore: "Combining ancient secure scrolls with modern backend mastery to build transparent and powerful systems.",
    desc: [
      "Develop backend systems using Django and Django REST Framework",
      "Explore blockchain-based solutions for secure and transparent applications",
      "Build scalable business workflows, integrations, and decentralized mission systems"
    ],
    chakraColor: "red",
  },
  {
    technique: "Rasengan API",
    tech_stack: "FastAPI",
    tag: "FASTAPI",
    lore: "A high-speed, concentrated backend jutsu delivering lightning-fast APIs with precision and power.",
    desc: [
      "Build robust RESTful APIs with FastAPI and Python",
      "Handle authentication, validation, and business logic with clean architecture",
      "Optimized for performance, scalability, and asynchronous operations"
    ],
    chakraColor: "cyan",
  },
  {
    technique: "Sealing Database Jutsu",
    tech_stack: "PostgreSQL",
    tag: "POSTGRESQL",
    lore: "Securely containing and structuring massive amounts of mission-critical data within powerful sealing formulas.",
    desc: [
      "Design efficient relational database schemas",
      "Write optimized queries and manage complex relationships",
      "Ensure data integrity and scalable storage"
    ],
    chakraColor: "emerald",
  },
  {
    technique: "Shadow Clone Jutsu",
    tech_stack: "React",
    tag: "REACT",
    lore: "Creating multiple identical UI component clones seamlessly across the battlefield of modern web applications.",
    desc: [
      "Build reusable React components",
      "Create responsive and interactive user experiences",
      "Scale frontend architecture efficiently"
    ],
    chakraColor: "blue",
  },
  {
    technique: "Summoning Technique",
    tech_stack: "Docker",
    tag: "DOCKER",
    lore: "Summoning isolated development environments instantly for consistent and powerful deployments.",
    desc: [
      "Containerize applications for deployment",
      "Manage services and environments efficiently",
      "Ensure consistency across development and production"
    ],
    chakraColor: "indigo",
  },
  {
    technique: "Teleportation Technique",
    tech_stack: "Git & GitHub",
    tag: "GIT",
    lore: "Instantly traveling between versions, branches, and collaborative ninja missions without losing the path.",
    desc: [
      "Master version control workflows",
      "Handle branching, merging, and pull requests",
      "Maintain clean project history and collaboration"
    ],
    chakraColor: "orange",
  }
];

function TiltCard({ skill, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Subtle 3D tilt
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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

  const colors = colorMap[skill.chakraColor];

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
      className={`relative h-full w-full rounded-xl p-[1px] group transition-all duration-500 hover:-translate-y-2 z-10 hover:z-20`}
    >
      {/* Border Glow Layer */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#222] to-[#111] border border-[#222] group-hover:border-transparent transition-colors duration-500 ${colors.shadow}`} />
      
      {/* Animated Gradient Border on Hover */}
      <div className={`absolute inset-[-1px] rounded-xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[2px] -z-10`} />

      {/* Main Card Content */}
      <div 
        className="h-full w-full bg-[#0a0a0a]/90 backdrop-blur-md rounded-xl p-6 md:p-8 flex flex-col relative overflow-hidden"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Particle / Texture effect behind content */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
        
        {/* Corner Emblem */}
        <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-80 transition-all duration-700 group-hover:rotate-180 z-20 pointer-events-none">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={colors.text}>
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <path d="M12 4L12 20M4 12L20 12" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="flex justify-between items-start mb-6">
          <span className={`text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] px-2 py-1 border rounded-sm transition-colors duration-300 border-[#333] group-hover:border-current ${colors.text} shadow-sm bg-[#111]`}>
            {skill.tag}
          </span>
        </div>
        
        <h3 className={`text-xl lg:text-2xl font-black mb-1 text-[#FAFAFA] uppercase tracking-wider transition-all duration-300 ${colors.textGlow}`}>
          {skill.technique}
        </h3>
        
        <p className={`text-xs lg:text-sm font-bold uppercase tracking-widest mb-4 opacity-70 ${colors.text}`}>
          {skill.tech_stack}
        </p>

        <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed italic mb-6">
          "{skill.lore}"
        </p>

        <ul className="text-gray-300 text-xs md:text-sm space-y-3 mt-auto">
          {skill.desc.map((d, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className={`mt-[2px] text-[10px] ${colors.text} drop-shadow-md`}>✦</span>
              <span className="leading-snug">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative z-10 overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-paper.png')" }}></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-2 block font-bold">Techniques</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              Jutsu <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
            </h2>
          </div>
          <p className="max-w-md text-foreground/60 text-base md:text-lg font-medium leading-relaxed border-l-2 border-primary/50 pl-4">
            Mastered techniques forged through countless missions in full-stack development, AI, backend engineering, and scalable system architecture.
          </p>
        </div>

        {/* The Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr" style={{ perspective: 1200 }}>
          {skills.map((skill, index) => (
            <TiltCard key={skill.technique} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
