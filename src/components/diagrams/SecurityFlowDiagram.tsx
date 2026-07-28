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
      stroke={customGlow ? "rgba(59, 130, 246, 0.5)" : "rgba(255, 255, 255, 0.15)"} 
      strokeWidth="1.5" 
      filter={customGlow ? "drop-shadow(0 0 10px rgba(59, 130, 246, 0.2))" : "drop-shadow(0 4px 6px rgba(0,0,0,0.5))"} 
    />
    {status && <circle cx="20" cy="24" r="5" fill="#10b981" filter="drop-shadow(0 0 5px #10b981)" />}
    <text x={status ? "35" : "20"} y="29" fill="#f8fafc" fontSize="16" fontWeight="600" fontFamily="monospace">{title}</text>
    <text x="20" y="55" fill="#94a3b8" fontSize="14" fontFamily="monospace">{subtitle}</text>
  </g>
)

const AnimatedLine = ({ x1, y1, x2, y2 }: { x1: number, y1: number, x2: number, y2: number }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" />
    <motion.line 
      x1={x1} y1={y1} x2={x2} y2={y2} 
      stroke="#3b82f6" 
      strokeWidth="2" 
      strokeDasharray="4 8"
      initial={{ strokeDashoffset: 24 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
    {/* Arrowhead */}
    <polygon points={`${x2},${y2} ${x2-5},${y2-10} ${x2+5},${y2-10}`} fill="rgba(255, 255, 255, 0.4)" />
  </g>
)

export function SecurityFlowDiagram() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl relative my-12">
      <div className="p-6 border-b border-surface/50 bg-[#0f172a] flex items-center justify-between">
        <h3 className="text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          Security Traffic Flow
        </h3>
      </div>
      <div className="w-full overflow-x-auto p-4 flex justify-center">
        <svg viewBox="0 0 1000 850" className="w-full max-w-[1000px] h-auto min-w-[800px]" style={{ maxHeight: '70vh' }}>
          
          {/* Divider */}
          <line x1="500" y1="50" x2="500" y2="800" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="10 10" />

          {/* Left Column (East-West) */}
          <text x="250" y="50" fill="#e2e8f0" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EAST - WEST</text>
          <text x="250" y="75" fill="#64748b" fontSize="14" fontFamily="monospace" textAnchor="middle">Internal Workload Inspection</text>

          {/* Lines Left */}
          <AnimatedLine x1={250} y1={180} x2={250} y2={220} />
          <AnimatedLine x1={250} y1={300} x2={250} y2={340} />
          <AnimatedLine x1={250} y1={420} x2={250} y2={460} />
          <AnimatedLine x1={250} y1={540} x2={250} y2={580} />
          <AnimatedLine x1={250} y1={660} x2={250} y2={700} />

          {/* Nodes Left */}
          <Node x={100} y={100} width={300} height={80} title="Source Server" subtitle="Internal Workload" />
          <Node x={100} y={220} width={300} height={80} title="Leaf" subtitle="Aruba CX10000" />
          <Node x={100} y={340} width={300} height={80} title="Policy Based Routing" subtitle="Traffic Steering" customGlow />
          <Node x={100} y={460} width={300} height={80} title="Cisco Firepower" subtitle="Deep Packet Inspection" customGlow />
          <Node x={100} y={580} width={300} height={80} title="Leaf" subtitle="Aruba CX10000" />
          <Node x={100} y={700} width={300} height={80} title="Destination" subtitle="Internal Workload" />


          {/* Right Column (North-South) */}
          <text x="750" y="50" fill="#e2e8f0" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">NORTH - SOUTH</text>
          <text x="750" y="75" fill="#64748b" fontSize="14" fontFamily="monospace" textAnchor="middle">External Perimeter Defense</text>

          {/* Lines Right */}
          <AnimatedLine x1={750} y1={180} x2={750} y2={220} />
          <AnimatedLine x1={750} y1={300} x2={750} y2={340} />
          <AnimatedLine x1={750} y1={420} x2={750} y2={460} />
          <AnimatedLine x1={750} y1={540} x2={750} y2={580} />
          <AnimatedLine x1={750} y1={660} x2={750} y2={700} />

          {/* Nodes Right */}
          <Node x={600} y={100} width={300} height={80} title="Internet" subtitle="External Traffic" status={false} />
          <Node x={600} y={220} width={300} height={80} title="Cisco Firepower" subtitle="Transparent Mode" customGlow />
          <Node x={600} y={340} width={300} height={80} title="Border Leaf" subtitle="Aruba CX 8360-48XT4C" />
          <Node x={600} y={460} width={300} height={80} title="Core VSX" subtitle="Aruba CX 8325" />
          <Node x={600} y={580} width={300} height={80} title="EVPN Fabric" subtitle="Overlay Routing" />
          <Node x={600} y={700} width={300} height={80} title="Server" subtitle="Destination Workload" />

        </svg>
      </div>
    </div>
  )
}
