import CardData from '@/models/CardData'
import React from 'react'
import HexCard from '../components/shared/HexCard';
import styles from './page.module.scss'

type CardsProps = {
    cards: CardData[];
    className?: string;
}

const Cards = ({ cards, className = "" }: CardsProps) => {
    return (
        <div className={`flex w-full flex-col lg:flex-row ${className}`}>
            {cards.map(card => (
                <div key={card.title} className={`lg:basis-1/3 ${styles.essentialCard}`}>
                    <HexCard title={card.title} content={card.content} />
                </div>
            ))}
        </div>
    )
}

export default Cards