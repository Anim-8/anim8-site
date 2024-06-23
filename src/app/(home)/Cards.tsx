import CardData from '@/models/CardData'
import React, { memo } from 'react'
import HexCard from '../components/shared/HexCard';
import styles from './page.module.scss'

type CardsProps = {
    cards: CardData[];
    animated?: string;
    className?: string;
}

const Cards:React.FC<CardsProps> = memo(({ cards, animated = "", className = "" }) => {
    return (
        <div className={`flex w-full flex-col lg:flex-row ${className}`}>
            {cards.map(card => (
                <div key={card.title} className={`lg:basis-1/3 ${styles.essentialCard}`}>
                    <HexCard title={card.title} content={card.content} isAnimated={card.title === animated}/>
                </div>
            ))}
        </div>
    )
})

Cards.displayName = "Cards"

export default Cards