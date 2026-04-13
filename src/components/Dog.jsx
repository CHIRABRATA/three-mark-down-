import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const DogModel = () => {
    return (
        <group>
            {/* Body */}
            <mesh position={[0, 0.5, 0]}>
                <boxGeometry args={[0.8, 1.2, 1.5]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Head */}
            <mesh position={[0, 1.4, 0.6]}>
                <boxGeometry args={[0.7, 0.8, 0.7]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Left Ear */}
            <mesh position={[-0.4, 1.9, 0.5]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Right Ear */}
            <mesh position={[0.4, 1.9, 0.5]}>
                <boxGeometry args={[0.3, 0.6, 0.3]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Snout */}
            <mesh position={[0, 1.2, 1.05]}>
                <boxGeometry args={[0.4, 0.4, 0.4]} />
                <meshStandardMaterial color="#DEB887" />
            </mesh>

            {/* Nose */}
            <mesh position={[0, 1.25, 1.25]}>
                <sphereGeometry args={[0.12, 8, 8]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Front Left Leg */}
            <mesh position={[-0.35, -0.1, 0.4]}>
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Front Right Leg */}
            <mesh position={[0.35, -0.1, 0.4]}>
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Back Left Leg */}
            <mesh position={[-0.35, -0.1, -0.6]}>
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Back Right Leg */}
            <mesh position={[0.35, -0.1, -0.6]}>
                <boxGeometry args={[0.3, 1, 0.3]} />
                <meshStandardMaterial color="#CD853F" />
            </mesh>

            {/* Tail */}
            <mesh position={[0, 0.7, -1.2]} rotation={[0.3, 0, 0]}>
                <boxGeometry args={[0.25, 0.25, 0.8]} />
                <meshStandardMaterial color="#8B4513" />
            </mesh>

            {/* Left Eye */}
            <mesh position={[-0.2, 1.5, 1.05]}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[-0.2, 1.5, 1.08]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial color="#000000" />
            </mesh>

            {/* Right Eye */}
            <mesh position={[0.2, 1.5, 1.05]}>
                <sphereGeometry args={[0.08, 8, 8]} />
                <meshStandardMaterial color="#FFFFFF" />
            </mesh>
            <mesh position={[0.2, 1.5, 1.08]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial color="#000000" />
            </mesh>
        </group>
    )
}

const Dog = () => {
    return (
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <pointLight position={[-5, 5, 5]} intensity={0.5} />

            {/* Ground */}
            <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[10, 10]} />
                <meshStandardMaterial color="#90EE90" />
            </mesh>

            <DogModel />
            <OrbitControls />
        </Canvas>
    )
}

export default Dog