"use client"

import React from "react"
import { motion } from "framer-motion"

const Node = ({ title, subtitle, glow = false, active = true }: { title: string, subtitle: string, glow?: boolean, active?: boolean }) => (
  <div className={`flex flex-col w-full max-w-[320px] items-center p-5 md:p-6 rounded-xl border bg-[#0f172a] shadow-xl transition-all duration-300
    ${glow ? 'border-accent-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-surface-light'}
  `}>
    <div className="flex items-center gap-3 mb-1.5">
      {active && <div className="w-2.5 h-2.5 rounded-full bg-accent-emerald animate-pulse shadow-[0_0_6px_#10b981]" />}
      <span className="text-base md:text-lg font-bold text-primary font-mono text-center leading-tight">{title}</span>
    </div>
    <span className="text-sm md:text-base text-muted font-mono text-center">{subtitle}</span>
  </div>
)

const VSXLink = () => (
  <div className="flex flex-col items-center justify-center w-16 md:w-32">
    <span className="text-[10px] md:text-xs text-accent-emerald font-mono mb-2 tracking-wider whitespace-nowrap bg-[#0a0f1c] px-2 py-0.5 rounded border border-surface">VSX ISL</span>
    <svg width="100%" height="2" className="overflow-visible z-0">
      <motion.line 
        x1="0" y1="1" x2="100%" y2="1" 
        stroke="#10b981" 
        strokeWidth="2.5" 
        strokeDasharray="4 6"
        initial={{ strokeDashoffset: 10 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ filter: 'drop-shadow(0 0 5px rgba(16,185,129,0.6))' }}
      />
    </svg>
  </div>
)

const StraightLink = ({ color, label }: { color: string, label?: string }) => (
  <div className="flex justify-center items-center h-12 md:h-20 w-full relative">
    <svg width="2" height="100%" className="overflow-visible" preserveAspectRatio="none">
      <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <motion.line 
        x1="1" y1="0" x2="1" y2="100%" 
        stroke={color} 
        strokeWidth="2" 
        strokeDasharray="4 8"
        initial={{ strokeDashoffset: 24 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ filter: `drop-shadow(0 0 5px ${color})` }}
      />
    </svg>
    {label && (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f172a] px-3 py-1 rounded border border-surface text-xs text-white font-bold font-mono whitespace-nowrap shadow-lg">
        {label}
      </div>
    )}
  </div>
)

