import * as React from "react"
import { BaseCard } from "./BaseCard"
import { Statistic } from "@/types"
import { cn } from "@/lib/utils"
import { getIcon } from "@/lib/icon-map"

interface StatisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  statistic: Statistic
}

export function StatisticCard({ statistic, className, ...props }: StatisticCardProps) {
  const Icon = getIcon(statistic.icon);

  return (
    <BaseCard className={cn("p-6 flex flex-col items-center justify-center text-center gap-4", className)} hoverable {...props}>
      <div className="rounded-full bg-surface p-3 text-accent-orange">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-3xl font-bold text-primary mb-1">
          {statistic.value}{statistic.suffix}
        </div>
        <div className="text-sm text-muted">
          {statistic.label}
        </div>
      </div>
    </BaseCard>
  )
}
