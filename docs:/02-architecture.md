# Architecture Document

## Project

Personal Portfolio

Data Center Network Specialist & Enterprise Network Engineer

Version 1.0

---

# Purpose

This document defines the technical architecture of the portfolio application.

Its purpose is to ensure that every implementation follows the same engineering principles, coding standards, component hierarchy, design language, and performance goals.

This document is intended for AI-assisted development platforms such as Lovable while remaining understandable for human developers.

---

# Application Philosophy

This portfolio is not a traditional personal website.

It should feel like a modern enterprise engineering product.

The experience should communicate professionalism, reliability, technical depth, and operational excellence.

Visitors should immediately recognize that the portfolio belongs to an engineer specializing in enterprise infrastructure and modern data center technologies.

The interface should resemble a premium SaaS dashboard rather than a marketing landing page.

---

# Engineering Principles

Every implementation must prioritize:

* Simplicity
* Maintainability
* Scalability
* Performance
* Accessibility
* Reliability
* Reusability
* Consistency

Avoid unnecessary complexity.

Prefer clean architecture over clever code.

---

# Technical Stack

Framework

* Next.js (App Router)

Language

* TypeScript

UI

* React

Styling

* Tailwind CSS

Animation

* Framer Motion

Icons

* Lucide React

Theme

* next-themes

Markdown

* MDX

Syntax Highlight

* Shiki

Image

* next/image

Analytics

* Vercel Analytics

Deployment

* Vercel

Package Manager

* pnpm

---

# Application Goals

The application should:

* Load quickly
* Be fully responsive
* Follow accessibility standards
* Support dark mode
* Be SEO optimized
* Support future expansion
* Be component-driven
* Require minimal maintenance

---

# High Level Architecture

Application

├── Layout

├── Navigation

├── Sections

├── Shared Components

├── UI Components

├── Data Layer

├── Utilities

├── Assets

└── Configuration

Every module should have a single responsibility.

---

# Folder Structure

src/

app/

components/

sections/

ui/

cards/

layout/

navigation/

animations/

shared/

data/

hooks/

lib/

types/

styles/

assets/

public/

content/

---

# Folder Responsibilities

## app

Contains routes using the Next.js App Router.

Responsibilities

* Layout
* Metadata
* Pages
* SEO
* Route Configuration

---

## components

Reusable UI elements.

No business logic.

Reusable everywhere.

---

## sections

Each homepage section is isolated.

Examples

Hero

About

Expertise

Projects

Experience

Articles

Certifications

Contact

Footer

---

## ui

Atomic UI components.

Examples

Button

Badge

Card

Input

Dialog

Tabs

Tooltip

Accordion

Avatar

Chip

---

## cards

Dedicated card components.

ProjectCard

TechnologyCard

CertificationCard

ArticleCard

ExperienceCard

StatisticCard

---

## shared

Reusable helper components.

Examples

SectionTitle

Container

Divider

GradientText

AnimatedNumber

SocialLinks

TagList

---

## animations

Framer Motion variants.

Never place animation definitions directly inside sections.

Use centralized animation presets.

---

## hooks

Custom React Hooks.

Examples

useTheme()

useScroll()

useWindowSize()

useIntersection()

useCopyClipboard()

---

## lib

Utilities.

Formatting

Helpers

SEO

Metadata

Constants

---

## data

Structured content.

Avoid hardcoded text inside components.

Use JSON or TypeScript objects.

Example

projects.ts

skills.ts

articles.ts

experience.ts

certifications.ts

---

# Routing

Home

/

Articles

/articles

Projects

/projects

Resume

/resume

Contact

/contact

404

/not-found

---

# Layout Hierarchy

RootLayout

↓

Navbar

↓

Main

↓

Sections

↓

Footer

No section should control another section.

Each section should be self-contained.

---

# Section Order

Navbar

↓

Hero

↓

Professional Summary

↓

Core Expertise

↓

Data Center Excellence

↓

Featured Projects

↓

Technical Stack

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

---

# Component Philosophy

