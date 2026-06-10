import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Initializing Shinobi System...",
  "Loading Chakra...",
  "Summoning Components..."
];

export default function Loader({ onComplete }) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Message interval
    const msgInterval = setInterval(() => {
      setMessageIndex(prev => Math.min(prev + 1, messages.length - 1));
    }, 800);

    // Progress interval
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500); // Complete after 100%
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(msgInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Central Rotating Element (Shuriken/Chakra) */}
      <motion.div 
        className="w-24 h-24 mb-12 border-4 border-primary rounded-full relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 m-auto w-12 h-12 bg-primary rounded-full" />
        {/* Simple Shuriken Blades */}
        <div className="absolute top-0 left-1/2 -ml-1 w-2 h-8 bg-primary -mt-4 transform -skew-x-12" />
        <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-8 bg-primary -mb-4 transform skew-x-12" />
        <div className="absolute left-0 top-1/2 -mt-1 h-2 w-8 bg-primary -ml-4 transform skew-y-12" />
        <div className="absolute right-0 top-1/2 -mt-1 h-2 w-8 bg-primary -mr-4 transform -skew-y-12" />
      </motion.div>

      {/* Messages */}
      <div className="h-8 mb-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-primary font-mono text-sm uppercase tracking-widest text-shadow-glow"
          >
            {messages[messageIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-muted relative overflow-hidden rounded-full">
        <motion.div 
          className="h-full bg-primary"
          style={{ width: `${progress}%` }}
          layout
        />
      </div>
      <div className="mt-2 text-xs font-mono text-foreground/50">
        {progress}%
      </div>
    </motion.div>
  );
}
