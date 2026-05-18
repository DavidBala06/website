import PageTransition from "@/components/PageTransition";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with Next.js, Stripe, and a custom CMS.",
      tags: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      title: "AI Writing Assistant",
      description: "An AI-powered application to help writers generate ideas and structure their content.",
      tags: ["React", "OpenAI", "Node.js", "MongoDB"],
      link: "#",
      github: "#",
    },
    {
      title: "Real-time Dashboard",
      description: "A real-time analytics dashboard for monitoring distributed systems metrics.",
      tags: ["Vue", "WebSockets", "Go", "PostgreSQL"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Selected Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Link href={project.github} className="text-foreground/60 hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href={project.link} className="text-foreground/60 hover:text-foreground transition-colors">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">External Link</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
