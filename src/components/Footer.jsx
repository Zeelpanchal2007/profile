import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050505] py-12 border-t border-foreground/5 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 ninja-scroll-bg opacity-5 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="flex items-center gap-4">
          <span className="inline-block w-10 h-10 rounded-full overflow-hidden border border-primary/30 shadow-[0_0_10px_rgba(255,87,34,0.3)] animate-spin">
            <img src="/sharingan.png" alt="Sharingan" className="w-full h-full object-cover" />
          </span>
          <div>
            <h3 className="text-xl font-black uppercase tracking-widest text-foreground">Panchal Zeel</h3>
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest mt-1">Full Stack Shinobi &copy; {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Zeelpanchal2007" className="text-foreground/50 hover:text-primary transition-colors">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/panchal-zeel-4b1b933b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="text-foreground/50 hover:text-primary transition-colors">
            <LinkedinIcon />
          </a>
          <a href="#" className="text-foreground/50 hover:text-primary transition-colors">
            <TwitterIcon />
          </a>
          <a href="panchalzeel2007@gmail.com" className="text-foreground/50 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
