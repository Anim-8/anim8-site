import { NextPage } from 'next'
import React from 'react'

const Contact: NextPage = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center mt-20'>
            <div>
                <div><strong>Email us at: </strong></div>
                <div>
                    <ul>
                        <li>samuel.steinberg@anim8.tech</li>
                        <li>roberto.calvi@anim8.tech</li>
                    </ul>
                </div>
            </div>
            <div className='mt-10'>
                More contact information will be added shortly.
            </div>
        </div>
    )
}

export default Contact