import Image from 'next/image'
import React from 'react'

function CampBenefitEle({ content, img }: { content: string, img: string }) {
    // slice the img string to get the last word and remove the .svg
    const imgName = img.split('/').slice(-1)[0].split('.')[0]

    return (
        <div className="w-1/3 flex flex-col items-center gap-5 font-semibold">
            <div className='relative bg-[#FFECEC] rounded-full w-40 h-40 flex justify-center'>
                <Image src={img} alt={imgName} width={80} height={80} />
            </div>
            <div className='h-7'>
                <p className='text-center text-2xl whitespace-break-spaces'>{content}</p>
            </div>
        </div>
    )
}

export default CampBenefitEle