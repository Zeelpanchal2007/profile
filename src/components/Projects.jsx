import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const missions = [
  {
    id: 1,
    title: "Project Alpha",
    rank: "S-Rank",
    desc: "A massive, scalable platform built with React and FastAPI to handle thousands of concurrent jutsu (requests).",
    tech: ["React", "FastAPI", "PostgreSQL", "Three.js"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "E-Commerce Ninja",
    rank: "A-Rank",
    desc: "A stealthy and fast e-commerce platform with real-time inventory tracking and secure payment seals.",
    tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Chakra Tracker",
    rank: "B-Rank",
    desc: "Personal finance and habit tracking dashboard with complex data visualization and charts.",
    tech: ["React", "D3.js", "Firebase"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    github: "#",
    live: "#"
  }
];

function MissionCard({ mission, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, rotateX: 90, transformOrigin: "top" }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: [0.21, 1.11, 0.81, 0.99] }}
      className="bg-muted/30 border border-foreground/10 rounded-lg overflow-hidden group hover:border-primary/50 transition-colors"
    >
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
        <img 
          src={mission.img} 
          alt={mission.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className={`px-3 py-1 font-bold font-mono text-sm rounded-sm ${
            mission.rank === 'S-Rank' ? 'bg-secondary text-white' : 
            mission.rank === 'A-Rank' ? 'bg-primary text-white' : 
            'bg-blue-600 text-white'
          }`}>
            {mission.rank}
          </span>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-3">{mission.title}</h3>
        <p className="text-foreground/70 mb-6">{mission.desc}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {mission.tech.map(t => (
            <span key={t} className="text-xs font-mono uppercase tracking-widest px-2 py-1 bg-background border border-foreground/20 rounded">
              {t}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
          <a href={mission.github} className="flex items-center gap-2 hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest">
            <GithubIcon /> Source Code
          </a>
          <a href={mission.live} className="flex items-center gap-2 hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest ml-auto">
            Live Demo <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    trigger: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" className="py-32 relative bg-background overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <motion.div 
        style={{ y }} 
        className="absolute top-0 right-0 opacity-5 pointer-events-none"
      >
        <h2 className="text-[20rem] font-black leading-none whitespace-nowrap">MISSIONS</h2>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
            Mission <span className="text-primary">Archives</span>
          </h2>
          <div className="w-24 h-1 bg-primary rounded-full" />
        </div>

        <div className="space-y-12 md:space-y-24 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <MissionCard key={mission.id} mission={mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
