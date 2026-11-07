
"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  once?: boolean;
};

const createVariants = (y: number, duration: number): Variants => ({
  hidden: {
    opacity: 0,
    y,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export default function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  y = 40,
  once = true,
}: RevealProps) {
  const variants = createVariants(y, duration);

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.15,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
