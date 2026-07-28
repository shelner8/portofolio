"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { Certification } from "@/types"
import { animations } from "@/components/animations/presets"
import { Award, ExternalLink } from "lucide-react"

interface CertificationSectionProps {
  certifications: Certification[]
}

export function CertificationSection({ certifications }: CertificationSectionProps) {
  return (
    <SectionLayout 
      title="Certifications" 
      description="Industry validations of my expertise in enterprise networking and infrastructure security."
      id="certifications"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={animations.fadeUp}>
            <BaseCard className="p-6 h-full flex flex-col gap-4 group" hoverable>
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue group-hover:scale-110 group-hover:bg-accent-blue group-hover:text-white transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>
                {cert.url && (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-muted hover:text-accent-orange transition-colors p-2"
                    aria-label={`View ${cert.name} credentials`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              
              <div className="mt-4 flex-1">
                <h3 className="text-lg font-bold text-primary leading-snug mb-2 group-hover:text-accent-blue transition-colors line-clamp-3">{cert.name}</h3>
                <p className="text-muted font-medium text-sm">{cert.issuer}</p>
              </div>
              
              <div className="border-t border-surface pt-4 mt-2">
                <p className="text-xs text-muted/80 font-mono tracking-wider">
                  ISSUED: {new Date(cert.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}
                </p>
              </div>
            </BaseCard>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
