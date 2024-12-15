import { AboutMeSection, HeroSection, ProjectsSection } from "@/features";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection/>
      <AboutMeSection/>
      <ProjectsSection/>
    </main>
  );
}
