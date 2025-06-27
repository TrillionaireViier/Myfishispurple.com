"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Calendar, Award, ArrowRight } from "lucide-react"
import { LazySection } from "./LazySection"
import { LazyCard } from "./LazyCard"
import { ProgressiveImage } from "./ProgressiveImage"

export function CommunitySection() {
  const communityStats = [
    { icon: <Users className="h-6 w-6" />, number: "15K+", label: "Active Members" },
    { icon: <MessageCircle className="h-6 w-6" />, number: "50K+", label: "Support Messages" },
    { icon: <Calendar className="h-6 w-6" />, number: "200+", label: "Monthly Events" },
    { icon: <Award className="h-6 w-6" />, number: "98%", label: "Success Rate" },
  ]

  const communityFeatures = [
    {
      title: "Support Groups",
      description: "Join weekly virtual meetups with other Purple Pufferfish owners",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Weekly",
      participants: "150+ members",
    },
    {
      title: "Fish Care Forums",
      description: "Get expert advice and share experiences with our community",
      image: "/placeholder.svg?height=200&width=300",
      badge: "24/7 Active",
      participants: "5K+ discussions",
    },
    {
      title: "Loneliness Recovery Program",
      description: "Structured 12-week program with peer support and expert guidance",
      image: "/placeholder.svg?height=200&width=300",
      badge: "Guided",
      participants: "500+ graduates",
    },
  ]

  const upcomingEvents = [
    {
      title: "Purple Pufferfish Care Workshop",
      date: "Jan 15, 2025",
      time: "7:00 PM EST",
      type: "Virtual",
      attendees: 89,
    },
    {
      title: "Loneliness Support Circle",
      date: "Jan 18, 2025",
      time: "6:00 PM EST",
      type: "Virtual",
      attendees: 45,
    },
    {
      title: "Fish Photography Contest",
      date: "Jan 22, 2025",
      time: "All Day",
      type: "Online",
      attendees: 234,
    },
  ]

  return (
    <LazySection className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-purple-900 mb-4">Join Our Caring Community</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with thousands of Purple Pufferfish owners who understand your journey and are here to support you
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {communityStats.map((stat, index) => (
            <LazyCard key={index} delay={index * 100}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-purple-900 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {communityFeatures.map((feature, index) => (
            <LazyCard key={index} delay={index * 150}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                <div className="relative">
                  <ProgressiveImage
                    src={feature.image}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-purple-600">{feature.badge}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-purple-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-purple-600 font-medium">{feature.participants}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                    >
                      Join Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Upcoming Events */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center">
              <Calendar className="h-6 w-6 mr-2" />
              Upcoming Community Events
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-purple-900">{event.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>{event.date}</span>
                      <span>•</span>
                      <span>{event.time}</span>
                      <span>•</span>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {event.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-500">{event.attendees} attending</span>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Join Event
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </LazySection>
  )
}
