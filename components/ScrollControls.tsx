"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp, ChevronDown } from "lucide-react"

export function ScrollControls() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showScrollBottom, setShowScrollBottom] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight

      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

      setScrollProgress(Math.min(scrollPercent, 100))
      setShowScrollTop(scrollTop > 300)
      setShowScrollBottom(scrollPercent < 98) // Show until very close to bottom
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToBottom = () => {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
    )

    window.scrollTo({
      top: documentHeight,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Home" && e.ctrlKey) {
        e.preventDefault()
        scrollToTop()
      }
      if (e.key === "End" && e.ctrlKey) {
        e.preventDefault()
        scrollToBottom()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Scroll Controls */}
      <div className="fixed right-6 bottom-6 z-40 flex flex-col space-y-2">
        {/* Scroll to Top */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-fade-in"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        )}

        {/* Scroll to Bottom */}
        {showScrollBottom && (
          <Button
            onClick={scrollToBottom}
            size="sm"
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-fade-in bg-white"
          >
            <ChevronDown className="h-5 w-5" />
          </Button>
        )}
      </div>
    </>
  )
}
