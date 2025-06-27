"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Fish, Heart, Star, Users, Smile, Brain } from "lucide-react"
import { PageLoadingSkeleton, FishCardSkeleton, CareGuideSkeleton } from "@/components/skeletons"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"
import { Enhanced3DHero } from "@/components/Enhanced3DHero"
import { LazyLoadWrapper } from "@/components/LazyLoadWrapper"
import { CharitySection } from "@/components/CharitySection"
import { CompanionShowcase3D } from "@/components/3DCompanionShowcase"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { CommunitySection } from "@/components/CommunitySection"
import { ResearchSection } from "@/components/ResearchSection"
import { FeaturesComparisonSection } from "@/components/FeaturesComparisonSection"
import { NewsletterSection } from "@/components/NewsletterSection"
import { ScrollControls } from "@/components/ScrollControls"
import { getTranslation, type Language } from "@/lib/translations"
import { ShopSection } from "@/components/ShopSection"
import { useCart } from "@/hooks/useCart"

function DynamicFooterText() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const phrases = [
    "Danylo Viier worked hard for this website!",
    "Danylo Viier designed the fishy UI!",
    "Danylo Viier coded this purple paradise!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    <p>
      © 2025 Your Fish is Purple. All rights reserved.{" "}
      <a
        href="https://www.linkedin.com/in/daniel-viier/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-400 hover:text-purple-300 transition-colors duration-300 animate-pulse"
      >
        {phrases[currentPhrase]}
      </a>
    </p>
  )
}

function CompanionCard({ companion, index, language }: { companion: any; index: number; language: Language }) {
  return (
    <LazyCard delay={index * 150} fallback={<FishCardSkeleton />} className="h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
        <div className="relative h-48">
          <ProgressiveImage src={companion.image} alt={companion.name} fill className="rounded-t-lg" />
          <Badge className="absolute top-4 right-4 bg-purple-600 animate-fade-in">{companion.difficulty}</Badge>
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center text-white text-sm">
              <Heart className="h-4 w-4 mr-1 text-red-400" />
              <span>{companion.lonelinessReduction} less lonely</span>
            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-purple-900">{companion.name}</CardTitle>
          <CardDescription className="italic">{companion.scientificName}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">{companion.description}</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Size:</span>
              <span className="font-medium">{companion.size}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Companionship:</span>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{companion.companionshipLevel}</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Emotional Bond:</span>
              <span className="font-medium text-purple-600">{companion.emotionalBond}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </LazyCard>
  )
}

