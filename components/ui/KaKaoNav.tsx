'use client'
import Image from 'next/image'
import React from 'react'

export default function KaKaoNav() {
    return (
        <div
            onClick={() => { window.location.href = 'https://pf.kakao.com/_wbxkln' }}
            className='fixed bottom-[4.5rem] right-5 lg:bottom-32 lg:right-10 w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center z-[1000] cursor-pointer'>
            {/* generate scroll to top icon */}
            <Image src='/assets/images/layout/kakaotalk.png' fill alt={'kakaotalk'} />
        </div>
    )
}
