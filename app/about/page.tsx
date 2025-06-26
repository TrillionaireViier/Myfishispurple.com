"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Heart, Users, Award, Target } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"

export default function AboutPage() {
  const team = [
    {
      name: "Dr. Marina Coral",
      role: "Marine Biologist & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in marine biology, Dr. Coral founded Purple Fish World to share her passion for these magnificent creatures.",
      specialties: ["Marine Biology", "Fish Behavior", "Aquarium Design"],
    },
    {
      name: "Alex Reef",
      role: "Aquarium Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Alex has been keeping and breeding purple fish for over a decade, specializing in rare species and advanced care techniques.",
      specialties: ["Fish Breeding", "Water Chemistry", "Tank Setup"],
    },
    {
      name: "Sophie Tang",
      role: "Community Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sophie connects our community of purple fish enthusiasts, organizing events and facilitating knowledge sharing.",
      specialties: ["Community Building", "Education", "Customer Support"],
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion for Fish",
      description: "We're driven by genuine love for purple fish and their wellbeing in captivity.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community First",
      description: "Building a supportive community where beginners and experts learn together.",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Knowledge",
      description: "Providing scientifically-backed information from marine biology professionals.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Sustainable Practices",
      description: "Promoting responsible fishkeeping and supporting sustainable aquaculture.",
    },
  ]

  const milestones = [
    { year: "2018", event: "Purple Fish World founded by Dr. Marina Coral" },
    { year: "2019", event: "Reached 1,000 community members" },
    { year: "2020", event: "Launched comprehensive care guide database" },
    { year: "2021", event: "Partnered with marine conservation organizations" },
    { year: "2022", event: "10,000+ successful fish placements" },
    { year: "2023", event: "Opened research facility for purple fish breeding" },
    { year: "2024", event: "Launched mobile app for fish care tracking" },
    { year: "2025", event: "Celebrating 50,000+ happy aquarists worldwide" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">About Purple Fish World</h2>
            <p className="text-xl text-gray-600 mb-8">
              Dedicated to helping aquarists create thriving purple fish communities since 2018
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

      {/* Mission Statement */}
      <LazySection className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-purple-900 mb-8">Our Mission</h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At Purple Fish World, we believe that every aquarist deserves access to expert knowledge and a supportive
            community. Our mission is to make purple fish keeping accessible, enjoyable, and successful for enthusiasts
            of all levels while promoting sustainable and ethical practices in the aquarium hobby.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <LazyCard key={index} delay={index * 150}>
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-purple-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Team Section */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">Meet Our Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our passionate team of marine biologists, aquarium specialists, and community builders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <LazyCard key={index} delay={index * 200}>
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <ProgressiveImage
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto mb-4"
                    />
                    <CardTitle className="text-purple-900">{member.name}</CardTitle>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Timeline */}
      <LazySection className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">Our Journey</h3>
            <p className="text-gray-600">Key milestones in our mission to support purple fish enthusiasts</p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <LazyCard key={index} delay={index * 100}>
                <div className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Contact CTA */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Join Our Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Ready to start your purple fish journey with expert guidance and community support?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700">Get in Touch</Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                  >
                    Explore Fish Species
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </LazySection>
    </div>
  )
}
