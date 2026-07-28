"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { SectionLayout } from "@/sections/SectionLayout"
import { BaseCard } from "@/components/cards/BaseCard"
import { Article } from "@/types"
import { animations } from "@/components/animations/presets"
import { ExternalLink, BookOpen } from "lucide-react"

interface ArticleSectionProps {
  articles: Article[]
}

export function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <SectionLayout 
      title="Technical Writing" 
      description="Sharing insights, deep dives, and pragmatic tutorials on enterprise networking and network automation."
      id="articles"
    >
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        variants={animations.staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        {articles.map((article) => (
          <motion.div key={article.id} variants={animations.fadeUp}>
            <a href={article.url} target="_blank" rel="noreferrer" className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-accent-orange rounded-2xl">
              <BaseCard className="p-6 h-full flex flex-col gap-4 group transition-colors hover:border-accent-orange/50" hoverable>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-accent-orange bg-accent-orange/10 px-3 py-1.5 rounded-full">
                    <BookOpen className="w-3.5 h-3.5" />
                    {article.platform}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted group-hover:text-accent-orange transition-colors" />
                </div>
                
                <div className="flex-1 mt-2">
                  <h3 className="text-xl font-bold text-primary leading-snug mb-3 group-hover:text-accent-orange transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>
                
                <div className="border-t border-surface pt-4 mt-2">
                  <p className="text-xs text-muted/70 font-mono tracking-wider">
                    PUBLISHED: {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()}
                  </p>
                </div>
              </BaseCard>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </SectionLayout>
  )
}
