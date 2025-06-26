"use client"

import { useState } from "react"
import Image from "next/image"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"
import { LoadingSpinner } from "./skeletons"

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  placeholder?: string
  onLoad?: () => void
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = "",
  fill = false,
  priority = false,
  placeholder = "/placeholder.svg?height=300&width=400",
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  })

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // For priority images, load immediately
  const shouldLoad = priority || hasIntersected

  return (
    <div
      ref={elementRef}
      className={`relative overflow-hidden ${className}`}
      style={!fill ? { width, height } : undefined}
    >
      {/* Loading skeleton */}
      {!isLoaded && shouldLoad && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}

      {/* Placeholder when not in view */}
      {!shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
          <div className="text-purple-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Actual image */}
      {shouldLoad && (
        <Image
          src={hasError ? placeholder : src}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          className={`transition-all duration-500 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } ${fill ? "object-cover" : ""}`}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-sm text-center">
            <div>Image failed to load</div>
            <div className="text-xs mt-1">Using placeholder</div>
          </div>
        </div>
      )}
    </div>
  )
}
