"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import HexCard from '../components/shared/HexCard'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import BusinessRow from './BusinessRow'
import useDimensions from '../../hooks/useDImensions'
import { useMemo, useRef } from 'react'
import Cards from './Cards'
import styles from "./page.module.scss"
import HexCardBlurred from '../components/shared/HexCardBlurred'

const cards: CardData[] = [
    {
        title: 'Engineering',
        content: (
            <ul className='list-disc text-center'>
                {
                    ["Manufacturing", "Automation", "Mechanical", "Electrical", "Metrology", "Software and data engineering"]
                        .map(l => <li key={l} className='secondary'>{l}</li>)
                }
            </ul>
        )
    },
    {
        title: 'Software', content: (
            <ul className='list-disc text-center'>
                {
                    ["ERP", "MES", "Quality", "SCADA", "PLM", "CRM", "Sales & Marketing"]
                        .map(l => <li key={l} className='secondary'>{l}</li>)
                }
            </ul>
        )
    },
]

const descriptions = {
    descriptionOne: "Certain type of software solutions are heavily reliant on the resources that produces value. Our team is highly interdisciplinary and also offer a set of engineering solutions to ensure that you have the right infrastructure in place for optimal growth. ",
    descriptionTwo: "Our main focus is around helping you build the brain of your enterprise.  Our current set of expertise and tools focuses  on the following sectors."
}

const hoverConfig = { y: -50, scale: 1.1 }

const Business = () => {
    const ref = useRef<any>()
    const { width } = useDimensions(ref)
    const aspect: string | undefined = useMemo(() => width < 430 ? "85%" : undefined, [width])
    return (
        <div className='mt-10 lg:mt-0 w-full' id="business">
            <Statement>
                <SubHeader className='mb-4'>Business</SubHeader>
                <p className='text-sm'>
                    We believe that simple ideas are the most powerful, so we personify businesses into a model that we call the brain and body. The brain and nervous system represent the software,
                    storage and data pipelines of the business and the body represents the people, equipment and real-estate.
                    Unlike the current Saas industry, we unify the brain and body to avoid pricy cookie-cutter solutions that don&apos;t truly meet
                    the needs of you business and are difficult to integrate with.
                </p>

            </Statement>
            <div className='flex flex-col w-full' ref={ref}>
                <BusinessRow url="/brain.webp" headerOne='Body' descriptionOne={descriptions.descriptionOne} headerTwo='Brain' descriptionTwo={descriptions.descriptionTwo} />
                {
                    width >= 768 ? (
                        <div className='flex flex-row text-center items-center'>
                            <motion.div
                                className='lg:basis-1/3 flex justify-center'
                                whileHover={hoverConfig}
                            >
                                <HexCardBlurred title={cards[0].title} content={cards[0].content} width={aspect} height={aspect} />
                            </motion.div>
                            <div className="lg:basis-1/3 flex justify-center">
                                <Image src="/body.webp" alt="body.webp" width={165} height={372} />
                                <div className={styles.bodyGlow}></div>
                            </div>
                            <motion.div
                                className='lg:basis-1/3 flex justify-center'
                                whileHover={hoverConfig}
                            >
                                <HexCardBlurred title={cards[1].title} content={cards[1].content} width={aspect} height={aspect} />
                            </motion.div>
                        </div>
                    ) : <Cards cards={cards} width={aspect} height={aspect} />
               }
               <div className={styles.greyCircle}>
                <div className={styles.orbShadow}></div>
                <div className={styles.bodyShadow}></div>
                <div className={styles.orbShadow}></div>
               </div>
            </div>
        </div>
    )
}

export default Business