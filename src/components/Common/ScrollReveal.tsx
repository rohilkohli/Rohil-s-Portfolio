import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

export const ScrollReveal = ({ children, direction = 'up', delay = 0 }: ScrollRevealProps) => {
  const getInitialProps = () => {
    switch (direction) {
      case 'left': return { x: -100, rotateY: 45, opacity: 0, z: -100 };
      case 'right': return { x: 100, rotateY: -45, opacity: 0, z: -100 };
      case 'down': return { y: -100, rotateX: -45, opacity: 0, z: -100 };
      default: return { y: 100, rotateX: 45, opacity: 0, z: -100 };
    }
  };

  return (
    <motion.div
      initial={getInitialProps()}
      whileInView={{ 
        x: 0, 
        y: 0, 
        rotateX: 0, 
        rotateY: 0, 
        opacity: 1, 
        z: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease
      }}
      style={{ perspective: "1000px" }}
    >
      {children}
    </motion.div>
  );
};
