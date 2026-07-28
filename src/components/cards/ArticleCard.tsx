import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Article } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Clock } from "lucide-react"
import Image from "next/image"

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  article: Article
}

export function ArticleCard({ article, className, ...props }: ArticleCardProps) {
  return (
    <BaseCard className={cn("flex flex-col h-full group", className)} hoverable {...props}>
      <div className="relative w-full h-48 overflow-hidden bg-surface">
        {/* Placeholder for Next Image since we don't have actual assets */}
        <div className="absolute inset-0 bg-surface flex items-center justify-center text-muted group-hover:scale-105 transition-transform duration-500">
          <span className="text-xs">[Image: {article.coverImage}]</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-center justify-between text-xs text-muted mb-2">
          <Badge variant="default">{article.category}</Badge>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readingTime}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-primary group-hover:text-accent-orange transition-colors">
          {article.title}
        </h3>
        
        <p className="text-sm text-muted line-clamp-2 mt-auto">
          {article.summary}
        </p>
        
        <div className="text-xs text-muted/60 mt-4">
          Published {article.publishedAt}
        </div>
      </div>
    </BaseCard>
  )
}
