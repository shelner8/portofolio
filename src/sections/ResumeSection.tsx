"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { ResumeCTA } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"

interface ResumeSectionProps {
  resumeCTA: ResumeCTA
  isAvailable?: boolean
}

export function ResumeSection({ resumeCTA, isAvailable = true }: ResumeSectionProps) {
  return (
    <SectionLayout 
      title="Resume" 
      description="Detailed history of my professional experience, education, and credentials."
      id="resume"
    >
      <motion.div 
        variants={animations.scaleUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-8 max-w-3xl mx-auto"
      >
        <BaseCard className="p-10 flex flex-col items-center justify-center text-center gap-6" hoverable={false}>
          <div className="p-6 rounded-full bg-accent-blue/10 text-accent-blue mb-2">
            <FileText className="w-10 h-10 md:w-12 md:h-12" />
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">{resumeCTA.title}</h3>
            <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed">
              {resumeCTA.description}
            </p>
          </div>
          
          {isAvailable ? (
            <Button variant="primary" size="lg" className="mt-4 gap-2 text-base font-semibold px-8" asChild aria-label="Download or view resume">
              <a href={resumeCTA.url} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                {resumeCTA.buttonText}
              </a>
            </Button>
          ) : (
            <Button variant="secondary" size="lg" className="mt-4 gap-2 text-base font-semibold px-8 opacity-70 cursor-not-allowed" disabled aria-label="Resume coming soon">
              <Download className="w-5 h-5" />
              Resume Coming Soon
            </Button>
          )}
        </BaseCard>
      </motion.div>
    </SectionLayout>
  )
}
