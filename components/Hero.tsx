
"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

import Magnetic from "@/components/Magnetic";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const visualX = useTransform(smoothX, [-1, 1], [-18, 18]);
  const visualY = useTransform(smoothY, [-1, 1], [-14, 14]);

  const orbitX = useTransform(smoothX, [-1, 1], [-8, 8]);
  const orbitY = useTransform(smoothY, [-1, 1], [-6, 6]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      mouseX.set((x - 0.5) * 2);
      mouseY.set((y - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* =====================================================
          Ambient background
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="hero-glow left-[68%] top-[48%] -translate-x-1/2 -translate-y-1/2" />

        <div className="absolute -left-40 top-[20%] h-[420px] w-[420px] rounded-full bg-violet-accent/[0.04] blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-accent/[0.035] blur-[140px]" />
      </div>

      {/* =====================================================
          Main grid
          ===================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="hero-radial-grid" />

      {/* =====================================================
          Interactive visual
          ===================================================== */}

      <div className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[680px] w-[680px] -translate-y-1/2 lg:block">
        {/* Atmospheric glow */}

        <motion.div
          style={{
            x: visualX,
            y: visualY,
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-accent/[0.05] blur-[90px]" />
        </motion.div>

        {/* Orbit system */}

        <motion.div
          style={{
            x: orbitX,
            y: orbitY,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="hero-orbit hero-orbit--one" />
          <div className="hero-orbit hero-orbit--two" />
          <div className="hero-orbit hero-orbit--three" />
        </motion.div>

        {/* Main core */}

        <motion.div
          style={{
            x: visualX,
            y: visualY,
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{
              rotate: [0, 4, -4, 0],
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
          >
            <div className="hero-core" />

            {/* Core orbiting line */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[13rem] w-[13rem] rounded-full border border-white/[0.09]"
            >
              <span className="absolute left-1/2 top-[-3px] h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.45)]" />
            </motion.div>

            {/* Second orbiting line */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[17rem] w-[9rem] rotate-[35deg] rounded-[50%] border border-white/[0.07]"
            >
              <span className="absolute bottom-[-3px] left-1/2 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white/45 shadow-[0_0_14px_rgba(255,255,255,0.3)]" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =================================================
            Particles
            ================================================= */}

        <span className="hero-particle hero-particle--one left-[18%] top-[30%]" />
        <span className="hero-particle hero-particle--two right-[17%] top-[24%]" />
        <span className="hero-particle hero-particle--three bottom-[27%] left-[22%]" />
        <span className="hero-particle hero-particle--four bottom-[18%] right-[25%]" />

        <span className="absolute left-[32%] top-[18%] h-1 w-1 rounded-full bg-white/30" />
        <span className="absolute bottom-[30%] right-[14%] h-1.5 w-1.5 rounded-full bg-white/20" />
        <span className="absolute left-[12%] top-[58%] h-1 w-1 rounded-full bg-white/20" />

        {/* Scan line */}

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[1px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <div className="hero-scan left-1/2 -translate-x-1/2 rotate-90" />
        </div>
      </div>

      {/* =====================================================
          Main content
          ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-36">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-16 lg:grid-cols-[1.35fr_0.65fr]">
          {/* =================================================
              Left
              ================================================= */}

          <div>
            {/* Availability */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="mb-10 flex items-center gap-3"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-accent/60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-accent" />
              </span>

              <span className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                Available for freelance work
              </span>
            </motion.div>

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-violet-300/90">
                Frontend Developer
              </span>
            </motion.div>

            {/* Heading */}

            <h1
              id="hero-heading"
              className="relative z-10 mt-7"
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-[clamp(2.25rem,5.5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.045em]"
                >
                  Ahmed
                </motion.span>
              </span>

              <span className="mt-1.5 block overflow-hidden">
                <motion.span
                  initial={{
                    y: "100%",
                  }}
                  animate={{
                    y: 0,
                  }}
                  transition={{
                    delay: 0.45,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="hero-shimmer block text-[clamp(2.25rem,5.5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.045em]"
                >
                  Abu Al-Khair
                </motion.span>
              </span>
            </h1>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-10 max-w-xl text-sm leading-7 text-white/50 md:text-base"
            >
              I build modern web experiences where thoughtful
              interfaces meet clean, scalable frontend development.
            </motion.p>

            {/* Actions */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.8,
              }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Magnetic strength={0.18}>
                <Link
                  href="#work"
                  className="group relative flex items-center gap-5 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-violet-accent to-violet-bright px-8 py-4 text-[10px] uppercase tracking-[0.16em] text-white shadow-[0_10px_40px_-10px_rgba(139,92,246,0.65)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span className="absolute -left-10 top-0 h-full w-10 bg-white/40 blur-xl transition-transform duration-700 group-hover:translate-x-[22rem]" />

                  <span className="relative z-10">Explore my work</span>

                  <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.18}>
                <Link
                  href="#contact"
                  className="group flex items-center gap-4 rounded-full border border-violet-accent/25 px-7 py-4 text-[10px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-accent/60 hover:bg-violet-accent/[0.06] hover:text-violet-200"
                >
                  <span>Let&apos;s talk</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          {/* =================================================
              Right information
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex lg:flex-col lg:items-end lg:justify-end"
          >
            {/* What I do */}

            <div className="max-w-xs border-l border-violet-accent/20 pl-6">
              <span className="text-[9px] uppercase tracking-[0.22em] text-violet-300/80">
                What I do
              </span>

              <p className="mt-5 text-sm leading-7 text-white/50">
                I turn ideas into responsive, accessible and
                visually refined web applications.
              </p>
            </div>

            {/* Currently working with */}

            <div className="mt-14 max-w-xs">
              <span className="text-[9px] uppercase tracking-[0.22em] text-white/35">
                Currently working with
              </span>

              <div className="mt-5 flex flex-wrap justify-end gap-x-4 gap-y-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="text-[9px] uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 hover:text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Scroll indicator */}

            <div className="mt-20 flex flex-col items-center gap-4">
              <span className="text-[8px] uppercase tracking-[0.25em] text-white/30 [writing-mode:vertical-rl]">
                Scroll to explore
              </span>

              <motion.span
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-sm text-violet-300/70"
              >
                ↓
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            Bottom metadata
            ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.1,
            duration: 0.8,
          }}
          className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="text-[9px] uppercase tracking-[0.18em] text-white/35"
              >
                {technology}
              </span>
            ))}
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
            Egypt — 2026
          </span>
        </motion.div>
      </div>
    </section>
  );
}
