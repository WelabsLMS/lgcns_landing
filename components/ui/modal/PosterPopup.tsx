'use client'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function PosterPopup() {
    const [isShow1, setIsShow1] = useState(true)
    const [isShow2, setIsShow2] = useState(true)
    const [isCookieChecked, setIsCookieChecked] = useState(false)

    useEffect(() => {
        if (document.cookie.includes('popup1=close')) {
            setIsShow1(false)
        }
        if (document.cookie.includes('popup2=close')) {
            setIsShow2(false)
        }
        setIsCookieChecked(true)
    }, [])

    const closePopupToday = (popupNum: number) => {
        // 한국 시간 기준으로 당일 11:59:59 까지 쿠키 유지
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const date = today.getDate()
        const lastTime = new Date(year, month, date, 23, 59, 59)
        const expire = lastTime.toUTCString()
        document.cookie = `popup${popupNum}=close; expires=${expire}; path=/`;
        popupNum === 1 ? setIsShow1(false) : setIsShow2(false);
    }

    const newWindow = (src?: string) => {
        window.open(`/assets/images/poster/amcamp_online_poster${src}.png`, '_blank');
    };

    if (!isCookieChecked) return null;
    if (!isShow1 && !isShow2) return null;

    return (
        <div className='absolute inset-0 flex items-center justify-center z-[990]'>
            {
                isShow1 &&
                <div className='absolute md:right-1/2 w-[360px] md:w-[380px] lg:w-[500px] top-[80px] lg:top-[100px] border bg-white rounded-lg z-[991]'>
                    <Image src='/assets/images/poster/amcamp_online_poster_ewha.png' alt='포스터 이미지' width={650} height={800} onClick={() => newWindow('_ewha')} className='cursor-pointer' quality={100} />
                    <div className='flex'>
                        <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={()=>closePopupToday(1)}>오늘 그만보기</button>
                        <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={() => setIsShow1(!isShow1)} >닫기</button>
                    </div>
                </div>
            }
            {
                isShow2 &&
                <div className='absolute md:left-1/2 w-[360px] md:w-[380px] lg:w-[500px] top-[80px] lg:top-[100px] border bg-white rounded-lg z-[990]'>
                    <Image src='/assets/images/poster/amcamp_online_poster.png' alt='포스터 이미지' width={650} height={800} onClick={() => newWindow('')} className='cursor-pointer' quality={100} />
                    <div className='flex'>
                        <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={()=>closePopupToday(2)}>오늘 그만보기</button>
                        <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={() => setIsShow2(!isShow2)} >닫기</button>
                    </div>
                </div>
            }
        </div>
    )
}
