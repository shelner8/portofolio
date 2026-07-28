import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { FooterContent } from "@/types"

interface FooterProps {
  footer: FooterContent
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="w-full border-t border-surface bg-background/95 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary hover:text-accent-orange transition-colors w-fit">
              <span className="text-accent-orange">SH</span>LNR
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              {footer.brandStatement}
            </p>
            <p className="text-muted/80 text-sm max-w-sm italic mt-4 border-l-2 border-surface pl-4">
              "{footer.quote}"
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 id="footer-nav" className="font-semibold text-primary">Navigation</h3>
            <ul aria-labelledby="footer-nav" className="flex flex-col gap-2">
              {footer.navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted hover:text-accent-orange transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 id="footer-tech" className="font-semibold text-primary">Technologies</h3>
            <ul aria-labelledby="footer-tech" className="flex flex-wrap gap-2">
              {footer.technologies.slice(0, 7).map((tech) => (
                <li key={tech} className="text-xs text-muted">
                  {tech}
                </li>
              ))}
              <li className="text-xs text-muted/60">and more...</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            {footer.copyright}
          </p>
          <div className="flex gap-4">
            {/* Additional bottom links can go here */}
          </div>
        </div>
      </Container>
    </footer>
  )
}
