import Image from 'next/image'
import React from 'react'

function CampImageEle({ img }: { img: string }) {
    return (
        <div className='relative w-full md:w-1/3 h-80'>
            <Image src={img} alt='camp image' fill />
        </div>
    )
}

export default CampImageEle