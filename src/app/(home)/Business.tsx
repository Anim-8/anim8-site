"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import HexCard from '../components/shared/HexCard'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import BusinessRow from './BusinessRow'
import useDimensions from '@/hooks/useDImensions'
import { useRef } from 'react'
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

const hoverConfig = { y: -50, scale: 1.1 }

const Business = () => {
    const ref = useRef<any>()
    const { width } = useDimensions(ref)
    console.log(width)
    return (
        <div className='mt-10 lg:mt-0 w-full'>
            <Statement>
                <SubHeader className='mb-4'>Business</SubHeader>
                <p>
                    We believe that simple ideas are the most powerful, so we categorize businesses into a model that we call the brain and body. The brain and nervous system represent the software,
                    storage and data pipelines of the business and the body represents the people, equipment and real-estate.
                    Unlike the current Saas industry, we unify the brain and body to avoid pricy cookie-cutter solutions that don&apos;t truly meet
                    the needs of you business and are difficult to integrate with.
                </p>

            </Statement>
            <div className='flex flex-col w-full' ref={ref}>
                <BusinessRow url="/brain.webp" headerOne='Brain' headerTwo='Mind' />
                {
                    width >= 768 ? (
                        <div className='flex flex-row text-center items-center'>
                            <motion.div
                                className='lg:basis-1/3 flex justify-center'
                                whileHover={hoverConfig}
                            >
                                <HexCard title={cards[0].title} content={cards[0].content} />
                            </motion.div>
                            <div className="lg:basis-1/3 flex justify-center">
                                <Image src="/body.webp" alt="body.webp" width={165} height={372} />
                            </div>
                            <motion.div
                                className='lg:basis-1/3 flex justify-center'
                                whileHover={hoverConfig}
                            >
                                <HexCard title={cards[1].title} content={cards[1].content} />
                            </motion.div>
                        </div>
                    ) : <Cards cards={cards} />
               }
            </div>
        </div>
    )
}

export default Business