"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface LazySectionProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animationClass?: string
  fallback?: ReactNode
  id?: string
}

export function LazySection({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "50px",
  animationClass = "animate-fade-in-up",
  fallback,
  id,
}: LazySectionProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  return (
    <section ref={elementRef} className={`${className} ${hasIntersected ? animationClass : "opacity-0"}`} id={id}>
      {hasIntersected ? children : fallback}
    </section>
  )
}
