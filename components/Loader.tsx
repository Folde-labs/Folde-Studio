'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Loader() {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [gone, setGone] = useState(false)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const duration = 2600
    const start = performance.now()

    const animate = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 2.8)
      setProgress(Math.round(eased * 100))
      if (t < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        setProgress(100)
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => setGone(true), 800)
        }, 320)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  if (gone) return null

  return (
    <div className={`loader${exiting ? ' loader--exit' : ''}`}>
      <div className="loader-track">
        <div className="loader-line" style={{ width: `${progress}%` }} />
        <span className="loader-label" style={{ left: `${progress}%` }}>
          FOLDE STUDIO
        </span>
      </div>

      <div className="loader-panel-wrap">
        <Image
          src="/folde loader img.gif"
          alt=""
          fill
          unoptimized
          className="loader-panel-img"
        />
      </div>

      <span className="loader-count" aria-hidden="true">
        {String(progress).padStart(2, '0')}
      </span>
    </div>
  )
}
