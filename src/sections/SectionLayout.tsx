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
        className={cn(
          "w-full py-section-mobile md:py-section-tablet lg:py-section-desktop relative",
          className
        )}
        {...props}
      >
        <Container>
          <SectionHeader title={title} description={description} align={headerAlign} />
          
          <div className="w-full">
            {children}
          </div>

          {footerLink && (
            <div className="mt-12 flex justify-center w-full">
              {footerLink}
            </div>
          )}
        </Container>
      </section>
    )
  }
)
SectionLayout.displayName = "SectionLayout"
