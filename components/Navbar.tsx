
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import Magnetic from "@/components/Magnetic";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =====================================================
          Navbar
          ===================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "px-4 pt-4 md:px-8"
            : "px-6 pt-6 md:px-10"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className={`relative mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
            scrolled
              ? "rounded-full border border-white/[0.12] bg-[#050505]/75 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:px-5"
              : "px-0 py-0"
          }`}
        >
          {/* =================================================
              Decorative glow
              ================================================= */}

          {scrolled && (
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute left-[25%] top-0 h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="absolute -left-20 top-1/2 h-20 w-40 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />
            </div>
          )}

          {/* =================================================
              Logo
              ================================================= */}

          <Link
            href="#home"
            onClick={closeMenu}
            aria-label="Ahmed Abu Al-Khair — Home"
            className="group relative z-[110] flex items-center gap-3 outline-none"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-violet-accent/30 bg-violet-accent/[0.06] text-[10px] font-medium tracking-tight transition-all duration-500 group-hover:border-violet-accent group-hover:bg-violet-accent group-hover:text-white group-focus-visible:border-violet-accent group-focus-visible:bg-violet-accent group-focus-visible:text-white">
              <span className="transition-transform duration-500 group-hover:scale-110">
                A
              </span>

              <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="absolute inset-0 rounded-full bg-violet-accent/40 blur-md" />
              </span>
            </span>

            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/65 transition-colors duration-300 group-hover:text-white sm:block">
              Ahmed Abu Al-Khair
            </span>
          </Link>

          {/* =================================================
              Desktop Navigation
              ================================================= */}

          <div className="relative z-10 hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                number={index + 1}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* =================================================
              Desktop Contact
              ================================================= */}

          <div className="relative z-10 hidden md:block">
            <Magnetic strength={0.18}>
              <Link
                href="#contact"
                className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-violet-accent/20 bg-violet-accent/[0.06] px-4 py-2.5 text-[9px] uppercase tracking-[0.16em] text-violet-200/90 outline-none transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-accent hover:bg-violet-accent hover:text-white focus-visible:border-violet-accent focus-visible:bg-violet-accent focus-visible:text-white"
              >
                <span className="relative z-10">
                  Let&apos;s talk
                </span>

                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>

                <span className="absolute -left-10 top-0 h-full w-10 bg-cyan-accent/40 blur-xl transition-transform duration-700 group-hover:translate-x-[14rem]" />
              </Link>
            </Magnetic>
          </div>

          {/* =================================================
              Mobile Button
              ================================================= */}

          <button
            type="button"
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] outline-none transition-all duration-300 hover:border-white/30 hover:bg-white/[0.06] focus-visible:border-white/50 md:hidden"
          >
            <span className="relative flex h-3.5 w-4 flex-col justify-between">
              <span
                className={`block h-px w-full origin-center bg-white transition-all duration-300 ${
                  menuOpen
                    ? "translate-y-[6.25px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-px w-full bg-white transition-all duration-300 ${
                  menuOpen
                    ? "scale-x-0 opacity-0"
                    : "scale-x-100 opacity-100"
                }`}
              />

              <span
                className={`block h-px w-full origin-center bg-white transition-all duration-300 ${
                  menuOpen
                    ? "-translate-y-[6.25px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      {/* =====================================================
          Mobile Menu
          ===================================================== */}

      <motion.div
        id="mobile-navigation"
        initial={false}
        animate={{
          opacity: menuOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-0 z-[90] bg-[#030303] md:hidden ${
          menuOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Ambient glows */}

        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-white/[0.035] blur-[130px]" />

        <div className="pointer-events-none absolute -left-40 bottom-10 h-[300px] w-[300px] rounded-full bg-white/[0.02] blur-[120px]" />

        {/* Grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Decorative circle */}

        <div className="pointer-events-none absolute right-[-90px] top-[35%] h-72 w-72 rounded-full border border-white/[0.045]" />

        <div className="pointer-events-none absolute right-[-40px] top-[40%] h-52 w-52 rounded-full border border-white/[0.04]" />

        <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-32">
          {/* Navigation links */}

          <div>
            <motion.span
              initial={false}
              animate={{
                opacity: menuOpen ? 1 : 0,
                y: menuOpen ? 0 : 10,
              }}
              transition={{
                delay: menuOpen ? 0.15 : 0,
                duration: 0.4,
              }}
              className="block text-[9px] uppercase tracking-[0.25em] text-white/25"
            >
              Navigation
            </motion.span>

            <div className="mt-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={false}
                  animate={{
                    opacity: menuOpen ? 1 : 0,
                    y: menuOpen ? 0 : 25,
                  }}
                  transition={{
                    delay: menuOpen
                      ? 0.08 + index * 0.06
                      : 0,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    tabIndex={menuOpen ? 0 : -1}
                    className="group relative flex items-center justify-between border-b border-white/10 py-5 outline-none"
                  >
                    <span className="absolute left-0 top-1/2 h-8 w-0 -translate-y-1/2 rounded-full bg-white/[0.04] blur-xl transition-all duration-500 group-hover:w-32" />

                    <span className="relative text-4xl font-light tracking-[-0.04em] text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-200 group-focus-visible:translate-x-1 group-focus-visible:text-violet-200">
                      {item.label}
                    </span>

                    <span className="relative text-sm text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-violet-accent group-focus-visible:translate-x-1 group-focus-visible:text-violet-accent">
                      0{index + 1} ↗
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom information */}

          <motion.div
            initial={false}
            animate={{
              opacity: menuOpen ? 1 : 0,
              y: menuOpen ? 0 : 20,
            }}
            transition={{
              delay: menuOpen ? 0.3 : 0,
              duration: 0.5,
            }}
            className="flex items-end justify-between border-t border-white/10 pt-6"
          >
            <div>
              <span className="flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-white/25">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-violet-accent/50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-violet-accent" />
                </span>

                Available for work
              </span>

              <span className="mt-2 block text-xs text-white/50">
                Let&apos;s build something great.
              </span>
            </div>

            <span className="text-[9px] uppercase tracking-[0.2em] text-white/20">
              2026
            </span>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

/* =========================================================
   Desktop Navigation Link
   ========================================================= */

function NavLink({
  href,
  children,
  number,
}: {
  href: string;
  children: React.ReactNode;
  number: number;
}) {
  return (
    <Link
      href={href}
      className="group relative flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-white/45 outline-none transition-colors duration-300 hover:text-violet-300 focus-visible:text-violet-300"
    >
      <span>{children}</span>

      <span className="translate-y-[-1px] text-[7px] text-violet-accent/35 transition-colors duration-300 group-hover:text-violet-accent group-focus-visible:text-violet-accent">
        0{number}
      </span>

      <span className="absolute -bottom-2 left-0 h-px w-0 bg-gradient-to-r from-violet-accent via-violet-bright to-transparent transition-all duration-300 group-hover:w-full group-focus-visible:w-full" />
    </Link>
  );
}
