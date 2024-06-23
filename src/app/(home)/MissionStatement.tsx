"use client"
import SubHeader from '../components/shared/SubHeader'
import Statement from '../components/shared/Statement'
import InputRange from '../components/shared/InputRange'
import { useState } from 'react'
import CardData from '@/models/CardData'
import Cards from './Cards'

const cards: CardData[] = [
    { title: "Manual", content: "A manual business is typically characterized as having many laboring and repetitive tasks. The decision making process is mostly reactionary, with no significant usage of the past to hep better comprehend the present." },
    { title: "Automated", content: "An automated business has manual and repetitive tasks kept to a minimum. If properly done, this can lead to an increase in productivity allowing the company to expand along with a better decision-making process." },
    { title: "Animated", content: "A business reaches the animated state when it achieves a high degree of automation, but more importantly portion a large part of the decision making process is handled by software and predictive analysis." }
]

const MissionStatement = () => {
    const [value, setValue] = useState<number>(50)
    return (
        <div className="w-full text-center">
            <Statement id="quality">
                <SubHeader className='mt-20 mb-5'>Animate</SubHeader>
                <div className="mb-4 px-5">
                    <InputRange value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))} min="0" max="100" />
                </div>
                <p className='mt-10'>
                Now what do we mean by Animate? Most are familiar with the automating representing the transition 
                from manual tasks to automated work, but we introduce the "animation" to 
                describe the transition from automated work to animated. Here are the three states:
                </p>
            </Statement>
                <Cards cards={cards} animated={value <= 25 ? cards[0].title : value <= 75 ? cards[1].title : cards[2].title} />
        </div>
    )
}

export default MissionStatement