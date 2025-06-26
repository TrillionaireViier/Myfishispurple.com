"use client"

import { Fish3D } from "./Fish3D"
import { Bubbles3D } from "./Bubbles3D"

export function FloatingFish() {
  return (
    <>
      {/* Main hero fish */}
      <Fish3D position={[0, 0, 0]} scale={2} color="#8B5CF6" speed={0.8} amplitude={0.3} />

      {/* Smaller companion fish */}
      <Fish3D position={[4, 2, -2]} scale={1} color="#A855F7" speed={1.2} amplitude={0.5} />
      <Fish3D position={[-3, -1, 1]} scale={0.8} color="#9333EA" speed={0.9} amplitude={0.4} />
      <Fish3D position={[2, -3, -1]} scale={1.2} color="#7C3AED" speed={1.1} amplitude={0.6} />

      {/* Background bubbles */}
      <Bubbles3D count={30} />
    </>
  )
}
