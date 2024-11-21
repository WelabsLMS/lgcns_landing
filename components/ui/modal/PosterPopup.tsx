'use client'
// import { cookies } from 'next/headers'
import Image from 'next/image'
import React, { useEffect } from 'react'

export default function PosterPopup() {
    const [isShow, setIsShow] = React.useState(true)
    const [isCookieChecked, setIsCookieChecked] = React.useState(false)

    useEffect(() => {
        if (document.cookie.includes('popup=close')) {
            setIsShow(false)
        }
        setIsCookieChecked(true)
    }, [])

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

    const newWindow = () => {
        window.open('/assets/images/poster/sungkyun.png', '_blank')
    }

    if (!isShow || !isCookieChecked) return null
    return (
        <div className='absolute inset-0 flex items-center justify-center z-[990]'>
            <div className='absolute w-[360px] md:w-[500px] lg:w-[550px] top-[80px] lg:top-[100px] border bg-white rounded-lg z-[990]'>
                <Image src='/assets/images/poster/sungkyun.png' alt='포스터 이미지' width={650} height={800} onClick={newWindow} className='cursor-pointer' quality={100} />
                <div className='flex'>
                    <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={closePopupToday}>오늘 그만보기</button>
                    <button className='w-full bg-gray-400 border text-white font-bold text-lg py-2' onClick={() => setIsShow(!isShow)} >닫기</button>
                </div>
            </div>
        </div>
    )
}
