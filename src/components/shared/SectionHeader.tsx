import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  align?: "left" | "center"
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, description, align = "left", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-3 mb-6 md:mb-8",
          align === "center" ? "items-center text-center" : "items-start text-left",
          className
        )}
        {...props}
      >
        <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="max-w-[760px] text-lg text-muted">
            {description}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"
