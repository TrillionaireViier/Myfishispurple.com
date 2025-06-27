"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Gift, Bell, Users } from "lucide-react"
import { LazySection } from "./LazySection"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const benefits = [
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Exclusive Care Tips",
      description: "Weekly expert advice for your Purple Pufferfish",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Early Access",
      description: "Be first to know about new companions and products",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community Stories",
      description: "Inspiring stories from fellow fish owners",
    },
  ]

  return (
    <LazySection className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-purple-600 mr-3" />
              <CardTitle className="text-3xl text-purple-900">Stay Connected</CardTitle>
            </div>
            <p className="text-gray-600 text-lg">
              Join 25,000+ Purple Pufferfish enthusiasts and get exclusive care tips, community stories, and early
              access to new companions
            </p>
          </CardHeader>
          <CardContent>
            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-3">
                    {benefit.icon}
                  </div>
                  <h4 className="font-semibold text-purple-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <Button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 px-8 py-3 transform hover:scale-105 transition-all duration-200"
                >
                  {isSubscribed ? "Subscribed! 🎉" : "Subscribe"}
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>

            {/* Social Proof */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>25,000+ subscribers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>4.9/5 content rating</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Weekly updates</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </LazySection>
  )
}
