"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { animations } from "@/components/animations/presets"
import { Technology } from "@/types"
import { Cpu } from "lucide-react"

interface CoreExpertiseSectionProps {
  technologies: Technology[]
}

export function CoreExpertiseSection({ technologies }: CoreExpertiseSectionProps) {

  if (technologies.length === 0) return null

  const capabilities = [
    "Enterprise Networking",
    "Data Center Fabric",
    "Network Automation",
    "Virtualization",
    "Self-Hosted Infrastructure",
    "Monitoring",
    "AI Integration"
  ]

  const resolveCapability = (cap: string) => {
    return (
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface/30 border border-surface/50 text-sm font-medium text-primary hover:text-accent-orange hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-colors shadow-sm">
        {cap}
      </div>
    )
  }

  return (
    <section id="expertise" className="py-12 md:py-16 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-8 md:gap-10">
          <motion.div 
            variants={animations.fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-surface border border-surface shadow-soft mb-2">
              <Cpu className="w-6 h-6 text-accent-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">Core Expertise</h2>
            <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Core engineering capabilities built through enterprise deployments, modern data center projects, professional certifications, and continuous learning.
            </p>
          </motion.div>

          <motion.div 
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {capabilities.map((cap, i) => (
              <motion.div key={cap} variants={animations.scaleUp} custom={i}>
                {resolveCapability(cap)}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
