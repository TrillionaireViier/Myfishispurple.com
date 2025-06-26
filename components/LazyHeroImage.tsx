"use client"

import { useState, useEffect } from "react"
import { ProgressiveImage } from "./ProgressiveImage"

interface LazyHeroImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function LazyHeroImage({ src, alt, className = "", priority = true }: LazyHeroImageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger visibility after a short delay for staggered loading effect
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background gradient while loading */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100" />

      {/* Main hero image */}
      <ProgressiveImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  )
}
