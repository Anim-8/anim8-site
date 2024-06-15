import React from 'react'
import HexCard from '../components/shared/HexCard'
import CardData from '@/models/CardData'
import styles from './page.module.scss'
import SubHeader from '../components/shared/SubHeader'

const cards: CardData[] = [
    { title: "Efficiency", content: "By optimizing processes and integrating advanced controls, we enhance your production yield and indirectly boost line availability. This leads to more uptime, higher productivity, and an overall greater performance." },
    { title: "Prevention", content: "Our meticulous quality control measures prevent defects from escaping into the marketplace, safeguarding your reputation and reducing costly recalls and customer complaints." },
    { title: "Satisfaction", content: "Producing high-quality goods leads to increased customer satisfaction. By ensuring that every product meets exceptional standards, we help you build trust and loyalty among your customers, leading to repeat business and positive reviews." }
]

const Essential = () => {
    return (
        <div className={`w-full text-center ${styles.sectionSeparator}`}>
            <SubHeader>Essentials</SubHeader>
            <div className='w-full flex flex-col lg:flex-row'>
                {cards.map(card => (
                    <div key={card.title} className={`lg:basis-1/3 ${styles.essentialCard}`}>
                        <HexCard title={card.title} content={card.content} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Essential