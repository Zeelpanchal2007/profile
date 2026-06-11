import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const journey = [
  { year: "2022", title: "Awakened the Coding Chakra", desc: "Started my software development journey by learning HTML, CSS, and JS. Built early websites and discovered a passion for solving problems through code.", rank: "Academy Student" },
  { year: "2023", title: "First Professional Mission", desc: "Completed a frontend internship focusing on HTML, CSS, and JS. Worked on real-world projects and gained valuable industry experience.", rank: "Genin" },
  { year: "2024", title: "Python Sage Training", desc: "Completed a Python and Django internship, mastering backend principles, APIs, and databases, transitioning into full-stack development.", rank: "Chunin" },
  { year: "2025", title: "Full Stack Shinobi Path", desc: "Mastered full-stack development with React, FastAPI, and PostgreSQL. Built complex projects, strengthening both frontend and backend expertise.", rank: "Jonin" },
  { year: "2026", title: "AI & Hackathon Evolution", desc: "Expanded into AI and Machine Learning. Actively competed in hackathons to build intelligent applications and solve real-world problems.", rank: "ANBU Candidate" }
];

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    trigger: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="timeline" className="py-32 bg-[#0a0a0a] relative" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
            Ninja <span className="text-primary">Path</span>
          </h2>
          <p className="text-foreground/60 uppercase tracking-widest font-mono text-sm">Hokage Journey Timeline</p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Animated Path Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-foreground/10 transform md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              style={{ height: pathHeight }} 
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
            />
          </div>

          <div className="space-y-12">
            {journey.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
                  
                  {/* Glowing Node */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-0 md:left-1/2 transform -translate-x-0 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                  >
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </motion.div>

                  {/* Content Box */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}
                  >
                    <div className="bg-muted/40 backdrop-blur-md p-6 rounded-lg border border-foreground/10 hover:border-primary/50 transition-colors group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="text-primary font-mono font-bold text-xl mb-1 block">{item.year}</span>
                      <h3 className="text-2xl font-black uppercase tracking-wide mb-2">{item.title}</h3>
                      <span className="inline-block px-2 py-1 bg-foreground/10 text-xs font-mono uppercase tracking-widest rounded mb-4">
                        {item.rank}
                      </span>
                      <p className="text-foreground/70">{item.desc}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
