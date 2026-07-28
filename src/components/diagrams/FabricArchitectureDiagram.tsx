"use client"

import React from "react"
import { motion } from "framer-motion"

const Node = ({ title, subtitle, glow = false, active = true, small = false }: { title: string, subtitle: string, glow?: boolean, active?: boolean, small?: boolean }) => (
  <div className={`flex flex-col w-full items-center rounded-xl border bg-[#0f172a] shadow-xl transition-all duration-300
    ${small ? 'max-w-[140px] p-2 md:p-3' : 'max-w-[280px] p-4 md:p-5'}
    ${glow ? 'border-accent-blue/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-surface-light'}
  `}>
    <div className={`flex items-center ${small ? 'gap-1.5' : 'gap-2.5'} mb-1`}>
      {active && <div className={`${small ? 'w-1.5 h-1.5' : 'w-2 h-2'} rounded-full bg-accent-emerald animate-pulse shadow-[0_0_6px_#10b981]`} />}
      <span className={`${small ? 'text-xs md:text-sm' : 'text-sm md:text-base'} font-bold text-primary font-mono text-center leading-tight`}>{title}</span>
    </div>
    <span className={`${small ? 'text-[10px] md:text-xs' : 'text-xs md:text-sm'} text-muted font-mono text-center`}>{subtitle}</span>
  </div>
)

const VSXLink = ({ labelOffset = "-top-8" }: { labelOffset?: string }) => (
  <div className="flex flex-col items-center justify-center w-12 md:w-20 relative">
    <span className={`absolute ${labelOffset} text-[9px] md:text-[10px] text-accent-emerald font-mono tracking-wider whitespace-nowrap bg-[#0f172a] px-2 py-0.5 rounded border border-surface z-20`}>VSX ISL</span>
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0f172a] px-3 py-1 rounded border border-surface text-xs text-white font-bold font-mono whitespace-nowrap shadow-lg">
        {label}
      </div>
    )}
  </div>
)

