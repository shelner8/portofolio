# design.md

# Personal Portfolio Design System

## Project

**Personal Portfolio – Senior Data Center Network Engineer**

---

# Design Philosophy

The website should communicate the personality of a modern infrastructure engineer who works with enterprise-scale networks and mission-critical data centers.

The interface must feel:

* Professional
* Premium
* Modern
* Clean
* Technical
* Minimal
* Enterprise-grade

Avoid flashy animations or overly decorative visuals. Every design decision should reinforce trust, technical expertise, and clarity.

---

# Design Inspiration

Inspired by the visual quality of:

* Vercel
* Cloudflare
* Cisco Live
* Aruba Networking
* NVIDIA
* GitHub
* Linear
* Raycast
* Stripe
* Apple Developer

The design should feel like a product website rather than a traditional resume.

---

# Design Language

Style:

Modern Enterprise

Minimalist

Dark First

Technical

Premium

Elegant

---

# Theme

Primary Theme

Dark Mode

Secondary Theme

Light Mode (optional)

---

# Color Palette

## Background

Primary

#0B1120

Secondary

#111827

Surface

#1F2937

Card

#1E293B

---

## Text

Primary

#F8FAFC

Secondary

#CBD5E1

Muted

#94A3B8

---

## Accent

Aruba Orange

#FF8300

Enterprise Blue

#3B82F6

Emerald

#10B981

Purple

#8B5CF6

Red

#EF4444

Yellow

#FACC15

---

# Typography

Primary Font

Inter

Secondary Font

JetBrains Mono

Use JetBrains Mono only for:

* CLI commands
* Configuration snippets
* Network protocol labels
* IP addresses
* VLAN IDs
* BGP ASN
* Technical tags

---

# Layout

Max Width

1440px

Content Width

1280px

Reading Width

760px

Spacing System

8px grid

Container

Centered

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Maximum Container Width

1280px

Content Width

760px

Section Width

100%

Use consistent spacing across all pages.

---

# Spacing System

Base Unit

8px

Section Padding

Desktop

120px

Tablet

96px

Mobile

72px

Card Gap

32px

Component Gap

24px

Text Gap

16px

Vertical Rhythm

Consistent throughout every page.

---
# Border Radius

Cards

18px

Buttons

14px

Inputs

12px

Badges

999px

---

# Shadows

Use soft shadows only.

Avoid heavy shadows.

Cards should appear elevated but subtle.

---

# Navigation

Sticky Navigation Bar

Transparent on top

Blur background when scrolling

Height

72px

Navigation Items

* Home
* About
* Expertise
* Projects
* Experience
* Certifications
* Articles
* Contact

CTA Button

Download Resume

---

# Hero Section

Full viewport height

Split layout

Left:

* Name
* Professional Title
* Description
* CTA Buttons

Right:

Animated technical illustration

Possible visuals:

* Data Center rack
* Network topology
* EVPN fabric
* Abstract network mesh
* Floating technology icons

Background

Animated particles

Gradient glow

Subtle moving connection lines

---

# About Section

Two-column layout

Left

Professional portrait

Right

Biography

Career highlights

Professional philosophy

Statistics

Cards

Years of Experience

Projects

Certifications

Technologies

Enterprise Deployments

---

# Expertise Section

Grid layout

Each category displayed as a modern card.

Categories:

Data Center

Enterprise Networking

Automation

Security

Monitoring

Linux

Cloud

Each card contains:

Icon

Description

Technology badges

Skill level indicator

---

# Skill Visualization

Avoid traditional progress bars.

Use:

Technology chips

Badge collections

Interactive cards

Grouped technologies

Hover effects

Example:

Data Center

Aruba CX

VSX

VSF

EVPN

VXLAN

L3VNI

L2VNI

BGP

MPLS

---

# Data Center Expertise

This is the flagship section.

Use horizontal content blocks.

Each architecture topic should include:

Title

Overview

Architecture diagram

Traffic flow

Benefits

Use Cases

Best Practices

Lessons Learned

Topics

Leaf Spine

EVPN

VXLAN

VSX

Border Leaf

Anycast Gateway

High Availability

Multi Site

Fabric Composer

---

# Architecture Gallery

Modern gallery layout

Hover animation

Large preview

Fullscreen viewer

Each diagram contains:

Description

Technology

Environment

Purpose

---

# Projects

Grid of project cards

Each project includes:

Hero image

Project title

Short description

Technology badges

Read More button

Clicking opens:

Problem

Solution

Architecture

Challenges

Lessons Learned

Gallery

Timeline

---

# Experience

Vertical timeline

Each timeline card contains:

Company

Position

Period

Responsibilities

Technologies

Achievements

---

# Certifications

Premium certificate cards

Each card displays:

Badge

Certificate Name

Issuer

Issue Date

Credential ID

Verify Button

Download PDF

Hover animation

---

# Articles

Blog card layout

Thumbnail

Category

Title

Reading Time

Published Date

Tag

Search functionality

Category filters

---

# Resume

Embedded PDF viewer

Download button

Print button

Simple layout

---

# Contact

Centered layout

Professional photo

Short introduction

Social buttons

LinkedIn

GitHub

Email

WhatsApp

Contact form

---

# Footer

Minimal

Professional quote

Social links

Copyright

---

# Components

Buttons

Primary

Filled Aruba Orange

Secondary

Outlined

