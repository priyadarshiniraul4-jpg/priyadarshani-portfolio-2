import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Smooth out progress updates using spring physics
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] via-[#38BDF8] to-[#93C5FD] z-50 origin-left shadow-[0_0_14px_rgba(56,189,248,0.85)] pointer-events-none"
      style={{ scaleX }}
    />
  );
};
