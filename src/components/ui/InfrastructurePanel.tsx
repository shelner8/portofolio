"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function InfrastructurePanel() {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-card border border-surface bg-card p-1 shadow-card-hover overflow-hidden group">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1F2937_1px,transparent_1px),linear-gradient(to_bottom,#1F2937_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
      
      {/* Glass effect container */}
      <div className="relative w-full h-full bg-background/50 backdrop-blur-sm rounded-[14px] p-6 flex flex-col gap-6">
        
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-surface/50 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent-red/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-yellow/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-accent-emerald/80" />
            </div>
            <span className="ml-2 text-xs font-mono text-muted tracking-wider">AOS-CX CORE FABRIC</span>
          </div>
          <div className="text-xs font-mono text-accent-emerald flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald"></span>
            </span>
            ONLINE
          </div>
        </div>
        
        {/* Topology Visualization */}
        <div className="flex-1 relative flex items-center justify-center w-full">
          {/* Abstract SVG Connections */}
          <svg viewBox="0 0 400 240" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            <style>
              {`
                @keyframes dash { to { stroke-dashoffset: -20; } }
                .anim-line { animation: dash 2s linear infinite; }
                .anim-line-reverse { animation: dash 3s linear infinite reverse; }
              `}
            </style>
            {/* Spine 1 to Leaves */}
            <path d="M 120,40 L 50,180" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line" />
            <path d="M 120,40 L 150,180" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line" />
            <path d="M 120,40 L 250,180" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line" />
            <path d="M 120,40 L 350,180" stroke="#3B82F6" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line" />
            
            {/* Spine 2 to Leaves */}
            <path d="M 280,40 L 50,180" stroke="#FF8300" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line-reverse" />
            <path d="M 280,40 L 150,180" stroke="#FF8300" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line-reverse" />
            <path d="M 280,40 L 250,180" stroke="#FF8300" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line-reverse" />
            <path d="M 280,40 L 350,180" stroke="#FF8300" strokeWidth="2" fill="none" strokeDasharray="4 4" className="anim-line-reverse" />
          </svg>

          {/* Spine Switches */}
          <div className="absolute top-2 w-full flex justify-around px-8">
            {["SPINE-01", "SPINE-02"].map((name, i) => (
              <motion.div 
                key={name}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="w-20 h-14 rounded bg-surface/80 border border-muted/20 flex flex-col items-center justify-center shadow-soft backdrop-blur-md"
              >
                <div className="text-[10px] text-primary font-mono">{name}</div>
                <div className={cn("w-10 h-1 rounded mt-1", i === 0 ? "bg-accent-blue/80" : "bg-accent-orange/80")} />
              </motion.div>
            ))}
          </div>

          {/* Leaf Switches */}
          <div className="absolute bottom-6 w-full flex justify-between px-2">
            {[1, 2, 3, 4].map(i => (
              <motion.div 
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="w-16 h-12 rounded bg-surface/80 border border-muted/20 flex flex-col items-center justify-center relative z-10 group-hover:border-accent-emerald/40 transition-colors backdrop-blur-md"
              >
                <div className="text-[10px] text-primary font-mono">LEAF-0{i}</div>
                <div className="flex gap-1 mt-1.5">
                  <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-1.5 h-1.5 bg-accent-emerald rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Status terminal */}
        <div className="h-20 bg-black/40 rounded border border-surface/50 p-3 font-mono text-[11px] text-accent-emerald overflow-hidden relative">
          <motion.div
            initial={{ y: 30 }}
            animate={{ y: -30 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="flex flex-col gap-1"
          >
            <div className="opacity-70">&gt; Initializing fabric discovery...</div>
            <div className="opacity-80">&gt; Spine-Leaf topology verified</div>
            <div>&gt; BGP EVPN peering established</div>
            <div>&gt; VXLAN tunnels active: 4</div>
            <div>&gt; VSX clustering synchronized</div>
            <div>&gt; Route targets imported</div>
            <div>&gt; Traffic shaping optimal</div>
            <div>&gt; Waiting for updates... <span className="animate-pulse">_</span></div>
          </motion.div>
          {/* Gradient mask for smooth terminal fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
