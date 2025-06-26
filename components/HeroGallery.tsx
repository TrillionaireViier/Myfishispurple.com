"use client"

import { useState, useEffect } from "react"
import { LazyHeroImage } from "./LazyHeroImage"
import { HeroVideo } from "./HeroVideo"

interface MediaItem {
  type: "image" | "video"
  src: string
  poster?: string
  alt: string
  caption: string
}

interface HeroGalleryProps {
  media: MediaItem[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function HeroGallery({ media, autoPlay = true, interval = 5000, className = "" }: HeroGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlaying || media.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % media.length)
    }, interval)

    return () => clearInterval(timer)
  }, [isAutoPlaying, interval, media.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  if (media.length === 0) return null

  const currentMedia = media[currentIndex]

  return (
    <div className={`relative ${className}`}>
      {/* Main media display */}
      <div className="relative h-full">
        {currentMedia.type === "video" ? (
          <HeroVideo
            videoSrc={currentMedia.src}
            posterSrc={currentMedia.poster || "/placeholder.svg?height=600&width=800"}
            className="h-full"
          />
        ) : (
          <LazyHeroImage
            src={currentMedia.src}
            alt={currentMedia.alt}
            className="h-full"
            priority={currentIndex === 0}
          />
        )}

        {/* Caption */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
            <p className="text-sm font-medium">{currentMedia.caption}</p>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      {media.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {media.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
