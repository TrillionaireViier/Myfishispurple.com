"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CartIconProps {
  itemCount: number
  onClick: () => void
}

export function CartIcon({ itemCount, onClick }: CartIconProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className="relative border-purple-200 hover:bg-purple-50 bg-transparent"
    >
      <ShoppingCart className="h-4 w-4" />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-purple-600 text-white text-xs">
          {itemCount > 99 ? "99+" : itemCount}
        </Badge>
      )}
    </Button>
  )
}
