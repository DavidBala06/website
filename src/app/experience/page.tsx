"use client";

import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Lead AI Researcher",
      company: "Quantum Core Labs",
      period: "2024 - Present",
      description: "Leading research on combining quantum computing principles with large language models. Developing novel architectures that reduce computational overhead by 40%.",
    },
    {
      role: "Machine Learning Engineer",
      company: "Data Dynamics",
      period: "2021 - 2024",
      description: "Built scalable data pipelines and deployed predictive models for real-time anomaly detection in high-energy physics experiments.",
    },
    {
      role: "Computational Physicist",
      company: "National Science Institute",
      period: "2018 - 2021",
      description: "Developed simulations for fluid dynamics and thermodynamic processes. Published 3 peer-reviewed papers on computational optimization methods.",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Experience</h1>
        </motion.div>
        
        <div className="space-y-16 border-l border-border/50 pl-8 relative">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i} 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-muted-foreground mt-1 sm:mt-0 px-3 py-1 bg-accent rounded-full">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-medium text-primary mb-4">{exp.company}</h4>
              <p className="text-muted-foreground leading-relaxed text-lg">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
