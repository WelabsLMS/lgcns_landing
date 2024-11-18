import Image from 'next/image'
import React from 'react'

interface CampBenefitEleProps {
    id: number
    imgSrc: string,
    title: string,
    content: string
}

function CampBenefitEle({ benefitData }: { benefitData: CampBenefitEleProps }) {
    const imgName = benefitData.title.split('/').slice(-1)[0].split('.')[0]

    return (
        <div className={`w-full md:w-[49%] lg:w-[350px] bg-[#C2D3FF50] rounded-3xl py-4`}>
            <div className='flex flex-col items-center gap-5 font-semibold'>
                <div className='relative bg-white rounded-full w-16 h-16 flex justify-center'>
                    <Image src={benefitData.imgSrc} alt={imgName} width={35} height={35} />
                </div>
                <div className='text-center'>
                    <p className='font-bold text-2xl whitespace-break-spaces mb-4'>{benefitData.title}</p>
                    <p className='text-xl whitespace-pre-line'>{benefitData.content}</p>
                </div>
            </div>
        </div>
    )
}

export default CampBenefitEle
