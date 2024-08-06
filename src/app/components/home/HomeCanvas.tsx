"use client"
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor, PerspectiveCamera } from '@react-three/drei'
import HomeScene from './HomeScene'

const HomeCanvas = () => {
    const [dpr, setDpr] = useState<number>(1.5)
    return (
        <div style={{ width: "100%", height: "100%", background: "black", touchAction: 'none' }}>
            <Canvas dpr={dpr}>
                <PerspectiveCamera position={[300, 300, 300]} fov={75} far={1000} near={0.1} makeDefault />
                <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
                    <HomeScene />
                </PerformanceMonitor>
            </Canvas>
        </div>
    )
}

export default HomeCanvas