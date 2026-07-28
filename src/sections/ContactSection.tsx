"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { ContactData } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react"

interface ContactSectionProps {
  contact: ContactData
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <SectionLayout 
      title={contact.title} 
      description={contact.description}
      id="contact"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4 md:mt-6"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* LinkedIn Card */}
        <motion.div variants={animations.fadeUp} className="h-full">
          <BaseCard className="p-8 md:p-10 h-full flex flex-col gap-6 group relative overflow-hidden" hoverable>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A66C2]/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="p-4 rounded-2xl bg-surface/80 border border-surface flex-shrink-0 self-start shadow-soft group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-8 h-8 text-[#0A66C2]" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-[#0A66C2] transition-colors duration-300">LinkedIn</h3>
              <p className="text-muted text-base leading-relaxed">
                Connect with me professionally to discuss enterprise network architecture, career opportunities, and industry best practices.
              </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-surface/60">
              <Button variant="secondary" className="w-full group/btn bg-surface hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] hover:border-[#0A66C2]/20 border border-surface transition-all" asChild>
                <a href={contact.socials.find(s => s.platform === "LinkedIn")?.url || "#"} target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                  Connect on LinkedIn
                  <ArrowRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </BaseCard>
        </motion.div>

        {/* GitHub Card */}
        <motion.div variants={animations.fadeUp} className="h-full">
          <BaseCard className="p-8 md:p-10 h-full flex flex-col gap-6 group relative overflow-hidden" hoverable>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="p-4 rounded-2xl bg-surface/80 border border-surface flex-shrink-0 self-start shadow-soft group-hover:scale-110 transition-transform duration-300">
              <Github className="w-8 h-8 text-primary group-hover:text-accent-orange transition-colors duration-300" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors duration-300">GitHub</h3>
              <p className="text-muted text-base leading-relaxed">
                Explore my open-source network automation scripts, infrastructure-as-code repositories, and technical configurations.
              </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-surface/60">
              <Button variant="secondary" className="w-full group/btn bg-surface hover:bg-accent-orange/10 hover:text-accent-orange hover:border-accent-orange/20 border border-surface transition-all" asChild>
                <a href={contact.socials.find(s => s.platform === "GitHub")?.url || "#"} target="_blank" rel="noopener noreferrer" aria-label="View GitHub profile">
                  View GitHub
                  <ArrowRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </BaseCard>
        </motion.div>

        {/* Resume Card */}
        <motion.div variants={animations.fadeUp} className="h-full">
          <BaseCard className="p-8 md:p-10 h-full flex flex-col gap-6 group relative overflow-hidden" hoverable>
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-emerald/10 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            
            <div className="p-4 rounded-2xl bg-surface/80 border border-surface flex-shrink-0 self-start shadow-soft group-hover:scale-110 transition-transform duration-300">
              <FileText className="w-8 h-8 text-accent-emerald" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent-emerald transition-colors duration-300">Resume</h3>
              <p className="text-muted text-base leading-relaxed">
                Download my comprehensive engineering resume detailing enterprise certifications, project milestones, and technical capabilities.
              </p>
            </div>
            
            <div className="mt-auto pt-6 border-t border-surface/60">
              <Button variant="secondary" className="w-full group/btn bg-surface hover:bg-accent-emerald/10 hover:text-accent-emerald hover:border-accent-emerald/20 border border-surface transition-all" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download Resume PDF">
                  Download Resume
                  <ArrowRight aria-hidden="true" className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </BaseCard>
        </motion.div>

      </motion.div>

      <motion.div 
        variants={animations.fadeUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mt-4 md:mt-6 text-center max-w-3xl mx-auto"
      >
        <p className="text-muted text-sm md:text-base italic leading-relaxed bg-surface/30 py-4 px-6 rounded-2xl border border-surface-light shadow-sm">
          Open to enterprise networking, data center engineering, infrastructure automation, consulting, and technical collaboration.
        </p>
      </motion.div>
    </SectionLayout>
  )
}
