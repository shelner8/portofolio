import React from 'react'

export function HexagonLogo({ className = "", size = 32 }: { className?: string; size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <polygon 
        points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinejoin="round"
        fill="transparent"
      />
      <text 
        x="50" 
        y="53" 
        fontFamily="ui-sans-serif, system-ui, sans-serif" 
        fontWeight="800" 
        fontSize="34" 
        fill="currentColor"
        textAnchor="middle" 
        dominantBaseline="central"
      >
        SH
      </text>
    </svg>
  )
}
