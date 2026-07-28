# Data Model Specification

Version: 1.0

---

# Purpose

This document defines the canonical data models used throughout the portfolio application.

Every AI coding assistant must use these models when implementing the data layer.

Do not invent additional fields unless required by a new feature.

Maintain consistency across every component.

---

# General Principles

The application is data-driven.

All content should originate from structured data.

Avoid hardcoded values inside React components.

Preferred sources:

- TypeScript Objects
- JSON
- MDX (Articles)

Every model should have:

- Strong typing
- Predictable naming
- Reusable structure

---

# Naming Convention

Interfaces

```ts
Project
Experience
Certification
Technology
Skill
Article
Contact
Statistic
Architecture
```

Collections

```ts
projects.ts

experience.ts

articles.ts

skills.ts

technologies.ts

certifications.ts

statistics.ts
```

---

# Project

```ts
interface Project {
  id: string
  slug: string

  title: string
  summary: string
  description: string

  status:
    | "Production"
    | "Completed"
    | "In Progress"
    | "Lab"
    | "Research"

  category:
    | "Data Center"
    | "Enterprise Networking"
    | "Automation"
    | "Monitoring"
    | "Security"

  environment:
    | "Production"
    | "Lab"

  vendor: string[]

  technologies: string[]

  architecture: string[]

  highlights: string[]

  responsibilities: string[]

  lessonsLearned: string[]

  challenges: string[]

  images: string[]

  diagrams: string[]

  github?: string

  documentation?: string

  featured: boolean
}
```

---

# Experience

```ts
interface Experience {
  id: string

  company: string

  position: string

  employmentType: string

  location: string

  startDate: string

  endDate?: string

  current: boolean

  summary: string

  responsibilities: string[]

  achievements: string[]

  technologies: string[]

  projects: string[]
}
```

---

# Technology

```ts
interface Technology {
  id: string

  name: string

  category: string

  vendor: string

  level:
    | "Beginner"
    | "Intermediate"
    | "Advanced"
    | "Expert"

  description: string

  featured: boolean

  icon: string
}
```

---

# Skill

```ts
interface Skill {
  id: string

  name: string

  category: string

  description: string

  technologies: string[]
}
```

---

# Certification

```ts
interface Certification {
  id: string

  name: string

  vendor: string

  level: string

  issueDate: string

  expirationDate?: string

  credentialId?: string

  verificationUrl?: string

  certificateUrl?: string

  badge: string

  featured: boolean
}
```

---

# Article

```ts
interface Article {
  id: string

  slug: string

  title: string

  summary: string

  category: string

  publishedAt: string

  readingTime: string

  tags: string[]

  coverImage: string

  featured: boolean
}
```

---

# Architecture

```ts
interface Architecture {
  id: string

  title: string

  category: string

  description: string

  technologies: string[]

  environment:
    | "Production"
    | "Lab"

  diagrams: string[]

  lessonsLearned: string[]

  bestPractices: string[]
}
```

---

# Statistic

```ts
interface Statistic {
  id: string

  label: string

  value: number

  suffix?: string

  icon: string
}
```

---

# Contact

```ts
interface Contact {
  email: string

  github: string

  linkedin: string

  location: string

  resume: string
}
```

---

# Hero

```ts
interface HeroContent {
  title: string

  subtitle: string

  description: string

  highlights: string[]

  statistics: Statistic[]

  actions: HeroAction[]
}
```

---

# Hero Action

```ts
interface HeroAction {
  label: string

  href: string

  variant:
    | "primary"
    | "secondary"
    | "ghost"
}
```

---

# Relationships

```
Experience

↓

Projects

↓

Architecture

↓

Technologies

↓

Skills
```

Projects reference Technologies.

Experiences reference Projects.

Articles reference Technologies.

Architecture references Technologies.

Certifications remain independent.

---

# Data Source

Recommended folder structure

```
src/

data/

projects.ts

experience.ts

articles.ts

technologies.ts

skills.ts

certifications.ts

statistics.ts

hero.ts

contact.ts
```

---

# Data Rules

Every object must include:

- id
- title or name
- description
- category

Avoid nullable values whenever possible.

Prefer empty arrays instead of undefined arrays.

---

# AI Rules

When generating new data:

- Follow these interfaces exactly.
- Do not rename fields.
- Reuse existing technologies whenever possible.
- Avoid duplicate entries.
- Prefer composition over duplication.
- Maintain strong TypeScript typing.

These interfaces are the single source of truth for the application's data layer.