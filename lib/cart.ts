export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: "fish" | "starter-kit" | "accessory" | "care-package"
  quantity: number
  charityDonation: number
  specifications?: {
    size?: string
    difficulty?: string
    companionshipLevel?: string
  }
}

export interface CartState {
  items: CartItem[]
  total: number
  charityTotal: number
  itemCount: number
}

export const cartItems: Omit<CartItem, "quantity">[] = [
  {
    id: "purple-pufferfish-companion",
    name: "Purple Pufferfish Companion",
    price: 299.99,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Your perfect emotional companion. Reduces loneliness by 95% with expressive personality and strong bonding ability.",
    category: "fish",
    charityDonation: 25,
    specifications: {
      size: "4-6 inches",
      difficulty: "Intermediate",
      companionshipLevel: "Excellent",
    },
  },
  {
    id: "starter-companion-kit",
    name: "Complete Companion Starter Kit",
    price: 599.99,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Everything you need to welcome your Purple Pufferfish companion: 30-gallon tank, filtration, lighting, and emotional bonding guide.",
    category: "starter-kit",
    charityDonation: 50,
  },
  {
    id: "premium-companion-setup",
    name: "Premium Companion Setup",
    price: 899.99,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Luxury 50-gallon setup with smart monitoring, therapeutic lighting, and premium comfort features for maximum bonding.",
    category: "starter-kit",
    charityDonation: 75,
  },
  {
    id: "emotional-bonding-kit",
    name: "Emotional Bonding Enhancement Kit",
    price: 149.99,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "Interactive toys, feeding tools, and bonding activities designed to strengthen your emotional connection.",
    category: "accessory",
    charityDonation: 15,
  },
  {
    id: "loneliness-recovery-program",
    name: "Loneliness Recovery Support Program",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=400",
    description:
      "6-month guided program with expert support, daily interaction schedules, and emotional wellness tracking.",
    category: "care-package",
    charityDonation: 25,
  },
  {
    id: "therapeutic-lighting",
    name: "Therapeutic Aquarium Lighting",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=400",
    description: "Calming LED lighting system that promotes relaxation for both you and your pufferfish companion.",
    category: "accessory",
    charityDonation: 10,
  },
]

export function calculateCartTotals(items: CartItem[]): { total: number; charityTotal: number; itemCount: number } {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const charityTotal = items.reduce((sum, item) => sum + item.charityDonation * item.quantity, 0)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return { total, charityTotal, itemCount }
}
