"use client"

import { OptimizedImage } from "./OptimizedImage"

interface ProgressiveImageProps {
  src: string
  alt: string
  lowQualitySrc?: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
}

export function ProgressiveImage({
  src,
  alt,
  lowQualitySrc,
  className = "",
  fill = false,
  width,
  height,
  priority = false,
  quality = 75,
  sizes,
}: ProgressiveImageProps) {
  // Generate low quality placeholder if not provided
  const defaultLowQuality = src.includes("placeholder.svg")
    ? src
    : `/placeholder.svg?height=${height || 300}&width=${width || 400}`

  const lowQuality = lowQualitySrc || defaultLowQuality

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes={sizes}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rj5m1P4Q/dp0AkMp7/9k="
    />
  )
}
