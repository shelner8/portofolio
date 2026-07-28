import * as React from "react"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { cn } from "@/lib/utils"

interface SectionLayoutProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  headerAlign?: "left" | "center"
  children: React.ReactNode
  footerLink?: React.ReactNode
}

export const SectionLayout = React.forwardRef<HTMLElement, SectionLayoutProps>(
  ({ className, title, description, headerAlign, children, footerLink, ...props }, ref) => {
    return (
      <section
        ref={ref}
        aria-labelledby={props.id ? `${props.id}-heading` : undefined}
        className={cn(
          "w-full py-12 md:py-16 relative",
          className
        )}
        {...props}
      >
        <Container>
          <SectionHeader id={props.id ? `${props.id}-heading` : undefined} title={title} description={description} align={headerAlign} />
          
          <div className="w-full">
            {children}
          </div>

          {footerLink && (
            <div className="mt-4 flex justify-center w-full">
              {footerLink}
            </div>
          )}
        </Container>
      </section>
    )
  }
)
SectionLayout.displayName = "SectionLayout"
