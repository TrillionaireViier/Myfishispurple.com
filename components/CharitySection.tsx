"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { getTranslation, type Language } from "@/lib/translations"

interface CharitySectionProps {
  language: Language
}

export function CharitySection({ language }: CharitySectionProps) {
  const charityPartners = [
    {
      name: "Ocean Conservancy",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Protecting marine ecosystems worldwide",
      impact: "$50,000 donated",
    },
    {
      name: "Mental Health America",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Supporting mental wellness programs",
      impact: "$35,000 donated",
    },
    {
      name: "Marine Conservation Institute",
      logo: "/placeholder.svg?height=80&width=200",
      description: "Preserving ocean biodiversity",
      impact: "$25,000 donated",
    },
  ]

  return (
    <LazySection className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500 mr-3" />
            <h3 className="text-3xl font-bold text-purple-900">{getTranslation(language, "charityTitle")}</h3>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            {getTranslation(language, "charityDescription")}
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "charityPartners")}</p>
        </div>

        {/* Donation Impact */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <LazyCard delay={0}>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">$110,000</div>
                <div className="text-gray-600">Total Donated</div>
              </CardContent>
            </Card>
          </LazyCard>
          <LazyCard delay={100}>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">4,400</div>
                <div className="text-gray-600">Fish Adopted</div>
              </CardContent>
            </Card>
          </LazyCard>
          <LazyCard delay={200}>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                <div className="text-gray-600">Countries Helped</div>
              </CardContent>
            </Card>
          </LazyCard>
          <LazyCard delay={300}>
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">92%</div>
                <div className="text-gray-600">Loneliness Reduced</div>
              </CardContent>
            </Card>
          </LazyCard>
        </div>

        {/* Charity Partners */}
        <div className="grid md:grid-cols-3 gap-8">
          {charityPartners.map((partner, index) => (
            <LazyCard key={index} delay={index * 150}>
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <ProgressiveImage
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={80}
                    className="mx-auto mb-4"
                  />
                  <CardTitle className="text-purple-900">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{partner.description}</p>
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-purple-700 font-semibold">{partner.impact}</div>
                    <div className="text-sm text-purple-600">This year</div>
                  </div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-purple-900 mb-4">Every Adoption Makes a Difference</h4>
              <p className="text-gray-600 mb-6">
                When you welcome a Purple Pufferfish companion, you're not just improving your own life - you're helping
                protect marine environments and supporting mental health initiatives worldwide.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 mr-4">
                <Heart className="mr-2 h-4 w-4" />
                Adopt Now
              </Button>
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  )
}
