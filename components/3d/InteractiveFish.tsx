"use client"

import { useState } from "react"
import { Fish3D } from "./Fish3D"
import { Text } from "@react-three/drei"

interface InteractiveFishProps {
  onFishClick?: () => void
}

export function InteractiveFish({ onFishClick }: InteractiveFishProps) {
  const [clickCount, setClickCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const handleFishClick = () => {
    setClickCount((prev) => prev + 1)
    setShowMessage(true)
    onFishClick?.()

    setTimeout(() => setShowMessage(false), 2000)
  }

  const messages = [
    "Hello! 🐠",
    "I'm your companion! 💜",
    "Let's be friends! 🌟",
    "You're not alone! 🤗",
    "I love swimming! 🌊",
  ]

  return (
    <>
      <Fish3D position={[0, 0, 0]} scale={1.5} color="#8B5CF6" speed={1} amplitude={0.4} onClick={handleFishClick} />

      {showMessage && (
        <Text
          position={[0, 3, 0]}
          fontSize={0.8}
          color="#8B5CF6"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          {messages[clickCount % messages.length]}
        </Text>
      )}
    </>
  )
}
