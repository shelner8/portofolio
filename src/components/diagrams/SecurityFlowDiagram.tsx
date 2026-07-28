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

const VerticalConnector = () => (
  <div className="flex justify-center items-center h-12 md:h-20 w-full">
    <svg width="12" height="100%" className="overflow-visible">
      {/* Background Line */}
      <line x1="6" y1="0" x2="6" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
      {/* Animated Dash */}
      <motion.line 
        x1="6" y1="0" x2="6" y2="100%" 
        stroke="#3b82f6" 
        strokeWidth="2" 
        strokeDasharray="4 8"
        initial={{ strokeDashoffset: 24 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      {/* Arrow Head */}
      <polygon points="6,100% 2,calc(100% - 6px) 10,calc(100% - 6px)" fill="rgba(255,255,255,0.3)" />
    </svg>
  </div>
)

export function SecurityFlowDiagram() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-surface bg-[#0a0f1c] shadow-2xl my-12">
      <div className="p-6 md:p-8 border-b border-surface/50 bg-[#0f172a] flex items-center">
        <h3 className="text-lg md:text-xl font-bold text-primary font-mono flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-accent-blue animate-pulse shadow-[0_0_8px_#3b82f6]" />
          Security Traffic Flow
        </h3>
      </div>
      
      {/* CSS Grid for side-by-side columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-surface/50">
        
        {/* Left Column (East-West) */}
        <div className="p-8 md:p-16 bg-[#0a0f1c] flex flex-col items-center w-full">
          <div className="mb-12 text-center flex flex-col items-center">
            <span className="text-xl md:text-2xl font-bold text-primary font-mono tracking-widest">EAST - WEST</span>
            <span className="text-base text-muted mt-2 font-mono">Internal Workload Inspection</span>
            <div className="w-20 h-px bg-surface-light mt-6" />
          </div>

          <Node title="Source Server" subtitle="Internal Workload" />
          <VerticalConnector />
          
          <Node title="Leaf" subtitle="Aruba CX10000" />
          <VerticalConnector />
          
          <Node title="Policy Based Routing" subtitle="Traffic Steering" glow />
          <VerticalConnector />
          
          <Node title="Cisco Firepower" subtitle="Deep Packet Inspection" glow />
          <VerticalConnector />
          
          <Node title="Leaf" subtitle="Aruba CX10000" />
          <VerticalConnector />
          
          <Node title="Destination" subtitle="Internal Workload" />
        </div>

        {/* Right Column (North-South) */}
        <div className="p-8 md:p-16 bg-[#0a0f1c] flex flex-col items-center w-full">
          <div className="mb-12 text-center flex flex-col items-center">
            <span className="text-xl md:text-2xl font-bold text-primary font-mono tracking-widest">NORTH - SOUTH</span>
            <span className="text-base text-muted mt-2 font-mono">External Perimeter Defense</span>
            <div className="w-20 h-px bg-surface-light mt-6" />
          </div>

          <Node title="Internet" subtitle="External Traffic" active={false} />
          <VerticalConnector />
          
          <Node title="Cisco Firepower" subtitle="Transparent Mode" glow />
          <VerticalConnector />
          
          <Node title="Border Leaf" subtitle="Aruba CX 8360-48XT4C" />
          <VerticalConnector />
          
          <Node title="Core VSX" subtitle="Aruba CX 8325" />
          <VerticalConnector />
          
          <Node title="EVPN Fabric" subtitle="Overlay Routing" />
          <VerticalConnector />
          
          <Node title="Server" subtitle="Destination Workload" />
        </div>

      </div>
    </div>
  )
}
