import PageTransition from "@/components/PageTransition";
import Hero from "@/components/sections/Hero";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CurrentProjects from "@/components/sections/CurrentProjects";

export default function Home() {
  return (
    <PageTransition>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <FeaturedProjects />
        <CurrentProjects />
      </div>
    </PageTransition>
  );
}
