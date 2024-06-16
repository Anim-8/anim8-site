import React from 'react'

import { Merriweather } from "next/font/google";
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

type HexCardProps = {
    title: string;
    content: React.ReactNode;
}

const HexCard = ({ title, content }: HexCardProps) => {
    return (
        <svg width="100%" height="435" viewBox="0 0 435 435" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_61_70)">
                <path d="M100.893 100.893L217.5 52.5925L334.107 100.893L382.408 217.5L334.107 334.107L217.5 382.408L100.893 334.107L52.5925 217.5L100.893 100.893Z" stroke="#A8C8C0" strokeOpacity="0.9" />
            </g>
            <g filter="url(#filter1_f_61_70)">
                <path d="M156.976 64.2076L283.097 66.3087L370.792 156.976L368.691 283.097L278.024 370.792L151.903 368.691L64.2077 278.024L66.3088 151.903L156.976 64.2076Z" stroke="#A8C8C0" strokeOpacity="0.9" />
            </g>
            <text fontSize={20} className={merriweather.className} x="50%" y="28%" dominantBaseline="middle" textAnchor="middle" fill="#A8C8C0">{title}</text>    
            <foreignObject fontSize={14} className={merriweather.className} x="18%" y="35%" width={275} height={150} dominantBaseline="middle" textAnchor="middle" fill="white">
                { content }
            </foreignObject>
            <defs>
                <filter id="filter0_f_61_70" x="48.0513" y="48.0513" width="338.897" height="338.897" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_61_70" />
                </filter>
                <filter id="filter1_f_61_70" x="59.7043" y="59.7043" width="315.591" height="315.591" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_61_70" />
                </filter>
            </defs>
        </svg>

    )
}

export default HexCard