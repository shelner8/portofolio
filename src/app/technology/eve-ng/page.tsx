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
  title: 'EVE-NG | Technology Library',
  description: 'EVE-NG provides a secondary emulation platform for validating multi-vendor network topologies.',
}

export default function TechnologyPage() {
  const useCases = [
    "Multi-vendor interoperability testing",
    "BGP route manipulation validation",
    "Firewall rule testing",
    "VLAN and STP simulation",
    "Network automation script targets",
    "Certification lab scenarios"
];

  const integrations = [
    "Ubuntu Server",
    "MikroTik",
    "Aruba AOS-CX",
    "OSPF",
    "BGP"
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
                Network Emulation
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1]">
                EVE-NG
              </h1>
              
              <div className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4 flex flex-col gap-4">
                <p>EVE-NG provides an isolated network laboratory for validating multi-vendor topologies.</p>
                <p>It is used to run vendor images, validate routing protocols, and experiment with switching configurations.</p>
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
                <p>EVE-NG operates on virtualization to simulate complex network environments safely.</p>
                <p>It enables practical testing of BGP peering, firewall rules, and Layer 2 mechanisms in a controlled sandbox.</p>
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
                subtitle="Current self-hosted EVE-NG deployment running inside the Home Lab."
                imagePath="/images/homelab/eve-ng-dashboard.png"
                altText="EVE-NG Dashboard"
                caption="Self-hosted EVE-NG instance running in the Home Lab environment."
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
                This Home Lab is continuously used for learning, experimenting with new technologies, validating infrastructure changes, and improving operational knowledge through hands-on practice.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