const FabricLine = ({ x1, x2, color = "#f97316" }: { x1: string, x2: string, color?: string }) => (
  <g>
    <line x1={x1} y1="0" x2={x2} y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    <motion.line 
      x1={x1} y1="0" x2={x2} y2="100" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeDasharray="4 8"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={{ strokeDashoffset: 24 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      style={{ filter: `drop-shadow(0 0 4px ${color})` }}
    />
  </g>
)

const BorderSpineMesh = () => (
  <div className="w-full max-w-4xl h-32 md:h-48 relative overflow-visible flex items-center justify-center mt-4 z-0">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Border A (left) to Spines */}
      <FabricLine x1="22" x2="22" color="#f97316" />
      <FabricLine x1="22" x2="78" color="#f97316" />
      
      {/* Border B (right) to Spines */}
      <FabricLine x1="78" x2="22" color="#f97316" />
      <FabricLine x1="78" x2="78" color="#f97316" />
    </svg>
    
    {/* Logical Fabric Overlay */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl rounded-xl border border-[#3b82f6]/40 bg-[#0a0f1c]/95 backdrop-blur p-4 md:p-6 text-center shadow-[0_0_25px_rgba(59,130,246,0.15)] flex flex-col gap-2">
       <span className="text-[#3b82f6] font-bold font-mono text-base md:text-xl tracking-widest">EVPN • VXLAN • MULTI-VRF</span>
       <span className="text-muted font-mono text-xs md:text-sm">Overlay Control Plane: iBGP EVPN</span>
    </div>
  </div>
)

const SpineLeafMesh = () => (
  <div className="w-full h-24 md:h-36 relative overflow-visible flex items-center justify-center mt-4 z-0">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Spine 1 (left) Links */}
      <FabricLine x1="29" x2="12.5" />
      <FabricLine x1="29" x2="37.5" />
      <FabricLine x1="29" x2="62.5" />
      <FabricLine x1="29" x2="87.5" />
      
      {/* Spine 2 (right) Links */}
      <FabricLine x1="71" x2="12.5" />
      <FabricLine x1="71" x2="37.5" />
      <FabricLine x1="71" x2="62.5" />
      <FabricLine x1="71" x2="87.5" />
    </svg>
  </div>
)

export function FabricArchitectureDiagram() {
  return (
    <div className="w-full max-w-[1100px] mx-auto overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl my-16">
      <div className="p-6 md:p-8 border-b border-surface/50 bg-[#0f172a] flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-lg md:text-xl font-bold text-primary font-mono flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_#f97316]" />
          Data Center Fabric Architecture
        </h3>
        {/* Legend */}
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 bg-accent-emerald shadow-[0_0_4px_#10b981]" />
            <span className="text-xs text-muted font-mono uppercase tracking-wider">VSX Pair</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 border-t-2 border-dashed border-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-xs text-muted font-mono uppercase tracking-wider">Physical Clos Fabric</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 bg-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-xs text-muted font-mono uppercase tracking-wider">eBGP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-0.5 bg-[#3b82f6] shadow-[0_0_4px_#3b82f6]" />
            <span className="text-xs text-muted font-mono uppercase tracking-wider">EVPN Overlay Control Plane</span>
          </div>
        </div>
      </div>
      
      <div className="p-8 md:p-16 flex flex-col items-center">
        
        {/* Core Layer */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center w-full max-w-4xl justify-items-center">
          <Node title="Core-A" subtitle="Aruba CX8325" />
          <VSXLink />
          <Node title="Core-B" subtitle="Aruba CX8325" />
        </div>

        {/* Core -> Border Connectors */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 w-full max-w-4xl justify-items-center">
          <StraightLink color="#f97316" label="eBGP" />
          <div className="w-16 md:w-32"></div>
          <StraightLink color="#f97316" label="eBGP" />
        </div>
        
        {/* Border Layer */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center w-full max-w-4xl justify-items-center relative z-10">
          <Node title="Border-A" subtitle="Aruba CX8360-48XT4C" />
          <VSXLink />
          <Node title="Border-B" subtitle="Aruba CX8360-48XT4C" />
        </div>

        {/* Border -> Spine Full Mesh (Passing through EVPN Fabric Banner) */}
        <BorderSpineMesh />
        
        {/* Spines */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center w-full max-w-4xl justify-items-center relative z-10">
           <Node title="Spine-01" subtitle="Aruba CX8360-12C" glow />
           <div className="w-16 md:w-32"></div>
           <Node title="Spine-02" subtitle="Aruba CX8360-12C" glow />
        </div>
        
        <SpineLeafMesh />
        
        {/* Leaves (Forced 4-columns to match Mesh) */}
        <div className="relative w-full mt-4">
          <div className="grid grid-cols-4 gap-4 md:gap-8 w-full justify-items-center relative z-10">
             <Node title="Leaf-01" subtitle="Aruba CX10000" />
             <Node title="Leaf-02" subtitle="Aruba CX10000" />
             <Node title="Leaf-03" subtitle="Aruba CX10000" />
             <Node title="Leaf-04" subtitle="Aruba CX10000" />
          </div>
          
          {/* Absolute Leaf VSX Overlays placed in the visual gap between 1-2 and 3-4 */}
          <div className="absolute inset-0 z-0 flex items-center pointer-events-none">
             <div className="w-1/2 flex justify-center">
               <VSXLink />
             </div>
             <div className="w-1/2 flex justify-center">
               <VSXLink />
             </div>
          </div>
        </div>
        
      </div>
      
      <div className="bg-surface/30 p-6 md:p-8 border-t border-surface grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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
