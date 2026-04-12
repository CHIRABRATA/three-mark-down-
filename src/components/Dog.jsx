import React from 'react'
import { Canvas } from '@react-three/fiber'

const Box = () => {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color="red" />
        </mesh>
    )
}

const Dog = () => {
    return (
        <Canvas>
            <Box />
        </Canvas>
    )
}

export default Dog     