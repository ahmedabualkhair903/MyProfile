
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { notFound, useParams } from "next/navigation";

import Magnetic from "@/components/Magnetic";

type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  overview: string;
  image: string;
  technologies: string[];
  features: string[];
  role: string;
  status: string;
  live: string;
  github: string;
  tint: Tint;
};

type Tint = "violet" | "cyan" | "fuchsia";

const tintStyles: Record<
  Tint,
  {
    text: string;
    dot: string;
    glow: string;
    cta: string;
    ctaShadow: string;
    pillHover: string;
    chipHover: string;
    border: string;
  }
> = {
  violet: {
    text: "text-violet-300",
    dot: "bg-violet-accent",
    glow: "bg-violet-accent/[0.05]",
    cta: "bg-gradient-to-r from-violet-600 via-violet-accent to-violet-bright",
    ctaShadow: "shadow-[0_10px_50px_-10px_rgba(139,92,246,0.7)]",
    pillHover:
      "hover:border-violet-accent/50 hover:bg-violet-accent/[0.07] hover:text-violet-200",
    chipHover: "hover:border-violet-accent hover:text-white",
    border: "border-violet-accent/25",
  },
  cyan: {
    text: "text-cyan-300",
    dot: "bg-cyan-accent",
    glow: "bg-cyan-accent/[0.05]",
    cta: "bg-gradient-to-r from-cyan-600 to-cyan-accent",
    ctaShadow: "shadow-[0_10px_50px_-10px_rgba(34,211,238,0.55)]",
    pillHover:
      "hover:border-cyan-accent/50 hover:bg-cyan-accent/[0.07] hover:text-cyan-200",
    chipHover: "hover:border-cyan-accent hover:text-white",
    border: "border-cyan-accent/25",
  },
  fuchsia: {
    text: "text-fuchsia-300",
    dot: "bg-fuchsia-500",
    glow: "bg-fuchsia-500/[0.05]",
    cta: "bg-gradient-to-r from-fuchsia-600 to-fuchsia-500",
    ctaShadow: "shadow-[0_10px_50px_-10px_rgba(217,70,239,0.55)]",
    pillHover:
      "hover:border-fuchsia-500/50 hover:bg-fuchsia-500/[0.07] hover:text-fuchsia-200",
    chipHover: "hover:border-fuchsia-500 hover:text-white",
    border: "border-fuchsia-500/25",
  },
};

const projects: Record<string, Project> = {
  educenter: {
    slug: "educenter",
    number: "01",
    title: "EDUCENTER",
    category: "EDUCATION MANAGEMENT",
    year: "2026",
    description:
      "A modern educational center management system designed to simplify daily operations through a clear, practical and scalable interface.",
    overview:
      "EduCenter is a frontend management platform created for educational centers. The experience brings students, groups, lessons, attendance, exams, payments, messaging and reports into one organized workspace.",
    image: "/projects/educenter.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Student management",
      "Groups & lessons management",
      "Attendance tracking",
      "Exams & grades",
      "Payments & financial tracking",
      "WhatsApp messaging interface",
      "Reports & dashboard analytics",
      "Excel import & export",
    ],
    role: "Frontend Development",
    status: "Completed",
    live: "https://edu-center-iota.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/EduCenter",
    tint: "violet",
  },

  luxora: {
    slug: "luxora",
    number: "02",
    title: "LUXORA",
    category: "E-COMMERCE",
    year: "2026",
    description:
      "A premium e-commerce experience focused on product presentation, smooth navigation and a refined shopping journey.",
    overview:
      "LUXORA is a modern e-commerce frontend built around visual product presentation and a smooth browsing experience. The interface combines clean layouts, responsive behavior and reusable components to create a polished shopping experience.",
    image: "/projects/luxora.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
    ],
    features: [
      "Product discovery",
      "Product details",
      "Responsive shopping experience",
      "Reusable UI components",
      "API-driven product data",
      "Modern navigation",
      "Responsive layouts",
      "Interactive user experience",
    ],
    role: "Frontend Development",
    status: "Completed",
    live: "https://shopping-delta-gilt.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/shopping-project",
    tint: "cyan",
  },

  velora: {
    slug: "velora",
    number: "03",
    title: "VELORA",
    category: "ADMIN DASHBOARD",
    year: "2026",
    description:
      "A modern administration dashboard designed to turn complex information into a clear, structured and intuitive experience.",
    overview:
      "VELORA is a dashboard-focused frontend project built around information architecture, reusable components and a clean visual system. The goal was to make large amounts of information easier to understand and interact with.",
    image: "/projects/velora.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    features: [
      "Dashboard overview",
      "Data visualization",
      "Structured information architecture",
      "Reusable components",
      "Responsive dashboard layouts",
      "Interactive UI elements",
      "Modern navigation system",
      "Scalable frontend structure",
    ],
    role: "Frontend Development",
    status: "Completed",
    live: "https://velora-git-main-ahmedabualkhair903s-projects.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/VELORA",
    tint: "fuchsia",
  },

  nexastore: {
    slug: "nexastore",
    number: "04",
    title: "NEXASTORE",
    category: "WEB APPLICATION",
    year: "2025",
    description:
      "A modern web application combining authentication, content management, search and administration features into a structured and responsive experience.",
    overview:
      "NexaStore is an early web application project focused on building a complete frontend experience rather than a collection of isolated pages. The project includes user authentication, local data persistence, searchable content, reusable interfaces and an administration area, providing a strong foundation for a production-ready application.",
    image: "/projects/nexastore.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Local Storage",
    ],
    features: [
      "User authentication flow",
      "User registration & login",
      "Content / posts management",
      "Search functionality",
      "Admin dashboard",
      "Admin statistics",
      "Comments management",
      "Local data persistence",
    ],
    role: "Frontend Development",
    status: "Completed",
    live: "https://my-fiirst-project.vercel.app/",
    github: "https://github.com/ahmedabualkhair903/My-Fiirst-Project",
    tint: "violet",
  },
};

