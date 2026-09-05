
"use client";

import Image from "next/image";
import { motion } from "motion/react";

import Magnetic from "@/components/Magnetic";

const email = "ahmedabualkhair903@gmail.com";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ahmedabualkhair903",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-abu-al-khair-b31734410/?locale=ar",
  },
  {
    label: "Email",
    href: `mailto:${email}`,
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* =====================================================
          Background
          ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[150px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-white/[0.012] blur-[130px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        {/* =================================================
            Header
            ================================================= */}

        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
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
              06 — Contact
            </span>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/40">
              Have an idea, a project or an opportunity? Let&apos;s
              start a conversation.
            </p>
          </motion.div>

          <div>
            <motion.h2
              id="contact-heading"
              initial={{
                opacity: 0,
                y: 60,
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
              className="max-w-6xl text-5xl font-light leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl"
            >
              Let&apos;s build
              <br />
              <span className="text-white/30">
                something great.
              </span>
            </motion.h2>

            <motion.p
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
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-10 max-w-lg text-sm leading-7 text-white/50 md:text-base"
            >
              I&apos;m open to interesting projects, collaborations
              and opportunities where I can learn, contribute and
              create something meaningful.
            </motion.p>
          </div>
        </div>

        {/* =================================================
            Main Contact Card
            ================================================= */}

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
            delay: 0.15,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.015] p-8 transition-all duration-700 hover:border-white/20 hover:bg-white/[0.025] md:mt-32 md:p-12 lg:p-16"
        >
          {/* Card glow */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-violet-accent/[0.07] blur-[100px] transition-all duration-700 group-hover:bg-violet-accent/[0.1]" />

          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-14">
            {/* Profile photo */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group/avatar relative h-28 w-28 shrink-0 sm:h-32 sm:w-32"
            >
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-violet-600 via-violet-accent to-cyan-accent opacity-60 blur-[10px] transition-all duration-500 group-hover/avatar:opacity-90 group-hover/avatar:blur-[14px]" />

              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 outline-none ring-2 ring-white/10 transition-all duration-500 group-hover/avatar:border-violet-accent/60 group-hover/avatar:ring-violet-accent/30">
                <Image
                  src="/profile.png"
                  alt="Ahmed Abu Al-Khair profile photo"
                  fill
                  priority
                  sizes="(max-width: 640px) 112px, 128px"
                  style={{
                    transformOrigin: "50% 26%",
                  }}
                  className="object-cover object-[50%_20%] scale-[1.25] transition-transform duration-700 group-hover/avatar:scale-[1.35]"
                />
              </div>
            </motion.div>

            {/* Email */}

            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                Start a conversation
              </span>

              <a
                href={`mailto:${email}`}
                className="group/email mt-6 block w-fit break-all text-xl font-light tracking-[-0.04em] text-white/75 outline-none transition-colors duration-300 hover:text-white focus-visible:text-white sm:text-2xl md:text-4xl"
              >
                {email}

                <span className="ml-3 inline-block text-violet-accent/60 transition-transform duration-500 group-hover/email:translate-x-2 group-hover/email:-translate-y-1 group-hover/email:text-violet-300">
                  ↗
                </span>

                <span className="mt-3 block h-px w-0 bg-gradient-to-r from-violet-accent via-violet-bright to-cyan-accent transition-all duration-500 group-hover/email:w-full" />
              </a>
            </div>

            {/* CTA */}

            <Magnetic strength={0.2}>
              <a
                href={`mailto:${email}`}
                aria-label="Send an email to Ahmed Abu Al-Khair"
                className="group/cta flex h-32 w-32 items-center justify-center rounded-full bg-white text-center text-[10px] uppercase tracking-[0.15em] text-black outline-none transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(139,92,246,0.55)] hover:ring-4 hover:ring-violet-accent/20 focus-visible:scale-105 sm:h-40 sm:w-40"
              >
                <span>
                  Get in
                  <br />
                  touch
                  <span className="ml-1 inline-block transition-transform duration-300 group-hover/cta:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* =================================================
            Social Links
            ================================================= */}

        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="grid gap-8 md:grid-cols-[0.55fr_1.45fr] md:items-center">
            <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
              Find me online
            </span>

            <div className="flex flex-wrap gap-3">
              {socials.map((social, index) => {
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <motion.div
                    key={social.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      href={social.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={
                        isEmail
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/50 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-accent/50 hover:bg-violet-accent/[0.07] hover:text-violet-200 focus-visible:border-violet-accent focus-visible:bg-violet-accent focus-visible:text-white"
                    >
                      {social.label}

                      <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =================================================
            Availability
            ================================================= */}

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
            delay: 0.2,
            duration: 0.8,
          }}
          className="mt-20 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-accent/60" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-accent" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              Available for freelance opportunities
            </span>
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/35">
            Based in Egypt
          </span>
        </motion.div>
      </div>
    </section>
  );
}
