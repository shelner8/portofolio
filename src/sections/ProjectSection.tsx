"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { Project } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectSectionProps {
  projects: Project[]
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  // Extract only featured projects, limit to 4 to keep a clean grid
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <SectionLayout 
      title="Featured Projects" 
      description="Showcasing high-impact infrastructure deployments, network modernizations, and automation initiatives."
      id="projects"
      footerLink={
        <Button variant="ghost" className="gap-2 group text-primary hover:text-accent-orange transition-colors" asChild>
          <Link href="/projects">
            View All Projects 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      }
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredProjects.map((project) => (
          <motion.div key={project.id} variants={animations.fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
