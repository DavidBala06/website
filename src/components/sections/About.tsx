"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Atom, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";

export default function About() {
  const features = [
    {
      title: "Physics",
      description: "Applying physical principles to understand complex systems and dynamic processes.",
      icon: <Atom className="h-6 w-6" />,
    },
    {
      title: "Artificial Intelligence",
      description: "Developing neural networks and machine learning models for data-driven insights.",
      icon: <BrainCircuit className="h-6 w-6" />,
    },
    {
      title: "Software Engineering",
      description: "Building scalable, performant applications and tools to bridge theory and practice.",
      icon: <Code2 className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-24 bg-accent/50" id="about">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The Intersection of Science & Code</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My work lives where rigorous scientific methodology meets modern software development. I build tools that help us understand the world and solve complex problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
