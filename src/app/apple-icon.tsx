import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B1220',
        }}
      >
        <svg viewBox="0 0 100 100" width="120" height="120" style={{ position: 'absolute' }}>
          <polygon 
            points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5" 
            stroke="#F59E0B" 
            strokeWidth="6" 
            strokeLinejoin="round"
            fill="transparent" 
          />
          <text 
            x="50" 
            y="54" 
            fontFamily="sans-serif" 
            fontWeight="900" 
            fontSize="36" 
            fill="#F59E0B" 
            textAnchor="middle" 
            dominantBaseline="central"
          >
            SH
          </text>
        </svg>
      </div>
    ),
    { ...size }
  )
}
