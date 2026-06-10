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
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      animate={{
        x: mousePosition.x - 8, // slight offset to align the visual tip
        y: mousePosition.y - 8,
        scale: isHovering ? 1.3 : 1,
        rotate: isHovering ? -15 : 0, // tilt slightly when hovering clickable items
      }}
      // Extremely tight spring for zero-latency feel
      transition={{ type: "spring", stiffness: 2000, damping: 50, mass: 0.1 }}
    >
      <img 
        src="/kunai-cursor.png" 
        alt="Kunai Cursor"
        className="w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]"
        style={{
          // The uploaded image points top-right. 
          // Flipping it horizontally makes it point to the standard top-left cursor location!
          transform: 'scaleX(-1) rotate(-10deg)', 
        }}
      />
    </motion.div>
  );
}