function CareGuideCard({ guide, index, language }: { guide: any; index: number; language: Language }) {
  return (
    <LazyCard delay={index * 200} fallback={<CareGuideSkeleton />} className="h-full">
      <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
        <CardHeader>
          <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4 animate-bounce-slow">
            {guide.icon}
          </div>
          <CardTitle className="text-purple-900">{guide.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{guide.description}</p>
        </CardContent>
      </Card>
    </LazyCard>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  return (
    <LazyCard delay={index * 100} animationClass="animate-scale-in" className="text-center">
      <div className="animate-count-up">
        <div className="text-4xl font-bold mb-2">{stat.number}</div>
        <div className="text-purple-100">{stat.label}</div>
      </div>
    </LazyCard>
  )
}

export default function HomePage() {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [language, setLanguage] = useState<Language>("en")
  const { addToCart } = useCart()

  // Detect browser language on mount
  useEffect(() => {
    const browserLang = navigator.language.split("-")[0] as Language
    if (["en", "uk", "de", "fr"].includes(browserLang)) {
      setLanguage(browserLang)
    }
  }, [])

  const featuredCompanions = [
    {
      name: getTranslation(language, "pufferfish.name"),
      scientificName: getTranslation(language, "pufferfish.scientificName"),
      difficulty: getTranslation(language, "pufferfish.difficulty"),
      size: getTranslation(language, "pufferfish.size"),
      image: "/placeholder.svg?height=300&width=400",
      description: getTranslation(language, "pufferfish.description"),
      companionshipLevel: getTranslation(language, "pufferfish.companionshipLevel"),
      lonelinessReduction: getTranslation(language, "pufferfish.lonelinessReduction"),
      emotionalBond: getTranslation(language, "pufferfish.emotionalBond"),
    },
  ]

  const careGuides = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.emotional.title"),
      description: getTranslation(language, "careGuides.emotional.description"),
    },
    {
      icon: <Smile className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.environment.title"),
      description: getTranslation(language, "careGuides.environment.description"),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: getTranslation(language, "careGuides.routine.title"),
      description: getTranslation(language, "careGuides.routine.description"),
    },
  ]

  const stats = [
    { number: "50+", label: getTranslation(language, "statsSpecies") },
    { number: "10K+", label: getTranslation(language, "statsAquarists") },
    { number: "95%", label: getTranslation(language, "statsSuccess") },
    { number: "24/7", label: getTranslation(language, "statsSupport") },
  ]

  useEffect(() => {
    // Simulate initial app load
    const timer = setTimeout(() => {
      setIsInitialLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  if (isInitialLoading) {
    return <PageLoadingSkeleton />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Scroll Controls */}
      <ScrollControls />

      {/* Header - Always visible, no lazy loading */}
      <Header language={language} onLanguageChange={setLanguage} />

      {/* Enhanced 3D Hero Section */}
      <Enhanced3DHero language={language} />

      {/* 3D Companion Showcase */}
      <CompanionShowcase3D language={language} />

      {/* Features Comparison Section */}
      <FeaturesComparisonSection />

      {/* Charity Section */}
      <CharitySection language={language} />

      {/* Shop Section */}
      <ShopSection onAddToCart={addToCart} />

      {/* Featured Companions - Lazy loaded */}
      <LazyLoadWrapper
        delay={200}
        fallback={
          <div className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(1)].map((_, i) => (
                  <FishCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <LazySection id="companions" className="py-16 px-4 bg-white" animationClass="animate-fade-in-up">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-purple-900 mb-4">{getTranslation(language, "featuredTitle")}</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "featuredDescription")}</p>
            </div>
            <div className="grid justify-center">
              <div className="max-w-md">
                {featuredCompanions.map((companion, index) => (
                  <CompanionCard key={index} companion={companion} index={index} language={language} />
                ))}
              </div>
            </div>
          </div>
        </LazySection>
      </LazyLoadWrapper>

      {/* Detailed Description Section */}
      <LazySection
        className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-100"
        animationClass="animate-fade-in-up"
      >
        <div className="container mx-auto max-w-4xl text-center">
          <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-purple-200">
            <CardContent className="p-12">
              <div className="flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-3xl font-bold text-purple-900">Why Choose a Purple Pufferfish Companion?</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                {getTranslation(language, "detailedDescription")}
              </p>
              <div className="mt-8 flex justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200">
                  <Heart className="mr-2 h-4 w-4" />
                  Find Your Companion
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </LazySection>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Research Section */}
      <ResearchSection />

      {/* Community Section */}
      <CommunitySection />

      {/* Care Guide Section - Lazy loaded */}
      <LazySection
        id="care"
        className="py-16 px-4"
        animationClass="animate-fade-in-up"
        fallback={
          <div className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <CareGuideSkeleton key={i} />
                ))}
              </div>
            </div>
          </div>
        }
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-purple-900 mb-4">{getTranslation(language, "careTitle")}</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">{getTranslation(language, "careDescription")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {careGuides.map((guide, index) => (
              <CareGuideCard key={index} guide={guide} index={index} language={language} />
            ))}
          </div>
        </div>
      </LazySection>

      {/* Stats Section - Lazy loaded */}
      <LazySection
        className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        animationClass="animate-fade-in"
        threshold={0.3}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </LazySection>

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section - Lazy loaded */}
      <LazySection className="py-16 px-4 bg-white" animationClass="animate-scale-in">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">{getTranslation(language, "ctaTitle")}</CardTitle>
              <CardDescription className="text-lg">{getTranslation(language, "ctaDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
                >
                  <Heart className="mr-2 h-4 w-4" />
                  {getTranslation(language, "startYourAquarium")}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 bg-transparent"
                >
                  {getTranslation(language, "downloadCareGuide")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </LazySection>

      {/* Footer - Lazy loaded */}
      <LazySection className="bg-purple-900 text-white py-12 px-4" animationClass="animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Fish className="h-6 w-6" />
                <span className="text-xl font-bold">Purple Pufferfish World</span>
              </div>
              <p className="text-purple-200">{getTranslation(language, "footerTagline")}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Companions</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Purple Pufferfish
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Emotional Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Loneliness Help
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    {getTranslation(language, "faq")}
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-white transition-colors">
                    {getTranslation(language, "gallery")}
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-white transition-colors">
                    {getTranslation(language, "reviews")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    {getTranslation(language, "about")}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    {getTranslation(language, "contact")}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Charity Partners
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
            <DynamicFooterText />
          </div>
        </div>
      </LazySection>
    </div>
  )
}
