"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface Bubble {
  position: [number, number, number]
  speed: number
  scale: number
  opacity: number
}

export function Bubbles3D({ count = 20 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)

  const bubbles = useMemo(() => {
    const temp: Bubble[] = []
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
        speed: Math.random() * 0.02 + 0.01,
        scale: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      bubbles.forEach((bubble, i) => {
        // Update bubble position
        bubble.position[1] += bubble.speed

        // Reset bubble when it goes too high
        if (bubble.position[1] > 10) {
          bubble.position[1] = -10
          bubble.position[0] = (Math.random() - 0.5) * 20
          bubble.position[2] = (Math.random() - 0.5) * 20
        }

        // Apply floating motion
        const floatY = Math.sin(state.clock.elapsedTime + i) * 0.1
        const floatX = Math.cos(state.clock.elapsedTime * 0.5 + i) * 0.05

        const matrix = new THREE.Matrix4()
        matrix.setPosition(bubble.position[0] + floatX, bubble.position[1] + floatY, bubble.position[2])
        matrix.scale(new THREE.Vector3(bubble.scale, bubble.scale, bubble.scale))

        meshRef.current.setMatrixAt(i, matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color="#E0E7FF" transparent opacity={0.3} roughness={0.1} metalness={0.9} />
    </instancedMesh>
  )
}
