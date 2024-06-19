import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import Image from 'next/image'

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20" id="contact">
            <SubHeader className='mb-4'>Contact</SubHeader>
            <div className="flex items-center">
                <div className='mt-2.5'>
                    <Image  src="/mail.svg" alt="email icon" width={50} height={25} />
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