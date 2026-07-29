"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { animations } from "@/components/animations/presets"

export function StatementSection() {
  return (
    <section className="py-12 md:py-16 bg-background border-b border-surface/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/10 to-transparent pointer-events-none" />
      <Container className="relative z-10">
        <motion.div
          variants={animations.fadeUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xl md:text-2xl text-primary font-medium leading-[1.8] tracking-tight">
            Practical engineering experience across enterprise networking, data center infrastructure, and self-hosted technologies.
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
