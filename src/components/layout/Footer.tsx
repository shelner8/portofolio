import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/shared/Container"
import { HexagonLogo } from "@/components/ui/HexagonLogo"
import { FooterContent } from "@/types"

interface FooterProps {
  footer: FooterContent
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="w-full border-t border-surface bg-background/95 py-16">
      <Container>
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center justify-center gap-8 w-full max-w-2xl">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-surface-light max-w-[200px]"></div>
            <Link href="/" aria-label="Home" className="group outline-none shrink-0">
              <HexagonLogo size={48} className="text-muted group-hover:text-accent-orange transition-colors drop-shadow-[0_0_15px_rgba(245,158,11,0.15)]" />
            </Link>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-surface-light max-w-[200px]"></div>
          </div>
          
          <div className="flex flex-col items-center gap-2 text-center mt-2">
            <p className="text-muted font-medium text-sm tracking-wide">
              © {new Date().getFullYear()} SHLNR. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Data Center & Enterprise Network Engineer
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
