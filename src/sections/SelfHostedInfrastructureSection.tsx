"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { BaseCard } from "@/components/cards/BaseCard"
import { animations } from "@/components/animations/presets"
import { Technology } from "@/types"
import { Server, Network, ShieldCheck, Activity, BrainCircuit, Box, LayoutGrid } from "lucide-react"

interface SelfHostedInfrastructureSectionProps {
  technologies: Technology[]
}

const resolveTechLink = (techName: string, technologies: Technology[]) => {
  const match = technologies.find(t => t.name === techName || t.id === techName)
  if (match) {
    return (
      <Link key={techName} href={`/technology/${match.slug || match.id}`}>
        <span className="inline-flex items-center px-3 py-1.5 rounded bg-surface/40 border border-surface text-sm font-medium text-primary hover:text-accent-orange hover:border-accent-orange/50 hover:bg-accent-orange/10 transition-colors cursor-pointer shadow-sm">
          {techName}
        </span>
      </Link>
    )
  }
  return (
    <span key={techName} className="inline-flex items-center px-3 py-1.5 rounded bg-surface/20 border border-surface/50 text-sm font-medium text-muted-foreground shadow-sm">
      {techName}
    </span>
  )
}

export function SelfHostedInfrastructureSection({ technologies }: SelfHostedInfrastructureSectionProps) {
  const panels = [
    {
      title: "Hypervisor",
      icon: <Server className="w-5 h-5 text-accent-purple" />,
      techs: ["Proxmox VE", "VMware ESXi", "Ubuntu Server"]
    },
    {
      title: "Networking",
      icon: <Network className="w-5 h-5 text-accent-blue" />,
      techs: ["MikroTik", "Aruba AOS-CX", "Tailscale"]
    },
    {
      title: "Network Simulation",
      icon: <Network className="w-5 h-5 text-accent-blue" />,
      techs: ["EVE-NG", "PNETLab"]
    },
    {
      title: "Container Platform",
      icon: <Box className="w-5 h-5 text-accent-orange" />,
      techs: ["Docker", "Docker Compose", "Portainer"]
    },
    {
      title: "AI Platform",
      icon: <BrainCircuit className="w-5 h-5 text-accent-emerald" />,
      techs: ["Ollama", "Hermes UI", "9Router", "Gemini API"]
    },
    {
      title: "Infrastructure Services",
      icon: <LayoutGrid className="w-5 h-5 text-accent-blue" />,
      techs: ["AdGuard Home", "Nginx Reverse Proxy", "Agent DVR"]
    },
    {
      title: "Monitoring",
      icon: <Activity className="w-5 h-5 text-accent-purple" />,
      techs: ["Zabbix", "Beszel", "SNMP"]
    },
    {
      title: "Secure Connectivity",
      icon: <ShieldCheck className="w-5 h-5 text-accent-emerald" />,
      techs: ["Tailscale", "Site-to-Site VPN"]
    }
  ]

  return (
    <section id="self-hosted" className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-orange/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="flex flex-col gap-10 md:gap-14">
          <motion.div 
            variants={animations.fadeUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col gap-4 text-center items-center"
          >
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-surface border border-surface shadow-soft mb-2">
              <Server className="w-6 h-6 text-accent-orange" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">Self-Hosted Enterprise Infrastructure</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
              Production-grade home infrastructure used to validate enterprise networking, virtualization, self-hosted services, AI workloads, secure connectivity, and monitoring.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
            {panels.map((panel, idx) => (
              <motion.div 
                key={panel.title}
                variants={animations.fadeUp}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true, margin: "-50px" }}
                custom={idx}
                className=""
              >
                <div className="flex flex-col bg-surface/30 border border-surface/80 rounded-xl overflow-hidden hover:border-accent-orange/30 transition-colors h-full">
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-surface/50 bg-surface/20">
                    {panel.icon}
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">{panel.title}</h3>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2">
                      {panel.techs.map(t => resolveTechLink(t, technologies))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
