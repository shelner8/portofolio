import { getAllTechnologies } from "@/lib/technologies"
import { TechnologyCard } from "@/components/cards/TechnologyCard"
import { Cpu, Terminal, ArrowRight } from "lucide-react"

export const metadata = {
  title: 'Technology Library | Knowledge Hub',
  description: 'A comprehensive catalog of enterprise networking technologies, linking to practical implementations in projects and technical certifications.',
}

export default function TechnologyLibraryPage() {
  const technologies = getAllTechnologies()

  // Group technologies by category
  const categories = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, typeof technologies>)

  // Define category rendering order
  const categoryOrder = [
    "Data Center",
    "Aruba",
    "Enterprise Networking",
    "Connectivity",
    "Infrastructure Automation",
    "Network Operating Systems",
    "Network Emulation",
    "Virtualization",
    "Container Platform",
    "Self-Hosted Services",
    "Local AI",
    "Monitoring"
  ]

  // Extract any remaining categories not explicitly ordered
  const orderedCategories = [
    ...categoryOrder.filter(c => categories[c]),
    ...Object.keys(categories).filter(c => !categoryOrder.includes(c))
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-16 overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="flex flex-col gap-6 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue w-fit">
                <Cpu className="w-4 h-4" />
                <span className="text-sm font-medium tracking-wide uppercase">Knowledge Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
                Technology Library
              </h1>
              
              <p className="text-lg md:text-xl text-muted leading-relaxed">
                Explore the enterprise technologies that power my engineering deployments. Discover how protocols, architectures, and platforms interconnect across real-world projects and professional certifications.
              </p>
            </div>

            <div className="flex items-center gap-6 p-6 rounded-2xl bg-surface/30 border border-surface shadow-lg backdrop-blur-sm shrink-0">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-primary">{technologies.length}</span>
                <span className="text-sm font-medium text-muted uppercase tracking-wider">Technologies</span>
              </div>
              <div className="w-px h-12 bg-surface" />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-bold text-primary uppercase tracking-wider max-w-[150px] leading-relaxed">
                  Used Across Enterprise Deployments
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Grid Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-12">
            
            {orderedCategories.map(category => (
              <div key={category} className="flex flex-col gap-8 scroll-mt-24" id={category.toLowerCase().replace(/\s+/g, '-')}>
                <div className="flex items-center justify-between pb-4 border-b border-surface/50">
                  <div className="flex items-center gap-4">
                    <Terminal className="w-6 h-6 text-accent-blue opacity-50" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">{category}</h2>
                  </div>
                  <span className="text-sm font-medium text-muted bg-surface/30 px-3 py-1 rounded-full border border-surface">
                    {categories[category].length} {categories[category].length === 1 ? 'Item' : 'Items'}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {categories[category].map(tech => (
                    <TechnologyCard key={tech.id} technology={tech} />
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}
