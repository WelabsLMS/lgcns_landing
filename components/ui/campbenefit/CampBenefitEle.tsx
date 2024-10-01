import Image from 'next/image'
import React from 'react'

function CampBenefitEle({ content, img }: { content: string, img: string }) {
    const imgName = img.split('/').slice(-1)[0].split('.')[0]

    return (
        <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center gap-5 font-semibold">
            <div className='relative bg-[#FFECEC] rounded-full w-32 h-32 md:w-36 md:h-36 flex justify-center'>
                <Image src={img} alt={imgName} width={80} height={80} />
            </div>
            <div className='h-7'>
                <p className='text-center text-lg md:text-2xl whitespace-break-spaces'>{content}</p>
            </div>
        </div>
    )
}

export default CampBenefitEle
