import React from 'react'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import styles from './page.module.scss'
import Image from 'next/image'

const Team = () => {
    return (
        <div className={styles.approach} id="our-story">
            <Statement>
                <SubHeader className='mb-4'>Our Story</SubHeader>
                <div className='w-full flex flex-col justify-center items-center text-center '>
                    <Image src="/brains_optimized.webp" alt='brains.webp' height={892} width={464} />
                    <p className='mt-10'>
                        Our team met at Tesla. Everything started with a vision that systems and software applied to manufacturing 
                        could be done significantly better than its current state. Fundamentally, manufacturing represents a 
                        multivariate optimization problem. We know that the best way to solve these types of problems is by using 
                        sophisticated statistical methods. The added complexity with manufacturing is that there is a considerable 
                        equipment layer that needs to be adequate for proper data collection, as bad data is often worse than no data.
                    </p>
                    <p className='py-4'>
                        Following the body and brain model, we start with the body. 
                        We design, build, and commission revolutionary systems and functional blocks to 
                        change the paradigm in the way metrology and manufacturing data aggregation is done. 
                        We then connect the body &#40;equipment&#41; to the brain &#40;software&#41; by building a set 
                        of data pipelines which we refer to as the nervous system. This well-designed equipment layer 
                        combined with sophisticated software, unlocked an unprecedented level of automation and added value 
                        in terms of data quantity and quality, leading to some of the highest cost-saving initiatives in the company.
                    </p>
                    <p>
                        On top of this architecture, we begin adding statistical tools and methods to animate the 
                        decision-making process and improve the ability to anticipate events before they happen.
                    </p>
                </div>
            </Statement>
        </div>
    )
}

export default Team