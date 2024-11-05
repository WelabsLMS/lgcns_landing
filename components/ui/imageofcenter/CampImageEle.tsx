import Image from 'next/image'
import React from 'react'

function CampImageEle({ img,title }: { img: string, title?: string }) {
    return (
        <div className='w-full'>
            <p className='font-semibold text-center text-xl lg:text-2xl mb-5 md:my-10 whitespace-pre-line leading-9'>{title}</p>
            <div className='relative w-full h-72 md:h-80 lg:h-96 xl:h-[28rem]'>
                <Image src={img} alt='camp image' fill />
            </div>
        </div>
    )
}

export default CampImageEle