import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full flex flex-col items-center py-4 px-2'>
            <Image src="/logo.webp" alt="Anim8 Logo" width={121} height={60} />
        </div>
    )
}

export default Footer