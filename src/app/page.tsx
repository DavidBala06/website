import PageTransition from "@/components/PageTransition";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <About />
      </div>
    </PageTransition>
  );
}
