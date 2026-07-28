"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { HexagonLogo } from "@/components/ui/HexagonLogo"
import { NavigationItem } from "@/types"
import { cn } from "@/lib/utils"

interface NavbarProps {
  navigation: NavigationItem[]
}

export function Navbar({ navigation }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 h-20 flex items-center border-b border-transparent",
        scrolled && "bg-background/70 backdrop-blur-xl border-surface shadow-md"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group transition-colors outline-none">
          <HexagonLogo size={32} className="group-hover:text-accent-orange/80 transition-colors drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
          <span className="text-xl font-bold tracking-tight text-primary group-hover:text-accent-orange transition-colors hidden sm:inline-block">
            Shelnerio
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="primary" size="sm" asChild className="hidden md:inline-flex">
            <Link href="/resume.pdf" target="_blank">
              Download Resume
            </Link>
          </Button>
        </div>
      </Container>
    </header>
  )
}
