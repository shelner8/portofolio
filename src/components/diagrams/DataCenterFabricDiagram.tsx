"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ==========================================
// Types
// ==========================================
export interface TopologyNode {
  id: string
  x: number
  y: number
  width: number
  height: number
  title: string
  subtitle: string
  type: "core" | "border" | "spine" | "leaf"
  status: "up" | "down"
}

export interface TopologyLink {
  id: string
  from: string
  to: string
  type: "vsx" | "fabric" | "ebgp" | "overlay"
}

// ==========================================
// Data Definition
// ==========================================
const STD_W = 280
const STD_H = 84
const SML_W = 150
const SML_H = 68

// Centers
const COL2_1 = 350
const COL2_2 = 1050
const COL4_1 = 175
const COL4_2 = 525
const COL4_3 = 875
const COL4_4 = 1225

// Y Levels
const Y_CORE = 100
const Y_BORDER = 300
const Y_SPINE = 650
const Y_LEAF = 850

export const nodes: TopologyNode[] = [
  // Cores
  { id: "core-a", x: COL2_1, y: Y_CORE, width: STD_W, height: STD_H, title: "Core-A", subtitle: "Aruba CX8325", type: "core", status: "up" },
  { id: "core-b", x: COL2_2, y: Y_CORE, width: STD_W, height: STD_H, title: "Core-B", subtitle: "Aruba CX8325", type: "core", status: "up" },
  
  // Borders
  { id: "border-a", x: COL2_1, y: Y_BORDER, width: STD_W, height: STD_H, title: "Border-A", subtitle: "Aruba CX8360-48XT4C", type: "border", status: "up" },
  { id: "border-b", x: COL2_2, y: Y_BORDER, width: STD_W, height: STD_H, title: "Border-B", subtitle: "Aruba CX8360-48XT4C", type: "border", status: "up" },
  
  // Spines
  { id: "spine-01", x: COL2_1, y: Y_SPINE, width: STD_W, height: STD_H, title: "Spine-01", subtitle: "Aruba CX8360-12C", type: "spine", status: "up" },
  { id: "spine-02", x: COL2_2, y: Y_SPINE, width: STD_W, height: STD_H, title: "Spine-02", subtitle: "Aruba CX8360-12C", type: "spine", status: "up" },
  
  // Leaves
  { id: "leaf-01", x: COL4_1, y: Y_LEAF, width: SML_W, height: SML_H, title: "Leaf-01", subtitle: "Aruba CX10000", type: "leaf", status: "up" },
  { id: "leaf-02", x: COL4_2, y: Y_LEAF, width: SML_W, height: SML_H, title: "Leaf-02", subtitle: "Aruba CX10000", type: "leaf", status: "up" },
  { id: "leaf-03", x: COL4_3, y: Y_LEAF, width: SML_W, height: SML_H, title: "Leaf-03", subtitle: "Aruba CX10000", type: "leaf", status: "up" },
  { id: "leaf-04", x: COL4_4, y: Y_LEAF, width: SML_W, height: SML_H, title: "Leaf-04", subtitle: "Aruba CX10000", type: "leaf", status: "up" },
]

export const links: TopologyLink[] = [
  // VSX Links
  { id: "vsx-core", from: "core-a", to: "core-b", type: "vsx" },
  { id: "vsx-border", from: "border-a", to: "border-b", type: "vsx" },
  { id: "vsx-leaf1", from: "leaf-01", to: "leaf-02", type: "vsx" },
  { id: "vsx-leaf2", from: "leaf-03", to: "leaf-04", type: "vsx" },
  
  // eBGP Core -> Border
  { id: "ebgp-a", from: "core-a", to: "border-a", type: "ebgp" },
  { id: "ebgp-b", from: "core-b", to: "border-b", type: "ebgp" },
  
  // Fabric Border -> Spine (Full Mesh)
  { id: "fab-ba-s1", from: "border-a", to: "spine-01", type: "fabric" },
  { id: "fab-ba-s2", from: "border-a", to: "spine-02", type: "fabric" },
  { id: "fab-bb-s1", from: "border-b", to: "spine-01", type: "fabric" },
  { id: "fab-bb-s2", from: "border-b", to: "spine-02", type: "fabric" },
  
  // Fabric Spine -> Leaf (Full Mesh)
  { id: "fab-s1-l1", from: "spine-01", to: "leaf-01", type: "fabric" },
  { id: "fab-s1-l2", from: "spine-01", to: "leaf-02", type: "fabric" },
  { id: "fab-s1-l3", from: "spine-01", to: "leaf-03", type: "fabric" },
  { id: "fab-s1-l4", from: "spine-01", to: "leaf-04", type: "fabric" },
  { id: "fab-s2-l1", from: "spine-02", to: "leaf-01", type: "fabric" },
  { id: "fab-s2-l2", from: "spine-02", to: "leaf-02", type: "fabric" },
  { id: "fab-s2-l3", from: "spine-02", to: "leaf-03", type: "fabric" },
  { id: "fab-s2-l4", from: "spine-02", to: "leaf-04", type: "fabric" },
]

