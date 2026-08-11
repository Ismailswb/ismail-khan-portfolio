import { Hero } from "@/components/hero/Hero";
import { WhatIDo } from "@/components/services/WhatIDo";
import { About } from "@/components/about/About";
import { FeaturedProjects } from "@/components/projects/FeaturedProjects";
import { Education, Experience } from "@/components/experience/Experience";
import { Skills } from "@/components/skills/Skills";
import { EngineeringApproach } from "@/components/skills/EngineeringApproach";
import { Contact } from "@/components/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <About />
      <FeaturedProjects />
      <Experience />
      <Education />
      <Skills />
      <EngineeringApproach />
      <Contact />
    </>
  );
}
