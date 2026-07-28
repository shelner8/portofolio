"use client"

import React from "react"
import { motion } from "framer-motion"

const Node = ({ x, y, width, height, title, subtitle, status = true, customGlow = false }: { x: number, y: number, width: number, height: number, title: string, subtitle: string, status?: boolean, customGlow?: boolean }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect 
      width={width} 
      height={height} 
      rx="8" 
      fill="rgba(15, 23, 42, 0.9)" 
      stroke={customGlow ? "rgba(249, 115, 22, 0.5)" : "rgba(255, 255, 255, 0.15)"} 
      strokeWidth="1.5" 
      filter={customGlow ? "drop-shadow(0 0 10px rgba(249, 115, 22, 0.2))" : "drop-shadow(0 4px 6px rgba(0,0,0,0.5))"} 
    />
    {status && <circle cx="20" cy="24" r="5" fill="#10b981" filter="drop-shadow(0 0 5px #10b981)" />}
    <text x={status ? "35" : "20"} y="29" fill="#f8fafc" fontSize="16" fontWeight="600" fontFamily="monospace">{title}</text>
    <text x="20" y="55" fill="#94a3b8" fontSize="14" fontFamily="monospace">{subtitle}</text>
  </g>
)

const AnimatedLine = ({ x1, y1, x2, y2, reverse = false }: { x1: number, y1: number, x2: number, y2: number, reverse?: boolean }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
    <motion.line 
      x1={x1} y1={y1} x2={x2} y2={y2} 
      stroke="#f97316" 
      strokeWidth="2" 
      strokeDasharray="4 8"
      initial={{ strokeDashoffset: reverse ? -24 : 24 }}
      animate={{ strokeDashoffset: reverse ? 0 : 0 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </g>
)

export function FabricArchitectureDiagram() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl relative my-12">
      <div className="p-6 border-b border-surface/50 bg-[#0f172a]">
        <h3 className="text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
          Data Center Fabric Architecture
        </h3>
      </div>
      <div className="w-full overflow-x-auto p-4 flex justify-center">
        <svg viewBox="0 0 1000 800" className="w-full max-w-[1000px] h-auto min-w-[800px]" style={{ maxHeight: '70vh' }}>
          <defs>
            <linearGradient id="fabricGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(249, 115, 22, 0.05)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.15)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0.05)" />
            </linearGradient>
          </defs>

          {/* Links */}
          <AnimatedLine x1={500} y1={130} x2={500} y2={180} />
          <AnimatedLine x1={500} y1={260} x2={500} y2={310} />
          <AnimatedLine x1={500} y1={390} x2={370} y2={440} />
          <AnimatedLine x1={500} y1={390} x2={630} y2={440} />

          {/* Spine 1 to Leaves */}
          <AnimatedLine x1={370} y1={520} x2={170} y2={570} />
          <AnimatedLine x1={370} y1={520} x2={390} y2={570} />
          <AnimatedLine x1={370} y1={520} x2={610} y2={570} />
          <AnimatedLine x1={370} y1={520} x2={830} y2={570} />

          {/* Spine 2 to Leaves */}
          <AnimatedLine x1={630} y1={520} x2={170} y2={570} />
          <AnimatedLine x1={630} y1={520} x2={390} y2={570} />
          <AnimatedLine x1={630} y1={520} x2={610} y2={570} />
          <AnimatedLine x1={630} y1={520} x2={830} y2={570} />

          {/* Nodes */}
          <Node x={390} y={50} width={220} height={80} title="Core VSX" subtitle="Aruba CX8325" />
          <Node x={390} y={180} width={220} height={80} title="Border Leaf VSX" subtitle="Aruba CX8360-48XT4C" />
          
          {/* Fabric Cloud */}
          <g transform="translate(250, 310)">
            <rect width={500} height={80} rx="40" fill="url(#fabricGrad)" stroke="rgba(249, 115, 22, 0.4)" strokeWidth="2" strokeDasharray="6 6" />
            <text x="250" y="45" fill="#f8fafc" fontSize="18" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EVPN-VXLAN Multi-VRF Fabric</text>
          </g>

          {/* Spines */}
          <Node x={260} y={440} width={220} height={80} title="Spine-01" subtitle="Aruba CX8360-12C" customGlow />
          <Node x={520} y={440} width={220} height={80} title="Spine-02" subtitle="Aruba CX8360-12C" customGlow />

          {/* Leaves */}
          <Node x={70} y={570} width={200} height={80} title="Leaf-01" subtitle="Aruba CX10000" />
          <Node x={290} y={570} width={200} height={80} title="Leaf-02" subtitle="Aruba CX10000" />
          <Node x={510} y={570} width={200} height={80} title="Leaf-03" subtitle="Aruba CX10000" />
          <Node x={730} y={570} width={200} height={80} title="Leaf-04" subtitle="Aruba CX10000" />

          {/* Footer Metrics / Metadata */}
          <g transform="translate(50, 700)">
            <rect width={210} height={60} rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="20" y="25" fill="#94a3b8" fontSize="12" fontFamily="monospace">Underlay</text>
            <text x="20" y="45" fill="#10b981" fontSize="14" fontWeight="bold" fontFamily="monospace">OSPF</text>

            <rect x={230} width={210} height={60} rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="250" y="25" fill="#94a3b8" fontSize="12" fontFamily="monospace">Overlay</text>
            <text x="250" y="45" fill="#10b981" fontSize="14" fontWeight="bold" fontFamily="monospace">BGP EVPN</text>

            <rect x={460} width={210} height={60} rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="480" y="25" fill="#94a3b8" fontSize="12" fontFamily="monospace">Automation</text>
            <text x="480" y="45" fill="#3b82f6" fontSize="14" fontWeight="bold" fontFamily="monospace">Aruba Fabric Composer</text>

            <rect x={690} width={210} height={60} rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x="710" y="25" fill="#94a3b8" fontSize="12" fontFamily="monospace">Segmentation</text>
            <text x="710" y="45" fill="#f97316" fontSize="14" fontWeight="bold" fontFamily="monospace">Multi-VRF</text>
          </g>
        </svg>
      </div>
    </div>
  )
}
