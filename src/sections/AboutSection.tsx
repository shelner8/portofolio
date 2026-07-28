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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-12 md:mt-20">
        <motion.div 
          className="flex flex-col gap-6 md:gap-8"
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col gap-5">
            {about.bio.map((paragraph, index) => (
              <motion.p 
                key={index} 
                variants={animations.fadeUp}
                className="text-base md:text-lg text-muted leading-[1.8]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          
          <motion.div variants={animations.fadeUp} className="mt-4 border-l-[3px] border-accent-orange pl-6 py-4 bg-gradient-to-r from-surface/30 to-transparent rounded-r-xl">
            <p className="text-lg md:text-xl font-medium text-primary leading-relaxed italic">
              "{about.philosophy}"
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={animations.scaleUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:pl-12 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none"
        >
          <BaseCard className="p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden group">
            {/* Subtle glow effect inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-emerald/5 rounded-full blur-[60px] -mr-24 -mt-24 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />
            
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-8 md:mb-10 flex items-center gap-4">
              <span className="h-[2px] w-8 bg-surface border-b border-surface-light hidden md:block"></span>
              Core Principles
            </h3>
            
            <ul className="flex flex-col gap-6 md:gap-8">
              {about.corePrinciples.map((principle, index) => (
                <li key={index} className="flex items-center gap-5 group/item">
                  <div className="rounded-full bg-surface/80 border border-surface p-2.5 text-accent-emerald transition-all duration-300 group-hover/item:bg-accent-emerald/10 group-hover/item:border-accent-emerald/30 group-hover/item:scale-110 shadow-soft">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-base md:text-lg text-muted font-medium group-hover/item:text-primary transition-colors duration-300">{principle}</span>
                </li>
              ))}
            </ul>
          </BaseCard>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
