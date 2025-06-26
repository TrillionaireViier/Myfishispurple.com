"use client"

import type React from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei"
import { Suspense } from "react"

interface Scene3DProps {
  children: React.ReactNode
  className?: string
  enableControls?: boolean
  cameraPosition?: [number, number, number]
  ambientIntensity?: number
}

export function Scene3D({
  children,
  className = "",
  enableControls = false,
  cameraPosition = [0, 0, 10],
  ambientIntensity = 0.5,
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} />

        {/* Lighting */}
        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />

        {/* Environment */}
        <Environment preset="sunset" />

        {/* Controls */}
        {enableControls && (
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        )}

        {/* Content */}
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  )
}
