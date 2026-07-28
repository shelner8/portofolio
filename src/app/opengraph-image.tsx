import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Shelnerio | Data Center & Enterprise Network Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0B1220',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Left Side */}
        <div style={{ display: 'flex', width: '50%', padding: '80px', flexDirection: 'column', justifyContent: 'center', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <svg viewBox="0 0 100 100" width="96" height="96" style={{ flexShrink: 0 }}>
              <polygon points="50 5, 90 27.5, 90 72.5, 50 95, 10 72.5, 10 27.5" stroke="#F59E0B" strokeWidth="6" strokeLinejoin="round" fill="transparent" />
              <text x="50" y="53" fontFamily="sans-serif" fontWeight="800" fontSize="36" fill="#F59E0B" textAnchor="middle" dominantBaseline="central">SH</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '32px' }}>
              <span style={{ fontSize: '56px', fontWeight: '800', letterSpacing: '-0.02em', color: '#FFFFFF', lineHeight: 1.1 }}>Shelnerio</span>
              <span style={{ fontSize: '24px', color: '#94A3B8', marginTop: '12px', fontWeight: '500', lineHeight: 1.4 }}>Data Center &<br/>Enterprise Network Engineer</span>
            </div>
          </div>
          
          <div style={{ width: '100%', height: '1px', backgroundColor: '#1E293B', marginBottom: '40px' }} />
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {['Data Center', 'Enterprise Network', 'Aruba', 'MikroTik'].map(tech => (
              <div key={tech} style={{ display: 'flex', alignItems: 'center', fontSize: '22px', color: '#94A3B8', fontWeight: '500' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '4px', backgroundColor: '#F59E0B', marginRight: '20px' }} />
                {tech}
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Side (Abstract Data Center Background) */}
        <div style={{ display: 'flex', width: '50%', backgroundColor: '#0f172a', position: 'relative', overflow: 'hidden' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute' }}>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e293b" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="30%" cy="30%" r="400" fill="#F59E0B" fillOpacity="0.07" />
            <circle cx="80%" cy="70%" r="400" fill="#3b82f6" fillOpacity="0.05" />
            
            {/* Circuit traces */}
            <path d="M -100 200 L 150 200 L 250 100 L 700 100" fill="none" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.3" />
            <path d="M -100 220 L 130 220 L 230 120 L 700 120" fill="none" stroke="#F59E0B" strokeWidth="2" strokeOpacity="0.1" />
            <path d="M 0 450 L 300 450 L 400 350 L 700 350" fill="none" stroke="#94A3B8" strokeWidth="2" strokeOpacity="0.2" />
            <path d="M 100 600 L 250 600 L 400 450 L 700 450" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  )
}
