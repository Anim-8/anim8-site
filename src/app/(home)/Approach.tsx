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
        </div>
    )
}

export default Approach