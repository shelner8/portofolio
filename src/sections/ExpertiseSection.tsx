"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { Badge } from "@/components/ui/badge"
import { Skill } from "@/types"
import { animations } from "@/components/animations/presets"
import { Server, Network, Code, Shield } from "lucide-react"

interface ExpertiseSectionProps {
  skills: Skill[]
}

const categoryIcons: Record<string, React.ReactNode> = {
  "Data Center": <Server className="w-6 h-6 text-accent-blue" />,
  "Networking": <Network className="w-6 h-6 text-accent-orange" />,
  "Automation": <Code className="w-6 h-6 text-accent-emerald" />,
  "Security": <Shield className="w-6 h-6 text-accent-purple" />,
}

export function ExpertiseSection({ skills }: ExpertiseSectionProps) {
  return (
    <SectionLayout 
      title="Core Expertise" 
      description="Architecting and operating enterprise-scale infrastructure with a focus on reliability, automation, and security."
      id="expertise"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skills.map((skill) => (
          <motion.div key={skill.id} variants={animations.fadeUp}>
            <BaseCard className="p-8 h-full flex flex-col gap-6 group" hoverable>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-surface/50 border border-surface flex-shrink-0 group-hover:scale-110 transition-transform">
                  {categoryIcons[skill.category] || <Server className="w-6 h-6 text-primary" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{skill.name}</h3>
                  <Badge variant="outline" className="mt-2 text-xs">{skill.category}</Badge>
                </div>
              </div>
              
              <p className="text-muted text-sm leading-relaxed flex-1">
                {skill.description}
              </p>
              
              <div className="mt-4 pt-6 border-t border-surface flex flex-wrap gap-2">
                {skill.technologies.map(tech => (
                  <Badge key={tech} variant="default" className="bg-secondary/80 text-xs font-normal">{tech}</Badge>
                ))}
              </div>
            </BaseCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
