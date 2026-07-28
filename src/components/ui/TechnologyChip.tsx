import * as React from "react"
import { cn } from "@/lib/utils"

interface TechnologyChipProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TechnologyChip = React.forwardRef<HTMLDivElement, TechnologyChipProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border border-surface bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-accent-orange/50 hover:text-primary hover:bg-surface",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
TechnologyChip.displayName = "TechnologyChip"
