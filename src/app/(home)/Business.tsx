"use client"
import Image from 'next/image'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import CardData from '@/models/CardData'
import BusinessRow from './BusinessRow'
import useDimensions from '../../hooks/useDImensions'
import { useRef } from 'react'
import styles from "./page.module.scss"

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
    return (
        <div className='mt-10 lg:mt-0 w-full' id="business">
            <Statement>
                <SubHeader className='mb-4 py-8'>Business</SubHeader>
                <p className='text-sm'>
                    We believe that simple ideas are the most powerful, so we personify businesses into a model that we call the brain and body. The brain and nervous system represent the software,
                    storage and data pipelines of the business and the body represents the people, equipment and real-estate.
                    Unlike the current Saas industry, we unify the brain and body to avoid pricy cookie-cutter solutions that don&apos;t truly meet
                    the needs of you business and are difficult to integrate with.
                </p>

            </Statement>
            <div className={styles.gridContainer} ref={ref}>
                <BusinessRow header='Body' description={descriptions.descriptionOne} card={cards[0]} width={width} hoverConfig={hoverConfig}/>
                <div className='flex justify-center'>
                    <Image src="/brainBody.webp" alt="body.webp" width={165} height={372} />
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
        </div>
    )
}

export default Business