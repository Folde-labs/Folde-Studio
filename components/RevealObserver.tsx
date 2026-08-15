'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )

    const observe = (el: Element) => {
      if (!el.classList.contains('visible')) observer.observe(el)
    }

    // rAF ensures the browser has finished layout before we query
    const rafId = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal').forEach(observe)
    })

    // catch any .reveal elements added after initial render
    const mutObs = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return
          if (node.classList.contains('reveal')) observe(node)
          node.querySelectorAll('.reveal').forEach(observe)
        })
      })
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(rafId)
      observer.disconnect()
      mutObs.disconnect()
    }
  }, [])

  return null
}
