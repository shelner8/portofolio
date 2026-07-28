# UI Component Mapping

Version: 1.0

---

# Purpose

This document defines how every section of the portfolio maps to its data source, reusable components, and supporting UI elements.

It acts as the bridge between:

- Product Requirements
- Architecture
- Design System
- Data Model

Every AI coding assistant should follow this document before implementing UI components.

---

# Application Flow

```
Root Layout

↓

Navigation

↓

Home Page

↓

Sections

↓

Cards

↓

Atomic UI Components

↓

Data Layer
```

---

# Home Page

```
Home

├── Hero
├── About
├── Core Expertise
├── Data Center Excellence
├── Featured Projects
├── Technology Summary
├── Experience
├── Certifications
├── Articles
├── Resume
├── Contact
└── Footer
```

---

# Hero

## Data Source

```
hero.ts

statistics.ts
```

## Components

```
HeroSection

├── HeroBadge
├── HeroTitle
├── HeroSubtitle
├── HeroDescription
├── HeroActions
├── HeroStatistics
├── HeroTechnologyBadges
├── InfrastructurePanel
```

## UI Elements

```
Button

Badge

StatisticCard

TechnologyChip

GradientText

Container
```

---

# About

## Data Source

```
about.ts
```

## Components

```
AboutSection

├── Biography
├── Philosophy
├── CoreValues
├── CareerObjective
```

---

# Core Expertise

## Data Source

```
skills.ts

technologies.ts
```

## Components

```
ExpertiseSection

├── ExpertiseCategoryCard
├── TechnologyChip
├── SkillBadge
```

Categories

```
Modern Data Center

Enterprise Networking

Enterprise Edge

Security

Automation

Monitoring
```

---

# Data Center Excellence

## Data Source

```
architectures.ts
```

## Components

```
ArchitectureSection

├── ArchitectureCard
├── DiagramViewer
├── TechnologyList
├── BestPracticeCard
├── LessonLearnedCard
```

Topics

```
EVPN

VXLAN

VSX

Leaf-Spine

AFC

Migration

High Availability
```

---

# Featured Projects

## Data Source

```
projects.ts
```

## Components

```
ProjectsSection

├── ProjectCard
├── ProjectStatusBadge
├── TechnologyBadge
├── ArchitectureBadge
├── ProjectGallery
├── ProjectDetail
```

---

# Technology Summary

## Data Source

```
technologies.ts
```

## Components

```
TechnologySection

├── TechnologyCategory
├── TechnologyCard
├── TechnologyChip
```

---

# Experience

## Data Source

```
experience.ts
```

## Components

```
ExperienceSection

├── Timeline
├── TimelineItem
├── ExperienceCard
├── ResponsibilityList
├── AchievementList
```

---

# Certifications

## Data Source

```
certifications.ts
```

## Components

```
CertificationSection

├── CertificationCard
├── VendorBadge
├── VerifyButton
├── DownloadButton
```

---

# Articles

## Data Source

```
articles.ts
```

## Components

```
ArticlesSection

├── SearchBar
├── CategoryFilter
├── ArticleCard
├── Pagination
```

---

# Resume

## Data Source

```
resume.ts
```

## Components

```
ResumeSection

├── PDFViewer
├── DownloadButton
├── PrintButton
```

---

# Contact

## Data Source

```
contact.ts
```

## Components

```
ContactSection

├── ContactCard
├── ContactForm
├── SocialLinks
├── ResumeButton
```

---

# Footer

## Data Source

```
footer.ts
```

## Components

```
Footer

├── FooterNavigation
├── FooterTechnologies
├── FooterQuote
├── Copyright
```

---

# Shared Components

These components should be reusable throughout the application.

```
Container

SectionHeader

Divider

GradientText

Badge

Button

Chip

Tag

Tooltip

Modal

Accordion

Tabs

Skeleton

EmptyState

ErrorState
```

---

# Card Library

```
StatisticCard

TechnologyCard

ProjectCard

ArchitectureCard

CertificationCard

ExperienceCard

ArticleCard

ContactCard
```

Every card should inherit the same visual design language.

---

# Badge Library

```
TechnologyBadge

VendorBadge

StatusBadge

CategoryBadge

CertificationBadge

DifficultyBadge
```

---

# Button Library

```
PrimaryButton

SecondaryButton

GhostButton

IconButton

DownloadButton

ExternalLinkButton
```

---

# Animation Mapping

```
Hero

↓

Fade + Slide

Sections

↓

Fade Up

Cards

↓

Stagger Animation

Buttons

↓

Opacity + Scale

Statistics

↓

Count Up

Images

↓

Fade
```

Animation definitions should be centralized.

---

# Data Relationships

```
Hero
│
├── hero.ts
├── statistics.ts

Projects
│
├── projects.ts
├── technologies.ts

Experience
│
├── experience.ts
├── projects.ts

Articles
│
├── articles.ts
├── technologies.ts

Architecture
│
├── architectures.ts
├── technologies.ts

Certifications
│
└── certifications.ts
```

---

# Component Dependency Rules

Components should never access raw data directly.

Always follow:

```
Data Layer

↓

Section

↓

Card

↓

UI Component
```

Example

```
projects.ts

↓

ProjectsSection

↓

ProjectCard

↓

Badge

Button

Image
```

Never bypass the section layer.

---

# Navigation Mapping

```
Navbar

↓

Hero

↓

About

↓

Core Expertise

↓

Data Center Excellence

↓

Featured Projects

↓

Technology Summary

↓

Experience

↓

Certifications

↓

Articles

↓

Resume

↓

Contact

↓

Footer
```

---

# AI Implementation Rules

When generating UI:

- Read data from the data layer.
- Never hardcode portfolio content.
- Reuse shared components.
- Prefer composition over duplication.
- Follow the card hierarchy.
- Follow the animation mapping.
- Respect the component dependency rules.

This document defines the canonical relationship between the UI layer and the application's structured data.