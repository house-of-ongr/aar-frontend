
import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import { FaUserLarge } from "react-icons/fa6";




export default function Header() {

    return (
        <header className='flex w-full 
        font-light
        justify-between items-center  fixed top-0 right-11 inset-x-0 py-4 md:py-2  '>
            <span className='w-16 px-6'></span>
            <Logo />

            <span className='px-6' >
                <Link href={"/mypage"}>
                    {/* <FaUserLarge className='text-gray-700 md:text-[20px] text-[15px] ' /> */}
                </Link>
            </span>

        </header>

    )
}

