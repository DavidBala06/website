"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";

const featuredProjects = [
  {
    title: "CVision — AI Talent Platform",
    description:
      "Full-stack HR intelligence platform using RAG to match candidates from GitHub profiles. Features a Next.js dashboard with FastAPI backend, YAML/CSV ingestion, and AI-powered shortlisting.",
    tags: ["Next.js", "FastAPI", "RAG", "Python", "TypeScript"],
    link: "#",
    github: "https://github.com/DavidBala06",
    highlight: true,
  },
  {
    title: "Neural PDE Solver",
    description:
      "A machine learning framework for solving partial differential equations using Physics-Informed Neural Networks (PINNs) with JAX acceleration.",
    tags: ["Python", "PyTorch", "JAX", "SciPy"],
    link: "#",
    github: "#",
    highlight: false,
  },
  {
    title: "Quantum State Visualizer",
    description:
      "Interactive web application for visualizing quantum states and circuit simulations in real-time with WebGL rendering.",
    tags: ["React", "Three.js", "WebGL", "TypeScript"],
    link: "#",
    github: "#",
    highlight: false,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative py-28" id="featured-projects">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          className="flex items-center justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Featured Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <Card
                className={`h-full flex flex-col group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/5 ${
                  project.highlight
                    ? "border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-card via-card to-purple-950/10"
                    : "hover:border-foreground/20"
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />

                <CardHeader className={index === 0 ? "pb-4 pt-8 px-8" : ""}>
                  {project.highlight && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400 mb-3 w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                      Flagship Project
                    </span>
                  )}
                  <CardTitle
                    className={`group-hover:text-purple-300 transition-colors ${
                      index === 0 ? "text-2xl md:text-3xl" : "text-xl"
                    }`}
                  >
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className={`flex-1 ${index === 0 ? "px-8" : ""}`}>
                  <p
                    className={`text-muted-foreground leading-relaxed mb-6 ${
                      index === 0 ? "text-base" : "text-sm"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent/50 border border-border/50 px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className={`pt-0 ${index === 0 ? "px-8 pb-8" : ""}`}>
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.link}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <Link
          href="/projects"
          className="md:hidden flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          View all projects
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
