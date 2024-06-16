import React from 'react'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import styles from './page.module.scss'
import Cards from './Cards'

const cards: CardData[] = [
    { 
        title: 'Solution Design', 
        content: (
            <ul className='text-center'>
                <li>Concept and Layout</li>
                <li>Protocol Definition and Documentation</li>
                <li>Modeling and Analysis</li>
            </ul>
        )
    },
    { title: 'Software', content: (
        <ul className='text-center'>
            <li>Gauge Monitoring</li>
            <li>Measurement Plan Management</li>
            <li>3D Engine</li>
            <li>Correlation Loops</li>
            <li>Customizable SPC/MSPC Alarms</li>
            <li>Predictive Models</li>
        </ul>
    ) },
]

const Approach = () => {
    return (
        <div className={styles.approach}>
            <Statement>
                <SubHeader className='mb-4'>Approach</SubHeader>
                <p>
                    We see manufacturing in its full complexity,
                    integrating the sensor and software layers to develop a comprehensive and
                    cohesive strategy aimed at maximizing results.
                </p>
            </Statement>
            <Cards className='justify-center' cards={cards} />
        </div>
    )
}

export default Approach