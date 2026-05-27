"use client";

import { motion } from "framer-motion";
import { Rocket, Clock, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const currentProjects = [
  {
    title: "Generative Material Design",
    description:
      "AI-driven tool for discovering novel material structures with desired thermodynamic properties using diffusion models.",
    tags: ["TensorFlow", "FastAPI", "React", "Docker"],
    progress: 65,
    status: "In Development",
    github: "#",
    link: "#",
  },
  {
    title: "Astrophysics Data Pipeline",
    description:
      "High-throughput data processing pipeline for analyzing exoplanet transit photometry with real-time streaming.",
    tags: ["Rust", "Python", "Apache Arrow", "PostgreSQL"],
    progress: 40,
    status: "Early Stage",
    github: "#",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very website — a modern, performant portfolio built with Next.js 14, Tailwind CSS, and Framer Motion animations.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    progress: 80,
    status: "Active",
    github: "https://github.com/DavidBala06",
    link: "#",
  },
];

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full h-1.5 rounded-full bg-muted/50 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, hsl(${220 + progress * 0.8}, 80%, 60%), hsl(${260 + progress * 0.5}, 70%, 55%))`,
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />
    </div>
  );
}

export default function CurrentProjects() {
  return (
    <section className="relative py-28" id="current-projects">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <Rocket className="h-5 w-5 text-emerald-400" />
            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              What I&apos;m Building
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Current Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Active work in progress — from early experiments to projects nearing completion.
          </p>
        </motion.div>

        <div className="space-y-6">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 md:p-8 hover:border-emerald-500/30 hover:bg-card/80 transition-all duration-500">
                {/* Subtle hover glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-bold group-hover:text-emerald-300 transition-colors">
                          {project.title}
                        </h3>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            project.status === "Active"
                              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                              : project.status === "In Development"
                              ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                              : "bg-amber-500/10 border border-amber-500/20 text-amber-400"
                          }`}
                        >
                          <Clock className="h-3 w-3" />
                          {project.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-2xl">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                      <Link
                        href={project.link}
                        className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent/30 border border-border/30 px-2.5 py-0.5 text-xs font-medium text-accent-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <ProgressBar progress={project.progress} />
                    <span className="text-xs font-mono text-muted-foreground shrink-0">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
