import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Magnetic({ children, range = 40 }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const diffX = clientX - centerX;
    const diffY = clientY - centerY;
    
    // Calculate distance between cursor and center of button
    const distance = Math.sqrt(diffX * diffX + diffY * diffY);
    
    // If cursor is close, pull button in that direction (attenuated to 35% of offset)
    if (distance < range * 2) {
      setPosition({ x: diffX * 0.35, y: diffY * 0.35 });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.2 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
