import { technologies } from "@/data/technologies";
import { Technology } from "@/types";
import { getAllProjects } from "@/lib/projects";
import { experience } from "@/data/experience";
import { articles } from "@/data/articles";
import { certifications } from "@/data/certifications";

// Cache the resolved technologies so we don't recalculate on every call
let resolvedTechnologiesCache: Technology[] | null = null;

export function getAllTechnologies(): Technology[] {
  if (resolvedTechnologiesCache) {
    return resolvedTechnologiesCache;
  }

  const projects = getAllProjects();

  const resolved = technologies.map(tech => {
    // 1. Match Projects
    const relatedProjects = projects.filter(p => 
      p.technologies?.some(t => t.toLowerCase() === tech.name.toLowerCase() || t.toLowerCase() === tech.id.toLowerCase()) || 
      tech.relatedProjects?.includes(p.id)
    ).map(p => p.id);

    // 2. Match Experience
    const relatedExperience = experience.filter(exp => 
      exp.technologies?.some(t => t.toLowerCase() === tech.name.toLowerCase() || t.toLowerCase() === tech.id.toLowerCase()) ||
      exp.responsibilities?.some(r => r.toLowerCase().includes(tech.name.toLowerCase()))
    ).map(exp => exp.id);

    // 3. Match Articles
    const relatedArticles = articles.filter(article => 
      article.tags?.some(tag => tag.toLowerCase() === tech.name.toLowerCase() || tag.toLowerCase() === tech.id.toLowerCase())
    ).map(article => article.id);

    // 4. Match Certifications (String matching against name, category, and description)
    const relatedCertifications = certifications.filter(cert => {
      // Add explicit relation if any existed before
      if (tech.relatedCertifications?.includes(cert.id)) return true;
      
      const searchStr = `${cert.name} ${cert.description} ${cert.category}`.toLowerCase();
      const techName = tech.name.toLowerCase();
      const techId = tech.id.toLowerCase();
      
      // We look for exact word boundaries to avoid partial matches (e.g., matching "BGP" in "MP-BGP" is fine, but matching "IP" in "ZIP" is bad)
      const regexName = new RegExp(`\\b${techName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      const regexId = new RegExp(`\\b${techId.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      
      return regexName.test(searchStr) || regexId.test(searchStr);
    }).map(cert => cert.id);

    return {
      ...tech,
      relatedProjects: Array.from(new Set(relatedProjects)),
      relatedExperience: Array.from(new Set(relatedExperience)),
      relatedArticles: Array.from(new Set(relatedArticles)),
      relatedCertifications: Array.from(new Set(relatedCertifications)),
    };
  });

  resolvedTechnologiesCache = resolved;
  return resolved;
}

export function getTechnologyBySlug(slug: string): Technology | undefined {
  const all = getAllTechnologies();
  return all.find(t => (t.slug || t.id) === slug);
}

export function getTechnologiesByCategory(category: string): Technology[] {
  const all = getAllTechnologies();
  return all.filter(t => t.category === category);
}

export function getRelatedTechnologies(technologyIds: string[]): Technology[] {
  if (!technologyIds || technologyIds.length === 0) return [];
  const all = getAllTechnologies();
  return all.filter(t => technologyIds.includes(t.id));
}
