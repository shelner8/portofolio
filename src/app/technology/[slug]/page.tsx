import { notFound } from "next/navigation"
import Link from "next/link"
import { getTechnologyBySlug, getAllTechnologies, getRelatedTechnologies } from "@/lib/technologies"
import { getAllProjects } from "@/lib/projects"
import { certifications } from "@/data/certifications"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { CertificationCard } from "@/components/cards/CertificationCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Cpu, FolderGit2, Award, Network, ChevronRight } from "lucide-react"

export function generateStaticParams() {
  const technologies = getAllTechnologies()
  return technologies.map((tech) => ({
    slug: tech.slug || tech.id,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const technology = getTechnologyBySlug(params.slug)
  if (!technology) return { title: 'Technology Not Found' }
  
  return {
    title: `${technology.name} | Technology Library`,
    description: technology.description,
  }
}

export default function TechnologyDetailPage({ params }: { params: { slug: string } }) {
  const technology = getTechnologyBySlug(params.slug)
  
  if (!technology) {
    notFound()
  }

  // Fetch relations
  const allProjects = getAllProjects()
  const relatedProjects = allProjects.filter(p => technology.relatedProjects?.includes(p.id))
  
  const relatedCerts = certifications.filter(c => technology.relatedCertifications?.includes(c.id))
  
  const relatedTechs = getRelatedTechnologies(technology.relatedTechnologies || [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-8 w-full max-w-4xl">
            <Link href="/technology" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-blue transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Technology Library
            </Link>
            
            <div className="flex flex-col gap-6">
              <Badge variant="outline" className="border-accent-blue/30 text-accent-blue bg-accent-blue/5 w-fit font-medium">
                {technology.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary tracking-tight leading-[1.1]">
                {technology.name}
              </h1>
              
              <p className="text-xl md:text-2xl text-muted leading-relaxed font-light mt-4">
                {technology.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Relations Section */}
      <section className="py-16 md:py-24 bg-background flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="flex flex-col gap-20 md:gap-32">
            
            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 pb-4 border-b border-surface/50">
                  <FolderGit2 className="w-6 h-6 text-accent-orange" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Real-World Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {relatedProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}

            {/* Related Certifications */}
            {relatedCerts.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 pb-4 border-b border-surface/50">
                  <Award className="w-6 h-6 text-accent-emerald" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Professional Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {relatedCerts.map(cert => (
                    <div key={cert.id} className="max-w-2xl w-full">
                      <CertificationCard certification={cert} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Technologies */}
            {relatedTechs.length > 0 && (
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4 pb-4 border-b border-surface/50">
                  <Network className="w-6 h-6 text-accent-purple" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Connected Technologies</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {relatedTechs.map(tech => (
                    <Link key={tech.id} href={`/technology/${tech.slug || tech.id}`} className="group outline-none">
                      <div className="p-4 rounded-xl bg-surface/30 border border-surface flex items-center justify-between group-hover:bg-surface/60 group-hover:border-surface-light transition-all">
                        <div className="flex flex-col gap-1">
                          <span className="text-sm font-bold text-primary group-hover:text-accent-blue transition-colors">{tech.name}</span>
                          <span className="text-xs text-muted font-medium">{tech.category}</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted group-hover:text-accent-blue transform group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State Fallback */}
            {relatedProjects.length === 0 && relatedCerts.length === 0 && relatedTechs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center rounded-2xl bg-surface/10 border border-surface border-dashed">
                <Cpu className="w-12 h-12 text-muted-foreground/30 mb-6" />
                <h3 className="text-xl font-bold text-primary mb-2">Knowledge Graph Expanding</h3>
                <p className="text-muted max-w-md">
                  Additional projects, certifications, and technical articles relating to this technology will be dynamically linked as they are published.
                </p>
                <Button variant="secondary" className="mt-8 border-surface-light text-muted hover:text-primary" asChild>
                  <Link href="/technology">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Return to Library
                  </Link>
                </Button>
              </div>
            )}

          </div>
        </div>
      </section>
    </div>
  )
}
