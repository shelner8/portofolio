import { getProjectBySlug, getAllProjects, getRelatedProjects } from "@/lib/projects"
import { notFound } from "next/navigation"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar, Building2, LayoutTemplate } from "lucide-react"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { FabricArchitectureDiagram } from "@/components/diagrams/FabricArchitectureDiagram"
import { SecurityFlowDiagram } from "@/components/diagrams/SecurityFlowDiagram"

export function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  }
}

export default function ProjectCaseStudy({ params }: { params: { slug: string } }) {
  const projects = getAllProjects()
  const projectIndex = projects.findIndex(p => p.slug === params.slug)
  
  if (projectIndex === -1) {
    notFound()
  }

  const project = projects[projectIndex]
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null
  const relatedProjects = getRelatedProjects(project.category, project.id)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden border-b border-surface">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 via-transparent to-transparent opacity-50" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent-orange transition-colors w-fit">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
            
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="outline" className="border-accent-orange/30 text-accent-orange bg-accent-orange/5">
                  {project.category}
                </Badge>
                <Badge variant="outline" className={project.status === 'Completed' ? "border-accent-emerald/30 text-accent-emerald bg-accent-emerald/5" : "border-accent-blue/30 text-accent-blue bg-accent-blue/5"}>
                  {project.status}
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]">
                {project.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-muted pt-4">
                {(project.customer || project.associatedWith) && (
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 opacity-70" />
                    <span>{project.customer || project.associatedWith}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 opacity-70" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.environment && (
                  <div className="flex items-center gap-2">
                    <LayoutTemplate className="w-5 h-5 opacity-70" />
                    <span>{project.environment}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Main Markdown Body */}
            <div className="lg:col-span-8 flex flex-col gap-10">
              <div className="prose prose-invert prose-lg max-w-none 
                [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-primary [&>h3]:mt-12 [&>h3]:mb-6
                [&>p]:text-muted [&>p]:leading-relaxed [&>p]:mb-6
                [&>ul]:text-muted [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-3 [&>ul>li]:pl-2
                [&>ul>li::marker]:text-accent-orange/50">
                <ReactMarkdown
                  components={{
                    code({ node, inline, className, children, ...props }: any) {
                      const match = /language-(\w+)/.exec(className || "")
                      if (!inline && match && match[1] === "diagram") {
                        const type = String(children).replace(/\n$/, "").trim()
                        if (type === "fabric") return <FabricArchitectureDiagram />
                        if (type === "security") return <SecurityFlowDiagram />
                      }
                      return <code className={className} {...props}>{children}</code>
                    }
                  }}
                >
                  {project.content || ""}
                </ReactMarkdown>
              </div>
            </div>
            
            {/* Sidebar / Meta */}
            <div className="lg:col-span-4 flex flex-col gap-10">
              <div className="p-6 md:p-8 rounded-2xl bg-surface/30 border border-surface flex flex-col gap-6">
                <h3 className="text-lg font-semibold text-primary">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="outline" className="bg-surface/50 border-surface-light text-muted hover:text-primary transition-colors py-1 px-3">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {project.skills && project.skills.length > 0 && (
                <div className="p-6 md:p-8 rounded-2xl bg-surface/30 border border-surface flex flex-col gap-6">
                  <h3 className="text-lg font-semibold text-primary">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="border-accent-blue/30 text-accent-blue bg-accent-blue/5 py-1 px-3">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 md:py-24 bg-surface/10 border-t border-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Related Case Studies</h2>
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

      {/* Pagination */}
      <section className="py-12 border-t border-surface bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            {prevProject ? (
              <Button variant="ghost" className="w-full sm:w-auto justify-start gap-3 h-auto py-4 group" asChild>
                <Link href={`/projects/${prevProject.slug}`}>
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-muted" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Previous Project</span>
                    <span className="text-primary font-semibold line-clamp-1 text-left">{prevProject.title}</span>
                  </div>
                </Link>
              </Button>
            ) : <div className="hidden sm:block flex-1" />}
            
            {nextProject ? (
              <Button variant="ghost" className="w-full sm:w-auto justify-end gap-3 h-auto py-4 group text-right" asChild>
                <Link href={`/projects/${nextProject.slug}`}>
                  <div className="flex flex-col items-end">
                    <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Next Project</span>
                    <span className="text-primary font-semibold line-clamp-1">{nextProject.title}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-muted" />
                </Link>
              </Button>
            ) : <div className="hidden sm:block flex-1" />}
          </div>
        </div>
      </section>
    </div>
  )
}
