"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { animations } from "@/components/animations/presets"
import { ArrowRight, PenTool, Server, FileCheck, FileText, UploadCloud, CheckSquare, Activity } from "lucide-react"

export function EngineeringWorkflowSection() {
  const workflowSteps = [
    { name: "Design", icon: PenTool },
    { name: "Lab Validation\n(EVE-NG / PNETLab)", icon: Server },
    { name: "Configuration Review", icon: FileCheck },
    { name: "Documentation", icon: FileText },
    { name: "Rollback Planning", icon: PenTool },
    { name: "Production Deployment", icon: UploadCloud },
    { name: "Post Deployment Validation", icon: CheckSquare },
    { name: "Monitoring & Optimization", icon: Activity }
  ]

  return (
    <SectionLayout
      title="Engineering Workflow"
      description="Every production deployment follows a structured engineering process to reduce operational risk and improve deployment reliability."
      id="workflow"
    >
      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-6xl overflow-x-auto pb-8 hide-scrollbar">
          <motion.div 
            className="flex items-center min-w-[1000px] justify-between gap-4 px-4"
            variants={animations.staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
          >
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.name}>
                  <motion.div 
                    variants={animations.scaleUp}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-surface border border-surface/50 shadow-soft flex items-center justify-center mb-4 text-accent-orange relative group">
                      <div className="absolute inset-0 bg-accent-orange/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Icon className="w-7 h-7 relative z-10" />
                    </div>
                    <span className="text-sm font-medium text-primary text-center whitespace-pre-line leading-tight">
                      {step.name}
                    </span>
                  </motion.div>
                  
                  {index < workflowSteps.length - 1 && (
                    <motion.div 
                      variants={animations.fadeUp}
                      className="hidden md:flex flex-shrink-0 text-surface-light px-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  )}
                </React.Fragment>
              )
            })}
          </motion.div>
        </div>

        <motion.div 
          variants={animations.fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="mt-8 md:mt-12 text-center max-w-2xl px-6 py-4 rounded-xl bg-surface/30 border border-surface/50 inline-block"
        >
          <p className="text-sm md:text-base text-muted leading-relaxed">
            Every major configuration is validated in my personal lab using EVE-NG or PNETLab before being deployed into production environments whenever practical.
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  )
}
