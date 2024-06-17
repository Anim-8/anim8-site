import React from 'react'

type StatementProps = {
    children: React.ReactNode;
    [x: string]: any
}

const Statement = ({ children, ...rest }: StatementProps) => {
    return (
        <div className='flex text-center justify-center w-full' { ...rest }>
            <div className='max-w-screen-lg'>
                { children }
            </div>
        </div>
    )
}

export default Statement