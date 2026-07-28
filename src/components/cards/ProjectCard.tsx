import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Project } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FolderGit2, ArrowRight } from "lucide-react"

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
            <Badge variant="outline" className="border-accent-emerald/30 text-accent-emerald bg-accent-emerald/5 mt-1 font-medium">
              {project.status}
            </Badge>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted text-base md:text-lg leading-relaxed line-clamp-4">
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
        <Button variant="secondary" className="w-full group/btn bg-surface hover:bg-surface-light border border-surface transition-all" asChild>
          <a href="#">
            View Case Study 
            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </BaseCard>
  )
}
