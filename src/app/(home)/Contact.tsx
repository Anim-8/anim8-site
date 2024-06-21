import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20" id="contact">
            <SubHeader className='mb-4'>Contact</SubHeader>
            <Image  src="/connected brains.svg" alt="connected brains" width={500} height={250} />
            <div className="flex items-center">
                <div className='mt-2.5'>
                    <a href="mailto:info@anim8.tech" rel="noreferrer">
                    <Image src="/mail.svg" alt="email icon" width={50} height={25} />
                    </a>
                </div>
                <span>info@anim8.tech</span>
            </div>
            <div className='mt-10 text-center'>
                More contact information will be added shortly.
            </div>
        </div>
    )
}

export default Contact