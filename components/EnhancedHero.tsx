"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { HeroGallery } from "./HeroGallery"
import { getTranslation, type Language } from "@/lib/translations"

interface EnhancedHeroProps {
  language: Language
}

export function EnhancedHero({ language }: EnhancedHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  const heroMedia = [
    {
      type: "video" as const,
      src: "/placeholder-video.mp4",
      poster: "/placeholder.svg?height=600&width=1200",
      alt: "Purple pufferfish swimming peacefully",
      caption: "Watch how Purple Pufferfish create emotional bonds - your perfect companion for reducing loneliness",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Purple pufferfish with expressive eyes",
      caption: "Those expressive eyes and playful personality make Purple Pufferfish incredible emotional companions",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Person interacting with purple pufferfish",
      caption: "Daily interactions with your Purple Pufferfish reduce stress and create meaningful connections",
    },
    {
      type: "image" as const,
      src: "/placeholder.svg?height=600&width=1200",
      alt: "Purple pufferfish in comfortable aquarium setup",
      caption: "A well-designed habitat promotes both your pufferfish's wellbeing and your peace of mind",
    },
  ]

  useEffect(() => {
    // Simulate component mount and trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Media Gallery */}
      <div className="absolute inset-0 z-0">
        <HeroGallery media={heroMedia} autoPlay={true} interval={6000} className="h-full" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {getTranslation(language, "heroTitle")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
              Purple Fish
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl md:text-2xl mb-8 leading-relaxed text-gray-100 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {getTranslation(language, "heroDescription")}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              {getTranslation(language, "exploreSpecies")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm transform hover:scale-105 transition-all duration-200 bg-white/5"
            >
              <Play className="mr-2 h-5 w-5" />
              {getTranslation(language, "watchCareGuide")}
            </Button>
          </div>

          {/* Stats Preview */}
          <div
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { number: "50+", label: getTranslation(language, "statsSpecies") },
              { number: "10K+", label: getTranslation(language, "statsAquarists") },
              { number: "95%", label: getTranslation(language, "statsSuccess") },
              { number: "24/7", label: getTranslation(language, "statsSupport") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
