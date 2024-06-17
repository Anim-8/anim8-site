import React from 'react'
import Statement from '../components/shared/Statement'
import SubHeader from '../components/shared/SubHeader'
import styles from './page.module.scss'
import Image from 'next/image'

const Team = () => {
    return (
        <div className={styles.approach} id="team">
            <Statement>
                <SubHeader className='mb-4'>Team</SubHeader>
                <div className='w-full flex flex-col justify-center items-center text-center '>
                    <Image src="/brains.webp" alt='brains.webp' height={892} width={464} />
                    <p className='mt-10'>
                        With a wealth of experience in process and quality control within the automotive sector,
                        our team stands as industry trailblazers. We aim to revolutionize traditional practices in some
                        of the most advanced automotive companies, setting new benchmarks for efficiency and excellence.
                        Our innovative approach and cutting-edge solutions have not just met industry standards but have
                        raised the bar, leading to significant advancements in how quality control and processes are managed
                        within the automotive realm.
                    </p>
                </div>
            </Statement>
        </div>
    )
}

export default Team