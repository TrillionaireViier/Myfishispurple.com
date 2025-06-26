"use client"

import { useState, useEffect } from "react"
import type { CartItem, CartState } from "@/lib/cart"
import { calculateCartTotals } from "@/lib/cart"

export function useCart() {
  const [cart, setCart] = useState<CartState>({
    items: [],
    total: 0,
    charityTotal: 0,
    itemCount: 0,
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("pufferfish-cart")
    if (savedCart) {
      try {
        const items: CartItem[] = JSON.parse(savedCart)
        const totals = calculateCartTotals(items)
        setCart({
          items,
          ...totals,
        })
      } catch (error) {
        console.error("Error loading cart:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("pufferfish-cart", JSON.stringify(cart.items))
  }, [cart.items])

  const addToCart = (item: Omit<CartItem, "quantity">, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((cartItem) => cartItem.id === item.id)
      let newItems: CartItem[]

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = prevCart.items.map((cartItem, index) =>
          index === existingItemIndex ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem,
        )
      } else {
        // Add new item
        newItems = [...prevCart.items, { ...item, quantity }]
      }

      const totals = calculateCartTotals(newItems)
      return {
        items: newItems,
        ...totals,
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== itemId)
      const totals = calculateCartTotals(newItems)
      return {
        items: newItems,
        ...totals,
      }
    })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
      return
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) => (item.id === itemId ? { ...item, quantity } : item))
      const totals = calculateCartTotals(newItems)
      return {
        items: newItems,
        ...totals,
      }
    })
  }

  const clearCart = () => {
    setCart({
      items: [],
      total: 0,
      charityTotal: 0,
      itemCount: 0,
    })
  }

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }
}
