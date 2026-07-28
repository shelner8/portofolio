"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { ArticleCard } from "@/components/cards/ArticleCard"
import { Article } from "@/types"
import { animations } from "@/components/animations/presets"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ArticleSectionProps {
  articles: Article[]
}

export function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <SectionLayout 
      title="Technical Articles" 
      description="Professional engineering insights, documentation, and architecture deep dives."
      id="articles"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {articles.map((article) => (
          <motion.div key={article.id} variants={animations.fadeUp} className="h-full">
            <ArticleCard article={article} />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        variants={animations.fadeUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="mt-12 md:mt-16 text-center"
      >
        <Button variant="secondary" className="gap-2 group bg-surface hover:bg-surface-light border border-surface transition-all" asChild>
          <a href="#">
            View All Articles 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </motion.div>
    </SectionLayout>
  )
}
