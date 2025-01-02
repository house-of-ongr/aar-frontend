"use client"

import { useEffect } from 'react'
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation';
import SpinnerIcon from '@/components/SpinnerIcon';

// test url
// http://localhost:3000/login/auth?username=syyoon&accessToken=t12fjdlksjfiemvdclskfdj123dslkfjosidvwlekrl1lkjdslf&provider=kakao&isFirstLogin=true


const AuthPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams()

    useEffect(() => {

        const isFirstLogin = searchParams.get('isFirstLogin');
        const username = searchParams.get('username');
        const accessToken = searchParams.get('accessToken');

        console.log("isFirstLogin:", isFirstLogin, "username:", username, "accessToken:", accessToken)


        if (isFirstLogin) {
            if (username && accessToken) {
                localStorage.setItem('tempUsername', username as string);
                localStorage.setItem('tempToken', accessToken as string);
            }
            router?.replace('/terms');
        } else {
            if (username && accessToken) {
                localStorage.setItem('username', username as string);
                localStorage.setItem('accessToken', accessToken as string);
            }
            router?.replace('/main')
        }
    }, [router, searchParams]);

    return (
        <div className='w-full flex justify-center h-full items-center'>
            <div className='flex-center flex-col'>
                <SpinnerIcon />
                <span>connecting...</span>
            </div>
        </div>
    )
};

export default AuthPage;