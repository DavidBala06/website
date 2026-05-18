import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50 pb-4">
          Building the Future
        </h1>
        <p className="max-w-[600px] text-lg text-foreground/70 mb-8 mt-4">
          I am a passionate developer creating beautiful, performant, and accessible digital experiences. Let's work together to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            View My Work
          </Link>
          <Link
            href="/experience"
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-transparent px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring gap-2"
          >
            My Experience
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
