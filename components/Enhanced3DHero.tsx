"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { Scene3D } from "./3d/Scene3D"
import { FloatingFish } from "./3d/FloatingFish"
import { getTranslation, type Language } from "@/lib/translations"

interface Enhanced3DHeroProps {
  language: Language
}

export function Enhanced3DHero({ language }: Enhanced3DHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D className="h-full" enableControls={false} cameraPosition={[0, 0, 15]} ambientIntensity={0.6}>
          <FloatingFish />
        </Scene3D>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 z-10" />

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 py-20">
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
              className="bg-purple-600 hover:bg-purple-700 text-white border-0 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm"
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
              <div key={index} className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-white">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Interactive hint */}
          <div
            className={`mt-8 text-center transition-all duration-1000 delay-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm text-purple-200 animate-pulse">💡 Click on the fish to interact with them!</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
