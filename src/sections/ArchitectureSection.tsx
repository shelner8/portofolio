"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { Badge } from "@/components/ui/badge"
import { Architecture } from "@/types"
import { animations } from "@/components/animations/presets"
import { CheckCircle, AlertTriangle } from "lucide-react"

interface ArchitectureSectionProps {
  architectures: Architecture[]
}

export function ArchitectureSection({ architectures }: ArchitectureSectionProps) {
  return (
    <SectionLayout 
      title="Data Center Excellence" 
      description="Proven architectural patterns for building resilient, scalable, and secure enterprise networks."
      id="architecture"
    >
      <div className="flex flex-col gap-8 mt-8">
        {architectures.map((arch) => (
          <motion.div 
            key={arch.id}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            variants={animations.fadeUp}
          >
            <BaseCard className="p-8 flex flex-col lg:flex-row gap-8 lg:gap-12" hoverable={false}>
              
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{arch.category}</Badge>
                    <Badge variant={arch.environment === "Production" ? "success" : "default"}>
                      {arch.environment}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">{arch.title}</h3>
                </div>
                
                <p className="text-muted leading-relaxed text-lg">
                  {arch.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                  {arch.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="bg-surface/50 text-xs font-medium px-3 py-1">{tech}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-[340px] flex-shrink-0 flex flex-col gap-8 border-t lg:border-t-0 lg:border-l border-surface pt-8 lg:pt-0 lg:pl-12">
                {arch.bestPractices.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-4 uppercase tracking-wider">
                      <CheckCircle className="w-4 h-4 text-accent-emerald" /> Best Practices
                    </h4>
                    <ul className="space-y-3">
                      {arch.bestPractices.map((bp, i) => (
                        <li key={i} className="text-sm text-muted/90 flex items-start gap-3">
                          <span className="text-accent-emerald/60 mt-0.5 text-lg leading-none">•</span>
                          <span className="flex-1 leading-snug">{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {arch.lessonsLearned.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-primary mb-4 uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 text-accent-orange" /> Lessons Learned
                    </h4>
                    <ul className="space-y-3">
                      {arch.lessonsLearned.map((ll, i) => (
                        <li key={i} className="text-sm text-muted/90 flex items-start gap-3">
                          <span className="text-accent-orange/60 mt-0.5 text-lg leading-none">•</span>
                          <span className="flex-1 leading-snug">{ll}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
            </BaseCard>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  )
}
