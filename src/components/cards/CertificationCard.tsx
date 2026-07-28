import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Certification } from "@/types"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Award, ExternalLink, Download } from "lucide-react"

interface CertificationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  certification: Certification
}

export function CertificationCard({ certification, className, ...props }: CertificationCardProps) {
  return (
    <BaseCard className={cn("p-6 flex flex-col gap-6", className)} hoverable {...props}>
      <div className="flex items-start gap-4">
        <div className="rounded-xl bg-surface p-3 text-accent-emerald flex-shrink-0">
          <Award className="h-8 w-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary leading-tight mb-1">{certification.name}</h3>
          <p className="text-sm text-muted">{certification.vendor}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm mt-auto">
        <div>
          <div className="text-muted text-xs mb-1">Issue Date</div>
          <div className="font-medium text-primary">{certification.issueDate}</div>
        </div>
        <div>
          <div className="text-muted text-xs mb-1">Level</div>
          <Badge variant="outline" className="font-normal">{certification.level}</Badge>
        </div>
      </div>

      <div className="flex gap-3 pt-4 border-t border-surface">
        {certification.verificationUrl && (
          <Button variant="ghost" size="sm" className="flex-1 gap-2 text-xs">
            <ExternalLink className="w-3 h-3" /> Verify
          </Button>
        )}
        {certification.certificateUrl && (
          <Button variant="ghost" size="sm" className="flex-1 gap-2 text-xs">
            <Download className="w-3 h-3" /> PDF
          </Button>
        )}
      </div>
    </BaseCard>
  )
}
