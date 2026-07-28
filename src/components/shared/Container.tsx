import * as React from "react"
import { cn } from "@/lib/utils"

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-12",
        className
      )}
      {...props}
    />
  )
})
Container.displayName = "Container"
