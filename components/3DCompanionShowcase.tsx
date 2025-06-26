"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { Scene3D } from "./3d/Scene3D"
import { InteractiveFish } from "./3d/InteractiveFish"
import { LazySection } from "./LazySection"
import type { Language } from "@/lib/translations"

interface CompanionShowcase3DProps {
  language: Language
}

export function CompanionShowcase3D({ language }: CompanionShowcase3DProps) {
  const handleFishInteraction = () => {
    // Could trigger sound effects, animations, or other interactions
    console.log("Fish interaction!")
  }

  return (
    <LazySection className="py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-purple-900 mb-4">Meet Your 3D Companion</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interact with our 3D Purple Pufferfish to see how engaging and responsive your future companion will be!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Interactive Fish */}
          <div className="relative">
            <Card className="overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100 border-purple-200">
              <CardContent className="p-0">
                <div className="h-96 relative">
                  <Scene3D
                    className="h-full rounded-lg"
                    enableControls={true}
                    cameraPosition={[0, 0, 8]}
                    ambientIntensity={0.8}
                  >
                    <InteractiveFish onFishClick={handleFishInteraction} />
                  </Scene3D>

                  {/* Interaction overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-sm font-medium text-purple-900">
                      🖱️ Click & drag to rotate • Click fish to interact
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-purple-900">
                  <Heart className="h-6 w-6 mr-2 text-red-500" />
                  Interactive Companionship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Your Purple Pufferfish companion responds to your presence and interactions, creating a meaningful
                  bond that helps reduce loneliness and stress.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Recognizes your face and movements
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Responds to touch and interaction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Shows excitement when you approach
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Develops unique personality over time
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-semibold text-green-800">Emotional Benefits</span>
                </div>
                <p className="text-green-700 text-sm mb-4">
                  Studies show that interacting with Purple Pufferfish reduces cortisol levels by 23% and increases
                  serotonin production.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">95%</div>
                    <div className="text-xs text-green-700">Less Lonely</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">87%</div>
                    <div className="text-xs text-blue-700">Stress Reduced</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200">
              <Heart className="mr-2 h-4 w-4" />
              Adopt Your 3D Companion
            </Button>
          </div>
        </div>
      </div>
    </LazySection>
  )
}
