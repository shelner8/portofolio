# AI Prompt Library

Version: 1.0

This document contains reusable prompts for AI coding assistants.

Use these prompts with Cursor, Antigravity, Claude Code, Gemini CLI, OpenAI Codex, or similar tools.

---

# Prompt 01 — Read Documentation

Read every document inside the docs directory in numerical order.

Do not generate code.

After reading all documents, provide:

- Executive Summary
- Architecture Summary
- Component Hierarchy
- Folder Structure
- Technology Stack
- UX Strategy
- Development Plan

Wait for approval before writing code.

---

# Prompt 02 — Start Development

Begin implementing the project.

Requirements:

- Production quality
- Reusable components
- TypeScript
- Tailwind CSS
- Strictly follow architecture.md

Work incrementally.

Do not build the whole application at once.

---

# Prompt 03 — Create Design System

Build the design system first.

Include:

- Colors
- Typography
- Spacing
- Shadows
- Buttons
- Cards
- Badges
- Containers

No pages yet.

---

# Prompt 04 — Build Layout

Create:

- Layout
- Navbar
- Footer
- Container
- Theme Provider
- Global Styles

Use reusable components.

---

# Prompt 05 — Build Hero

Create the Hero section.

Requirements:

- Enterprise Dashboard aesthetic
- Infrastructure Panel
- Technology badges
- Statistics
- Professional CTA

Do not use profile photos.

---

# Prompt 06 — Continue Development

Continue with the next milestone.

Do not modify completed sections unless necessary.

Maintain consistency.

Reuse components.

---

# Prompt 07 — Build Projects

Create the Projects section.

Include:

- Project Cards
- Technology Badges
- Status Badge
- Detail Page
- Filtering (if applicable)

Follow content.md.

---

# Prompt 08 — Improve UI

Improve visual quality.

Goals:

- Better spacing
- Better typography
- Better hierarchy
- Better responsiveness

Do not redesign the application.

Improve existing work.

---

# Prompt 09 — Improve Animations

Review every animation.

Remove unnecessary motion.

Use subtle transitions.

Respect prefers-reduced-motion.

---

# Prompt 10 — Accessibility Review

Review the application.

Verify:

- Keyboard Navigation
- ARIA Labels
- Focus States
- Semantic HTML
- Contrast

Fix all issues.

---

# Prompt 11 — Performance Review

Optimize:

- Images
- Bundle Size
- Lazy Loading
- Rendering

Avoid unnecessary dependencies.

---

# Prompt 12 — Code Review

Review the entire codebase.

Identify:

- Duplicated code
- Large components
- Poor naming
- Type issues
- Architecture violations

Refactor where necessary.

---

# Prompt 13 — SEO Review

Verify:

- Metadata
- Open Graph
- Twitter Cards
- Structured Data
- Semantic HTML

Improve SEO without changing content.

---

# Prompt 14 — Production Review

Perform a final production readiness review.

Verify:

- TypeScript
- Performance
- Accessibility
- SEO
- Responsive Design
- Component Quality
- Folder Structure
- Documentation

The project should be deployment-ready.

---

# Prompt 15 — Future Feature

When implementing new features:

- Follow architecture.md
- Follow design.md
- Follow content.md
- Reuse existing components
- Maintain consistency
- Avoid introducing technical debt

Every new feature must integrate naturally with the existing architecture.