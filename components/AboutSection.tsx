"use client";

import { motion } from "motion/react";

const focusAreas = [
  {
    number: "01",
    title: "Responsive & accessible interfaces",
    description:
      "Interfaces that adapt cleanly across devices and stay usable for everyone.",
  },
  {
    number: "02",
    title: "Clean component architecture",
    description:
      "Reusable, well-structured components that scale with the product.",
  },
  {
    number: "03",
    title: "Thoughtful spacing, hierarchy & motion",
    description:
      "Careful rhythm and subtle interaction that make experiences feel considered.",
  },
  {
    number: "04",
    title: "Scalable, maintainable code",
    description:
      "Frontend code that stays organized, clear and easy to build upon.",
  },
];

const skillGroups = [
  {
    number: "01",
    label: "Core Engineering",
    skills: ["React", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    number: "02",
    label: "Styling & UI",
    skills: ["Tailwind CSS", "HTML", "CSS"],
  },
  {
    number: "03",
    label: "Data & Integration",
    skills: ["REST APIs", "Local Storage"],
  },
  {
    number: "04",
    label: "Tools & Workflow",
    skills: ["Git", "GitHub"],
  },
];

const highlights = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building modern interfaces with a strong focus on usability, responsiveness and clean component architecture.",
  },
  {
    number: "02",
    title: "UI / UX",
    description:
      "Turning ideas into polished digital experiences with thoughtful spacing, hierarchy, motion and interaction.",
  },
  {
    number: "03",
    title: "Learning",
    description:
      "Constantly improving my skills and exploring better ways to build scalable and maintainable applications.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        {/* Intro */}
        <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-violet-300/90">
              05 — About Me
            </span>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/40">
              A little more about the person behind the interfaces,
              the code and the projects.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.1,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="max-w-6xl text-4xl font-light leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              I&apos;m Ahmed — a frontend developer who enjoys turning
              <span className="text-white/30">
                {" "}
                ideas into thoughtful digital experiences.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Story */}
        <div className="mt-28 grid gap-16 border-t border-white/10 pt-10 md:mt-36 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/80">
              The story
            </span>
          </motion.div>

          <div>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-sm leading-8 text-white/50 md:text-base"
              >
                I&apos;m passionate about frontend development and the
                process of transforming an idea into a real, usable
                product. I care about the details that make an
                interface feel natural rather than simply functional.
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: 0.1,
                  duration: 0.8,
                }}
                className="text-sm leading-8 text-white/50 md:text-base"
              >
                I&apos;m continuously learning, building projects and
                challenging myself to write cleaner code and create
                better experiences. My goal is to grow into a developer
                who can build products that are both technically solid
                and visually memorable.
              </motion.p>
            </div>

            {/* Focus areas */}
            <div className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.6,
                  }}
                  className="group relative bg-black p-6 transition-colors duration-500 hover:bg-white/[0.02] md:p-7"
                >
                  <span className="text-[9px] text-violet-accent/70 transition-colors duration-300 group-hover:text-violet-400">
                    {item.number}
                  </span>

                  <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-gradient-to-b from-violet-accent to-cyan-accent transition-transform duration-500 group-hover:scale-y-100" />

                  <h3 className="mt-5 text-sm font-light tracking-[-0.02em] text-white/70 transition-colors duration-300 group-hover:text-violet-200">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-white/45">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-28 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:mt-36 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              className="group relative min-h-[300px] bg-black p-8 transition-colors duration-500 hover:bg-white/[0.02] md:p-10"
            >
              <span className="text-[9px] text-violet-accent/70">
                {item.number}
              </span>

              <div className="mt-20">
                <h3 className="text-2xl font-light tracking-[-0.03em] text-white/80 transition-colors duration-300 group-hover:text-violet-100">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                  {item.description}
                </p>
              </div>

              <span className="absolute bottom-8 right-8 text-xl text-white/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-violet-300">
                ↗
              </span>

              <span className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-accent/[0.04] blur-[60px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="mt-28 grid gap-12 border-t border-white/10 pt-10 md:mt-36 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/80">
              Skills & Tools
            </span>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              The technologies and tools I use to design, build and
              ship frontend experiences.
            </p>
          </div>

          <div className="space-y-10">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  delay: groupIndex * 0.08,
                  duration: 0.7,
                }}
                className="border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-[9px] text-violet-accent/60">
                    {group.number}
                  </span>

                  <h3 className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    {group.label}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-3 pl-9">
                  {group.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        delay: groupIndex * 0.08 + index * 0.04,
                        duration: 0.5,
                      }}
                      className="rounded-full border border-white/10 px-4 py-2.5 text-[10px] uppercase tracking-[0.12em] text-white/45 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-accent/60 hover:bg-violet-accent/[0.06] hover:text-violet-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-32 border-t border-white/10 pt-10 md:mt-44"
        >
          <p className="max-w-5xl text-3xl font-light leading-tight tracking-[-0.04em] text-white/70 md:text-5xl">
            I&apos;m not just interested in writing code.
            <span className="text-violet-300/40">
              {" "}
              I want to understand the problem, shape the experience
              and build something people actually enjoy using.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}