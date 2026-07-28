"use client"

import React from "react"
import { motion } from "framer-motion"

const Node = ({ title, subtitle, glow = false }: { title: string, subtitle: string, glow?: boolean }) => (
  <div className={`flex flex-col w-full max-w-[220px] items-center p-4 rounded-xl border bg-[#0f172a] shadow-lg transition-all duration-300
    ${glow ? 'border-accent-orange/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]' : 'border-surface-light'}
  `}>
    <div className="flex items-center gap-2 mb-1">
      <div className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse shadow-[0_0_5px_#10b981]" />
      <span className="text-sm md:text-base font-bold text-primary font-mono text-center leading-tight">{title}</span>
    </div>
    <span className="text-xs md:text-sm text-muted font-mono text-center">{subtitle}</span>
  </div>
)

const VerticalConnector = () => (
  <div className="flex justify-center items-center h-8 md:h-12 w-full">
    <svg width="2" height="100%" className="overflow-visible" preserveAspectRatio="none">
      <line x1="1" y1="0" x2="1" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      <motion.line 
        x1="1" y1="0" x2="1" y2="100%" 
        stroke="#f97316" 
        strokeWidth="2" 
        strokeDasharray="4 8"
        initial={{ strokeDashoffset: 24 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ filter: 'drop-shadow(0 0 5px rgba(249,115,22,0.5))' }}
      />
    </svg>
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
  <div className="w-full h-16 md:h-24 relative overflow-visible flex items-center justify-center">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Spine 1 (left) Links */}
      <FabricLine x1="36" x2="12.5" />
      <FabricLine x1="36" x2="37.5" />
      <FabricLine x1="36" x2="62.5" />
      <FabricLine x1="36" x2="87.5" />
      
      {/* Spine 2 (right) Links */}
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
      <div className="p-5 md:p-6 border-b border-surface/50 bg-[#0f172a]">
        <h3 className="text-base md:text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_#f97316]" />
          Data Center Fabric Architecture
        </h3>
      </div>
      
      <div className="p-6 md:p-12 flex flex-col items-center">
        
        {/* Core */}
        <Node title="Core VSX" subtitle="Aruba CX8325" />
        <VerticalConnector />
        
        {/* Border */}
        <Node title="Border Leaf VSX" subtitle="Aruba CX8360-48XT4C" />
        <VerticalConnector />
        
        {/* Fabric Cloud */}
        <div className="w-full max-w-3xl rounded-2xl border-2 border-accent-orange/30 bg-accent-orange/5 p-4 md:p-6 text-center shadow-[inset_0_0_20px_rgba(249,115,22,0.05)]">
           <span className="text-primary font-bold font-mono text-base md:text-lg tracking-wide">EVPN-VXLAN Multi-VRF Fabric</span>
        </div>
        <VerticalConnector />
        
        {/* Spines */}
        <div className="flex gap-6 md:gap-12 w-full max-w-2xl justify-center items-center">
           <Node title="Spine-01" subtitle="Aruba CX8360-12C" glow />
           <Node title="Spine-02" subtitle="Aruba CX8360-12C" glow />
        </div>
        
        {/* Full Fabric Mesh Connections */}
        <SpineLeafMesh />
        
        {/* Leaves (Forced 4-columns to match Mesh) */}
        <div className="grid grid-cols-4 gap-2 md:gap-6 w-full justify-items-center">
           <Node title="Leaf-01" subtitle="Aruba CX10000" />
           <Node title="Leaf-02" subtitle="Aruba CX10000" />
           <Node title="Leaf-03" subtitle="Aruba CX10000" />
           <Node title="Leaf-04" subtitle="Aruba CX10000" />
        </div>
        
      </div>
      
      {/* Footer Meta */}
      <div className="bg-surface/30 p-6 md:p-8 border-t border-surface grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Underlay</span>
          <span className="text-sm font-bold text-accent-emerald font-mono">OSPF</span>
        </div>
        <div className="flex flex-col gap-1 p-3 rounded-xl border border-surface bg-[#0a0f1c]">
          <span className="text-xs text-muted uppercase tracking-wider font-semibold">Overlay</span>
          <span className="text-sm font-bold text-accent-emerald font-mono">BGP EVPN</span>
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
