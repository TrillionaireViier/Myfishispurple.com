"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { LazySection } from "./LazySection"
import { LazyCard } from "./LazyCard"
import { ProgressiveImage } from "./ProgressiveImage"

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My Purple Pufferfish, Violet, has completely changed my life. I was struggling with loneliness after moving to a new city, but now I have a companion who greets me every day with such personality!",
      fishName: "Violet",
      timeWithFish: "8 months",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Austin, TX",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "I never thought a fish could be so interactive! Bubbles recognizes me and gets excited when I come home from work. It's like having a underwater puppy.",
      fishName: "Bubbles",
      timeWithFish: "1 year",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      location: "Miami, FL",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As someone dealing with anxiety, watching my Purple Pufferfish swim has become my daily meditation. The calming effect is incredible, and the bond we've formed is so special.",
      fishName: "Zen",
      timeWithFish: "6 months",
    },
    {
      id: 4,
      name: "David Park",
      location: "Portland, OR",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "My therapist recommended getting a companion animal, and my Purple Pufferfish has exceeded all expectations. The daily routine and care has given me purpose and joy.",
      fishName: "Hope",
      timeWithFish: "10 months",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <LazySection className="py-16 px-4 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-purple-900 mb-4">Real Stories, Real Connections</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our community about how Purple Pufferfish companions have transformed their lives and reduced
            loneliness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <LazyCard key={testimonial.id} delay={index * 150}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <ProgressiveImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-purple-900">{testimonial.name}</h4>
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                      <div className="flex items-center space-x-4 text-xs text-purple-600 mt-1">
                        <span>Fish: {testimonial.fishName}</span>
                        <span>•</span>
                        <span>{testimonial.timeWithFish}</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-purple-200" />
                    <p className="text-gray-700 italic pl-6 leading-relaxed">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">2,847</div>
            <div className="text-sm text-gray-600">Happy Owners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Report Less Loneliness</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">87%</div>
            <div className="text-sm text-gray-600">Reduced Anxiety</div>
          </div>
        </div>
      </div>
    </LazySection>
  )
}
