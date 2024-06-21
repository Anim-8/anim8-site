
"use client"
import React, { useCallback, useState } from 'react'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import styles from './page.module.scss'
import Cards from './Cards'
import { Canvas } from '@react-three/fiber'
import { Center, Html, StatsGl } from '@react-three/drei'
import BrainScene from './BrainScene'
import { StringNullable } from '@/custom-types'

const cards: CardData[] = [
    {
        title: 'Solution Design',
        content: (
            <ul className='text-center'>
                {
                    ["Concept and Layout", "Protocol Definition and Documentation", "Modeling and Analysis"]
                        .map(l => <li key={l} className='secondary'>{l}</li>)
                }
            </ul>
        )
    },
    {
        title: 'Software', content: (
            <ul className='text-center'>
                {
                    ["Gauge Monitoring", "Measurement Plan Management", "3D Engine", "Correlation Loops", "Customizable SPC/MSPC Alarms", "Predictive Models"]
                        .map(l => <li key={l} className='secondary'>{l}</li>)
                }
            </ul>
        )
    },
]

const Approach = () => {
    const [name, setName] = useState<StringNullable>(null)
    const handlePointerEvent = useCallback((name: StringNullable) => {
        if (!name) setName(name)
        else {
            let n;
            if (name.includes("Allen")) {
                n = name.split("Allen")[1].split("_").slice(1, -1).map(n => n[0].toUpperCase() + n.slice(1)).join(" ")
            } else {
                n = name.split("_").map(n => n[0].toUpperCase() + n.slice(1)).join(" ")
            }
            setName(n)
        }
    }, [])

    return (
        <div className={styles.approach} id="approach">
            <Statement>
                <SubHeader className='mb-4'>Approach</SubHeader>
                <p>
                    We see manufacturing in its full complexity,
                    integrating the sensor and software layers to develop a comprehensive and
                    cohesive strategy aimed at maximizing results.
                </p>
            </Statement>
            <Cards className='justify-center items-center' cards={cards} />
            { name }
            <div style={{ height: '70vh', width: '90%', color: 'white', background: 'black', margin: '0 auto' }}>
                <Canvas shadows camera={{ far: 100, near: 0.1, fov: 35, aspect: 1.3, position: [.2, -.1, 5] }}>
                    <BrainScene onPointerEvent={handlePointerEvent} />
                    <StatsGl />
                </Canvas>
            </div>
        </div>
    )
}

export default Approach