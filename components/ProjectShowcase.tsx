"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import Magnetic from "@/components/Magnetic";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  image: string;
  technologies: string[];
  href: string;
  live: string;
  github: string;
  tint: Tint;
};

type Tint = "violet" | "cyan" | "fuchsia";

const projects: Project[] = [
  {
    number: "01",
    title: "EDUCENTER",
    category: "EDUCATION MANAGEMENT",
    description:
      "A modern educational center management system designed to organize students, groups, lessons, attendance, exams, payments and daily operations through a clear and practical interface.",
    year: "2026",
    image: "/projects/educenter.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],
    href: "/projects/educenter",
    live: "https://edu-center-iota.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/EduCenter",
    tint: "violet",
  },
  {
    number: "02",
    title: "LUXORA",
    category: "E-COMMERCE",
    description:
      "A premium e-commerce experience focused on product presentation, smooth navigation, responsive layouts and a polished shopping journey.",
    year: "2026",
    image: "/projects/luxora.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "API",
    ],
    href: "/projects/luxora",
    live: "https://shopping-delta-gilt.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/shopping-project",
    tint: "cyan",
  },
  {
    number: "03",
    title: "VELORA",
    category: "ADMIN DASHBOARD",
    description:
      "A modern dashboard experience built to present complex information through structured layouts, reusable components and intuitive interactions.",
    year: "2026",
    image: "/projects/velora.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    href: "/projects/velora",
    live: "https://velora-git-main-ahmedabualkhair903s-projects.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/VELORA",
    tint: "fuchsia",
  },
  {
    number: "04",
    title: "NEXASTORE",
    category: "WEB APPLICATION",
    description:
      "An early full-stack-ready web application experience combining authentication, content management, search, administration and persistent local data into a structured responsive interface.",
    year: "2025",
    image: "/projects/nexastore.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Local Storage",
    ],
    href: "/projects/nexastore",
    live: "https://my-fiirst-project.vercel.app/",
    github:
      "https://github.com/ahmedabualkhair903/My-Fiirst-Project",
    tint: "violet",
  },
];

const tintStyles: Record<
  Tint,
  {
    ambient: string;
    ambientHover: string;
    cardHover: string;
    number: string;
    badge: string;
    chip: string;
    chipHover: string;
    cta: string;
    ctaShadow: string;
    pillHover: string;
  }
> = {
  violet: {
    ambient: "bg-violet-accent/[0.05]",
    ambientHover: "group-hover:bg-violet-accent/[0.09]",
    cardHover: "hover:border-violet-accent/40",
    number: "text-violet-300/90",
    badge: "text-violet-300",
    chip: "group-hover:border-violet-accent/25 group-hover:text-violet-200",
    chipHover: "hover:border-violet-accent hover:text-white",
    cta: "bg-gradient-to-r from-violet-600 via-violet-accent to-violet-bright",
    ctaShadow: "shadow-[0_10px_40px_-12px_rgba(139,92,246,0.7)]",
    pillHover:
      "hover:border-violet-accent/50 hover:bg-violet-accent/[0.07] hover:text-violet-200",
  },
  cyan: {
    ambient: "bg-cyan-accent/[0.05]",
    ambientHover: "group-hover:bg-cyan-accent/[0.09]",
    cardHover: "hover:border-cyan-accent/40",
    number: "text-cyan-300/90",
    badge: "text-cyan-300",
    chip: "group-hover:border-cyan-accent/25 group-hover:text-cyan-100",
    chipHover: "hover:border-cyan-accent hover:text-white",
    cta: "bg-gradient-to-r from-cyan-600 to-cyan-accent",
    ctaShadow: "shadow-[0_10px_40px_-12px_rgba(34,211,238,0.55)]",
    pillHover:
      "hover:border-cyan-accent/50 hover:bg-cyan-accent/[0.07] hover:text-cyan-200",
  },
  fuchsia: {
    ambient: "bg-fuchsia-500/[0.05]",
    ambientHover: "group-hover:bg-fuchsia-500/[0.09]",
    cardHover: "hover:border-fuchsia-500/40",
    number: "text-fuchsia-300/90",
    badge: "text-fuchsia-300",
    chip: "group-hover:border-fuchsia-500/25 group-hover:text-fuchsia-100",
    chipHover: "hover:border-fuchsia-500 hover:text-white",
    cta: "bg-gradient-to-r from-fuchsia-600 to-fuchsia-500",
    ctaShadow: "shadow-[0_10px_40px_-12px_rgba(217,70,239,0.55)]",
    pillHover:
      "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/[0.07] hover:text-fuchsia-200",
  },
};

