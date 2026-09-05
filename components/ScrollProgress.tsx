
"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
      }}
      className="fixed left-0 right-0 top-0 z-[200] h-[2px] origin-left bg-gradient-to-r from-violet-accent via-violet-bright to-cyan-accent"
    />
  );
}
