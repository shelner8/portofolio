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
      title: "Enterprise Networking",
      icon: <Network className="w-6 h-6 text-accent-blue" />,
      description: "Personal networking lab for learning, validation, and testing enterprise network technologies.",
      techs: ["Aruba AOS-CX", "Aruba VSX", "EVPN", "VXLAN", "MP-BGP", "OSPF", "MikroTik", "Tailscale"]
    },
    {
      title: "Virtualization",
      icon: <Server className="w-6 h-6 text-accent-purple" />,
      description: "Virtualization platform hosting networking labs and self-hosted infrastructure.",
      techs: ["Proxmox VE", "VMware ESXi", "Ubuntu Server", "EVE-NG", "PNETLab"]
    },
    {
      title: "AI Platform",
      icon: <BrainCircuit className="w-6 h-6 text-accent-emerald" />,
      description: "Local AI services running entirely within my home lab.",
      techs: ["Ollama", "Hermes UI", "9Router", "Gemini API"]
    },
    {
      title: "Containers",
      icon: <Box className="w-6 h-6 text-accent-orange" />,
      description: "Containerized applications managed for development and production services.",
      techs: ["Docker", "Docker Compose", "Portainer"]
    },
    {
      title: "Infrastructure Services",
      icon: <LayoutGrid className="w-6 h-6 text-accent-blue" />,
      description: "Production services used daily across my home network.",
      techs: ["AdGuard Home", "Nginx Reverse Proxy", "Agent DVR"]
    },
    {
      title: "Monitoring",
      icon: <Activity className="w-6 h-6 text-accent-purple" />,
      description: "Infrastructure monitoring for servers, containers, and network devices.",
      techs: ["Zabbix", "Beszel", "SNMP", "MikroTik"]
    },
    {
      title: "Secure Connectivity",
      icon: <ShieldCheck className="w-6 h-6 text-accent-emerald" />,
      description: "Encrypted site-to-site connectivity between Ubuntu servers.",
      techs: ["Tailscale", "Site-to-Site VPN", "Ubuntu Server"]
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
                  
                  <div className="flex flex-col gap-4 mt-auto pt-4">
                    <div className="flex flex-wrap gap-2">
                      {card.techs.map(t => resolveTechLink(t, technologies))}
                    </div>
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
