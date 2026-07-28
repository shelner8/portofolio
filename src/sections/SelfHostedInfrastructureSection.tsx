"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { BaseCard } from "@/components/cards/BaseCard"
import { animations } from "@/components/animations/presets"
import { Technology } from "@/types"
import { Server, Network, ShieldCheck, Activity, BrainCircuit, Box, LayoutGrid, CheckCircle2 } from "lucide-react"

interface SelfHostedInfrastructureSectionProps {
  technologies: Technology[]
}

const resolveTechLink = (techName: string, technologies: Technology[]) => {
  const match = technologies.find(t => t.name === techName || t.id === techName)
  if (match) {
    return (
      <Link key={techName} href={`/technology/${match.slug || match.id}`}>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-surface/50 border border-surface text-sm font-medium text-primary hover:text-accent-orange hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-colors cursor-pointer">
          {techName}
        </span>
      </Link>
    )
  }
  return (
    <span key={techName} className="inline-flex items-center px-3 py-1 rounded-full bg-surface/20 border border-surface/50 text-sm font-medium text-muted-foreground">
      {techName}
    </span>
  )
}

export function SelfHostedInfrastructureSection({ technologies }: SelfHostedInfrastructureSectionProps) {
  const cards = [
    {
      title: "Enterprise Networking Lab",
      icon: <Network className="w-6 h-6 text-accent-blue" />,
      description: "Production-like enterprise networking environment used to validate routing, switching, VPN, and modern data center architectures before deployment.",
      techLabel: "Technologies",
      techs: ["Aruba AOS-CX", "Aruba VSX", "EVPN", "VXLAN", "MP-BGP", "OSPF", "MikroTik", "Tailscale"]
    },
    {
      title: "Virtualization Platform",
      icon: <Server className="w-6 h-6 text-accent-purple" />,
      description: "Ubuntu-based virtualization platform hosting network laboratories, self-hosted services, AI workloads, and infrastructure management.",
      techLabel: "Platform",
      techs: ["Proxmox VE", "VMware ESXi", "Ubuntu Server"],
      subLabel: "Lab Environment",
      subTechs: ["EVE-NG", "PNETLab"]
    },
    {
      title: "Self-Hosted AI Platform",
      icon: <BrainCircuit className="w-6 h-6 text-accent-emerald" />,
      description: "Local AI platform supporting engineering documentation, infrastructure workflows, and private inference running entirely on self-hosted Ubuntu servers.",
      techLabel: "Technologies",
      techs: ["Ollama", "Hermes UI", "9Router", "Gemini API", "Ubuntu Server"]
    },
    {
      title: "Container Platform",
      icon: <Box className="w-6 h-6 text-accent-orange" />,
      description: "Containerized application platform running production and development services using Docker with centralized lifecycle management.",
      techLabel: "Technologies",
      techs: ["Docker", "Docker Compose", "Portainer", "Ubuntu Server"]
    },
    {
      title: "Infrastructure Services",
      icon: <LayoutGrid className="w-6 h-6 text-accent-blue" />,
      description: "Production self-hosted infrastructure providing DNS, reverse proxy, local domain resolution, and CCTV recording for daily operations.",
      techLabel: "Services",
      techs: ["AdGuard Home", "Nginx Reverse Proxy", "Agent DVR"],
      highlights: [
        "AdGuard Home is the primary DNS service for the home network.",
        "Nginx provides local domain names for internal services instead of accessing them via IP addresses.",
        "Agent DVR operates as the production CCTV recording platform."
      ]
    },
    {
      title: "Secure Connectivity",
      icon: <ShieldCheck className="w-6 h-6 text-accent-emerald" />,
      description: "Encrypted site-to-site connectivity between Ubuntu servers using overlay networking for secure remote access and infrastructure management.",
      techLabel: "Technologies",
      techs: ["Tailscale", "Site-to-Site VPN", "Ubuntu Server"]
    },
    {
      title: "Monitoring & Observability",
      icon: <Activity className="w-6 h-6 text-accent-purple" />,
      description: "Centralized monitoring platform providing visibility into Linux servers, MikroTik infrastructure, virtual machines, and self-hosted services.",
      techLabel: "Technologies",
      techs: ["Zabbix", "Beszel", "SNMP", "MikroTik", "Linux Monitoring"]
    }
  ]

  return (
    <section id="self-hosted" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-12 md:gap-16">
          <motion.div 
            variants={animations.fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-6 text-center items-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-surface border border-surface shadow-soft mb-2">
              <Server className="w-6 h-6 text-accent-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">Self-Hosted Enterprise Infrastructure</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Production-grade home infrastructure used to validate enterprise networking, virtualization, self-hosted services, AI workloads, secure connectivity, and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, idx) => (
              <motion.div 
                key={card.title}
                variants={animations.fadeUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
                custom={idx}
                className={idx === 4 ? "md:col-span-2 lg:col-span-2" : ""}
              >
                <BaseCard className="h-full p-6 flex flex-col gap-6 hoverable border-surface/60 hover:border-accent-orange/30">
                  <div className="flex items-center gap-4 border-b border-surface/50 pb-4">
                    <div className="p-3 rounded-xl bg-surface/50 shadow-inner">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary">{card.title}</h3>
                  </div>
                  
                  <p className="text-muted leading-relaxed flex-grow text-sm md:text-base">
                    {card.description}
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-auto">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{card.techLabel}</span>
                      <div className="flex flex-wrap gap-2">
                        {card.techs.map(t => resolveTechLink(t, technologies))}
                      </div>
                    </div>

                    {card.subLabel && card.subTechs && (
                      <div className="flex flex-col gap-2 mt-2">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{card.subLabel}</span>
                        <div className="flex flex-wrap gap-2">
                          {card.subTechs.map(t => resolveTechLink(t, technologies))}
                        </div>
                      </div>
                    )}

                    {card.highlights && (
                      <div className="flex flex-col gap-3 mt-3 pt-4 border-t border-surface/50">
                        {card.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent-orange mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </BaseCard>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={animations.fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4"
          >
            {[
              { label: "Production Services", value: "7+" },
              { label: "Virtualization Platforms", value: "3" },
              { label: "Self-Hosted Applications", value: "10+" },
              { label: "Infrastructure Monitoring", value: "24/7" },
            ].map((metric) => (
              <div key={metric.label} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-surface border border-surface text-center">
                <span className="text-2xl md:text-3xl font-bold text-primary mb-2 font-mono">{metric.value}</span>
                <span className="text-sm text-muted-foreground font-medium">{metric.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
