import Image from 'next/image'
import React from 'react'

function TechListEle({ imgSrc }: { imgSrc: string }) {
    const imgName = imgSrc.split('/').slice(-1)[0].split('.')[0] + 'logo'
    return (
        <div className='w-min'>
            <div className='w-20 h-20 md:w-20 md:h-20 lg:w-24 lg:h-24 border border-black/50 rounded-2xl md:rounded-3xl flex items-center justify-center'>
                <Image 
                    src={imgSrc} 
                    alt={imgName} 
                    width={60} height={60} // 기본 크기
                    className='md:w-16 md:h-16 lg:w-20 lg:h-20' // 중간 및 큰 화면에서 크기 조정
                />
            </div>
        </div>
    )
}

export default TechListEle
