"use client"

import { useState } from "react"
import { TechnologyCard } from "@/components/cards/TechnologyCard"
import { Terminal, ChevronDown, ChevronUp } from "lucide-react"
import { Technology } from "@/types"
import { Button } from "@/components/ui/button"

interface CategorySectionProps {
  category: string
  technologies: Technology[]
}

export function CategorySection({ category, technologies }: CategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const displayedTechnologies = isExpanded ? technologies : technologies.slice(0, 3)
  const remainingCount = technologies.length - 3

  return (
    <div className="flex flex-col gap-8 scroll-mt-24" id={category.toLowerCase().replace(/\s+/g, '-')}>
      <div className="flex items-center justify-between pb-4 border-b border-surface/50">
        <div className="flex items-center gap-4">
          <Terminal className="w-6 h-6 text-accent-blue opacity-50" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">{category}</h2>
        </div>
        <span className="text-sm font-medium text-muted bg-surface/30 px-3 py-1 rounded-full border border-surface">
          {technologies.length} {technologies.length === 1 ? 'Item' : 'Items'}
        </span>
      </div>
      
      <div 
        id={`category-grid-${category.toLowerCase().replace(/\s+/g, '-')}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-300 ease-in-out"
      >
        {displayedTechnologies.map(tech => (
          <TechnologyCard key={tech.id} technology={tech} />
        ))}
      </div>
      
      {remainingCount > 0 && (
        <div className="flex justify-center mt-2">
          <Button 
            variant="secondary" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`category-grid-${category.toLowerCase().replace(/\s+/g, '-')}`}
            className="border-accent-blue/30 text-accent-blue hover:bg-accent-blue/10 hover:border-accent-blue/50 rounded-full transition-all duration-300"
          >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                +{remainingCount} More Technologies
                <ChevronDown className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
