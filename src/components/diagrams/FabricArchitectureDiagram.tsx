"use client"

import React from "react"
import { motion } from "framer-motion"

const Node = ({ title, subtitle, glow = false, active = true }: { title: string, subtitle: string, glow?: boolean, active?: boolean }) => (
  <div className={`flex flex-col w-full max-w-[260px] items-center p-4 rounded-xl border bg-[#0f172a] shadow-lg transition-all duration-300
    ${glow ? 'border-accent-blue/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]' : 'border-surface-light'}
  `}>
    <div className="flex items-center gap-2 mb-1">
      {active && <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse shadow-[0_0_5px_#10b981]" />}
      <span className="text-sm md:text-base font-bold text-primary font-mono text-center leading-tight">{title}</span>
    </div>
    <span className="text-xs md:text-sm text-muted font-mono text-center">{subtitle}</span>
  </div>
)

const VSXLink = () => (
  <div className="flex flex-col items-center justify-center w-16 md:w-24">
    <span className="text-[10px] text-accent-emerald font-mono mb-1 tracking-wider">VSX ISL</span>
    <svg width="100%" height="2" className="overflow-visible">
      <motion.line 
        x1="0" y1="1" x2="100%" y2="1" 
        stroke="#10b981" 
        strokeWidth="2" 
        strokeDasharray="4 4"
        initial={{ strokeDashoffset: 8 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ filter: 'drop-shadow(0 0 4px rgba(16,185,129,0.6))' }}
      />
    </svg>
  </div>
)

const StraightLink = ({ color, label }: { color: string, label?: string }) => (
  <div className="flex justify-center items-center h-8 md:h-12 w-full relative">
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f172a] px-2 py-0.5 rounded border border-surface text-[10px] text-white font-bold font-mono whitespace-nowrap shadow-lg">
        {label}
      </div>
    )}
  </div>
)

const FabricLine = ({ x1, x2 }: { x1: string, x2: string }) => (
  <g>
    <line x1={x1} y1="0" x2={x2} y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
    <motion.line 
      x1={x1} y1="0" x2={x2} y2="100" 
      stroke="#f97316" 
      strokeWidth="1.5" 
      strokeDasharray="4 8"
      strokeLinecap="round"
      vectorEffect="non-scaling-stroke"
      initial={{ strokeDashoffset: 24 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      style={{ filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.6))' }}
    />
  </g>
)

const SpineLeafMesh = () => (
  <div className="w-full h-16 md:h-24 relative overflow-visible flex items-center justify-center mt-2">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      <FabricLine x1="36" x2="12.5" />
      <FabricLine x1="36" x2="37.5" />
      <FabricLine x1="36" x2="62.5" />
      <FabricLine x1="36" x2="87.5" />
      
      <FabricLine x1="64" x2="12.5" />
      <FabricLine x1="64" x2="37.5" />
      <FabricLine x1="64" x2="62.5" />
      <FabricLine x1="64" x2="87.5" />
    </svg>
  </div>
)

export function FabricArchitectureDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl my-12">
      <div className="p-5 md:p-6 border-b border-surface/50 bg-[#0f172a] flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_#f97316]" />
          Data Center Fabric Architecture
        </h3>
        
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-accent-emerald shadow-[0_0_4px_#10b981]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">VSX</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">eBGP</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 bg-[#3b82f6] shadow-[0_0_4px_#3b82f6]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">iBGP EVPN</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-0.5 border-t-2 border-dashed border-accent-orange shadow-[0_0_4px_#f97316]" />
            <span className="text-[10px] text-muted font-mono uppercase tracking-wider">Fabric</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-12 flex flex-col items-center">
        
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center w-full max-w-3xl justify-items-center">
          <Node title="Core-A" subtitle="Aruba CX8325" />
          <VSXLink />
          <Node title="Core-B" subtitle="Aruba CX8325" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 w-full max-w-3xl justify-items-center">
          <StraightLink color="#f97316" label="eBGP" />
          <div className="w-16 md:w-24"></div>
          <StraightLink color="#f97316" label="eBGP" />
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center w-full max-w-3xl justify-items-center">
          <Node title="Border-A" subtitle="Aruba CX8360-48XT4C" />
          <VSXLink />
          <Node title="Border-B" subtitle="Aruba CX8360-48XT4C" />
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 w-full max-w-3xl justify-items-center">
          <StraightLink color="#3b82f6" label="iBGP EVPN Overlay" />
          <div className="w-16 md:w-24"></div>
          <StraightLink color="#3b82f6" label="iBGP EVPN Overlay" />
        </div>
        
        <div className="w-full max-w-3xl rounded-2xl border-2 border-accent-orange/30 bg-accent-orange/5 p-4 md:p-6 text-center shadow-[inset_0_0_20px_rgba(249,115,22,0.05)] relative z-10">
           <span className="text-primary font-bold font-mono text-base md:text-lg tracking-wide">EVPN-VXLAN Multi-VRF Fabric</span>
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 w-full max-w-3xl justify-items-center">
          <StraightLink color="#3b82f6" />
          <div className="w-16 md:w-24"></div>
          <StraightLink color="#3b82f6" />
        </div>
        
        <div className="grid grid-cols-[1fr_auto_1fr] gap-2 items-center w-full max-w-3xl justify-items-center relative z-10">
           <Node title="Spine-01" subtitle="Aruba CX8360-12C" glow />
           <div className="w-16 md:w-24"></div>
           <Node title="Spine-02" subtitle="Aruba CX8360-12C" glow />
        </div>
        
        <SpineLeafMesh />
        
        <div className="grid grid-cols-4 gap-2 md:gap-6 w-full justify-items-center relative z-10 mt-2">
           <Node title="Leaf-01" subtitle="Aruba CX10000" />
           <Node title="Leaf-02" subtitle="Aruba CX10000" />
           <Node title="Leaf-03" subtitle="Aruba CX10000" />
           <Node title="Leaf-04" subtitle="Aruba CX10000" />
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
