"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Heart, Home, Mail } from "lucide-react"
import { Header } from "@/components/Header"
import type { Language } from "@/lib/translations"

export default function CheckoutSuccessPage() {
  const [language, setLanguage] = useState<Language>("en")

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      <Header language={language} onLanguageChange={setLanguage} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-purple-900 mb-2">Order Confirmed!</h1>
            <p className="text-lg text-gray-600">
              Thank you for choosing a Purple Pufferfish companion. Your order has been successfully placed.
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-purple-900">What happens next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 rounded-full p-2 mt-1">
                  <Mail className="h-4 w-4 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Confirmation Email</h3>
                  <p className="text-gray-600 text-sm">
                    You'll receive an order confirmation email within the next few minutes with all the details.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Heart className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Companion Preparation</h3>
                  <p className="text-gray-600 text-sm">
                    Our experts will prepare your Purple Pufferfish companion with love and care, ensuring they're ready
                    for their new home.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-2 mt-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Charity Donation</h3>
                  <p className="text-gray-600 text-sm">
                    Your automatic charity donation has been processed and will support marine conservation and mental
                    health programs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Charity Impact */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Heart className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-green-800">Thank You for Making a Difference!</h2>
              </div>
              <p className="text-green-700 mb-4">
                Your purchase includes an automatic donation that will help protect marine ecosystems and support mental
                health awareness programs worldwide.
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-green-800 font-medium">
                  🌊 Marine conservation efforts
                  <br />🧠 Mental health support programs
                  <br />💜 Loneliness reduction initiatives
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button className="bg-purple-600 hover:bg-purple-700">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Button>
            </Link>
            <Link href="/care-guide">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                View Care Guide
              </Button>
            </Link>
          </div>

          {/* Support */}
          <div className="mt-12 p-6 bg-white/50 rounded-lg">
            <h3 className="font-semibold text-purple-900 mb-2">Need Help?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Our expert team is here to support you and your new companion every step of the way.
            </p>
            <Link href="/contact">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
              >
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
