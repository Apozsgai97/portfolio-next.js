import { AboutMeSection, ContactSection, HeroSection, ProjectsSection } from "@/features";

export default function Home() {
  return (
    <main className="pt-16">
      <HeroSection/>
      <AboutMeSection/>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
