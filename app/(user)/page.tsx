import Hero from "@/components/home/hero";
import Techstack from "@/components/home/techstack";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Techstack />
    </div>
  );
}
