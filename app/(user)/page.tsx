import Hero from "@/components/home/hero";
import Techstack from "@/components/home/techstack";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import CTA from "@/components/home/cta";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Techstack />
      <Projects />
      <CTA />
    </div>
  );
}
