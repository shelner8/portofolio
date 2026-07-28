import { SectionLayout } from "@/sections/SectionLayout"
import { ProjectCard } from "@/components/cards/ProjectCard"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects",
  description: "Comprehensive portfolio of enterprise data center, networking, and automation implementations."
}

export default function ProjectsPage() {
  const projects = getAllProjects();
  
  // Group by Year
  const groupedProjects = projects.reduce((acc, project) => {
    // "Jan 2025 - Present" -> "2025"
    const yearMatch = project.duration.match(/\d{4}/);
    const year = yearMatch ? yearMatch[0] : "Other";
    
    if (!acc[year]) acc[year] = [];
    acc[year].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);
  
  const sortedYears = Object.keys(groupedProjects).sort((a, b) => {
    if (a === "Other") return 1;
    if (b === "Other") return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <div className="flex flex-col gap-8 md:gap-16 pb-16">
      <SectionLayout 
        title="Enterprise Implementations" 
        description="A complete history of data center, campus, and airport networking projects."
      >
        <div className="flex flex-col gap-16 mt-8">
          {sortedYears.map(year => (
            <div key={year} className="flex flex-col gap-8">
              <h2 className="text-2xl md:text-3xl font-bold text-primary flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-surface/50 border border-surface flex items-center justify-center text-accent-orange text-sm">
                  #
                </span>
                {year}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                {groupedProjects[year].map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  )
}
