import { HeroSection } from "@/sections/HeroSection"
import { AboutSection } from "@/sections/AboutSection"
import { ExpertiseSection } from "@/sections/ExpertiseSection"
import { ArchitectureSection } from "@/sections/ArchitectureSection"
import { ProjectSection } from "@/sections/ProjectSection"
import { ExperienceSection } from "@/sections/ExperienceSection"
import { CertificationSection } from "@/sections/CertificationSection"
import { ArticleSection } from "@/sections/ArticleSection"
import { ResumeSection } from "@/sections/ResumeSection"
import { ContactSection } from "@/sections/ContactSection"
import { hero } from "@/data/hero"
import { about } from "@/data/about"
import { skills } from "@/data/skills"
import { architectures } from "@/data/architectures"
import { projects } from "@/data/projects"
import { experience } from "@/data/experience"
import { certifications } from "@/data/certifications"
import { articles } from "@/data/articles"
import { resumeCTA } from "@/data/resume"
import { contact } from "@/data/contact"

export default function Home() {
  return (
    <div className="flex flex-col gap-12 md:gap-24 pb-24">
      <HeroSection hero={hero} />
      <AboutSection about={about} />
      <ExpertiseSection skills={skills} />
      <ArchitectureSection architectures={architectures} />
      <ProjectSection projects={projects} />
      <ExperienceSection experience={experience} />
      <CertificationSection certifications={certifications} />
      <ArticleSection articles={articles} />
      <ResumeSection resumeCTA={resumeCTA} />
      <ContactSection contact={contact} />
    </div>
  )
}
