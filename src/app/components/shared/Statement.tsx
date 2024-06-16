import React from 'react'

type StatementProps = {
    children: React.ReactNode;
}

const Statement = ({ children }: StatementProps) => {
    return (
        <div className='flex text-center justify-center w-full'>
            <div className='max-w-screen-lg'>
                { children }
            </div>
        </div>
    )
}

export default Statement