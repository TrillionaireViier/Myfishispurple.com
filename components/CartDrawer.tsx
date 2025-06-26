"use client"

import { X, Plus, Minus, Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProgressiveImage } from "./ProgressiveImage"
import type { CartItem } from "@/lib/cart"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  total: number
  charityTotal: number
  itemCount: number
  onUpdateQuantity: (itemId: string, quantity: number) => void
  onRemoveItem: (itemId: string) => void
  onCheckout: () => void
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  total,
  charityTotal,
  itemCount,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

      {/* Cart Drawer */}
      <div className="fixed top-0 right-0 h-full w-96 max-w-[90vw] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-purple-900">Your Cart</h2>
            {itemCount > 0 && (
              <Badge className="bg-purple-100 text-purple-700">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="p-2 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Heart className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Add some companions to get started!</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <ProgressiveImage
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-purple-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.description}</p>

                        {/* Price and Charity */}
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="font-bold text-purple-600">${item.price.toFixed(2)}</span>
                            <div className="text-xs text-green-600 flex items-center">
                              <Heart className="h-3 w-3 mr-1" />
                              +${item.charityDonation} to charity
                            </div>
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Totals and Checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            {/* Charity Impact */}
            <div className="bg-green-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium text-green-800">Charity Impact</span>
                </div>
                <span className="font-bold text-green-600">${charityTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-green-700 mt-1">Supporting marine conservation & mental health programs</p>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <Button onClick={onCheckout} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3" size="lg">
              Proceed to Checkout
            </Button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Secure checkout • Free shipping on orders over $500
            </p>
          </div>
        )}
      </div>
    </>
  )
}
