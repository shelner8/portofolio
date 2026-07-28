"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { About } from "@/types"
import { animations } from "@/components/animations/presets"
import { CheckCircle2 } from "lucide-react"

interface AboutSectionProps {
  about: About
}

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <SectionLayout title={about.title} id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-8">
        <motion.div 
          className="flex flex-col gap-6"
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          {about.bio.map((paragraph, index) => (
            <motion.p 
              key={index} 
              variants={animations.fadeUp}
              className="text-lg text-muted leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
          
          <motion.div variants={animations.fadeUp} className="mt-4 border-l-4 border-accent-orange pl-6 py-2 bg-surface/30 rounded-r-lg">
            <p className="text-xl font-medium text-primary italic">
              "{about.philosophy}"
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={animations.scaleUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:pl-8"
        >
          <BaseCard className="p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-8 border-b border-surface pb-4">Core Principles</h3>
            <ul className="flex flex-col gap-6">
              {about.corePrinciples.map((principle, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <div className="rounded-full bg-accent-emerald/10 p-2 text-accent-emerald transition-colors group-hover:bg-accent-emerald group-hover:text-white">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-lg text-primary/90 font-medium group-hover:text-primary transition-colors">{principle}</span>
                </li>
              ))}
            </ul>
          </BaseCard>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
