import { notFound } from "next/navigation"
import Link from "next/link"
import { getTechnologyBySlug, getAllTechnologies, getRelatedTechnologies } from "@/lib/technologies"
import { getAllProjects } from "@/lib/projects"
import { experience as allExperiences } from "@/data/experience"
import { certifications } from "@/data/certifications"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { CertificationCard } from "@/components/cards/CertificationCard"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, Cpu, FolderGit2, Award, Network, ChevronRight, 
  BookOpen, Lightbulb, ShieldCheck, LayoutTemplate, Briefcase
} from "lucide-react"
import { DataCenterFabricDiagram } from "@/components/diagrams/DataCenterFabricDiagram"
import { SecurityFlowDiagram } from "@/components/diagrams/SecurityFlowDiagram"

const diagramRegistry: Record<string, React.ComponentType> = {
  fabric: DataCenterFabricDiagram,
  security: SecurityFlowDiagram
}

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
  const relatedProjects = allProjects.filter(p => 
    p.technologies?.some(tech => 
      tech === technology.name || 
      tech.toLowerCase() === technology.id.toLowerCase() || 
      tech.toLowerCase() === technology.slug?.toLowerCase()
    ) || 
    technology.relatedProjects?.includes(p.id)
  )
  const relatedCerts = certifications.filter(c => technology.relatedCertifications?.includes(c.id))
  const relatedTechs = getRelatedTechnologies(technology.relatedTechnologies || [])

  const ArchitectureDiagram = technology.architectureDiagram ? diagramRegistry[technology.architectureDiagram] : null

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
              <Badge variant="outline" className="border-accent-blue/30 text-accent-blue bg-accent-blue/5 w-fit font-medium px-4 py-1.5 text-sm">
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

      {/* Main Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Documentation */}
            <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
              
              {/* Overview */}
              {technology.overview && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-accent-blue" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Overview</h2>
                  </div>
                  <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed">
                    <p>{technology.overview}</p>
                  </div>
                </div>
              )}

              {/* Core Concepts */}
              {technology.concepts && technology.concepts.length > 0 && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="w-6 h-6 text-accent-orange" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Core Concepts</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {technology.concepts.map(concept => (
                      <div key={concept} className="px-4 py-2 rounded-lg bg-surface/30 border border-surface text-primary font-medium hover:border-accent-orange/50 hover:bg-accent-orange/5 transition-colors cursor-default">
                        {concept}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <LayoutTemplate className="w-6 h-6 text-accent-emerald" />
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Architecture</h2>
                </div>
                {ArchitectureDiagram ? (
                  <div className="p-1 rounded-2xl bg-surface/20 border border-surface shadow-2xl">
                    <ArchitectureDiagram />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-12 md:p-24 rounded-2xl bg-surface/10 border border-surface border-dashed">
                    <LayoutTemplate className="w-12 h-12 text-muted-foreground/30 mb-4" />
                    <span className="text-muted font-medium">Architecture diagram coming soon.</span>
                  </div>
                )}
              </div>

              {/* Best Practices */}
              {technology.bestPractices && technology.bestPractices.length > 0 && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-accent-purple" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Best Practices</h2>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {technology.bestPractices.map((practice, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 md:p-6 rounded-xl bg-surface/30 border border-surface">
                        <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-accent-purple" />
                        <span className="text-muted leading-relaxed font-medium">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Real Project Experience */}
              {technology.experience && technology.experience.length > 0 && (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-accent-blue" />
                    <h2 className="text-2xl md:text-3xl font-bold text-primary font-mono">Real Project Experience</h2>
                  </div>
                  <div className="flex flex-col gap-6">
                    {technology.experience.map((exp, index) => {
                      const project = exp.projectId ? allProjects.find(p => p.id === exp.projectId) : null;
                      const experienceMatch = exp.experienceId ? allExperiences.find(e => e.id === exp.experienceId) : null;
                      
                      return (
                        <div key={index} className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-surface/30 border border-surface shadow-lg relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-[40px] -mr-10 -mt-10 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-surface/50 pb-4">
                            <span className="text-sm font-medium text-muted uppercase tracking-wider">Implementation Summary</span>
                            {project && (
                              <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-accent-blue hover:text-accent-blue/80 transition-colors">
                                {project.title}
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            )}
                            {experienceMatch && (
                              <Link href={`/#experience`} className="inline-flex items-center gap-2 text-sm font-bold text-accent-orange hover:text-accent-orange/80 transition-colors">
                                {experienceMatch.company}
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            )}
                          </div>
                          <p className="text-lg text-primary/90 leading-relaxed">
                            {exp.summary}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Relationships */}
            <div className="lg:col-span-4 flex flex-col gap-12 lg:sticky lg:top-24 h-fit">
              
              {/* Related Technologies */}
              {relatedTechs.length > 0 && (
                <div className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-surface/30 border border-surface shadow-lg">
                  <div className="flex items-center gap-3 pb-4 border-b border-surface/50">
                    <Network className="w-5 h-5 text-accent-purple" />
                    <h3 className="text-lg font-bold text-primary font-mono">Connected Technologies</h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {relatedTechs.map(tech => (
                      <Link key={tech.id} href={`/technology/${tech.slug || tech.id}`} className="group outline-none">
                        <div className="px-4 py-3 rounded-xl bg-surface/50 border border-surface flex items-center justify-between group-hover:bg-surface-light group-hover:border-surface-light transition-all">
                          <span className="text-sm font-bold text-primary group-hover:text-accent-blue transition-colors">{tech.name}</span>
                          <ChevronRight className="w-4 h-4 text-muted group-hover:text-accent-blue transform group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Certifications */}
              {relatedCerts.length > 0 && (
                <div className="flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-surface/30 border border-surface shadow-lg">
                  <div className="flex items-center gap-3 pb-4 border-b border-surface/50">
                    <Award className="w-5 h-5 text-accent-emerald" />
                    <h3 className="text-lg font-bold text-primary font-mono">Certifications</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {relatedCerts.map(cert => (
                      <div key={cert.id} className="w-full">
                        <CertificationCard certification={cert} className="p-4 sm:p-5" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Full Width Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-surface/10 border-t border-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-4 border-b border-surface/50 pb-4">
                <FolderGit2 className="w-8 h-8 text-accent-orange" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">Referenced In Projects</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {relatedProjects.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}
