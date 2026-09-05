
"use client";

import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
    href: "mailto:ahmedabualkhair903@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black">
      {/* Ambient background */}

      <div className="pointer-events-none absolute -bottom-48 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-accent/[0.05] blur-[140px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.015] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        {/* =================================================
            Main Footer
            ================================================= */}

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Brand */}

          <motion.div
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
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[10px] font-medium transition-all duration-300 group-hover:border-violet-accent group-hover:bg-violet-accent group-hover:text-white">
                A
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 group-hover:text-white">
                Ahmed Abu Al-Khair
              </span>
            </Link>

            <p className="mt-6 max-w-md text-xs leading-7 text-white/35">
              Frontend developer focused on building modern,
              thoughtful and memorable digital experiences.
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/30">
              React · Next.js · TypeScript
            </p>
          </motion.div>

          {/* Navigation */}

          <motion.div
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-2 gap-10 sm:grid-cols-3"
          >
            {/* Navigation */}

            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                Navigation
              </span>

              <nav className="mt-5 flex flex-col items-start gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-violet-200 focus-visible:text-violet-200"
                  >
                    {link.label}

                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-accent to-cyan-accent transition-all duration-300 group-hover:w-full" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Socials */}

            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                Connect
              </span>

              <div className="mt-5 flex flex-col items-start gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      social.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-white/45 transition-colors duration-300 hover:text-violet-200 focus-visible:text-violet-200"
                  >
                    {social.label}

                    <span className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:text-violet-300">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}

            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                Location
              </span>

              <div className="mt-5">
                <span className="text-[10px] uppercase tracking-[0.14em] text-white/35">
                  Egypt
                </span>

                <span className="mt-2 block text-[9px] uppercase tracking-[0.12em] text-white/30">
                  Available worldwide
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================================
            Closing CTA
            ================================================= */}

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
            delay: 0.15,
            duration: 0.8,
          }}
          className="mt-16 border-t border-white/10 pt-10 md:mt-20"
        >
          <Link
            href="#contact"
            className="group flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-violet-300/70">
                Have a project in mind?
              </span>

              <p className="mt-3 text-2xl font-light tracking-[-0.04em] text-white/65 transition-colors duration-300 group-hover:text-white md:text-4xl">
                Let&apos;s make something meaningful.
              </p>
            </div>

            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-violet-accent group-hover:bg-violet-accent group-hover:text-white group-hover:shadow-[0_0_40px_-8px_rgba(139,92,246,0.7)]">
              ↗
            </span>
          </Link>
        </motion.div>

        {/* =================================================
            Bottom Bar
            ================================================= */}

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-[9px] uppercase tracking-[0.16em] text-white/30">
            © {new Date().getFullYear()} Ahmed Abu Al-Khair
          </span>

          <motion.span
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
            className="text-[9px] uppercase tracking-[0.16em] text-white/30"
          >
            Designed & Built with intention.
          </motion.span>

          <Link
            href="#home"
            className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/50 transition-colors duration-300 hover:text-violet-300 focus-visible:text-violet-300"
          >
            Back to top
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