const CVDFabricLine = ({ startX, endX, startY = 0, endY = 100, color = "#f97316" }: { startX: number, endX: number, startY?: number, endY?: number, color?: string }) => {
  return (
    <g>
      <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
      <motion.line 
        x1={startX} y1={startY} x2={endX} y2={endY} 
        stroke={color} strokeWidth="1.5" strokeDasharray="4 8" strokeLinecap="round" vectorEffect="non-scaling-stroke"
        initial={{ strokeDashoffset: 24 }} animate={{ strokeDashoffset: 0 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        style={{ filter: `drop-shadow(0 0 4px ${color})` }}
      />
    </g>
  );
}

const BorderSpineMesh = () => (
  <div className="w-full max-w-4xl h-20 md:h-32 relative overflow-visible flex items-center justify-center mt-2 z-0">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Border A (37.5) to Spines */}
      <CVDFabricLine startX={37.5} endX={37.5} color="#f97316" />
      <CVDFabricLine startX={37.5} endX={62.5} color="#f97316" />
      
      {/* Border B (62.5) to Spines */}
      <CVDFabricLine startX={62.5} endX={37.5} color="#f97316" />
      <CVDFabricLine startX={62.5} endX={62.5} color="#f97316" />
    </svg>
    
    {/* Logical Fabric Overlay */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl rounded-xl border border-[#3b82f6]/40 bg-[#0f172a] p-3 md:p-4 text-center shadow-[0_0_20px_rgba(59,130,246,0.3)] flex flex-col gap-1 z-10">
       <span className="text-[#3b82f6] font-bold font-mono text-sm md:text-base tracking-widest">EVPN • VXLAN • MULTI-VRF</span>
       <span className="text-muted font-mono text-[10px] md:text-xs">Overlay Control Plane: iBGP EVPN</span>
    </div>
  </div>
)

const SpineLeafMesh = () => (
  <div className="w-full h-16 md:h-24 relative overflow-visible flex items-center justify-center mt-2 z-0">
    <svg 
      className="absolute inset-0 w-full h-full overflow-visible"
      preserveAspectRatio="none"
      viewBox="0 0 100 100"
    >
      {/* Spine 1 (37.5) Links */}
      <CVDFabricLine startX={37.5} endX={12.5} />
      <CVDFabricLine startX={37.5} endX={37.5} />
      <CVDFabricLine startX={37.5} endX={62.5} />
      <CVDFabricLine startX={37.5} endX={87.5} />
      
      {/* Spine 2 (62.5) Links */}
      <CVDFabricLine startX={62.5} endX={12.5} />
      <CVDFabricLine startX={62.5} endX={37.5} />
      <CVDFabricLine startX={62.5} endX={62.5} />
      <CVDFabricLine startX={62.5} endX={87.5} />
    </svg>
  </div>
)

export function FabricArchitectureDiagram() {
  return (
    <div className="w-full max-w-[1000px] mx-auto overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl">
      <div className="p-4 md:p-6 border-b border-surface/50 bg-[#0f172a] flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-base md:text-lg font-bold text-primary font-mono flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_#f97316]" />
          Data Center Fabric Architecture
        </h3>
        {/* Legend */}
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
      
      <div className="p-6 md:p-10 flex flex-col items-center">
        
        {/* Core Layer */}
        <div className="relative w-full max-w-4xl mt-2">
           <div className="grid grid-cols-4 gap-4 md:gap-6 justify-items-center relative z-10">
              <div />
              <Node title="Core-A" subtitle="Aruba CX8325" />
              <Node title="Core-B" subtitle="Aruba CX8325" />
              <div />
           </div>
           <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <VSXLink labelOffset="-top-6 md:-top-8" />
           </div>
        </div>

        {/* Core -> Border Connectors */}
        <div className="relative w-full max-w-4xl mt-2">
           <div className="grid grid-cols-4 gap-4 md:gap-6 justify-items-center">
              <div />
              <StraightLink color="#f97316" label="eBGP" />
              <StraightLink color="#f97316" label="eBGP" />
              <div />
           </div>
        </div>
        
        {/* Border Layer */}
        <div className="relative w-full max-w-4xl mt-2">
           <div className="grid grid-cols-4 gap-4 md:gap-6 justify-items-center relative z-10">
              <div />
              <Node title="Border-A" subtitle="Aruba CX8360-48XT4C" />
              <Node title="Border-B" subtitle="Aruba CX8360-48XT4C" />
              <div />
           </div>
           <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
              <VSXLink labelOffset="-top-6 md:-top-8" />
           </div>
        </div>

        {/* Border -> Spine Full Mesh (Passing through EVPN Fabric Banner) */}
        <BorderSpineMesh />
        
        {/* Spines */}
        <div className="grid grid-cols-4 gap-4 md:gap-6 items-center w-full max-w-4xl justify-items-center relative z-10">
           <div />
           <Node title="Spine-01" subtitle="Aruba CX8360-12C" glow />
           <Node title="Spine-02" subtitle="Aruba CX8360-12C" glow />
           <div />
        </div>
        
        <SpineLeafMesh />
        
        {/* Leaves */}
        <div className="relative w-full max-w-4xl mt-2 mb-4">
          <div className="grid grid-cols-4 gap-4 md:gap-6 w-full justify-items-center relative z-10">
             <Node title="Leaf-01" subtitle="Aruba CX10000" small />
             <Node title="Leaf-02" subtitle="Aruba CX10000" small />
             <Node title="Leaf-03" subtitle="Aruba CX10000" small />
             <Node title="Leaf-04" subtitle="Aruba CX10000" small />
          </div>
          
          <div className="absolute inset-0 z-0 flex items-center pointer-events-none">
             <div className="absolute left-[25%] -translate-x-1/2">
               <VSXLink labelOffset="top-5 md:top-6" />
             </div>
             <div className="absolute left-[75%] -translate-x-1/2">
               <VSXLink labelOffset="top-5 md:top-6" />
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
