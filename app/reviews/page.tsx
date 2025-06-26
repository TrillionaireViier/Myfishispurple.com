"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Star, ThumbsUp, MessageCircle } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2 weeks ago",
      fishType: "Royal Gramma",
      title: "Perfect beginner fish!",
      content:
        "I got my first Royal Gramma based on this site's recommendations and couldn't be happier! The care guide was spot-on, and my fish has been thriving for 6 months now. Beautiful purple and yellow colors that never fade.",
      helpful: 24,
      verified: true,
      images: ["/placeholder.svg?height=200&width=300"],
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "1 month ago",
      fishType: "Purple Tang",
      title: "Stunning addition to my reef tank",
      content:
        "The Purple Tang I added to my 90-gallon reef tank is absolutely gorgeous. The information about tank size requirements was crucial - definitely needed that larger tank! Swimming patterns and behavior exactly as described.",
      helpful: 18,
      verified: true,
      images: [],
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      date: "3 weeks ago",
      fishType: "Purple Firefish",
      title: "Beautiful but shy",
      content:
        "My Purple Firefish is absolutely beautiful with those flowing fins, but much more shy than expected. The care guide mentioned this, but I underestimated it. Still love the fish though - just needed more hiding spots!",
      helpful: 12,
      verified: true,
      images: ["/placeholder.svg?height=200&width=300", "/placeholder.svg?height=200&width=300"],
    },
    {
      id: 4,
      name: "David Park",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "1 week ago",
      fishType: "Royal Gramma",
      title: "Excellent customer support",
      content:
        "Had some questions about water parameters and the support team was incredibly helpful. My Royal Gramma is now doing great and showing amazing colors. The feeding schedule recommendations were perfect.",
      helpful: 8,
      verified: true,
      images: [],
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      date: "2 months ago",
      fishType: "Purple Tang",
      title: "Worth every penny",
      content:
        "Initially hesitant about the cost, but my Purple Tang has been the centerpiece of my aquarium. Healthy, active, and the purple coloration is even more vibrant than in the photos. Highly recommend!",
      helpful: 31,
      verified: true,
      images: ["/placeholder.svg?height=200&width=300"],
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4,
      date: "5 days ago",
      fishType: "Purple Firefish",
      title: "Great fish, needs patience",
      content:
        "Purple Firefish took about 2 weeks to fully settle in and show its true colors. The care guide prepared me for this adjustment period. Now it's one of my favorite fish - elegant and peaceful.",
      helpful: 6,
      verified: false,
      images: [],
    },
  ]

  const stats = {
    totalReviews: 247,
    averageRating: 4.8,
    fiveStars: 189,
    fourStars: 42,
    threeStars: 12,
    twoStars: 3,
    oneStar: 1,
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Customer Reviews</h2>
            <p className="text-xl text-gray-600 mb-8">See what our community says about their purple fish experience</p>
            <Link href="/">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-center text-purple-900">Overall Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-purple-600 mb-2">{stats.averageRating}</div>
                  <div className="flex justify-center mb-2">{renderStars(Math.round(stats.averageRating))}</div>
                  <p className="text-gray-600">Based on {stats.totalReviews} reviews</p>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => {
                    const count = stats[
                      `${stars === 1 ? "oneStar" : stars === 2 ? "twoStars" : stars === 3 ? "threeStars" : stars === 4 ? "fourStars" : "fiveStars"}` as keyof typeof stats
                    ] as number
                    const percentage = (count / stats.totalReviews) * 100
                    return (
                      <div key={stars} className="flex items-center space-x-2">
                        <span className="text-sm w-8">{stars}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 w-8">{count}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </LazySection>

      {/* Reviews List */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <LazyCard key={review.id} delay={index * 100}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <ProgressiveImage
                          src={review.avatar}
                          alt={review.name}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-purple-900">{review.name}</h3>
                            {review.verified && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Verified Purchase
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            <div className="flex">{renderStars(review.rating)}</div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <Badge variant="outline" className="mt-1 border-purple-200 text-purple-700">
                            {review.fishType}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-lg mb-2 text-purple-900">{review.title}</h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">{review.content}</p>

                    {review.images.length > 0 && (
                      <div className="flex space-x-2 mb-4">
                        {review.images.map((image, imgIndex) => (
                          <ProgressiveImage
                            key={imgIndex}
                            src={image}
                            alt={`Review image ${imgIndex + 1}`}
                            width={200}
                            height={150}
                            className="rounded-lg"
                          />
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                          <ThumbsUp className="h-4 w-4" />
                          <span className="text-sm">Helpful ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-purple-600 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">Reply</span>
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Write Review CTA */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Share Your Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">Help other aquarists by sharing your purple fish journey!</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Write a Review</Button>
            </CardContent>
          </Card>
        </div>
      </LazySection>
    </div>
  )
}
