"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { Badge } from "@/components/ui/badge"
import { Skill } from "@/types"
import { animations } from "@/components/animations/presets"
import { Server, Network, Code, Activity } from "lucide-react"

interface ExpertiseSectionProps {
  skills: Skill[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Data Center": <Server className="w-7 h-7 text-accent-blue" />,
  "Networking": <Network className="w-7 h-7 text-accent-orange" />,
  "Automation": <Code className="w-7 h-7 text-accent-emerald" />,
  "Operations": <Activity className="w-7 h-7 text-accent-purple" />,
}

export function ExpertiseSection({ skills }: ExpertiseSectionProps) {
  return (
    <SectionLayout 
      title="Core Expertise" 
      description="Architecting and operating enterprise-scale infrastructure with a focus on reliability, automation, and continuous optimization."
      id="expertise"
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-4 md:mt-6"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.id} variants={animations.fadeUp} className="h-full">
            <BaseCard className="p-8 md:p-10 h-full flex flex-col gap-8 group relative overflow-hidden" hoverable>
              {/* Subtle background glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <div className="p-3.5 rounded-2xl bg-surface/80 border border-surface flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    {categoryIcons[skill.category] || <Server className="w-7 h-7 text-primary" />}
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300">{skill.name}</h3>
                    <p className="text-xs md:text-sm font-bold text-accent-orange uppercase tracking-widest">{skill.category}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted text-base md:text-lg leading-relaxed flex-1">
                {skill.description}
              </p>
              
              <div className="pt-8 border-t border-surface/60 flex flex-wrap gap-2.5">
                {skill.technologies.map(tech => (
                  <Badge key={tech} variant="outline" className="bg-surface/50 border-surface-light text-muted hover:text-primary hover:border-primary/50 transition-all text-xs md:text-sm py-1 md:py-1.5 px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
            </BaseCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
