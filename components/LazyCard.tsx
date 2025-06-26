"use client"

import type { ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface LazyCardProps {
  children: ReactNode
  className?: string
  delay?: number
  animationClass?: string
  fallback?: ReactNode
}

export function LazyCard({
  children,
  className = "",
  delay = 0,
  animationClass = "animate-slide-up",
  fallback,
}: LazyCardProps) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "30px",
  })

  return (
    <div
      ref={elementRef}
      className={`${className} transition-all duration-700 ${
        hasIntersected ? `${animationClass} opacity-100` : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: hasIntersected ? `${delay}ms` : "0ms",
      }}
    >
      {hasIntersected ? children : fallback}
    </div>
  )
}
