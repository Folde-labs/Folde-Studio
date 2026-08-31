import { ImageResponse } from 'next/og'

export const alt = 'Folde Studio — Brand, Product & Digital Design'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#111111',
        color: '#ffffff',
        padding: '64px 72px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', fontSize: 30, fontWeight: 700 }}>
        FOLDE STUDIO
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-4px' }}>
          Design that turns clarity
        </div>
        <div style={{ fontSize: 78, fontWeight: 400, lineHeight: 1.02, letterSpacing: '-4px', color: '#b8b4ae' }}>
          into lasting value.
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 22, color: '#b8b4ae' }}>
        <span>Brand · Product · Digital</span>
        <span>folde.work</span>
      </div>
    </div>,
    size,
  )
}
