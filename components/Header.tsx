"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Fish } from "lucide-react"
import { MobileMenu, MobileMenuToggle } from "./MobileMenu"
import { LanguageSelector } from "./LanguageSelector"
import { getTranslation, type Language } from "@/lib/translations"
import { useCart } from "@/hooks/useCart"
import { CartIcon } from "./CartIcon"
import { CartDrawer } from "./CartDrawer"

interface HeaderProps {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navigationItems = [
    { href: "/gallery", label: getTranslation(language, "gallery") },
    { href: "/faq", label: getTranslation(language, "faq") },
    { href: "/reviews", label: getTranslation(language, "reviews") },
    { href: "/about", label: getTranslation(language, "about") },
    { href: "/contact", label: getTranslation(language, "contact") },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-40 animate-slide-down">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Fish className="h-8 w-8 text-purple-600 animate-bounce-slow" />
              <h1 className="text-2xl font-bold text-purple-900">My Purple Fish</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center space-x-6 relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {navigationItems.map((item, index) => {
                const isActive = pathname === item.href
                const offsetX = isHovering ? (cursorPosition.x - window.innerWidth / 2) * 0.02 : 0
                const offsetY = isHovering ? (cursorPosition.y - 100) * 0.01 : 0

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-all duration-300 ease-out relative transform ${
                      isActive ? "text-purple-600 font-medium" : "text-gray-600 hover:text-purple-600"
                    }`}
                    style={{
                      transform: `translate(${offsetX}px, ${offsetY}px)`,
                      transitionDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600 rounded-full transition-all duration-300"
                        style={{
                          transform: `translate(${offsetX * 0.5}px, ${offsetY * 0.5}px)`,
                        }}
                      />
                    )}
                  </Link>
                )
              })}
              <div
                className="transition-all duration-300 ease-out"
                style={{
                  transform: isHovering
                    ? `translate(${(cursorPosition.x - window.innerWidth / 2) * 0.015}px, ${(cursorPosition.y - 100) * 0.008}px)`
                    : "translate(0, 0)",
                }}
              >
                <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
              </div>
              <div
                className="transition-all duration-300 ease-out"
                style={{
                  transform: isHovering
                    ? `translate(${(cursorPosition.x - window.innerWidth / 2) * 0.015}px, ${(cursorPosition.y - 100) * 0.008}px)`
                    : "translate(0, 0)",
                }}
              >
                <CartIcon itemCount={cart.itemCount} onClick={() => setIsCartOpen(true)} />
              </div>
              <div
                className="transition-all duration-300 ease-out"
                style={{
                  transform: isHovering
                    ? `translate(${(cursorPosition.x - window.innerWidth / 2) * 0.01}px, ${(cursorPosition.y - 100) * 0.005}px)`
                    : "translate(0, 0)",
                }}
              >
                <Button className="bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200">
                  {getTranslation(language, "getStarted")}
                </Button>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <MobileMenuToggle isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart.items}
        total={cart.total}
        charityTotal={cart.charityTotal}
        itemCount={cart.itemCount}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={() => {
          setIsCartOpen(false)
          // Navigate to checkout
          window.location.href = "/checkout"
        }}
      />
    </>
  )
}
