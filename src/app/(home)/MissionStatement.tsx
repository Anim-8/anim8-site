"use client"
import SubHeader from '../components/shared/SubHeader'
import Statement from '../components/shared/Statement'
import InputRange from '../components/shared/InputRange'
import { useRef, useState } from 'react'
import CardData from '@/models/CardData'
import Cards from './Cards'
import useDimensions from '@/hooks/useDimensions'
import styles from "./page.module.scss"

const cards: CardData[] = [
    { title: "Manual", content: <p className='secondary'>A manual business is typically characterized as having many laboring and repetitive tasks. The decision making process is mostly reactionary, with no significant usage of the past to hep better comprehend the present.</p> },
    { title: "Automated", content: <p className='secondary'>An automated business has manual and repetitive tasks kept to a minimum. If properly done, this can lead to an increase in productivity allowing the company to expand along with a better decision-making process.</p> },
    { title: "Animated", content: <p className='secondary'>A business reaches the animated state when it achieves a high degree of automation, but more importantly portion a large part of the decision making process is handled by software and predictive analysis.</p> }
]

const MissionStatement = () => {
    const ref = useRef<any>()
    const { width } = useDimensions(ref)
    const [value, setValue] = useState<number>(50)
    return (
        <div className="w-full text-center" ref={ref}>
            <Statement id="quality">
                <div className="relative inline-block text-center">
                    <div className={styles.whiteCircle} ></div>
                    <SubHeader className='secondary mt-20 mb-5 z-10'> Animate </SubHeader>
                </div>
                <div className='secondary p-4' > Our goal is to help your company go up the animation spectrum. </div>
                <div>
                    <div className="max-w-screen-l flex flex-wrap items-center justify-between mx-8 p-3">
                        <div className='text-2xl'> Manual </div>
                        <div className='text-2xl'> Automated </div>
                        <div className='text-2xl'> Animated </div>
                    </div>
                    <div className="mb-4 px-3">
                        <InputRange value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))} min="0" max="100" />
                    </div>
                </div>
                <p className='secondary mt-10'>
                    Now what do we mean by Animate? Most are familiar with the automating representing the transition
                    from manual tasks to automated work, but we introduce the &quot;animation&quot; to
                    describe the transition from automated work to animated. Here are the three states:
                </p>
            </Statement>
            <Cards cards={cards} animated={value <= 25 ? cards[0].title : value <= 75 ? cards[1].title : cards[2].title}/>
        </div>
    )
}

export default MissionStatement