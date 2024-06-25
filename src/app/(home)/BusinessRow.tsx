import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import { motion } from 'framer-motion'
import { useMemo} from 'react'
import styles from "./page.module.scss"
import CardData from '@/models/CardData'
import HexCardBlurred from '../components/shared/HexCardBlurred'

interface HoverConfig {
    y: number;
    scale: number;
  }

type BusinessRowProps = {
    header: string;
    description: string;
    card: CardData;
    width: number;
    hoverConfig: HoverConfig;
}

const BusinessRow: React.FC<BusinessRowProps> = ({ header, description, card,  width, hoverConfig}) => {
    const aspect: string | undefined = useMemo(() => width < 430 ? "85%" : undefined, [width])
    return (
        <div className={styles.leftColumn}>
            <div className="basis-1/4 md:basis-1/3">
                <SubHeader>{header}</SubHeader>
                <p className='text-xs'>{description}</p>
            </div>
            <div className={styles.leftColumn}>
                <motion.div
                    className='lg:basis-1/3 flex justify-center'
                    whileHover={hoverConfig}
                >
                    <HexCardBlurred title={card.title} content={card.content} width={aspect} height={aspect} />
                </motion.div>
            </div>
        </div>
    )
}

export default BusinessRow