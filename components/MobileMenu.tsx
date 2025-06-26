"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Fish, X, Home, ImageIcon, HelpCircle, Star, Users, Mail } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const pathname = usePathname()

  const navigationItems = [
    { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    { href: "/gallery", label: "Gallery", icon: <ImageIcon className="h-5 w-5" /> },
    { href: "/faq", label: "FAQ", icon: <HelpCircle className="h-5 w-5" /> },
    { href: "/reviews", label: "Reviews", icon: <Star className="h-5 w-5" /> },
    { href: "/about", label: "About", icon: <Users className="h-5 w-5" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ]

  // Close menu when route changes
  useEffect(() => {
    onToggle()
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onToggle}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Fish className="h-6 w-6 text-purple-600" />
            <span className="text-lg font-bold text-purple-900">My Purple Fish</span>
          </div>
          <button
            onClick={onToggle}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6">
          <ul className="space-y-2 px-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                    }`}
                  >
                    <span className={isActive ? "text-purple-600" : "text-gray-500"}>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="p-6 border-t border-gray-200">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 transform hover:scale-105 transition-all duration-200">
            Get Started
          </Button>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Purple Fish World
            <br />
            <span className="text-purple-600">Expert fish care guidance</span>
          </p>
        </div>
      </div>
    </>
  )
}

export function MobileMenuToggle({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-6">
        {/* Hamburger Icon */}
        <span
          className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "rotate-45 top-3" : ""
          }`}
        />
        <span
          className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
            isOpen ? "-rotate-45 top-3" : ""
          }`}
        />
      </div>
    </button>
  )
}
