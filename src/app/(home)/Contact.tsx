import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import styles from './page.module.scss'

const Contact = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center mt-20" id="contact">
            <SubHeader className='mb-4'>Contact</SubHeader>
            <div>
                <ul>
                    <li>samuel.steinberg@anim8.tech</li>
                    <li>roberto.calvi@anim8.tech</li>
                </ul>
            </div>
            <div className='mt-10 text-center'>
                More contact information will be added shortly.
            </div>
        </div>
    )
}

export default Contact