import Image from "next/image"
import { MonitorCheck } from "lucide-react"

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
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <MonitorCheck className="w-6 h-6 text-accent-orange" />
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">{title}</h2>
      </div>
      
      {subtitle && (
        <p className="text-lg text-muted">{subtitle}</p>
      )}
      
      <div className="flex flex-col gap-4 mt-2">
        <div className="relative w-full rounded-xl overflow-hidden border border-surface shadow-2xl bg-surface/30">
          <Image
            src={imagePath}
            alt={altText}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
        <p className="text-sm text-muted/80 italic text-center px-4">
          "{caption}"
        </p>
      </div>
    </div>
  )
}
