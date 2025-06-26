"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, HelpCircle, Search } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { useState } from "react"
import { Header } from "@/components/Header"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqCategories = [
    {
      title: "Getting Started",
      icon: "🐠",
      questions: [
        {
          question: "What makes purple fish special?",
          answer:
            "Purple fish are unique due to their vibrant coloration, which comes from specialized pigment cells called chromatophores. They're often peaceful, hardy, and make excellent additions to both beginner and advanced aquariums.",
        },
        {
          question: "Which purple fish is best for beginners?",
          answer:
            "The Royal Gramma is perfect for beginners. It's hardy, peaceful, relatively small (3 inches), and adapts well to various tank conditions. Purple Firefish are also excellent starter fish.",
        },
        {
          question: "What tank size do I need for purple fish?",
          answer:
            "It depends on the species. Royal Grammas need at least 30 gallons, while Purple Tangs require 75+ gallons due to their size and swimming needs. Always research your specific fish's requirements.",
        },
      ],
    },
    {
      title: "Care & Maintenance",
      icon: "🔧",
      questions: [
        {
          question: "What water parameters do purple fish need?",
          answer:
            "Most purple fish thrive in saltwater with pH 8.1-8.4, temperature 72-78°F, and salinity 1.020-1.025. Regular water testing and changes (10-20% weekly) are essential.",
        },
        {
          question: "How often should I feed my purple fish?",
          answer:
            "Feed small amounts 2-3 times daily. Purple fish are typically omnivores, enjoying a mix of high-quality flakes, pellets, frozen foods, and occasional live foods like brine shrimp.",
        },
        {
          question: "Can purple fish live with other fish?",
          answer:
            "Most purple fish are peaceful and community-friendly. Royal Grammas, Purple Firefish, and similar species do well with other peaceful fish. Always research compatibility before mixing species.",
        },
      ],
    },
    {
      title: "Health & Troubleshooting",
      icon: "🏥",
      questions: [
        {
          question: "Why is my purple fish losing its color?",
          answer:
            "Color loss can indicate stress, poor water quality, inadequate diet, or illness. Check water parameters, ensure proper nutrition with color-enhancing foods, and observe for other symptoms.",
        },
        {
          question: "How do I treat common purple fish diseases?",
          answer:
            "Common issues include ich, fin rot, and bacterial infections. Quarantine affected fish, maintain excellent water quality, and consult with an aquatic veterinarian for proper treatment protocols.",
        },
        {
          question: "What are signs of a healthy purple fish?",
          answer:
            "Healthy purple fish display vibrant colors, active swimming, good appetite, clear eyes, intact fins, and normal breathing patterns. They should be alert and responsive to their environment.",
        },
      ],
    },
    {
      title: "Advanced Topics",
      icon: "🎓",
      questions: [
        {
          question: "Can I breed purple fish in captivity?",
          answer:
            "Some purple fish like Royal Grammas can be bred in captivity, though it requires specific conditions, separate breeding tanks, and considerable expertise. Research species-specific breeding requirements.",
        },
        {
          question: "How do I create the perfect purple fish habitat?",
          answer:
            "Provide plenty of hiding spots with live rock, caves, and coral. Maintain stable water parameters, proper lighting, and adequate filtration. Consider the natural habitat of your specific species.",
        },
        {
          question: "What's the lifespan of purple fish?",
          answer:
            "Lifespan varies by species. Royal Grammas can live 5-7 years, Purple Tangs 10-15 years, and Purple Firefish 3-5 years with proper care. Good husbandry significantly impacts longevity.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-12 w-12 text-purple-600 mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-purple-900">Frequently Asked Questions</h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">Everything you need to know about caring for your purple fish</p>
            <Link href="/">
              <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </LazySection>

      {/* FAQ Categories */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100">
                  <CardTitle className="flex items-center text-purple-900">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${categoryIndex}-${index}`}
                        className="border-b border-gray-200"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-purple-50">
                          <span className="font-medium text-purple-900">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Contact CTA */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Still Have Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">Can't find what you're looking for? Our expert team is here to help!</p>
              <Link href="/contact">
                <Button className="bg-purple-600 hover:bg-purple-700">Contact Our Experts</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </LazySection>
    </div>
  )
}
