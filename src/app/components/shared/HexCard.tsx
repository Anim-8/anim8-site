"use client"

import { alphanumeric } from "@/custom-types";
import { Merriweather } from "next/font/google";
const merriweather = Merriweather({ subsets: ["latin"], weight: "400" });

type HexCardProps = {
    title: string;
    content: React.ReactNode;
    isAnimated?: boolean;
    width?: alphanumeric;
    height?: alphanumeric;
}

const HexCard = ({ title, content, isAnimated = false, width = "100%", height = "435" }: HexCardProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 435 435" fill="none" xmlns="http://www.w3.org/2000/svg" transform={`scale(${isAnimated ? 1.2 : 1})`}>
            <g filter="url(#filter0_f_172_1019)">
                <path d="M100.893 100.893L217.5 52.5925L334.108 100.893L382.408 217.5L334.108 334.107L217.5 382.408L100.893 334.107L52.593 217.5L100.893 100.893Z" stroke="#A8C8C0" strokeOpacity="0.9" backdrop-filter="blur(10px)"/>
            </g>
            <g filter="url(#filter1_f_172_1019)">
                <path d="M156.975 64.2076L283.096 66.3087L370.792 156.976L368.691 283.097L278.024 370.792L151.903 368.691L64.2072 278.024L66.3083 151.903L156.975 64.2076Z" stroke="#A8C8C0" strokeOpacity="0.9" />
            </g>
            <ellipse cx="217.5" cy="217" rx="153.5" ry="151" fill="url(#paint0_radial_294_4)" fillOpacity="0.5" />
            <ellipse cx="217.5" cy="217" rx="153.5" ry="151" fill="url(#paint1_radial_294_4)" fillOpacity="0.5" />
            <text fontSize={20} className={merriweather.className} x="50%" y="28%" dominantBaseline="middle" textAnchor="middle" fill="#FFF7DE">{title}</text>
            <foreignObject fontSize={14} className={merriweather.className} x="18%" y="35%" width={275} height={150} dominantBaseline="middle" textAnchor="middle" fill="#FFF7DE" color="#FFF7DE">
                {content}
            </foreignObject>
            <defs>
                <radialGradient id="paint0_radial_294_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.305 137.305) rotate(-21.7758) scale(194.135 191.682)">
                    <stop stopColor="#72F5E7" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#A8C8C0" stopOpacity="0" />
                </radialGradient>
                {/* <radialGradient id="paint1_radial_294_4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140.305 137.305) rotate(-21.7758) scale(194.135 191.682)">
                    <stop stopColor="#72F5E7" stopOpacity="0.6" />
                    <stop offset="1" stopColor="#A8C8C0" stopOpacity="0" />
                </radialGradient> */}
            </defs>
        </svg>

    )
}

export default HexCard