import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import Image from 'next/image';

type BusinessRowProps = {
    url: string;
    headerOne: string;
    headerTwo: string;
}

const BusinessRow: React.FC<BusinessRowProps> = ({ url, headerOne, headerTwo }) => {
    return (
        <div className="mt-10 flex flex-row text-center items-center">
            <div className="basis-1/4 md:basis-1/3">
                <SubHeader>{headerOne}</SubHeader>
            </div>
            <div className="basis-1/2 md:basis-1/3 flex justify-center">
                <Image src={url} alt={url} width={148} height={148} placeholder='blur' blurDataURL={url}/>
            </div>
            <div className="basis-1/4 md:basis-1/3">
                <SubHeader>{headerTwo}</SubHeader>
            </div>
        </div>
    )
}

export default BusinessRow