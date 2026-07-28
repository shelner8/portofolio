import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Project } from '@/types'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

const monthMap: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
};

function parseStartDate(duration: string): Date {
  // Example duration: "Jan 2025 - Present" or "Apr 2024 - Jun 2024"
  const parts = duration.split(" ");
  if (parts.length >= 2) {
    const month = monthMap[parts[0]] ?? 0;
    const year = parseInt(parts[1], 10);
    if (!isNaN(year)) {
      return new Date(year, month);
    }
  }
  return new Date(0); // Fallback
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  
  const folders = fs.readdirSync(projectsDirectory);
  
  const projects = folders.map(folder => {
    const fullPath = path.join(projectsDirectory, folder, 'project.md');
    if (!fs.existsSync(fullPath)) return null;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    
    return {
      id: data.id || folder,
      slug: data.slug || folder,
      title: data.title || "",
      customer: data.customer,
      environment: data.environment,
      category: data.category || "",
      role: data.role,
      duration: data.duration || "",
      location: data.location,
      summary: data.summary || "",
      responsibilities: data.responsibilities || [],
      technologies: data.technologies || [],
      skills: data.skills || [],
      status: data.status || "",
      featured: data.featured || false,
      futureCaseStudy: data.futureCaseStudy || false,
      associatedWith: data.associatedWith,
      diagrams: data.diagrams || [],
      content: matter(fileContents).content,
    } as Project;
  }).filter(Boolean) as Project[];
  
  // Sort by newest first
  return projects.sort((a, b) => parseStartDate(b.duration).getTime() - parseStartDate(a.duration).getTime());
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(p => p.featured).slice(0, 6);
}

export function getProjectBySlug(slug: string): Project | undefined {
  const projects = getAllProjects();
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(category: string, currentId: string, limit: number = 3): Project[] {
  const projects = getAllProjects();
  return projects
    .filter((project) => project.category === category && project.id !== currentId)
    .slice(0, limit);
}