Components should be:

Independent

Reusable

Typed

Composable

Small

Readable

Testable

Avoid monolithic components.

Maximum recommendation:

250–300 lines per component.

Split larger components.

---

# Component Naming

Good

ProjectCard.tsx

HeroStats.tsx

TechnologyBadge.tsx

ExperienceTimeline.tsx

Avoid

component.tsx

card.tsx

section.tsx

test.tsx

Meaningful names only.

---

# Props Design

Prefer explicit props.

Avoid deeply nested objects unless necessary.

Good Example

title

description

icon

link

image

tags

Avoid

data

item

object

info

---

# Data Flow

Static Data

↓

Type Definition

↓

Data Layer

↓

Section

↓

Card Component

↓

UI Component

Never hardcode content directly inside UI components.

---

# State Management

Prefer local component state.

Global state should only be introduced when genuinely needed.

Use React Context only for:

* Theme
* Global Preferences

Avoid unnecessary state libraries.

---

# Type Safety

Every object should have a TypeScript interface.

Examples

Project

Article

Certification

Experience

Technology

Skill

Avoid use of any.

Strict typing is required.

---

# Error Handling

Gracefully handle:

Missing images

Missing data

Empty arrays

Broken links

Network failures

Display friendly fallback UI instead of blank sections.

---

# Architecture Principles

Feature-first organization.

Component-first development.

Data-driven rendering.

Minimal duplication.

Consistent naming.

Strong typing.

Performance by default.

Accessibility by default.

SEO by default.

---

# Component Architecture

Every section must be completely isolated.

Each section should only consume data through props and should never directly depend on another section.

```
Page

├── Navbar
├── Hero
├── Summary
├── Expertise
├── DataCenter
├── Projects
├── Experience
├── Certifications
├── Articles
├── Contact
└── Footer
```

Each section should support lazy rendering if necessary.

---

# Hero Architecture

The Hero is the first impression.

Avoid generic portfolio layouts.

Do not use:

* Huge profile image
* Large paragraph
* Random floating icons

Instead, create an enterprise dashboard style.

```
Hero

├── Status Badge
├── Name
├── Professional Title
├── Summary
├── CTA Buttons
├── Technology Badges
├── Statistics
└── Infrastructure Panel
```

---

## Infrastructure Panel

Display operational information.

Example

```
Status

ONLINE

Location

Indonesia

Role

Data Center Network Specialist

Availability

Open to Collaboration

Focus

Enterprise Infrastructure

Specialization

EVPN VXLAN

Vendor

Aruba Networking
```

This panel should visually resemble a monitoring dashboard.

---

# Navigation Architecture

Navbar should remain minimal.

```
Logo

↓

Navigation

↓

Theme Switch

↓

Resume Button
```

Menu

* Home
* Expertise
* Projects
* Experience
* Articles
* Contact

Sticky navigation.

Glass morphism background.

Blur effect.

Height

72px

---

# Section Layout

Every section should follow exactly the same structure.

```
Container

↓

Section Header

↓

Description

↓

Content

↓

Footer Link
```

This keeps visual rhythm consistent.

---

# Grid Rules

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Use CSS Grid.

Avoid Flexbox for page layouts unless appropriate.

---

# Card System

All cards inherit from BaseCard.

```
Base Card

↓

Project Card

↓

Technology Card

↓

Experience Card

↓

Article Card

↓

Certification Card

↓

Statistic Card
```

Never duplicate styling.

---

# Base Card

Every card should include:

Padding

Rounded Corners

Hover Transition

Shadow

Border

Background Blur

Optional Glow

---

# Card Behavior

Hover

↓

Shadow Increase

↓

Border Highlight

↓

Scale 1.02

↓

Icon Animation

↓

Smooth Return

Animation duration

200ms

Never bounce.

Never rotate cards.

---

# Statistic Cards

Used inside Hero.

```
Experience

Projects

Deployments

Certifications

Technologies

Articles
```

Animated Number.

Simple icon.

Minimal description.

---

