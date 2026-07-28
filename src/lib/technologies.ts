import { technologies } from "@/data/technologies";
import { Technology } from "@/types";

export function getAllTechnologies(): Technology[] {
  return technologies;
}

export function getTechnologyBySlug(slug: string): Technology | undefined {
  return technologies.find(t => t.slug === slug);
}

export function getTechnologiesByCategory(category: string): Technology[] {
  return technologies.filter(t => t.category === category);
}

export function getRelatedTechnologies(technologyIds: string[]): Technology[] {
  if (!technologyIds || technologyIds.length === 0) return [];
  return technologies.filter(t => technologyIds.includes(t.id));
}
