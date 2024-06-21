"use client"
import { Center, Environment, Html, PresentationControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import LoadingSphere from '../components/shared/LoadingSphere'
import Brain from './Brain'
import { StringNullable } from '@/custom-types'

type BrainSceneProps = {
    onPointerEvent: (name: StringNullable) => void;
}

const BrainScene:React.FC<BrainSceneProps> = ({ onPointerEvent }) => {
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
                        <Brain url="/brain.glb" onPointerEvent={onPointerEvent} />
                    </Center>
                </PresentationControls>
            </Suspense>
            <Environment preset="apartment" blur={0.9} />
            <directionalLight position={[0, 4, 0]} intensity={1} />
        </>
    )
}

export default BrainScene