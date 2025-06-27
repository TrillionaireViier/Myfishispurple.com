"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Microscope, TrendingUp, Users, Heart, Download, ExternalLink } from "lucide-react"
import { LazySection } from "./LazySection"
import { LazyCard } from "./LazyCard"

export function ResearchSection() {
  const researchFindings = [
    {
      title: "Loneliness Reduction Study",
      institution: "Marine Psychology Institute",
      year: "2024",
      participants: "1,247 participants",
      duration: "12 months",
      keyFinding: "95% reduction in reported loneliness",
      description:
        "Comprehensive study showing significant improvement in emotional wellbeing among Purple Pufferfish owners.",
      badge: "Peer Reviewed",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      title: "Stress Hormone Analysis",
      institution: "University of Marine Sciences",
      year: "2024",
      participants: "856 participants",
      duration: "6 months",
      keyFinding: "23% decrease in cortisol levels",
      description:
        "Biological markers show measurable stress reduction in individuals caring for Purple Pufferfish companions.",
      badge: "Clinical Trial",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Social Interaction Improvement",
      institution: "Behavioral Health Research Center",
      year: "2023",
      participants: "2,100 participants",
      duration: "18 months",
      keyFinding: "78% increase in social confidence",
      description: "Long-term study demonstrating improved social skills and confidence through companion fish care.",
      badge: "Longitudinal",
      icon: <Users className="h-6 w-6" />,
    },
  ]

  const scientificBenefits = [
    {
      category: "Neurological",
      benefits: ["Increased serotonin production", "Reduced anxiety markers", "Improved sleep patterns"],
      color: "bg-blue-100 text-blue-700",
    },
    {
      category: "Psychological",
      benefits: ["Enhanced mood stability", "Reduced depression symptoms", "Increased life satisfaction"],
      color: "bg-purple-100 text-purple-700",
    },
    {
      category: "Social",
      benefits: ["Improved empathy", "Better communication skills", "Stronger relationships"],
      color: "bg-green-100 text-green-700",
    },
    {
      category: "Physical",
      benefits: ["Lower blood pressure", "Reduced stress hormones", "Better immune function"],
      color: "bg-orange-100 text-orange-700",
    },
  ]

  return (
    <LazySection className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Microscope className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-purple-900">Scientific Research & Evidence</h3>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our claims are backed by rigorous scientific research from leading institutions studying the therapeutic
            benefits of Purple Pufferfish companionship
          </p>
        </div>

        {/* Research Studies */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {researchFindings.map((study, index) => (
            <LazyCard key={index} delay={index * 150}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      {study.icon}
                    </div>
                    <Badge
                      className={
                        study.badge === "Peer Reviewed" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }
                    >
                      {study.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-purple-900 text-lg">{study.title}</CardTitle>
                  <p className="text-sm text-gray-600">
                    {study.institution} • {study.year}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Participants:</span>
                      <span className="font-medium">{study.participants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{study.duration}</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{study.keyFinding}</div>
                    <div className="text-sm text-purple-700">Key Finding</div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{study.description}</p>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50 flex-1 bg-transparent"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      PDF
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50 flex-1 bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Study
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </LazyCard>
          ))}
        </div>

        {/* Scientific Benefits */}
        <Card className="bg-white border-purple-200">
          <CardHeader>
            <CardTitle className="text-purple-900 text-center">Scientifically Proven Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scientificBenefits.map((category, index) => (
                <div key={index} className="text-center">
                  <div className={`inline-block px-4 py-2 rounded-full ${category.color} font-semibold mb-4`}>
                    {category.category}
                  </div>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Partnership CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-purple-900 mb-4">Contribute to Research</h4>
              <p className="text-gray-600 mb-6">
                Join our ongoing research studies and help us understand the therapeutic benefits of Purple Pufferfish
                companionship even better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Microscope className="mr-2 h-4 w-4" />
                  Join Research Study
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  View All Studies
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  )
}
