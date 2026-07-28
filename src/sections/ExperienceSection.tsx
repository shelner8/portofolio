"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { ExperienceCard } from "@/components/cards/ExperienceCard"
import { Experience } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <SectionLayout 
      title="Professional Experience" 
      description="A comprehensive overview of my enterprise engineering responsibilities and operational capabilities."
      id="experience"
      footerLink={
        <Button variant="ghost" className="gap-2 group text-primary hover:text-accent-orange transition-colors" asChild>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Download Full Resume
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      }
    >
      <div className="flex flex-col gap-8 md:gap-12 mt-4 md:mt-6">
        {experience.map((exp) => (
          <motion.div 
            key={exp.id}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            variants={animations.fadeUp}
            className="w-full"
          >
            <ExperienceCard experience={exp} />
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
