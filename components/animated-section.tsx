"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  /** Délai en ms avant de lancer l'animation (pour effet cascade) */
  delay?: number
  /** Classe(s) additionnelle(s) sur le wrapper */
  className?: string
}

export function AnimatedSection({ children, delay = 0, className = "" }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry.isIntersecting) return
        if (delay > 0) {
          timeoutId = setTimeout(() => setVisible(true), delay)
        } else {
          setVisible(true)
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`section-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
