import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Article } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Clock, ArrowRight, BookOpen } from "lucide-react"

interface ArticleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  article: Article
}

export function ArticleCard({ article, className, ...props }: ArticleCardProps) {
  return (
    <BaseCard className={cn("flex flex-col h-full group relative overflow-hidden", className)} hoverable {...props}>
      {/* Subtle hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="p-8 md:p-10 flex flex-col flex-1 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-orange bg-accent-orange/10 px-3 py-1.5 rounded-md">
              <BookOpen className="w-3.5 h-3.5" />
              {article.category}
            </div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300 leading-tight">
            {article.title}
          </h3>
        </div>
        
        <p className="text-muted text-base md:text-lg leading-relaxed line-clamp-4">
          {article.summary}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-surface/60">
            {article.tags.map(tech => (
              <Badge key={tech} variant="outline" className="bg-surface/50 border-surface-light text-muted hover:text-primary hover:border-primary/50 transition-all text-xs py-1 px-2.5">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-8 md:p-10 pt-0 mt-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
          <Clock className="w-3.5 h-3.5" />
          {article.readingTime || "5 min read"}
        </div>
        
        <Button variant="ghost" className="gap-2 group/btn hover:text-accent-orange hover:bg-transparent px-0 transition-colors" asChild>
          <a href={article.url} aria-label={`Read more about ${article.title}`}>
            Read More 
            <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </BaseCard>
  )
}
