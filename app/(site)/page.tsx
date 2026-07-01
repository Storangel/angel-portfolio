import { ExperienceSnapshot } from "@/components/sections/experience-snapshot";
import { Hero } from "@/components/sections/hero";
import { HomeCta } from "@/components/sections/home-cta";
import { ProfessionalFocus } from "@/components/sections/professional-focus";
import { SelectedProjects } from "@/components/sections/selected-projects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProfessionalFocus />
      <ExperienceSnapshot />
      <SelectedProjects />
      <HomeCta />
    </>
  );
}
