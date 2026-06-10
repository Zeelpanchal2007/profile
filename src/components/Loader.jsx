import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress interval
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 400); // Complete after 100%
          return 100;
        }
        // Randomize the progress increments slightly for realism
        const increment = Math.floor(Math.random() * 4) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => {
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.0, ease: "easeInOut" } }}
    >
      {/* Central Rotating Shuriken Image */}
      <motion.div 
        className="w-36 h-36 mb-10 flex items-center justify-center drop-shadow-[0_0_15px_rgba(255,87,34,0.4)]"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
      >
        <img 
          src="/shuriken.png" 
          alt="Loading Shuriken" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Message */}
      <div className="mb-8">
        <p className="text-primary font-mono text-sm tracking-[0.25em] font-medium drop-shadow-[0_0_5px_rgba(255,87,34,0.4)]">
          LOADING CHAKRA...
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-64 sm:w-80 h-[3px] bg-[#3a0b0b] relative overflow-hidden rounded-full mb-3 shadow-[0_0_10px_rgba(255,87,34,0.1)]">
        <motion.div 
          className="h-full bg-primary shadow-[0_0_10px_rgba(255,87,34,0.8)]"
          style={{ width: `${progress}%` }}
          layout
        />
      </div>
      
      {/* Percentage */}
      <div className="text-[11px] font-mono text-primary/60 tracking-wider">
        {progress}%
      </div>
    </motion.div>
  );
}
