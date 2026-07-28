import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Experience } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: Experience
}

export function ExperienceCard({ experience, className, ...props }: ExperienceCardProps) {
  const hasDateOrLocation = Boolean(experience.startDate || experience.location);
  
  return (
    <BaseCard className={cn("p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 group relative overflow-hidden", className)} hoverable {...props}>
      {/* Subtle hover glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/5 rounded-full blur-[60px] -mr-20 -mt-20 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      
      {hasDateOrLocation && (
        <div className="flex-shrink-0 md:w-56 pt-1">
          {experience.startDate && (
            <div className="text-sm font-bold text-accent-orange uppercase tracking-widest mb-2">
              {experience.startDate} — {experience.current ? "Present" : experience.endDate}
            </div>
          )}
          {experience.location && (
            <div className="text-muted font-medium text-sm">{experience.location}</div>
          )}
        </div>
      )}
      
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary group-hover:text-accent-blue transition-colors duration-300 leading-tight">
            {experience.position}
          </h3>
          {experience.company && (
            <div className="text-lg md:text-xl font-medium text-primary/80 mt-1">{experience.company}</div>
          )}
        </div>
        
        <p className="text-base md:text-lg text-muted leading-[1.8]">
          {experience.summary}
        </p>
        
        {experience.responsibilities.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-5 border-b border-surface pb-3">Key Responsibilities</h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <ul className="flex-1 flex flex-col gap-4">
                {experience.responsibilities.slice(0, Math.ceil(experience.responsibilities.length / 2)).map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <ChevronRight className="w-4 h-4 mt-1 text-accent-orange flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" />
                    <span className="text-sm md:text-base text-muted group-hover/item:text-primary transition-colors duration-300 leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex-1 flex flex-col gap-4">
                {experience.responsibilities.slice(Math.ceil(experience.responsibilities.length / 2)).map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <ChevronRight className="w-4 h-4 mt-1 text-accent-orange flex-shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" />
                    <span className="text-sm md:text-base text-muted group-hover/item:text-primary transition-colors duration-300 leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="flex flex-wrap gap-2.5 mt-6 pt-8 border-t border-surface/60">
          {experience.technologies.map(tech => (
            <Badge key={tech} variant="outline" className="bg-surface/50 border-surface-light text-muted hover:text-primary hover:border-primary/50 transition-all text-xs md:text-sm py-1.5 px-3">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </BaseCard>
  )
}
