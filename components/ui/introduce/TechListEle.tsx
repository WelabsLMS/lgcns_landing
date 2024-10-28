import Image from 'next/image'
import React from 'react'

interface TechListEleProps {
    id: number
    img: string
    row?: boolean
}

function TechListEle({ img }: { img: TechListEleProps }) {
    const imgName = img.img.split('/').slice(-1)[0].split('.')[0] + 'logo'
    return (
        <div className='w-min'>
            <div className={`relative ${img.row ? 'w-24 h-14 lg:w-48 lg:h-20' : 'w-14 h-20 lg:w-24 lg:h-20' }  flex items-center justify-center`}>
                <Image 
                    src={img.img} 
                    alt={imgName} 
                    fill
                />
            </div>
        </div>
    )
}

export default TechListEle
