"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Filter, Heart } from "lucide-react"
import { LazySection } from "@/components/LazySection"
import { LazyCard } from "@/components/LazyCard"
import { ProductCard } from "./ProductCard"
import { cartItems } from "@/lib/cart"
import type { CartItem } from "@/lib/cart"

interface ShopSectionProps {
  onAddToCart: (product: Omit<CartItem, "quantity">) => void
}

export function ShopSection({ onAddToCart }: ShopSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = [
    { id: "all", name: "All Products", count: cartItems.length },
    { id: "fish", name: "Companions", count: cartItems.filter((item) => item.category === "fish").length },
    {
      id: "starter-kit",
      name: "Starter Kits",
      count: cartItems.filter((item) => item.category === "starter-kit").length,
    },
    { id: "accessory", name: "Accessories", count: cartItems.filter((item) => item.category === "accessory").length },
    {
      id: "care-package",
      name: "Care Packages",
      count: cartItems.filter((item) => item.category === "care-package").length,
    },
  ]

  const filteredProducts =
    selectedCategory === "all" ? cartItems : cartItems.filter((item) => item.category === selectedCategory)

  const totalCharityImpact = cartItems.reduce((sum, item) => sum + item.charityDonation, 0)

  return (
    <LazySection id="shop" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShoppingCart className="h-8 w-8 text-purple-600 mr-3" />
            <h3 className="text-3xl font-bold text-purple-900">Adopt Your Companion</h3>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Choose from our carefully selected Purple Pufferfish companions and complete care packages. Every purchase
            supports marine conservation and mental health programs.
          </p>

          {/* Charity Impact Banner */}
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Heart className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-lg font-semibold text-green-800">
                  Total Charity Impact: ${totalCharityImpact}
                </span>
              </div>
              <p className="text-green-700 text-sm">
                Every purchase includes automatic donations to marine conservation and mental health organizations
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <LazyCard key={product.id} delay={index * 100}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </LazyCard>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm">Try selecting a different category</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-900">Need Help Choosing?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Our experts can help you find the perfect Purple Pufferfish companion and setup for your needs and
                lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-purple-600 hover:bg-purple-700">Get Expert Advice</Button>
                <Button
                  variant="outline"
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent"
                >
                  Take Compatibility Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LazySection>
  )
}
