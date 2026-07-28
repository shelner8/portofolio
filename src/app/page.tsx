import dynamic from "next/dynamic"
import { HeroSection } from "@/sections/HeroSection"

// Dynamically import below-the-fold sections to drastically reduce initial JS payload
const AboutSection = dynamic(() => import("@/sections/AboutSection").then(mod => ({ default: mod.AboutSection })))
const ExpertiseSection = dynamic(() => import("@/sections/ExpertiseSection").then(mod => ({ default: mod.ExpertiseSection })))
const ArchitectureSection = dynamic(() => import("@/sections/ArchitectureSection").then(mod => ({ default: mod.ArchitectureSection })))
const ProjectSection = dynamic(() => import("@/sections/ProjectSection").then(mod => ({ default: mod.ProjectSection })))
const ExperienceSection = dynamic(() => import("@/sections/ExperienceSection").then(mod => ({ default: mod.ExperienceSection })))
const CertificationSection = dynamic(() => import("@/sections/CertificationSection").then(mod => ({ default: mod.CertificationSection })))
const ArticleSection = dynamic(() => import("@/sections/ArticleSection").then(mod => ({ default: mod.ArticleSection })))
const ResumeSection = dynamic(() => import("@/sections/ResumeSection").then(mod => ({ default: mod.ResumeSection })))
const ContactSection = dynamic(() => import("@/sections/ContactSection").then(mod => ({ default: mod.ContactSection })))
const CoreExpertiseSection = dynamic(() => import("@/sections/CoreExpertiseSection").then(mod => ({ default: mod.CoreExpertiseSection })))
const SelfHostedInfrastructureSection = dynamic(() => import("@/sections/SelfHostedInfrastructureSection").then(mod => ({ default: mod.SelfHostedInfrastructureSection })))
const StatementSection = dynamic(() => import("@/sections/StatementSection").then(mod => ({ default: mod.StatementSection })))
import { hero } from "@/data/hero"
import { about } from "@/data/about"
import { skills } from "@/data/skills"
import { architectures } from "@/data/architectures"
import { getFeaturedProjects } from "@/lib/projects"
import { experience } from "@/data/experience"
import { certifications } from "@/data/certifications"
import { articles } from "@/data/articles"
import { resumeCTA } from "@/data/resume"
import { contact } from "@/data/contact"
import { getAllTechnologies } from "@/lib/technologies"

const SHOW_ARTICLES = false

export default function Home() {
  const featuredTechnologies = getAllTechnologies().filter(tech => tech.featured);

  return (
    <div className="flex flex-col gap-0 pb-16">
      <HeroSection hero={hero} />
      <StatementSection />
      <CoreExpertiseSection technologies={featuredTechnologies} />
      <SelfHostedInfrastructureSection technologies={getAllTechnologies()} />
      <AboutSection about={about} />
      <ExpertiseSection skills={skills} />
      <ArchitectureSection architectures={architectures} />
      <ProjectSection projects={getFeaturedProjects()} />
      <ExperienceSection experience={experience} />
      <CertificationSection certifications={certifications} />
      {SHOW_ARTICLES && <ArticleSection articles={articles} />}
      <ResumeSection resumeCTA={resumeCTA} />
      <ContactSection contact={contact} />
    </div>
  )
}
