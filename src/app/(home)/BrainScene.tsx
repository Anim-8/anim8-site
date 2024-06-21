"use client"
import { Center, PresentationControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import LoadingSphere from '../components/shared/LoadingSphere'
import Brain from './Brain'

const BrainScene = () => {
    return (
        <>
            <Suspense fallback={<LoadingSphere />}>
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                >
                    <Center>
                        <Brain url="/brain.glb" />
                    </Center>
                </PresentationControls>
            </Suspense>
            <directionalLight position={[0, 4, 0]} intensity={1} />
        </>
    )
}

export default BrainScene