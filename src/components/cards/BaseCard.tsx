import * as React from "react"
import { cn } from "@/lib/utils"

interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hoverable?: boolean
  glass?: boolean
}

export const BaseCard = React.forwardRef<HTMLDivElement, BaseCardProps>(
  ({ className, children, hoverable = true, glass = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-card bg-card border border-surface",
          glass && "bg-card/80 backdrop-blur-md",
          hoverable && "transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover hover:border-surface/80",
          !hoverable && "shadow-soft",
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
BaseCard.displayName = "BaseCard"
