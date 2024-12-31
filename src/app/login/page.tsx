"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InitHouseImg from '@/components/InitHouseImage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { redirect, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



export default function LoginPage() {
    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    const kakaoLoginHandler = () => {
        console.log("kakao login clicked")

    }


    return (

        <div className='h-screen flex-center'>
            <Header />
            <div className='flex-center flex-col relative'>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -30 }}
                    transition={{
                        damping: 25,
                        duration: 0.5,
                    }}
                    onAnimationComplete={() => setIsAnimationComplete(true)}
                >
                    <InitHouseImg />
                </motion.div>

                {isAnimationComplete && (
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 180 }}
                        transition={{ duration: 0.5 }}
                        className='w-full absolute z-10 flex-center flex-col '>

                        <div className='cursor-pointer pb-5'>
                            <Image onClick={kakaoLoginHandler} src={"/images/kakaoLoginButton.png"} alt='kakaoLoginButton' width={200} height={100} />
                        </div>
                    </motion.div>
                )}


            </div>
            <Footer />

        </div>
    )
}

