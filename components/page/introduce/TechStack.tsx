import Image from 'next/image'
import React from 'react'
import { techLogoList } from '@/data/introduce/techLogoList'
import TechListEle from '../../ui/introduce/TechListEle'

function TechStack() {
    return (
        <div className='mt-6 md:mt-12'>
            {/* 제목 부분 */}
            <div className='flex gap-1.5 md:gap-3 items-center'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={25} height={25} className="md:w-[40px] md:h-[40px]" />
                <p className='text-lg md:text-2xl font-extrabold text-[#5984EC]'>기술스택</p>
            </div>
            
            {/* 그리드 및 아이콘 부분 */}
            <div className='mt-4 md:mt-8 border-[1px] rounded-xl md:rounded-2xl py-3 md:py-5 flex flex-col'>
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 justify-items-center gap-y-2 md:gap-y-4'>
                    {
                        techLogoList.map((img) => (
                            <TechListEle key={img.id} imgSrc={img.img} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStack
