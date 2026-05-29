import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isDesktop, setIsDesktop] = useState(false);

  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  const springConfig = { damping: 40, stiffness: 250, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      // Offset by 150px (half of width/height) to center the glow under the cursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('pointermove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full z-40 opacity-25 mix-blend-screen pointer-events-none"
      style={{
        x: glowX,
        y: glowY,
        background: 'radial-gradient(circle, rgba(255, 102, 0, 0.2) 0%, rgba(255, 102, 0, 0) 70%)',
      }}
    />
  );
}
