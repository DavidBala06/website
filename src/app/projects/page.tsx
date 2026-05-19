"use client";

import PageTransition from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Projects() {
  const projects = [
    {
      title: "Neural PDE Solver",
      description: "A machine learning framework for solving partial differential equations using Physics-Informed Neural Networks (PINNs).",
      tags: ["Python", "PyTorch", "JAX", "SciPy"],
      link: "#",
      github: "#",
    },
    {
      title: "Quantum State Visualizer",
      description: "Interactive web application for visualizing quantum states and circuit simulations in real-time.",
      tags: ["React", "Three.js", "WebGL", "TypeScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Astrophysics Data Pipeline",
      description: "High-throughput data processing pipeline for analyzing exoplanet transit photometry.",
      tags: ["Rust", "Python", "Apache Arrow", "PostgreSQL"],
      link: "#",
      github: "#",
    },
    {
      title: "Generative Material Design",
      description: "AI-driven tool for discovering novel material structures with desired thermodynamic properties.",
      tags: ["TensorFlow", "FastAPI", "React", "Docker"],
      link: "#",
      github: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Projects</h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A collection of my work focusing on artificial intelligence, data pipelines, and computational physics.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={item}>
              <Card className="h-full flex flex-col group hover:border-foreground/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-accent/50 px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">External Link</span>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageTransition>
  );
}
