"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InitHouseImg from '@/components/InitHouseImage'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'


const BACK_API = process.env.NEXT_PUBLIC_BACK_API


export default function LoginPage() {

    const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false)

    const handleLogin = async (provider: string) => {
        try {
            const response = await fetch(`${BACK_API}/aar/authn/login/${provider}`, {
                method: 'GET',
            });

            if (response.redirected) {
                //Location: https://archiveofongr.site/login/auth?username=exampleUser&accessToken=exampleToken&provider=kakao&isFirstLogin=true
                window.location.href = response.url;
            } else {
                throw new Error('리디렉션되지 않았습니다.');
            }
        } catch (error) {
            console.error('로그인 요청 중 오류 발생:', error);
            alert('로그인 중 문제가 발생했습니다. 다시 시도해주세요.');
        }
    };


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
                            <Image onClick={() => handleLogin("kakao")} src={"/images/kakaoLoginButton.png"} alt='kakaoLoginButton' width={200} height={100} />
                        </div>
                    </motion.div>
                )}

            </div>
            <Footer />

        </div>
    )
}