export default function ProjectShowcase() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative overflow-hidden border-t border-white/10"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-[20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.018] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
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
            <span className="text-xs uppercase tracking-[0.25em] text-violet-300/90">
              04 — Selected Work
            </span>

            <p className="mt-8 max-w-xs text-sm leading-7 text-white/45">
              A selection of digital experiences I&apos;ve built while
              learning, experimenting and pushing my frontend skills
              further.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
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
            <h2
              id="work-heading"
              className="max-w-5xl text-5xl font-light leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl"
            >
              Things I&apos;ve
              <br />
              <span className="text-white/30">
                built with purpose.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-8 md:mt-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.015] transition-all duration-700 hover:-translate-y-1 hover:bg-white/[0.02] ${tintStyles[project.tint].cardHover}`}
    >
      {/* Subtle card glow */}
      <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-white/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
        {/* Project Image */}
        <Link
          href={project.href}
          className="relative block min-h-[360px] overflow-hidden border-b border-white/10 bg-[#080808] sm:min-h-[460px] lg:min-h-[620px] lg:border-b-0 lg:border-r"
          aria-label={`View ${project.title} case study`}
        >
          {/* Ambient glow */}
          <div className={`pointer-events-none absolute left-1/2 top-1/2 z-0 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] transition-all duration-700 ${tintStyles[project.tint].ambient} group-hover:h-[65%] group-hover:w-[65%] ${tintStyles[project.tint].ambientHover}`} />

          {/* Grid */}
          <div className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:60px_60px]" />

          {/* Browser Frame */}
          <motion.div
            whileHover={{
              y: -10,
              rotateX: 2,
              rotateY: -2,
              scale: 1.015,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute bottom-[8%] left-[6%] right-[6%] top-[9%] z-20 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0b0b0b] shadow-2xl"
          >
            {/* Browser Header */}
            <div className="relative z-20 flex h-11 items-center justify-between border-b border-white/10 bg-[#0d0d0d] px-4 sm:h-12 sm:px-5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/20 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
                <span className="h-2 w-2 rounded-full bg-white/10 sm:h-2.5 sm:w-2.5" />
              </div>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
                {project.title}
              </span>

              <span className="text-[8px] text-white/20">
                {project.year}
              </span>
            </div>

            {/* Image */}
            <div className="relative h-[calc(100%-2.75rem)] overflow-hidden sm:h-[calc(100%-3rem)]">
              <motion.div
                initial={{
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.045,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 60vw"
                  className="object-cover object-top"
                  priority={index === 0}
                />
              </motion.div>

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/[0.03]" />

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 backdrop-blur-0 transition-all duration-500 group-hover:bg-black/10 group-hover:opacity-100 group-hover:backdrop-blur-[1px]">
                <span className="translate-y-2 rounded-full border border-white/20 bg-black/30 px-5 py-2.5 text-[9px] uppercase tracking-[0.2em] text-white/70 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  View project
                </span>
              </div>
            </div>
          </motion.div>

          {/* Number */}
          <span className={`absolute bottom-6 left-6 z-30 text-xs transition-colors duration-300 ${tintStyles[project.tint].number}`}>
            {project.number}
          </span>

          {/* Year */}
          <span className="absolute bottom-6 right-6 z-30 text-xs text-white/25 transition-colors duration-300 group-hover:text-white/50">
            {project.year}
          </span>
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-between p-8 md:p-10 lg:p-12">
          <div>
            {/* Meta */}
            <div className="flex items-center justify-between">
              <span className={`text-[10px] uppercase tracking-[0.2em] ${tintStyles[project.tint].badge}`}>
                {project.category}
              </span>

              <span className="text-[10px] text-white/20">
                {project.number}
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-8 text-4xl font-light tracking-[-0.05em] transition-colors duration-500 group-hover:text-white md:text-5xl">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-10 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className={`rounded-full border border-white/10 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-white/45 transition-all duration-300 ${tintStyles[project.tint].chip} ${tintStyles[project.tint].chipHover}`}
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 border-t border-white/10 pt-7">
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic strength={0.18}>
                <Link
                  href={project.href}
                  className={`group/button flex items-center gap-4 rounded-full px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5 ${tintStyles[project.tint].cta} ${tintStyles[project.tint].ctaShadow}`}
                >
                  <span>View case study</span>

                  <span className="text-base transition-transform duration-300 group-hover/button:translate-x-1">
                    ↗
                  </span>
                </Link>
              </Magnetic>

              <Magnetic strength={0.18}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/live flex items-center gap-4 rounded-full border border-white/10 px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:-translate-y-0.5 ${tintStyles[project.tint].pillHover}`}
                  aria-label={`Visit ${project.title} website`}
                >
                  <span>Visit site</span>

                  <span className="text-base transition-transform duration-300 group-hover/live:translate-x-1 group-hover/live:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.18}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/github flex items-center gap-4 rounded-full border border-white/10 px-6 py-3 text-[10px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:-translate-y-0.5 ${tintStyles[project.tint].pillHover}`}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span>GitHub</span>

                  <span className="text-base transition-transform duration-300 group-hover/github:translate-x-1 group-hover/github:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}