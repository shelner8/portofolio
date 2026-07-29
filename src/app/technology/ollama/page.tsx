import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DeploymentEvidence } from "@/components/ui/DeploymentEvidence"
import { 
  ArrowLeft, 
  BookOpen, 
  Target, 
  Layers, 
  Info 
} from "lucide-react"

export const metadata = {
  title: 'Ollama | Technology Library',
  description: 'Ollama hosts large language models locally, ensuring data privacy and reducing reliance on external APIs.',
}

export default function TechnologyPage() {
  const useCases = [
    "Local LLM hosting",
    "Private code and configuration analysis",
    "API endpoint for custom applications",
    "Automated documentation generation",
    "Low-latency model inference",
    "Offline AI accessibility"
];

  const integrations = [
    "Hermes UI",
    "9Router",
    "Ubuntu Server",
    "Docker"
];

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1: Hero */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-16 overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-8 w-full max-w-4xl">
            <Link href="/technology" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Technology Library
            </Link>
            
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="border-accent-blue/30 text-accent-blue bg-accent-blue/5 w-fit font-medium px-4 py-1.5 text-sm">
                Local AI
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1]">
                Ollama
              </h1>
              
              <div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">
                <p>Ollama hosts large language models locally, ensuring data privacy and reducing reliance on external APIs.</p>
                <p>It provides the inference engine required for local AI applications and automated infrastructure documentation workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-16 md:gap-20 w-full max-w-[1000px]">
            
            {/* SECTION 2: Overview */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-accent-blue" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Overview</h2>
              </div>
              <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">
                <p>Ollama runs as a background service on dedicated hardware to serve AI model requests over the internal network.</p>
                <p>By keeping inference local, sensitive network configurations and architectural queries can be processed securely.</p>
              </div>
            </div>

            {/* SECTION 3: Primary Use Cases */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-accent-emerald" />
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Primary Use Cases</h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map(useCase => (
                  <li key={useCase} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-emerald flex-shrink-0" />
                    <span className="text-muted leading-relaxed text-lg">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              {/* SECTION 4: Deployment Evidence */}
              <DeploymentEvidence 
                title="Deployment Evidence"
                subtitle="Current self-hosted Ollama deployment running inside the Home Lab."
                imagePath="/images/homelab/ollama-dashboard.png"
                altText="Ollama Dashboard"
                caption="Self-hosted Ollama instance deployed in the home lab environment for enterprise network emulation and pre-production validation."
              />

              {/* SECTION 5: Integrated With */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-accent-blue" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Integrated With</h2>
                </div>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {integrations.map(tech => (
                    <div key={tech} className="px-4 py-2 rounded-lg bg-surface/30 border border-surface text-primary font-medium hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-colors cursor-default">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SECTION 6: Footer Note */}
            <div className="w-full p-6 md:p-8 rounded-xl bg-accent-blue/5 border border-accent-blue/20 flex items-start gap-4">
              <Info className="w-6 h-6 text-accent-blue flex-shrink-0 mt-0.5" />
              <p className="text-lg text-accent-blue/90 leading-relaxed font-medium">
                This environment is continuously used to validate new technologies, reproduce production scenarios, and safely test infrastructure changes before deployment.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
