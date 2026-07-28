"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { CertificationCard } from "@/components/cards/CertificationCard"
import { Certification } from "@/types"
import { animations } from "@/components/animations/presets"

interface CertificationSectionProps {
  certifications: Certification[]
}

export function CertificationSection({ certifications }: CertificationSectionProps) {
  return (
    <SectionLayout 
      title="Professional Certifications" 
      description="Industry validations of my expertise in enterprise networking and data center infrastructure."
      id="certifications"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mt-12 md:mt-16"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={animations.fadeUp} className="h-full">
            <CertificationCard certification={cert} />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        variants={animations.fadeUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mt-12 text-center max-w-2xl mx-auto"
      >
        <p className="text-muted text-sm md:text-base italic leading-relaxed bg-surface/30 py-4 px-6 rounded-2xl border border-surface-light">
          Committed to continuous learning through professional certifications, hands-on enterprise deployments and real-world engineering experience. <br className="hidden md:block" />
          Additional certifications will be added as they are earned.
        </p>
      </motion.div>
    </SectionLayout>
  )
}
