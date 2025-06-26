"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LazyLoadWrapperProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
  fallback?: React.ReactNode
  delay?: number
}

export function LazyLoadWrapper({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  className = "",
  fallback,
  delay = 0,
}: LazyLoadWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Add delay before rendering content
          if (delay > 0) {
            setTimeout(() => {
              setShouldRender(true)
            }, delay)
          } else {
            setShouldRender(true)
          }

          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {shouldRender ? children : fallback}
    </div>
  )
}
