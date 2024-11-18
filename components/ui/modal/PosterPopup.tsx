'use client'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'

export default function PosterPopup() {
    const [isShow, setIsShow] = React.useState(true)
    
    const closePopupToday = () => {
        // 한국 시간 기준으로 당일 11:59:59 까지 쿠키 유지
        const today = new Date()
        const year = today.getFullYear()
        const month = today.getMonth()
        const date = today.getDate()
        const lastTime = new Date(year, month, date, 23, 59, 59)
        const expire = lastTime.toUTCString()
        document.cookie = `popup=close; expires=${expire}; path=/`
        setIsShow(false)
    }

    if (!isShow || document.cookie.includes('popup=close')) return null
    return (
        <div className='absolute left-1/3 border bg-white rounded-lg z-[100]'>
            <Image src='/assets/images/poster/LGCNS_AM_POSTER.png' alt='포스터 이미지' width={450} height={900} />
            <div className='flex'>
                <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={closePopupToday}>오늘 그만보기</button>
                <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={()=>setIsShow(!isShow)} >닫기</button>
            </div>
        </div>
    )
}
