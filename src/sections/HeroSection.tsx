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
    <section id="hero" className="relative w-full pt-20 pb-12 md:pt-28 md:pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-accent-blue/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-orange/10 blur-[120px] pointer-events-none" />
      
      <Container>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-center mb-12 md:mb-16">
          <motion.div 
            className="flex flex-col gap-6 xl:col-span-7"
            variants={animations.staggerContainer}
            initial="initial"
            animate="whileInView"
          >
            <motion.div variants={animations.fadeUp} className="inline-flex items-center gap-3">
              <span className="h-[2px] w-8 md:w-12 bg-accent-orange rounded-full"></span>
              <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-accent-orange uppercase">
                {hero.subtitle}
              </h2>
            </motion.div>
            
            <motion.h1 
              variants={animations.fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-extrabold tracking-tight text-primary leading-[1.1] md:leading-[1.15]"
            >
              {hero.title}
            </motion.h1>
            
            <motion.p 
              variants={animations.fadeUp}
              className="text-base md:text-lg lg:text-xl text-muted max-w-2xl leading-relaxed mt-2"
            >
              {hero.description}
            </motion.p>
            
            <motion.div 
              variants={animations.fadeUp}
              className="flex flex-wrap gap-2.5 mt-4 max-w-3xl"
            >
              {hero.highlights.map(hl => (
                <TechnologyChip key={hl}>{hl}</TechnologyChip>
              ))}
            </motion.div>
            
            <motion.div 
              variants={animations.fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8"
            >
              {hero.actions.map(action => (
                <Button 
                  key={action.label} 
                  variant={action.variant} 
                  size="lg"
                  className="w-full sm:w-auto"
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
            className="hidden xl:block xl:col-span-5 w-full h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 to-accent-orange/5 rounded-[24px] transform rotate-3 scale-105 border border-surface/30"></div>
            <InfrastructurePanel />
          </motion.div>
        </div>
        
        <motion.div 
          variants={animations.staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-surface/50"
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
