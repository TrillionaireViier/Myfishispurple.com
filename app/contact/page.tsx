"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { Header } from "@/components/Header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    fishType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "support@purplefishworld.com",
      description: "Get expert advice within 24 hours",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+1 (555) 123-FISH",
      description: "Mon-Fri 9AM-6PM EST",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "123 Ocean Drive, Miami, FL 33139",
      description: "Research facility and showroom",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM EST",
      description: "Weekend support available",
    },
  ]

  const faqTopics = [
    "Fish Care Questions",
    "Tank Setup Help",
    "Species Selection",
    "Health Concerns",
    "Breeding Advice",
    "Water Chemistry",
    "Equipment Recommendations",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Contact Our Experts</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized advice from our team of marine biologists and aquarium specialists
            </p>
            <Link href="/">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-purple-900">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Contact Form */}
      <LazySection className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="fishType" className="block text-sm font-medium text-gray-700 mb-2">
                    What type of purple fish are you interested in?
                  </label>
                  <select
                    id="fishType"
                    name="fishType"
                    value={formData.fishType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a fish type</option>
                    <option value="royal-gramma">Royal Gramma</option>
                    <option value="purple-tang">Purple Tang</option>
                    <option value="purple-firefish">Purple Firefish</option>
                    <option value="other">Other Species</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    {faqTopics.map((topic) => (
                      <option key={topic} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your question or concern in detail..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-purple-900 mb-6">Why Contact Us?</h3>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Expert Guidance</h4>
                    <p className="text-gray-600">
                      Our team includes marine biologists with over 15 years of experience in purple fish care and
                      breeding.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Personalized Advice</h4>
                    <p className="text-gray-600">
                      Every aquarium is unique. We provide tailored recommendations based on your specific setup and
                      goals.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Ongoing Support</h4>
                    <p className="text-gray-600">
                      We're here for the long term. Follow-up support ensures your purple fish continue to thrive.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Emergency Help</h4>
                    <p className="text-gray-600">
                      Fish health emergencies can't wait. Our experts are available for urgent consultations when your
                      purple fish need immediate help.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-2">Response Time</h4>
                <p className="text-gray-600 mb-4">
                  We typically respond to all inquiries within 24 hours during business days. Emergency fish health
                  questions receive priority response within 4-6 hours.
                </p>
                <div className="flex items-center space-x-2 text-sm text-purple-700">
                  <Clock className="h-4 w-4" />
                  <span>Average response time: 8 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazySection>

      {/* FAQ Link */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Need Quick Answers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Check our comprehensive FAQ section for instant answers to common purple fish questions.
              </p>
              <Link href="/faq">
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Browse FAQ
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </LazySection>
    </div>
  )
}
