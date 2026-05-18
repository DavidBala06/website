import PageTransition from "@/components/PageTransition";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Tech Innovators Inc.",
      period: "2023 - Present",
      description: "Leading the frontend architecture for the core product. Improved performance by 40% and established a comprehensive design system used across 5 different applications.",
    },
    {
      role: "Full Stack Developer",
      company: "Startup Hub",
      period: "2020 - 2023",
      description: "Developed and maintained several client-facing applications using React and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      role: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Created responsive and highly interactive websites for various clients. Collaborated closely with designers to ensure pixel-perfect implementations.",
    },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Experience</h1>
        <div className="space-y-12 border-l border-border pl-6 relative">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[33px] top-1 flex h-4 w-4 rounded-full bg-background border-2 border-primary" />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-medium text-foreground/60 mt-1 sm:mt-0">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-medium text-primary/80 mb-4">{exp.company}</h4>
              <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
