import { FloatingNav } from "@/components/nav/floating-nav";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { IntroSection } from "@/components/sections/intro";
import { ProjectsSection } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <FloatingNav />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 pb-16 pt-34 sm:px-6 lg:px-8">
        <IntroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}
