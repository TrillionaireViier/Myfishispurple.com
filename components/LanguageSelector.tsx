"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, ChevronDown } from "lucide-react"
import type { Language } from "@/lib/translations"

interface LanguageSelectorProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "uk" as Language, name: "Українська", flag: "🇺🇦" },
  { code: "de" as Language, name: "Deutsch", flag: "🇩🇪" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
]

export function LanguageSelector({ currentLanguage, onLanguageChange }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find((lang) => lang.code === currentLanguage) || languages[0]

  return (
    <div className="relative">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 border-purple-200 hover:bg-purple-50"
      >
        <Globe className="h-4 w-4" />
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className="h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />

          {/* Dropdown */}
          <Card className="absolute top-full right-0 mt-2 z-50 min-w-[200px] shadow-lg">
            <CardContent className="p-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    onLanguageChange(language.code)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left hover:bg-purple-50 transition-colors ${
                    currentLanguage === language.code ? "bg-purple-100 text-purple-700" : "text-gray-700"
                  }`}
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                  {currentLanguage === language.code && <span className="ml-auto text-purple-600">✓</span>}
                </button>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
