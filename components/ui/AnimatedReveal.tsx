'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'

interface AnimatedRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
}

export function AnimatedReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.7,
}: AnimatedRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  const getTransform = () => {
    if (prefersReducedMotion || isVisible) return 'translate3d(0, 0, 0)'
    switch (direction) {
      case 'up': return 'translate3d(0, 32px, 0)'
      case 'down': return 'translate3d(0, -32px, 0)'
      case 'left': return 'translate3d(32px, 0, 0)'
      case 'right': return 'translate3d(-32px, 0, 0)'
      case 'none': return 'translate3d(0, 0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: prefersReducedMotion ? 1 : isVisible ? 1 : 0,
        transform: getTransform(),
        transition: prefersReducedMotion
          ? 'none'
          : `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
