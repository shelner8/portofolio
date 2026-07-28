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
          "relative overflow-hidden rounded-2xl bg-card border border-surface",
          glass && "bg-card/80 backdrop-blur-xl",
          hoverable && "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 hover:border-surface-light",
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