# Technology Cards

Each technology includes

Icon

Technology Name

Category

Experience Level

Short Description

Example

```
Aruba CX

Data Center

Expert

Modern enterprise switching platform.
```

---

# Project Cards

Each project displays

Cover Image

Project Name

Technology Tags

Architecture Type

Project Summary

Status

Button

---

## Project Status

Display badge.

Production

Lab

Completed

In Progress

Research

---

## Project Metadata

Vendor

Architecture

Role

Duration

Environment

High Availability

Automation

---

# Experience Timeline

Desktop

Vertical timeline.

Mobile

Stacked cards.

Each entry contains

Company

Role

Duration

Summary

Technologies

Key Contributions

---

# Certification Cards

Logo

Certification

Vendor

Level

Verification

Issue Date

Expiration

---

# Article Cards

Thumbnail

Title

Reading Time

Category

Published Date

Tags

---

# Contact Cards

Display

Email

LinkedIn

GitHub

Location

Resume

Icons only.

Minimal style.

---

# Animation System

Animations should support content.

Never distract users.

Animation hierarchy

Level 1

Page Load

Fade

Level 2

Section Entry

Slide Up

Level 3

Card Hover

Scale

Level 4

Button Hover

Opacity

Never animate everything simultaneously.

---

# Motion Rules

Only animate when useful.

Avoid

Continuous floating

Infinite spinning

Aggressive parallax

Heavy blur

Complex transitions

Prefer

Fade

Scale

Slide

Opacity

---

# Scroll Animations

Every section

Fade Up

Delay

80ms

Cards

Stagger

60ms

Statistics

Count Up

Buttons

Fade

---

# Theme System

Support

Light

Dark

System

Dark Mode is the primary design.

Light mode is secondary.

---

# Color Tokens

Primary

Blue

Secondary

Slate

Accent

Cyan

Success

Green

Warning

Amber

Danger

Red

Background

Near Black

Surface

Dark Slate

Border

Gray

Use Tailwind design tokens.

Never hardcode colors.

---

# Typography Rules

Heading

Bold

Body

Readable

Caption

Muted

Code

Monospace

Maintain strong visual hierarchy.

---

# Icon System

Lucide React only.

Categories

Infrastructure

Security

Cloud

Monitoring

Automation

Networking

Development

Operations

Icon size

20–24px

---

# Badge System

Badge Types

Technology

Vendor

Status

Certification

Category

Difficulty

Badges should be compact.

Never oversized.

---

# Button System

Primary

Filled

Secondary

Outline

Ghost

Transparent

Icon Button

Square

Buttons use consistent height.

---

# Responsive Rules

Desktop First.

Breakpoints

Desktop

1440+

Laptop

1280

Tablet

1024

Small Tablet

768

Mobile

480

Small Mobile

360

---

# Mobile Rules

Collapse navigation.

Reduce spacing.

Hide decorative backgrounds.

Stack cards vertically.

Keep touch targets at least 44px.

---

# Accessibility

Keyboard Navigation

Required.

Focus Ring

Visible.

Color Contrast

WCAG AA.

Semantic HTML

Required.

ARIA Labels

Required.

Images

Always include alt text.

---

# Loading Strategy

Lazy load

Project Images

Article Images

Heavy Sections

Dynamic Charts

Keep Hero immediately visible.

---

# Empty States

Every list should gracefully handle empty data.

Show helpful guidance.

Never display blank containers.

---

# Error States

Broken image

↓

Placeholder

Broken article

↓

Hide card

Missing data

↓

Fallback value

Unexpected error

↓

Friendly message

---

# UX Principles

Users should always understand

Where they are

What they are viewing

What action comes next

Navigation must remain predictable.

---

# Visual Identity

Overall impression should communicate

Enterprise

Reliable

Professional

Modern

Scalable

Minimal

Technical

Architectural

Never resemble a personal blog.

Never resemble a startup landing page.

The final experience should feel closer to an internal engineering platform used by enterprise infrastructure teams than to a traditional portfolio website.
