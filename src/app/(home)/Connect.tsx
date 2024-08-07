import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import Image from 'next/image'
import styles from './page.module.scss'

const Connect = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20" id="connect">
            <SubHeader className='mb-4'>Connect</SubHeader>
            <div className='relative py-4'>
                <Image  src="/connected_brains.webp" alt="connected brains" width={500} height={250} />
                {/* <img src="connected.gif" alt="GIF" className={styles.connectedGif}/> */}
            </div>
            <p className='py-6'>
                Ready to get started on your <strong> Animation </strong> journey? Feel free to reach out to us through email at: 
            </p>
            <div className="py-8 flex items-center">
                <div className='mt-2.5'>
                    <a href="mailto:info@anim8.tech" rel="noreferrer">
                    <Image src="/mail.svg" alt="email icon" width={50} height={25} />
                    </a>
                </div>
                <span className='py-4'>info@anim8.tech</span>
            </div>
        </div>
    )
}

export default Connect