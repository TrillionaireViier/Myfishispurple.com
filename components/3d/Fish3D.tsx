"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { useSpring, animated } from "@react-spring/three"
import { Text } from "@react-three/drei"
import type * as THREE from "three"

interface Fish3DProps {
  position?: [number, number, number]
  scale?: number
  color?: string
  speed?: number
  amplitude?: number
  onClick?: () => void
}

export function Fish3D({
  position = [0, 0, 0],
  scale = 1,
  color = "#8B5CF6",
  speed = 1,
  amplitude = 0.5,
  onClick,
}: Fish3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Animation for floating movement
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * amplitude
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.1
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.05
    }
  })

  // Spring animation for hover and click effects
  const { scale: animatedScale, rotation } = useSpring({
    scale: hovered ? scale * 1.2 : clicked ? scale * 0.9 : scale,
    rotation: clicked ? [0, Math.PI, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  })

  return (
    <animated.group
      position={position}
      scale={animatedScale}
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => {
        setClicked(true)
        onClick?.()
        setTimeout(() => setClicked(false), 200)
      }}
    >
      {/* Fish Body */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.1}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.1 : 0}
        />
      </mesh>

      {/* Fish Tail */}
      <mesh position={[-1.5, 0, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <coneGeometry args={[0.5, 1, 3]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Fish Fins */}
      <mesh position={[0.3, 0.5, 0.3]} rotation={[0, 0, Math.PI / 6]} castShadow>
        <coneGeometry args={[0.2, 0.6, 3]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0.3, 0.5, -0.3]} rotation={[0, 0, -Math.PI / 6]} castShadow>
        <coneGeometry args={[0.2, 0.6, 3]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Eyes */}
      <mesh position={[0.6, 0.3, 0.3]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.6, 0.3, -0.3]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Pupils */}
      <mesh position={[0.7, 0.3, 0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>
      <mesh position={[0.7, 0.3, -0.3]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Hover text */}
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.5}
          color="#8B5CF6"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Bold.json"
        >
          Purple Pufferfish! 🐠
        </Text>
      )}
    </animated.group>
  )
}
