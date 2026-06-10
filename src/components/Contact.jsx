import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [portalOpen, setPortalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setPortalOpen(false);
        setFormStatus('idle');
      }, 3000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 relative bg-background flex flex-col items-center justify-center min-h-[80vh] overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0 pointer-events-none" />

      <div className="text-center relative z-10 mb-12">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4">
          Send a <span className="text-primary">Hawk</span>
        </h2>
        <p className="text-foreground/60 max-w-lg mx-auto">
          Need a skilled shinobi for your next mission? Open the portal and send your message across the digital dimensions.
        </p>
      </div>

      <div className="relative z-20 flex justify-center w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!portalOpen ? (
            <motion.button
              key="summon-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              onClick={() => setPortalOpen(true)}
              className="group relative w-48 h-48 rounded-full border-2 border-primary bg-background flex items-center justify-center overflow-hidden hover:shadow-[0_0_50px_rgba(255,107,0,0.4)] transition-shadow duration-500"
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="absolute inset-2 border border-primary/30 rounded-full animate-spin-slow border-dashed" />
              <div className="absolute inset-4 border border-primary/20 rounded-full animate-reverse-spin border-dashed" />
              
              <div className="text-center">
                <span className="block text-primary font-bold tracking-widest uppercase mb-1">Summon</span>
                <span className="block text-xs font-mono text-foreground/50">Portal</span>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="portal-form"
              initial={{ scale: 0.1, opacity: 0, borderRadius: "100%" }}
              animate={{ scale: 1, opacity: 1, borderRadius: "16px" }}
              exit={{ scale: 0, opacity: 0, borderRadius: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full max-w-lg bg-[#111] border border-primary/30 p-8 shadow-[0_0_50px_rgba(255,107,0,0.15)] relative overflow-hidden mx-4"
            >
              {/* Portal swirl effect bg */}
              <div className="absolute -inset-[100%] opacity-20 pointer-events-none mix-blend-screen" style={{ background: 'conic-gradient(from 0deg, transparent, var(--color-primary), transparent)', animation: 'spin 10s linear infinite' }} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-foreground/10 pb-4">
                  <h3 className="text-2xl font-bold uppercase tracking-wider text-primary">Communication Scroll</h3>
                  <button onClick={() => setPortalOpen(false)} className="text-foreground/50 hover:text-foreground transition-colors">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {formStatus === 'sent' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold uppercase tracking-widest text-green-500 mb-2">Message Delivered</h4>
                    <p className="text-foreground/60 text-sm">The hawk is flying back with your missive.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-foreground/50 mb-1">Your Name</label>
                      <input required type="text" className="w-full bg-background border border-foreground/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors" placeholder="e.g. Kakashi Hatake" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-foreground/50 mb-1">Your Email</label>
                      <input required type="email" className="w-full bg-background border border-foreground/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors" placeholder="kakashi@leaf.village" />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-foreground/50 mb-1">Mission Details</label>
                      <textarea required rows="4" className="w-full bg-background border border-foreground/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors resize-none" placeholder="We need a developer to..." />
                    </div>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'sending'}
                      className="w-full py-4 bg-primary text-background font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors rounded-sm flex items-center justify-center gap-2"
                    >
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          Summoning...
                        </>
                      ) : (
                        "Send Hawk"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