// ==========================================
// Components
// ==========================================
const NodeCard = ({ node, isHovered, isDimmed }: { node: TopologyNode, isHovered: boolean, isDimmed: boolean }) => {
  const isSpine = node.type === "spine"
  const isSmall = node.type === "leaf"
  
  return (
    <div 
      className={`flex flex-col w-full h-full items-center justify-center rounded-xl border bg-[#0f172a] shadow-xl transition-all duration-300
        ${isSpine || isHovered ? 'border-accent-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.25)]' : 'border-surface-light'}
        ${isDimmed ? 'opacity-30' : 'opacity-100'}
        ${isHovered ? 'scale-[1.03]' : 'scale-100'}
      `}
    >
      <div className={`flex items-center gap-2 mb-1`}>
        <div className={`w-2 h-2 rounded-full bg-accent-emerald animate-pulse shadow-[0_0_6px_#10b981]`} />
        <span className={`${isSmall ? 'text-xs md:text-sm' : 'text-sm md:text-base'} font-bold text-primary font-mono text-center leading-tight`}>{node.title}</span>
      </div>
      <span className={`${isSmall ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'} text-muted font-mono text-center`}>{node.subtitle}</span>
    </div>
  )
}

export function DataCenterFabricDiagram() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const isNodeDimmed = (nodeId: string) => {
    if (!hoveredNode && !hoveredLink) return false
    if (hoveredNode) {
      if (nodeId === hoveredNode) return false
      return !links.some(l => (l.from === hoveredNode && l.to === nodeId) || (l.to === hoveredNode && l.from === nodeId))
    }
    if (hoveredLink) {
      const link = links.find(l => l.id === hoveredLink)
      return !(link?.from === nodeId || link?.to === nodeId)
    }
    return false
  }

  const isLinkDimmed = (link: TopologyLink) => {
    if (!hoveredNode && !hoveredLink) return false
    if (hoveredNode) {
      return !(link.from === hoveredNode || link.to === hoveredNode)
    }
    if (hoveredLink) {
      return link.id !== hoveredLink
    }
    return false
  }

  const getSpineOffset = (spineId: string, leafId: string) => {
    const isSpine1 = spineId === "spine-01"
    const offsets = isSpine1 
      ? { "leaf-01": -70, "leaf-02": -23, "leaf-03": 23, "leaf-04": 70 }
      : { "leaf-01": -70, "leaf-02": -23, "leaf-03": 23, "leaf-04": 70 }
    
    return offsets[leafId as keyof typeof offsets] || 0
  }

  return (
    <div className="w-full mx-auto overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl">
      <div className="p-4 md:p-6 border-b border-surface/50 bg-[#0f172a] flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_#f97316]" />
          Data Center Fabric Architecture
        </h3>
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-accent-emerald shadow-[0_0_4px_#10b981]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">VSX</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 border-t-2 border-dashed border-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Fabric</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">eBGP</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-[#3b82f6] shadow-[0_0_4px_#3b82f6]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">iBGP EVPN</span>
          </div>
        </div>
      </div>
      
      <div className="w-full relative">
        <svg 
          viewBox="0 0 1400 950" 
          className="w-full h-auto block" 
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Defs for gradients, filters, etc */}
          <defs>
            <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="glow-emerald" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Layer 1: Cables */}
          <g className="cables">
            {links.map(link => {
              const fromNode = nodes.find(n => n.id === link.from)
              const toNode = nodes.find(n => n.id === link.to)
              if (!fromNode || !toNode) return null

              const dimmed = isLinkDimmed(link)
              const active = hoveredLink === link.id || hoveredNode === link.from || hoveredNode === link.to
              const strokeWidth = active ? 3 : 2

              let x1 = 0, y1 = 0, x2 = 0, y2 = 0

              if (link.type === "vsx") {
                x1 = fromNode.x + fromNode.width / 2
                y1 = fromNode.y
                x2 = toNode.x - toNode.width / 2
                y2 = toNode.y
                
                return (
                  <g 
                    key={link.id} 
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: dimmed ? 0.15 : 1 }}
                  >
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="transparent" strokeWidth="24" />
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#10b981" strokeWidth="2" opacity={0.2} strokeDasharray="4 6" />
                    <motion.line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      stroke="#10b981" 
                      strokeWidth={strokeWidth} 
                      strokeDasharray="4 6"
                      initial={{ strokeDashoffset: 20 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      filter={active ? "url(#glow-emerald)" : "none"}
                    />
                    <foreignObject x={(x1+x2)/2 - 40} y={y1 + 12} width="80" height="24">
                      <div className="flex justify-center items-center w-full h-full">
                        <span className="text-[10px] text-accent-emerald font-mono tracking-wider whitespace-nowrap bg-[#0f172a] px-2 py-0.5 rounded border border-surface shadow-md pointer-events-none">VSX ISL</span>
                      </div>
                    </foreignObject>
                  </g>
                )
              }

              if (link.type === "ebgp") {
                x1 = fromNode.x
                y1 = fromNode.y + fromNode.height / 2
                x2 = toNode.x
                y2 = toNode.y - toNode.height / 2
                
                return (
                  <g 
                    key={link.id} 
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: dimmed ? 0.15 : 1 }}
                  >
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="transparent" strokeWidth="24" />
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="2" opacity={0.2} strokeDasharray="4 8" />
                    <motion.line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      stroke="#f97316" 
                      strokeWidth={strokeWidth} 
                      strokeDasharray="4 8"
                      initial={{ strokeDashoffset: 24 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                      filter={active ? "url(#glow-orange)" : "none"}
                    />
                    <foreignObject x={(x1+x2)/2 - 30} y={(y1+y2)/2 - 12} width="60" height="24">
                      <div className="flex justify-center items-center w-full h-full">
                        <span className="bg-[#0f172a] px-3 py-1 rounded border border-surface text-[10px] md:text-xs text-white font-bold font-mono shadow-lg pointer-events-none">eBGP</span>
                      </div>
                    </foreignObject>
                  </g>
                )
              }

              if (link.type === "fabric") {
                x1 = fromNode.x
                y1 = fromNode.y + fromNode.height / 2
                
                if (fromNode.type === "spine") {
                  x1 += getSpineOffset(fromNode.id, toNode.id)
                }

                x2 = toNode.x
                y2 = toNode.y - toNode.height / 2

                return (
                  <g 
                    key={link.id} 
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="cursor-pointer transition-opacity duration-300"
                    style={{ opacity: dimmed ? 0.15 : 1 }}
                  >
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="transparent" strokeWidth="20" />
                    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f97316" strokeWidth="1.5" opacity={0.2} strokeDasharray="4 8" strokeLinecap="round" />
                    <motion.line 
                      x1={x1} y1={y1} x2={x2} y2={y2} 
                      stroke="#f97316" 
                      strokeWidth={strokeWidth} 
                      strokeDasharray="4 8"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 24 }}
                      animate={{ strokeDashoffset: 0 }}
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      filter={active ? "url(#glow-orange)" : "none"}
                    />
                  </g>
                )
              }

              return null
            })}
          </g>

          {/* Layer 2: Logical Overlays */}
          <g className="overlays">
             <foreignObject x={400} y={425} width={600} height={100} className="pointer-events-none">
                <div className="flex items-center justify-center w-full h-full">
                  <div className="w-full max-w-xl rounded-xl border border-[#3b82f6]/40 bg-[#0f172a] p-3 md:p-4 text-center shadow-[0_0_30px_rgba(59,130,246,0.2)] flex flex-col gap-1 backdrop-blur-sm">
                     <span className="text-[#3b82f6] font-bold font-mono text-sm md:text-base tracking-widest">EVPN • VXLAN • MULTI-VRF</span>
                     <span className="text-muted font-mono text-[10px] md:text-xs">Overlay Control Plane: iBGP EVPN</span>
                  </div>
                </div>
             </foreignObject>
          </g>

          {/* Layer 3: Nodes */}
          <g className="nodes">
            {nodes.map(node => (
              <foreignObject
                key={node.id}
                x={node.x - node.width / 2}
                y={node.y - node.height / 2}
                width={node.width}
                height={node.height}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer overflow-visible"
              >
                <div className="w-full h-full">
                  <NodeCard 
                    node={node} 
                    isHovered={hoveredNode === node.id} 
                    isDimmed={isNodeDimmed(node.id)} 
                  />
                </div>
              </foreignObject>
            ))}
          </g>
        </svg>
      </div>

      <div className="bg-surface/30 p-6 md:p-8 border-t border-surface grid grid-cols-2 md:grid-cols-4 gap-6 text-center z-10 relative">
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Underlay</span>
          <span className="text-sm font-bold text-accent-emerald font-mono">OSPF</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Overlay</span>
          <span className="text-sm font-bold text-[#3b82f6] font-mono">BGP EVPN</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Automation</span>
          <span className="text-sm font-bold text-accent-blue font-mono">Aruba Fabric Composer</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Segmentation</span>
          <span className="text-sm font-bold text-accent-orange font-mono">Multi-VRF</span>
        </div>
      </div>
    </div>
  )
}
