'use client'

import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')
    if (!cursor || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`
    }

    document.addEventListener('mousemove', onMouseMove)

    let animId: number
    function animateRing() {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      ring!.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`
      animId = requestAnimationFrame(animateRing)
    }
    animateRing()

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
