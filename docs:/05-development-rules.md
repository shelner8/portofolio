# Development Rules

Version: 1.0

---

# Purpose

This document defines the permanent engineering rules for the project.

Every AI coding agent MUST follow these rules throughout the entire software development lifecycle.

These rules are mandatory.

---

# General Rules

Read every document inside the `docs/` directory before writing any code.

Read them in numerical order.

Do not skip any section.

Treat every document as the source of truth.

If documents conflict, follow this priority:

1. 01-prd.md
2. 02-architecture.md
3. 03-design.md
4. 04-content.md

Never ignore these documents.

---

# Software Quality

Generate production-ready code.

Avoid prototypes.

Avoid demo-quality implementations.

Every component should be maintainable.

Every file should have a single responsibility.

---

# Code Style

Use:

- TypeScript
- React
- Tailwind CSS

Avoid:

- JavaScript
- Inline CSS
- Large monolithic components

Every component should be typed.

Never use `any`.

---

# Component Rules

Components should be:

- Small
- Reusable
- Independent
- Composable

Maximum recommendation:

300 lines per component.

Split larger components.

Never duplicate UI.

---

# Folder Rules

Respect the folder hierarchy defined in:

02-architecture.md

Do not create unnecessary folders.

Do not move files without reason.

---

# Data Rules

Never hardcode content.

All content must come from the data layer.

Content source:

04-content.md

---

# Design Rules

Follow:

03-design.md

Do not invent new colors.

Do not invent new spacing systems.

Do not invent typography.

Respect the design tokens.

---

# UX Rules

The portfolio should feel like:

- Enterprise Infrastructure Platform
- Modern Engineering Dashboard
- Premium Technical Product

Avoid:

- Generic developer portfolio
- Startup landing page
- Marketing website

---

# Animation Rules

Use subtle motion.

Allowed:

- Fade
- Slide
- Scale
- Count Up

Avoid:

- Bounce
- Spin
- Floating icons
- Heavy parallax
- Distracting effects

Motion should support usability.

---

# Performance

Prefer lazy loading.

Optimize images.

Minimize bundle size.

Avoid unnecessary dependencies.

Prefer server-friendly rendering when applicable.

---

# Accessibility

Support:

- Keyboard navigation
- Focus indicators
- Semantic HTML
- ARIA labels
- WCAG AA contrast

Accessibility is mandatory.

---

# Responsive Design

Desktop First.

Support:

- Desktop
- Laptop
- Tablet
- Mobile

No horizontal scrolling.

---

# SEO

Every page must include:

- Title
- Meta Description
- Open Graph
- Twitter Card

Generate semantic HTML.

---

# Error Handling

Never leave empty sections.

Provide meaningful fallback states.

Gracefully handle missing data.

---

# Documentation

Write clean code.

Use meaningful names.

Keep folder structure organized.

Avoid unnecessary comments.

Code should be self-explanatory.

---

# Refactoring

Prefer improving existing components.

Avoid rewriting working code unless necessary.

Reduce duplication.

Improve maintainability.

---

# Final Validation

Before considering the project complete, verify:

- TypeScript
- Responsive Design
- Accessibility
- Performance
- SEO
- Folder Structure
- Component Reusability
- Animation Consistency
- Code Quality

Only production-quality code is acceptable.

---

# AI Behavior

If uncertain,

Do NOT guess.

Refer back to the documentation.

The documentation is always the source of truth.