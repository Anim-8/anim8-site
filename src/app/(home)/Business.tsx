"use client"
import Image from 'next/image'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import BusinessRow from './BusinessRow'
import useDimensions from '../../hooks/useDImensions'
import { useMemo, useRef } from 'react'
import styles from "./page.module.scss"
import Cards from './Cards'

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
    descriptionOne: "Our team is highly interdisciplinary and offers a set of engineering solutions to ensure that you have the right infrastructure in place for optimal growth.",
    descriptionTwo: "The main focus of Anim8 is centered around building the brain of your enterprise. Our set of expertise and tools dials in on the following sectors."
}

const hoverConfig = { y: -50, scale: 1.1 }

const Business = () => {
    const ref = useRef<any>()
    const { width } = useDimensions(ref)
    const aspect: string | undefined = useMemo(() => width < 430 ? "85%" : undefined, [width])
    return (
        <div className='mt-10 lg:mt-0 w-full' id="business" ref={ref}>
            <Statement>
                <SubHeader className='mb-4 pt-8'>Business</SubHeader>
                <p className='text-sm'>
                    We believe that simple ideas are the most powerful, so we personify businesses into a model that we call the brain and body. The brain and nervous system represent the software,
                    storage and data pipelines of the business and the body represents the people, equipment and real-estate.
                    Unlike the current Saas industry, we unify the brain and body to avoid pricy cookie-cutter solutions that don&apos;t fully meet
                    the needs of you business and are difficult to integrate with.
                </p>
            </Statement>
            { width >= 768 ? (
                <>
                    <div className={styles.gridContainer}>
                        <BusinessRow header='Body' description={descriptions.descriptionOne} card={cards[0]} width={width} hoverConfig={hoverConfig}/>
                        <div className='flex justify-center'>
                            <div className={styles.floatingBody}>
                                <Image src="/brainBody.webp" alt="body.webp" width={165} height={372} />
                            </div>
                        </div>
                    <BusinessRow header='Brain' description={descriptions.descriptionTwo} card={cards[1]} width={width} hoverConfig={hoverConfig}/>
                    </div>
                    <div className='py-12'>
                        <div className={styles.greyCircle}>
                                <div className={styles.orbShadow}></div>
                                <div className={styles.bodyShadow}></div>
                                <div className={styles.orbShadow}></div>
                            </div>
                    </div> 
                </>
                ) : <Cards cards={cards} width={aspect} height={aspect} isOnPhone={true} />
            }
        </div>
    )
}

export default Business
