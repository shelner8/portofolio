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
  title: '9Router | Technology Library',
  description: '9Router handles internal API request routing and load balancing for local AI models.',
}

export default function TechnologyPage() {
  const useCases = [
    "Unified endpoint",
    "Provider routing (Gemini, Antigravity, Kiro)",
    "Model selection",
    "Token and cost optimization",
    "Simplified client configuration",
    "Centralized endpoint management"
]

  const integrations = [
    "Hermes UI",
    "Docker",
    "Ubuntu Server"
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
                9Router
              </h1>
              
              <div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">
                <p>9Router acts as a unified API endpoint for routing requests to different AI providers.</p>
                <p>It is deployed to centralize access to models from Gemini API, Antigravity, Kiro, and other compatible services.</p>
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
                <p>9Router runs as the local API gateway for AI interactions within the home lab.</p>
                <p>It is used to simplify client configurations by providing a single endpoint, allowing for rapid model switching and token optimization without altering frontend applications.</p>
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
                subtitle="Current self-hosted 9Router deployment running inside the Home Lab."
                imagePath="/images/homelab/9router-dashboard.png"
                altText="9Router Dashboard"
                caption="Self-hosted 9Router instance running in the Home Lab environment."
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
                This deployment is actively maintained as part of the Home Lab and is used for testing infrastructure changes, validating configurations, and supporting continuous learning.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
