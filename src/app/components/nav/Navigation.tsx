"use client"
import Image from "next/image"
import React, { useRef, useState } from 'react'
import KeyValuePair from '@/models/KeyValuePair'
import Link from "next/link"

type NavigationProps = {
    links: KeyValuePair[];
}

const Navigation: React.FC<NavigationProps> = ({ links }) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <nav style={{background: 'black !important'}}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/logo.webp" className="h-8" alt="Anim8 Logo" width={121} height={0} style={{height: '60px !important'}} />
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button onClick={() => setShow(o => !o)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${!show && "hidden"}`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation