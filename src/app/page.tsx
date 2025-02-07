import { AboutMeSection, ContactSection, HeroSection, ProjectsSection } from "@/features";

export default function Home() {
  return (
    <main className="pt-16">
      <section id="about">
      <HeroSection/>
      <AboutMeSection/>
      </section>
      <ProjectsSection/>
      <ContactSection/>
    </main>
  );
}
