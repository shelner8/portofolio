import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Experience } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ExperienceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  experience: Experience
}

export function ExperienceCard({ experience, className, ...props }: ExperienceCardProps) {
  return (
    <BaseCard className={cn("p-6 flex flex-col md:flex-row gap-6", className)} hoverable={false} {...props}>
      <div className="flex-shrink-0 md:w-48">
        <div className="text-sm font-semibold text-accent-orange mb-1">
          {experience.startDate} — {experience.current ? "Present" : experience.endDate}
        </div>
        <div className="text-muted text-sm">{experience.location}</div>
      </div>
      
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <h3 className="text-xl font-bold text-primary">{experience.position}</h3>
          <div className="text-lg text-muted mt-1">{experience.company}</div>
        </div>
        
        <p className="text-sm text-primary/80 leading-relaxed">
          {experience.summary}
        </p>
        
        <ul className="list-disc list-inside text-sm text-muted space-y-2 mb-2">
          {experience.responsibilities.slice(0, 3).map((resp, i) => (
            <li key={i}>{resp}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {experience.technologies.map(tech => (
            <Badge key={tech} variant="outline">{tech}</Badge>
          ))}
        </div>
      </div>
    </BaseCard>
  )
}
