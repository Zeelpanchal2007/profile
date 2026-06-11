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
    title: "Satellite Environmental Intelligence Platform",
    rank: "S-Rank",
    desc: "An advanced geospatial intelligence platform that leverages satellite imagery, environmental datasets, and AI-powered analytics to monitor ecosystems, detect environmental changes, visualize geospatial patterns, and support data-driven sustainability decisions. Built for large-scale environmental monitoring and smart analysis workflows.",
    missionText: "Harnesses satellite vision techniques to analyze Earth's changing landscapes, transforming raw environmental data into actionable intelligence for real-world impact.",
    tech: ["React", "FastAPI", "Python", "PostgreSQL", "Satellite APIs", "GIS"],
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Zeelpanchal2007/Satellite-Environmental-Intelligence-Platform",
    live: "#"
  },
  {
    id: 2,
    title: "OCR Detection System",
    rank: "A-Rank",
    desc: "A computer vision application capable of extracting and digitizing text from images and scanned documents. Utilizes OCR technologies and image processing techniques to identify, process, and convert visual text into structured digital information.",
    missionText: "A visual recognition jutsu that deciphers hidden text from images and documents, transforming physical information into searchable digital knowledge.",
    tech: ["Python", "OpenCV", "OCR", "Machine Learning", "Image Processing"],
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Zeelpanchal2007/OCR_detection",
    live: "#"
  },
  {
    id: 3,
    title: "Blue Carbon MRV",
    rank: "A-Rank",
    desc: "A monitoring, reporting, and verification platform focused on blue carbon ecosystems. Designed to analyze coastal and marine environmental data, track carbon sequestration metrics, generate reports, and support climate sustainability initiatives through scientific data management.",
    missionText: "Tracks and verifies coastal ecosystem intelligence, enabling precise carbon monitoring missions that contribute to climate resilience and environmental preservation.",
    tech: ["React", "Python", "Environmental Analytics", "GIS", "Carbon Monitoring"],
    img: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/KavanBhavsar35/blue-carbon-mrv",
    live: "#"
  },
  {
    id: 4,
    title: "VendorBridge ERP",
    rank: "B-Rank",
    desc: "A modern ERP platform designed to streamline vendor management, business operations, workflow coordination, and enterprise resource planning. Built to simplify organizational processes through centralized management and scalable architecture.",
    missionText: "A business coordination technique that unifies vendors, workflows, and operational resources into a single command center for efficient enterprise management.",
    tech: ["React", "FastAPI", "PostgreSQL", "ERP Systems", "Business Management"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Zeelpanchal2007/VendorBridge-ERP",
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
          <span className={`px-3 py-1 font-bold font-mono text-sm rounded-sm ${mission.rank === 'S-Rank' ? 'bg-secondary text-white' :
            mission.rank === 'A-Rank' ? 'bg-primary text-white' :
              'bg-blue-600 text-white'
            }`}>
            {mission.rank}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wide mb-3 [word-spacing:0.15em] leading-snug">{mission.title}</h3>

        <div className="text-foreground/70 mb-6 flex flex-col gap-3">
          <p>{mission.desc}</p>
          <p className="italic text-primary/80 font-medium">"{mission.missionText}"</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {mission.tech.map(t => (
            <span key={t} className="text-xs font-mono uppercase tracking-widest px-2 py-1 bg-background border border-foreground/20 rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-foreground/10">
          <a href={mission.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors font-mono text-sm uppercase tracking-widest">
            <GithubIcon /> Source Code
          </a>
          <a href={mission.live} onClick={(e) => mission.live === '#' && e.preventDefault()} className={`flex items-center gap-2 transition-colors font-mono text-sm uppercase tracking-widest ml-auto ${mission.live === '#' ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary'}`}>
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
