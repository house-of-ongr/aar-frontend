"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InitHouseImg from '@/components/InitHouseImage'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'



export default function Home() {

  return (
    <div className="flex-center h-full">
      <Header />
      <main className='flex flex-col flex-center'>
        {/* 웰컴 메세지 */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 0.5 }}>
          <p className='text-center'>모든 것이 소리 내는 곳,</p>
          <p className='text-center'>'아카이브 오브 옹알'에 오신 것을 환영해요!</p>
        </motion.div>
        <Link href={"/login"}>
          <InitHouseImg />
        </Link>
      </main>
      <Footer />
    </div >
  );
}