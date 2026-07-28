import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Technology } from "@/types"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { getIcon } from "@/lib/icon-map"

interface TechnologyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  technology: Technology
}

export function TechnologyCard({ technology, className, ...props }: TechnologyCardProps) {
  const Icon = getIcon(technology.icon);

  return (
    <BaseCard className={cn("p-6 flex flex-col gap-4", className)} hoverable {...props}>
      <div className="flex items-start justify-between">
        <div className="rounded-xl bg-surface p-2.5 text-accent-blue">
          <Icon className="h-5 w-5" />
        </div>
        <Badge variant="outline">{technology.level}</Badge>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary">{technology.name}</h3>
        <p className="text-sm text-muted mt-1">{technology.description}</p>
      </div>
      <div className="mt-auto pt-4">
        <Badge variant="default" className="text-xs">{technology.category}</Badge>
      </div>
    </BaseCard>
  )
}
