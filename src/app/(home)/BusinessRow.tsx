import React from 'react'
import SubHeader from '../components/shared/SubHeader'
import Image from 'next/image';
import styles from "./page.module.scss"

type BusinessRowProps = {
    url: string;
    headerOne: string;
    descriptionOne: string;
    headerTwo: string;
    descriptionTwo: string;
}

const BusinessRow: React.FC<BusinessRowProps> = ({ url, headerOne, descriptionOne, headerTwo, descriptionTwo }) => {
    return (
        <div className="mt-10 flex flex-row text-center items-center">
            <div className="basis-1/4 md:basis-1/3">
                <SubHeader>{headerOne}</SubHeader>
                <p className='text-xs'>{descriptionOne}</p>
            </div>
            <div className="basis-1/2 md:basis-1/3 flex justify-center">
                <Image src={url} alt={url} width={148} height={148} placeholder='blur' blurDataURL={url}/>
                <div className={styles.brainGlow}></div>
            </div>
            <div className="basis-1/4 md:basis-1/3">
                <SubHeader>{headerTwo}</SubHeader>
                <p className='text-xs'>{descriptionTwo}</p>
            </div>
        </div>
    )
}

export default BusinessRow