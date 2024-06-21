import React from 'react'
import CardData from '@/models/CardData'
import styles from './page.module.scss'
import SubHeader from '../components/shared/SubHeader'
import Cards from './Cards'

const cards: CardData[] = [
    { title: "Efficiency", content: <p className='secondary'>By optimizing processes and integrating advanced controls, we enhance your production yield and indirectly boost line availability. This leads to more uptime, higher productivity, and an overall greater performance.</p> },
    { title: "Prevention", content: <p className='secondary'>Our meticulous quality control measures prevent defects from escaping into the marketplace, safeguarding your reputation and reducing costly recalls and customer complaints.</p> },
    { title: "Satisfaction", content: <p className='secondary'>Producing high-quality goods leads to increased customer satisfaction. By ensuring that every product meets exceptional standards, we help you build trust and loyalty among your customers, leading to repeat business and positive reviews.</p> }
]

const Essential = () => {
    return (
        <div className={`w-full text-center ${styles.sectionSeparator}`} id="essentials">
            <Cards cards={cards} className='items-center' />
        </div>
    )
}

export default Essential