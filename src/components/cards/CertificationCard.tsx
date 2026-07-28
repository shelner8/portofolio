import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Certification } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Award, ExternalLink } from "lucide-react"

interface CertificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  certification: Certification
}

export function CertificationCard({ certification, className, ...props }: CertificationCardProps) {
  return (
    <BaseCard className={cn("p-8 h-full flex flex-col gap-6 group relative overflow-hidden", className)} hoverable {...props}>
      {/* Subtle hover glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

      <div className="flex justify-between items-start gap-4">
        <div className="p-3.5 rounded-2xl bg-surface/80 border border-surface flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-soft">
          <Award className="w-6 h-6 text-accent-blue" />
        </div>
        {certification.badge && (
          <Badge variant="outline" className="border-accent-emerald/30 text-accent-emerald bg-accent-emerald/5 mt-1 font-medium">
            {certification.badge}
          </Badge>
        )}
      </div>
      
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-col gap-1.5 pt-1">
          <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300 leading-snug">
            {certification.name}
          </h3>
          <p className="text-sm font-medium text-muted">
            {certification.issuer}
          </p>
        </div>
        
        <p className="text-sm text-muted/90 leading-relaxed mt-2 line-clamp-2">
          Professional certification validating expertise in {certification.category?.toLowerCase() || "networking"}.
        </p>
      </div>
      
      <div className="flex flex-col gap-5 mt-auto pt-6 border-t border-surface/60">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-surface/50 border-surface-light text-muted text-xs">
            {certification.category || "General"}
          </Badge>
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            {new Date(certification.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </span>
        </div>
        
        {certification.url && (
          <Button variant="secondary" size="sm" className="w-full group/btn bg-surface hover:bg-surface-light border border-surface transition-all text-xs" asChild>
            <a href={certification.url} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${certification.name} credential`}>
              Verify Credential
              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5 ml-2 text-muted-foreground group-hover/btn:text-primary transition-colors" />
            </a>
          </Button>
        )}
      </div>
    </BaseCard>
  )
}
