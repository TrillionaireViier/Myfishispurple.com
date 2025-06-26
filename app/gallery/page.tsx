"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Grid, List, Search, Heart } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProgressiveImage } from "@/components/ProgressiveImage"
import { Header } from "@/components/Header"

export default function GalleryPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Fish", count: 48 },
    { id: "royal-gramma", name: "Royal Gramma", count: 15 },
    { id: "purple-tang", name: "Purple Tang", count: 12 },
    { id: "purple-firefish", name: "Purple Firefish", count: 10 },
    { id: "other", name: "Other Species", count: 11 },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "Royal Gramma in Natural Habitat",
      species: "Royal Gramma",
      category: "royal-gramma",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Dr. Marina Coral",
      description: "A stunning Royal Gramma displaying its vibrant purple and yellow coloration in a reef environment.",
      likes: 124,
      tags: ["reef", "natural", "colorful"],
    },
    {
      id: 2,
      title: "Purple Tang Swimming Gracefully",
      species: "Purple Tang",
      category: "purple-tang",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Alex Reef",
      description: "An adult Purple Tang showcasing its elegant swimming patterns and deep purple hues.",
      likes: 98,
      tags: ["swimming", "elegant", "adult"],
    },
    {
      id: 3,
      title: "Purple Firefish Pair",
      species: "Purple Firefish",
      category: "purple-firefish",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Sophie Tang",
      description: "A bonded pair of Purple Firefish displaying their characteristic hovering behavior.",
      likes: 156,
      tags: ["pair", "behavior", "bonded"],
    },
    {
      id: 4,
      title: "Royal Gramma Cave Dwelling",
      species: "Royal Gramma",
      category: "royal-gramma",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Mike Chen",
      description: "Royal Gramma exhibiting its natural cave-dwelling behavior in a well-structured aquarium.",
      likes: 87,
      tags: ["cave", "behavior", "aquarium"],
    },
    {
      id: 5,
      title: "Juvenile Purple Tang",
      species: "Purple Tang",
      category: "purple-tang",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Emma Rodriguez",
      description: "A young Purple Tang showing the subtle color differences compared to adults.",
      likes: 73,
      tags: ["juvenile", "young", "development"],
    },
    {
      id: 6,
      title: "Purple Firefish Close-up",
      species: "Purple Firefish",
      category: "purple-firefish",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "David Park",
      description: "Detailed close-up showing the intricate fin patterns and coloration of a Purple Firefish.",
      likes: 112,
      tags: ["close-up", "details", "fins"],
    },
    {
      id: 7,
      title: "Royal Gramma Feeding Time",
      species: "Royal Gramma",
      category: "royal-gramma",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "Lisa Thompson",
      description: "Royal Gramma actively feeding, showing its natural foraging behavior.",
      likes: 91,
      tags: ["feeding", "behavior", "active"],
    },
    {
      id: 8,
      title: "Purple Tang School",
      species: "Purple Tang",
      category: "purple-tang",
      image: "/placeholder.svg?height=400&width=600",
      photographer: "James Wilson",
      description: "Multiple Purple Tangs swimming together in a large reef aquarium setup.",
      likes: 203,
      tags: ["school", "multiple", "reef"],
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.species.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-blue-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Purple Fish Gallery</h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore stunning photography of purple fish in their natural beauty
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

      {/* Filters and Controls */}
      <LazySection className="py-8 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-8">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-purple-600" : "border-purple-600 text-purple-600"}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "bg-purple-600" : "border-purple-600 text-purple-600"}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-purple-600"
                    : "border-purple-600 text-purple-600 hover:bg-purple-50"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Gallery Grid */}
      <LazySection className="py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}>
            {filteredItems.map((item, index) => (
              <LazyCard key={item.id} delay={index * 100}>
                {viewMode === "grid" ? (
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                      <ProgressiveImage
                        src={item.image}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600">{item.species}</Badge>
                      </div>
                      <button className="absolute bottom-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                        <Heart className="h-4 w-4 text-purple-600" />
                      </button>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-purple-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">by {item.photographer}</span>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Heart className="h-4 w-4" />
                          <span>{item.likes}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="flex">
                      <ProgressiveImage
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="w-48 h-32 object-cover flex-shrink-0"
                      />
                      <CardContent className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-purple-900">{item.title}</h3>
                          <Badge className="bg-purple-600 ml-2">{item.species}</Badge>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">by {item.photographer}</span>
                          <div className="flex items-center space-x-1 text-sm text-gray-500">
                            <Heart className="h-4 w-4" />
                            <span>{item.likes}</span>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                )}
              </LazyCard>
            ))}
          </div>
        </div>
      </LazySection>

      {/* Upload CTA */}
      <LazySection className="py-16 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-purple-900 mb-4">Share Your Photos</h3>
              <p className="text-gray-600 mb-6">Have beautiful purple fish photos? Share them with our community!</p>
              <Button className="bg-purple-600 hover:bg-purple-700">Upload Photos</Button>
            </CardContent>
          </Card>
        </div>
      </LazySection>
    </div>
  )
}
