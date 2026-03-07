"use client"

import { useState, useEffect } from "react"
import { ReactLenis } from "lenis/react"
import type { ReactNode } from "react"

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: !isMobile,
        syncTouch: false
      }}
    >
      {children}
    </ReactLenis>
  )
}
