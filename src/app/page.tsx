import { Hero } from "@/components/hero/Hero";
import { TechStrip } from "@/components/skills/TechStrip";
import { About } from "@/components/about/About";
import { WhatIBuild } from "@/components/services/WhatIBuild";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { EngineeringApproach } from "@/components/skills/EngineeringApproach";
import { Skills } from "@/components/skills/Skills";
import { Education, Experience } from "@/components/experience/Experience";
import { GitHubCTA } from "@/components/contact/GitHubCTA";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <About />
      <WhatIBuild />
      <FeaturedProjects />
      <EngineeringApproach />
      <Skills />
      <Experience />
      <Education />
      <GitHubCTA />
      <Contact />
    </>
  );
}
