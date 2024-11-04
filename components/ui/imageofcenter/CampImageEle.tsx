import Image from 'next/image'
import React from 'react'

function CampImageEle({ img }: { img: string }) {
    return (
        <div className='relative w-full h-72 md:h-80 lg:h-96 xl:h-[28rem]'>
            <Image src={img} alt='camp image' fill />
        </div>
    )
}

export default CampImageEle