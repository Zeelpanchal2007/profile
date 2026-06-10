import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function KunaiCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 12),
        y: mousePosition.y - (isHovering ? 24 : 12),
        scale: isHovering ? 1.5 : 1,
        rotate: isHovering ? 45 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {/* Simple Kunai SVG representation */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        className={`${isHovering ? 'text-primary' : 'text-foreground'}`}
      >
        {/* Kunai blade */}
        <path d="M12 2L6 10L12 18L18 10L12 2Z" fill={isHovering ? "currentColor" : "none"} />
        {/* Handle */}
        <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
        {/* Ring */}
        <circle cx="12" cy="22" r="2" />
      </svg>
    </motion.div>
  );
}
