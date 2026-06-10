import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Profile', href: '#about' },
  { name: 'Arsenal', href: '#skills' },
  { name: 'Missions', href: '#projects' },
  { name: 'Path', href: '#timeline' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass-panel py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-black text-foreground flex items-center gap-2 group">
          <span className="transition-transform group-hover:rotate-[360deg] duration-700 ease-in-out inline-block w-8 h-8 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_10px_rgba(255,87,34,0.3)] group-hover:shadow-[0_0_15px_rgba(255,87,34,0.6)]">
            <img 
              src="/sharingan.png" 
              alt="Sharingan Logo" 
              className="w-full h-full object-cover"
            />
          </span>
          Zeel.
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-sm font-bold uppercase tracking-widest rounded-sm"
          >
            Send a Hawk
          </a>
        </div>

        {/* Mobile Menu Button - simplified for layout */}
        <button className="md:hidden text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}