Ghost

Text only

Danger

Red

---

# Component Library

The design system should include reusable components.

Core Components

- Navigation Bar
- Hero Section
- Section Header
- CTA Banner
- Footer

Content Components

- Project Card
- Experience Card
- Certification Card
- Technology Card
- Article Card
- Timeline Card
- Architecture Card

Interactive Components

- Accordion
- Tabs
- Modal
- Image Lightbox
- Tooltip
- Search Bar
- Filter Chips

Form Components

- Contact Form
- Input
- Textarea
- Button
- Checkbox
---
# Cards

Rounded

Soft shadows

Glass effect (very subtle)

Hover lift

---

# Card Variants

Project Card

Large Image

Technology Tags

Summary

Read More

Hover Animation

Architecture Card

Diagram Preview

Technology

Description

Open Detail

Certification Card

Badge

Issuer

Credential

Verify Button

Experience Card

Company

Position

Timeline

Responsibilities

Technology Tags

Article Card

Thumbnail

Category

Reading Time

Publish Date

Technology Card

Icon

Description

Technology Chips

---
# Tags

Rounded badges

Color coded

Examples

EVPN

VXLAN

BGP

Python

Docker

Linux

Automation

---

# Icons

Lucide Icons

Simple

Outline style

No filled icons

---

# Icon Guidelines

Use Lucide Icons exclusively.

Style

Outline

Rounded

Consistent Stroke Width

Sizes

16px

20px

24px

32px

Icons should always accompany labels where appropriate.

Avoid decorative icons without purpose.

---

# Motion Design

Framer Motion

Animations should feel smooth.

Avoid excessive movement.

Use:

Fade

Slide Up

Scale

Hover Lift

Count Up

Reveal on Scroll

Page Transition

---

# Micro Interactions

Buttons

Hover

Press

Focus

Cards

Lift

Glow

Scale

Navigation

Smooth underline animation

Page

Fade transition

Images

Zoom on hover

Technology Chips

Subtle color transition

Links

Underline animation

---

# Interactive Elements

Hover effects

Mouse parallax (minimal)

Animated counters

Technology tooltip

Diagram zoom

Image lightbox

Smooth scrolling

---

# Background Effects

Gradient mesh

Blurred glowing circles

Subtle grid pattern

Animated particles

No distracting effects

---

# Image Guidelines

Architecture Diagrams

SVG Preferred

White Background

Minimal Style

Project Images

16:9 Ratio

Rounded Corners

High Resolution

Professional Photography

Dark Background

Studio Lighting

Technical Atmosphere

Avoid stock photos whenever possible.

---

# Responsive Design

Desktop First

Breakpoints

Desktop

1440px

Laptop

1280px

Tablet

768px

Mobile

390px

All layouts must adapt gracefully.

---

# Mobile Experience

Navigation

Hamburger Menu

Hero

Stacked Layout

Projects

Single Column

Timeline

Vertical

Gallery

Swipe Carousel

Technology Cards

Responsive Grid

Contact

Single Column

Every interaction should remain thumb-friendly.

---

# Accessibility

Minimum AA contrast

Keyboard navigation

Screen reader support

Focus indicators

Large clickable areas

Semantic HTML

---

# Performance

Lighthouse Score

95+

Lazy Loading

Enabled

Image Optimization

Enabled

Code Splitting

Enabled

SEO Optimized

Yes

---

# Technology Stack

Framework

Next.js

Language

TypeScript

Styling

Tailwind CSS

Components

shadcn/ui

Icons

Lucide

Animation

Framer Motion

Image Optimization

Next Image

Deployment

Vercel

---

# Illustration Style

Use modern vector illustrations.

Avoid cartoons.

Preferred themes:

* Data Center
* Network Architecture
* Server Rack
* Cloud Connectivity
* Enterprise Infrastructure
* Fiber Network
* Packet Flow
* Technology Mesh

---

# Photography Style

Professional

Dark background

Studio lighting

Minimal

Technical atmosphere

---

# User Experience Principles

* Navigation should require minimal clicks.
* Important information should appear within the first screen.
* Every section should encourage exploration.
* Visual hierarchy should clearly distinguish headings, content, and actions.
* Technical depth should be presented progressively, allowing both recruiters and engineers to find relevant information.
* Every animation should have a purpose and enhance usability rather than distract.

---

# Overall Impression

When visitors open the website, they should immediately think:

> "This is not just another Network Engineer portfolio."

Instead, the experience should communicate:

* Enterprise Infrastructure Specialist
* Data Center Architect
* Senior Network Engineer
* Technical Leader
* Modern Infrastructure Professional

The website should feel polished, technically credible, and memorable—similar to the portfolio of an engineer who designs, operates, and modernizes enterprise-scale data center networks.

---

# Loading & Empty States

Loading

Use Skeleton Components.

Animate placeholders smoothly.

Empty States

Illustration

Helpful Message

Action Button

Error States

Friendly messaging

Retry Button

Consistent styling across all pages.

---

# Design Constraints

Avoid:

- Generic portfolio templates
- Overly colorful interfaces
- Excessive animations
- Unnecessary gradients
- Large paragraphs
- Progress bars for technical skills

Prefer:

- Enterprise aesthetics
- Strong typography
- Clean spacing
- Meaningful animations
- Architecture-first storytelling
- Real project emphasis
- Technical credibility over decoration