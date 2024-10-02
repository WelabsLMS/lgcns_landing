import Image from 'next/image'
import React from 'react'

function CampImageEle({ img }: { img: string }) {
    return (
        <div className='relative w-full h-80 md:w-[30%] md:h-52 lg:h-80'>
            <Image src={img} alt='camp image' fill />
        </div>
    )
}

export default CampImageEle