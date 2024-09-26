import Image from 'next/image'
import React from 'react'

function TechListEle({ imgSrc }: { imgSrc: string }) {
    const imgName = imgSrc.split('/').slice(-1)[0].split('.')[0] + 'logo'
    return (
        <div className='w-min'>
            <div className='w-28 h-28 border border-black/50 rounded-3xl flex items-center justify-center'>
                <Image src={imgSrc} alt={imgName} width={80} height={80} />
            </div>
        </div>
    )
}

export default TechListEle