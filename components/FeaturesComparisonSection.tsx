"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star } from "lucide-react"
import { LazySection } from "./LazySection"
import { LazyCard } from "./LazyCard"

export function FeaturesComparisonSection() {
  const companions = [
    {
      name: "Purple Pufferfish",
      subtitle: "Our Signature Companion",
      price: "$299",
      image: "/placeholder.svg?height=200&width=200",
      popular: true,
      features: {
        "Emotional Recognition": true,
        "Interactive Personality": true,
        "Loneliness Reduction": "95%",
        "Stress Relief": "High",
        "Care Difficulty": "Intermediate",
        Lifespan: "8-12 years",
        "Tank Size": "30+ gallons",
        "Community Compatible": true,
        "Therapeutic Benefits": true,
        "Expert Support": true,
      },
    },
    {
      name: "Regular Goldfish",
      subtitle: "Traditional Pet Fish",
      price: "$15",
      image: "/placeholder.svg?height=200&width=200",
      popular: false,
      features: {
        "Emotional Recognition": false,
        "Interactive Personality": false,
        "Loneliness Reduction": "20%",
        "Stress Relief": "Low",
        "Care Difficulty": "Easy",
        Lifespan: "5-10 years",
        "Tank Size": "20+ gallons",
        "Community Compatible": true,
        "Therapeutic Benefits": false,
        "Expert Support": false,
      },
    },
    {
      name: "Betta Fish",
      subtitle: "Colorful Solo Fish",
      price: "$25",
      image: "/placeholder.svg?height=200&width=200",
      popular: false,
      features: {
        "Emotional Recognition": false,
        "Interactive Personality": "Limited",
        "Loneliness Reduction": "35%",
        "Stress Relief": "Medium",
        "Care Difficulty": "Easy",
        Lifespan: "2-4 years",
        "Tank Size": "5+ gallons",
        "Community Compatible": false,
        "Therapeutic Benefits": "Limited",
        "Expert Support": false,
      },
    },
  ]

  const renderFeatureValue = (value: any) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-green-500" />
    }
    if (value === false) {
      return <X className="h-5 w-5 text-red-500" />
    }
    if (typeof value === "string") {
      return <span className="text-sm font-medium">{value}</span>
    }
    return <span className="text-sm">{value}</span>
  }

  return (
    <LazySection className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-purple-900 mb-4">Why Choose Purple Pufferfish?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare the unique benefits of Purple Pufferfish companions with traditional pet fish options
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {companions.map((companion, index) => (
            <LazyCard key={index} delay={index * 150}>
              <Card
                className={`h-full transition-all duration-300 transform hover:-translate-y-1 ${
                  companion.popular ? "ring-2 ring-purple-500 shadow-xl scale-105" : "hover:shadow-lg border-gray-200"
                }`}
              >
                <CardHeader className="text-center relative">
                  {companion.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={companion.image || "/placeholder.svg"}
                      alt={companion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className={`text-xl ${companion.popular ? "text-purple-900" : "text-gray-900"}`}>
                    {companion.name}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{companion.subtitle}</p>
                  <div className={`text-2xl font-bold mt-2 ${companion.popular ? "text-purple-600" : "text-gray-700"}`}>
                    {companion.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(companion.features).map(([feature, value]) => (
                      <div key={feature} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <span className="text-sm text-gray-700">{feature}</span>
                        <div className="flex items-center">{renderFeatureValue(value)}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Key Differentiators */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-900 text-center">What Makes Purple Pufferfish Special?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">High Intelligence</h4>
                  <p className="text-sm text-gray-600">
                    Recognizes faces, learns routines, and shows distinct personality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💜</span>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">Emotional Bond</h4>
                  <p className="text-sm text-gray-600">Forms genuine connections that reduce loneliness and anxiety</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">Therapeutic Focus</h4>
                  <p className="text-sm text-gray-600">Specifically bred and trained for emotional support</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">Expert Support</h4>
                  <p className="text-sm text-gray-600">24/7 access to marine biologists and care specialists</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  )
}
