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
        <div className="w-full md:w-[49%] lg:w-[350px] lg:max-w-1/3 bg-gradient-to-b from-[#A2BCFF] to-[#DCE6FF] rounded-3xl py-4">
            <div className='flex flex-col items-center gap-5 font-semibold '>
                <div className='relative bg-white rounded-full w-32 h-32 flex justify-center'>
                    <Image src={benefitData.imgSrc} alt={imgName} width={80} height={80} />
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
