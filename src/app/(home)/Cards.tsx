import CardData from '@/models/CardData'
import React, { memo } from 'react'
import HexCard from '../components/shared/HexCard';
import styles from './page.module.scss'
import { alphanumeric } from '@/custom-types';
import { motion } from 'framer-motion';

type CardsProps = {
    cards: CardData[];
    animated?: string;
    className?: string;
    width?: alphanumeric;
    height?: alphanumeric;
}

const Cards:React.FC<CardsProps> = memo(({ cards, width, height, animated = "", className = "" }) => {
    return (
        <div className={`flex w-full flex-col lg:flex-row ${className}`}>
            {cards.map(card => (
                <motion.div key={card.title} className={`lg:basis-1/3 ${styles.essentialCard} flex justify-center`} animate={{scale: animated === card.title ? 1.1 : 1}}>
                    <HexCard 
                        title={card.title} 
                        content={card.content} 
                        width={width}
                        height={height}
                    />
                </motion.div>
            ))}
        </div>
    )
})

Cards.displayName = "Cards"

export default Cards