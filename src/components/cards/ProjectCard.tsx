import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FolderGit2, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <BaseCard className={cn("flex flex-col h-full group relative overflow-hidden", className)} hoverable {...props}>
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      
      <div className="p-8 md:p-10 flex flex-col flex-1 gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start gap-4">
            <div className="p-3 rounded-xl bg-surface/80 border border-surface flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
              <FolderGit2 className="w-6 h-6 text-accent-orange" />
            </div>
            <div className="flex flex-col items-end gap-1">
              <Badge variant="outline" className={cn(
                "font-medium border-surface-light text-xs",
                project.status === 'Completed' ? "text-accent-emerald bg-accent-emerald/5 border-accent-emerald/30" : "text-accent-orange bg-accent-orange/5 border-accent-orange/30"
              )}>
                {project.status}
              </Badge>
              {project.category && (
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{project.category}</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            {(project.customer || project.associatedWith || project.duration) && (
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground font-medium">
                {project.customer || project.associatedWith ? <span>{project.customer || project.associatedWith}</span> : null}
                {(project.customer || project.associatedWith) && project.duration ? <span className="w-1 h-1 rounded-full bg-surface-light" /> : null}
                {project.duration ? <span>{project.duration}</span> : null}
              </div>
            )}
          </div>
        </div>
        
        <p className="text-muted text-base leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-surface/60">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="outline" className="bg-surface/50 border-surface-light text-muted hover:text-primary hover:border-primary/50 transition-all text-xs md:text-sm py-1 px-2.5">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      <div className="p-8 md:p-10 pt-0 mt-auto">
        <Button variant="secondary" size="sm" className="w-full gap-2 group/btn border-surface bg-surface/50 hover:bg-surface" asChild>
          <Link href={`/projects/${project.slug}`} aria-label={`View Case Study for ${project.title}`}>
            View Case Study
            <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 group-hover/btn:text-accent-orange transition-colors" />
          </Link>
        </Button>
      </div>
    </BaseCard>
  )
}
