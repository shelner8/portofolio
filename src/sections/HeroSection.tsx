"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { Button } from "@/components/ui/button"
import { TechnologyChip } from "@/components/ui/TechnologyChip"
import { InfrastructurePanel } from "@/components/ui/InfrastructurePanel"
import { StatisticCard } from "@/components/cards/StatisticCard"
import { animations } from "@/components/animations/presets"
import { HeroContent } from "@/types"
import Link from "next/link"

interface HeroSectionProps {
  hero: HeroContent
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="relative w-full pt-12 pb-16 md:pt-24 md:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] rounded-full bg-accent-orange/10 blur-[100px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div 
            className="flex flex-col gap-6"
            variants={animations.staggerContainer}
            initial="initial"
            animate="whileInView"
          >
            <motion.div variants={animations.fadeUp}>
              <h2 className="text-sm font-semibold tracking-wider text-accent-orange uppercase">
                {hero.subtitle}
              </h2>
            </motion.div>
            
            <motion.h1 
              variants={animations.fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.15]"
            >
              {hero.title}
            </motion.h1>
            
            <motion.p 
              variants={animations.fadeUp}
              className="text-lg text-muted max-w-xl leading-relaxed"
            >
              {hero.description}
            </motion.p>
            
            <motion.div 
              variants={animations.fadeUp}
              className="flex flex-wrap gap-2 mt-2"
            >
              {hero.highlights.map(hl => (
                <TechnologyChip key={hl}>{hl}</TechnologyChip>
              ))}
            </motion.div>
            
            <motion.div 
              variants={animations.fadeUp}
              className="flex flex-wrap items-center gap-4 mt-6"
            >
              {hero.actions.map(action => (
                <Button 
                  key={action.label} 
                  variant={action.variant} 
                  asChild
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={animations.scaleUp}
            initial="initial"
            animate="whileInView"
            className="hidden lg:block w-full h-[450px]"
          >
            <InfrastructurePanel />
          </motion.div>
        </div>
        
        <motion.div 
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
        >
          {hero.statistics.map(stat => (
            <motion.div key={stat.id} variants={animations.fadeUp} className="h-full">
              <StatisticCard statistic={stat} className="h-full" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
