"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"
import { ProgressiveImage } from "./ProgressiveImage"
import type { CartItem } from "@/lib/cart"

interface ProductCardProps {
  product: Omit<CartItem, "quantity">
  onAddToCart: (product: Omit<CartItem, "quantity">) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    onAddToCart(product)

    // Brief delay for visual feedback
    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fish":
        return "bg-purple-100 text-purple-700"
      case "starter-kit":
        return "bg-blue-100 text-blue-700"
      case "accessory":
        return "bg-green-100 text-green-700"
      case "care-package":
        return "bg-orange-100 text-orange-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "fish":
        return "Companion"
      case "starter-kit":
        return "Starter Kit"
      case "accessory":
        return "Accessory"
      case "care-package":
        return "Care Package"
      default:
        return category
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
      <div className="relative">
        <ProgressiveImage
          src={product.image}
          alt={product.name}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <Badge className={`absolute top-4 right-4 ${getCategoryColor(product.category)}`}>
          {getCategoryLabel(product.category)}
        </Badge>
        {product.category === "fish" && (
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-1">
            <div className="flex items-center text-white text-sm">
              <Heart className="h-4 w-4 mr-1 text-red-400" />
              <span>Reduces loneliness</span>
            </div>
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-purple-900 line-clamp-2">{product.name}</CardTitle>
        <p className="text-gray-600 text-sm line-clamp-3">{product.description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Specifications for fish */}
        {product.specifications && (
          <div className="space-y-1 mb-4 text-sm">
            {product.specifications.size && (
              <div className="flex justify-between">
                <span className="text-gray-500">Size:</span>
                <span className="font-medium">{product.specifications.size}</span>
              </div>
            )}
            {product.specifications.difficulty && (
              <div className="flex justify-between">
                <span className="text-gray-500">Care Level:</span>
                <span className="font-medium">{product.specifications.difficulty}</span>
              </div>
            )}
            {product.specifications.companionshipLevel && (
              <div className="flex justify-between">
                <span className="text-gray-500">Companionship:</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="font-medium">{product.specifications.companionshipLevel}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Charity Impact */}
        <div className="bg-green-50 rounded-lg p-3 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Heart className="h-4 w-4 text-green-600 mr-1" />
              <span className="text-sm font-medium text-green-800">Charity Impact</span>
            </div>
            <span className="text-sm font-bold text-green-600">+${product.charityDonation}</span>
          </div>
          <p className="text-xs text-green-700 mt-1">Donated to marine conservation & mental health programs</p>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            {isAdding ? (
              <div className="flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Adding...
              </div>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
