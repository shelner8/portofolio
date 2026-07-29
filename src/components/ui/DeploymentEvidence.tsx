"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { MonitorCheck, X } from "lucide-react"

interface DeploymentEvidenceProps {
  title?: string
  subtitle?: string
  imagePath: string
  altText: string
  caption: string
}

export function DeploymentEvidence({ 
  title = "Deployment Evidence",
  subtitle = "Current self-hosted deployment running inside the Home Lab.",
  imagePath, 
  altText, 
  caption 
}: DeploymentEvidenceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false)
    }
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown)
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <MonitorCheck className="w-6 h-6 text-accent-orange" />
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">{title}</h2>
      </div>
      
      {subtitle && (
        <p className="text-lg text-muted">{subtitle}</p>
      )}
      
      {/* Evidence Image Section */}
      <div className="flex flex-col gap-5 md:gap-6 mt-8 md:mt-12 w-full max-w-[1000px] mx-auto">
        <div 
          className="relative w-full rounded-xl overflow-hidden border border-surface/50 shadow-lg shadow-black/20 bg-surface/30 cursor-zoom-in transition-transform duration-300 hover:border-accent-orange/30 group"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="absolute inset-0 bg-accent-orange/0 group-hover:bg-accent-orange/5 transition-colors z-10 pointer-events-none" />
          <Image
            src={imagePath}
            alt={altText}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            loading="lazy"
            sizes="(max-width: 1000px) 100vw, 1000px"
          />
        </div>
        <p className="text-sm text-muted/70 italic text-center">
          {caption}
        </p>
      </div>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 p-2 rounded-full bg-surface/50 text-muted hover:text-white hover:bg-surface transition-colors"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="relative w-full max-w-[95vw] h-full max-h-[95vh] flex items-center justify-center">
            <Image
              src={imagePath}
              alt={altText}
              width={3840}
              height={2160}
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              quality={100}
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
