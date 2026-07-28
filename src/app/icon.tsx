import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg viewBox="0 0 100 100" width="32" height="32" style={{ position: 'absolute' }}>
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
