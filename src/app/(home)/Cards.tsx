import CardData from '@/models/CardData'
import React, { memo } from 'react'
import { alphanumeric } from '@/custom-types';
import { motion } from 'framer-motion';
import HexCard from '../components/shared/HexCard';

type CardsProps = {
    cards: CardData[];
    animated?: string;
    className?: string;
    width?: alphanumeric;
    height?: alphanumeric;
    isOnPhone?: boolean;
}

const Cards:React.FC<CardsProps> = memo(({ cards, width, height, animated = "", isOnPhone = false, className = "" }) => {
    return (
        <div className={`flex w-full flex-col lg:flex-row ${className}`}>
            {cards.map(card => (
                <motion.div key={card.title} className={`lg:basis-1/3 flex justify-center`} animate={{scale: animated === card.title ? 1.1 : 1}}>
                    <HexCard 
                        title={card.title} 
                        content={card.content} 
                        width={width}
                        height={height}
                        isAnimated={isOnPhone ? true : animated === card.title}
                    />
                </motion.div>
            ))}
        </div>
    )
})

Cards.displayName = "Cards"

export default Cards