const defaultProjectOrder = [
  "educenter",
  "luxora",
  "velora",
  "nexastore",
];

export default function ProjectCaseStudyPage() {
  const params = useParams();

  const slug =
    typeof params.slug === "string"
      ? params.slug
      : "";

  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const currentIndex = defaultProjectOrder.indexOf(
    project.slug
  );

  const nextSlug =
    defaultProjectOrder[
      (currentIndex + 1) % defaultProjectOrder.length
    ];

  const previousSlug =
    defaultProjectOrder[
      (currentIndex - 1 + defaultProjectOrder.length) %
        defaultProjectOrder.length
    ];

  const nextProject = projects[nextSlug];
  const previousProject = projects[previousSlug];
  const t = tintStyles[project.tint];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          Background
          ===================================================== */}

      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[20%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-white/[0.025] blur-[160px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-white/[0.015] blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* =====================================================
          Top Navigation
          ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 pt-8 md:px-10 md:pt-10">
        <motion.div
          initial={{
            opacity: 0,
            y: -15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex items-center justify-between"
        >
          <Link
            href="/#work"
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.18em] text-white/50 transition-colors duration-300 hover:text-violet-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Back to work
          </Link>

          <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
            Case Study / {project.number}
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          Hero
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pb-36 md:pt-40">
        <div className="grid gap-16 lg:grid-cols-[0.55fr_1.45fr]">
          {/* Meta */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
          >
            <span className={`text-[10px] uppercase tracking-[0.25em] ${t.text}`}>
              {project.number} — {project.category}
            </span>

            <div className="mt-10 space-y-5">
              <div>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Year
                </span>

                <span className="mt-2 block text-xs text-white/50">
                  {project.year}
                </span>
              </div>

              <div>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Role
                </span>

                <span className="mt-2 block text-xs text-white/50">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="block text-[8px] uppercase tracking-[0.2em] text-white/30">
                  Status
                </span>

                <span className="mt-2 flex items-center gap-2 text-xs text-white/50">
                  <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                  {project.status}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-[clamp(4rem,10vw,9rem)] font-light leading-[0.82] tracking-[-0.075em]">
              {project.title}
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-white/40 md:text-lg">
              {project.description}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Magnetic strength={0.18}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-full px-7 py-4 text-[10px] uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-0.5 ${t.cta} ${t.ctaShadow}`}
                >
                  <span>Visit Website</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.18}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 rounded-full border border-white/10 px-7 py-4 text-[10px] uppercase tracking-[0.16em] text-white/60 transition-all duration-300 hover:-translate-y-0.5 ${t.pillHover}`}
                >
                  <span>View on GitHub</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          Main Project Preview
          ===================================================== */}

      <section className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`relative overflow-hidden rounded-[1.5rem] border bg-[#080808] md:rounded-[2.5rem] ${t.border}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-transparent" />

          <div className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[110px] ${t.glow}`} />

          {/* Browser bar */}

          <div className="relative z-10 flex h-12 items-center justify-between border-b border-white/10 bg-[#0c0c0c] px-5 md:h-14 md:px-7">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>

            <span className="text-[8px] uppercase tracking-[0.2em] text-white/20">
              {project.title}
            </span>

            <span className="text-[8px] text-white/20">
              {project.year}
            </span>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-[#050505]">
            <Image
              src={project.image}
              alt={`${project.title} project preview`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-top transition-transform duration-[1.5s] hover:scale-[1.015]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.025]" />
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          Overview
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        <div className="grid gap-14 border-t border-white/10 pt-10 lg:grid-cols-[0.55fr_1.45fr]">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <span className={`text-[9px] uppercase tracking-[0.22em] ${t.text}`}>
              01 — Overview
            </span>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
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
              duration: 0.9,
            }}
          >
            <p className="max-w-4xl text-2xl font-light leading-[1.25] tracking-[-0.035em] text-white/70 md:text-4xl">
              {project.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          Features
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-32 md:px-10 md:pb-44">
        <div className="grid gap-14 border-t border-white/10 pt-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className={`text-[9px] uppercase tracking-[0.22em] ${t.text}`}>
              02 — Features
            </span>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.6,
                }}
                className="group relative min-h-[180px] bg-black p-7 transition-colors duration-500 hover:bg-white/[0.025] md:p-9"
              >
                <span className={`text-[9px] ${t.text} opacity-70`}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-12 max-w-xs text-lg font-light tracking-[-0.025em] text-white/65 transition-colors duration-300 group-hover:text-white">
                  {feature}
                </h3>

                <span className="absolute bottom-7 right-7 text-sm text-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/30">
                  ↗
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          Technology
          ===================================================== */}

      <section className="border-y border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-40">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr]">
            <div>
              <span className={`text-[9px] uppercase tracking-[0.22em] ${t.text}`}>
                03 — Technology
              </span>
            </div>

            <div>
              <h2 className="max-w-4xl text-4xl font-light leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Built with modern
                <span className="text-white/25">
                  {" "}
                  frontend technologies.
                </span>
              </h2>

              <div className="mt-12 flex flex-wrap gap-3">
                {project.technologies.map(
                  (technology, index) => (
                    <motion.span
                      key={technology}
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
                        delay: index * 0.05,
                        duration: 0.5,
                      }}
                      className={`rounded-full border border-white/10 px-5 py-3 text-[9px] uppercase tracking-[0.15em] text-white/40 transition-all duration-300 ${t.chipHover}`}
                    >
                      {technology}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          Navigation Between Projects
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        <div className="flex flex-col gap-5 border-t border-white/10 pt-10">
          <span className="text-[9px] uppercase tracking-[0.22em] text-white/30">
            Continue exploring
          </span>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group block"
          >
            <div className="flex items-end justify-between gap-8">
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-white/30">
                  Next project — {nextProject.number}
                </span>

                <h2 className="mt-5 text-5xl font-light tracking-[-0.06em] text-white/70 transition-colors duration-500 group-hover:text-white md:text-8xl">
                  {nextProject.title}
                </h2>
              </div>

              <span className="mb-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/30 group-hover:bg-white group-hover:text-black">
                ↗
              </span>
            </div>
          </Link>
        </div>

        {/* Previous project */}

        <div className="mt-20 flex justify-between border-t border-white/10 pt-6">
          <Link
            href={`/projects/${previousProject.slug}`}
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Previous — {previousProject.title}
          </Link>

          <Link
            href="/#work"
            className="text-[9px] uppercase tracking-[0.16em] text-white/45 transition-colors duration-300 hover:text-white"
          >
            All work
          </Link>
        </div>
      </section>
    </main>
  );
}
