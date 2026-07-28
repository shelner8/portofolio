import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <BaseCard className={cn("flex flex-col h-full", className)} hoverable {...props}>
      <div className="p-6 flex flex-col flex-1 gap-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-primary line-clamp-2">{project.title}</h3>
          <Badge variant={project.status === "Production" ? "success" : "default"}>
            {project.status}
          </Badge>
        </div>
        
        <p className="text-muted text-sm line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map(tech => (
            <Badge key={tech} variant="outline" className="bg-surface/50">{tech}</Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="bg-surface/50">+{project.technologies.length - 4}</Badge>
          )}
        </div>
      </div>
      <div className="p-6 pt-0 mt-auto">
        <Button variant="secondary" className="w-full">Read More</Button>
      </div>
    </BaseCard>
  )
}
