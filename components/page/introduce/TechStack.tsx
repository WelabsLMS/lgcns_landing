import Image from 'next/image'
import React from 'react'
import { techLogoList } from '@/data/introduce/techLogoList'
import TechListEle from '../../ui/introduce/TechListEle'

function TechStack() {
    return (
        <div className='mt-6 md:mt-12'>
            {/* 제목 부분 */}
            <div className='flex gap-4 items-center'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={40} height={40} />
                <p className='text-xl md:text-3xl font-extrabold text-[#5984EC]'>기술스택</p>
            </div>

            {/* 그리드 및 아이콘 부분 */}
            <div className='mt-4 md:mt-8 border rounded-xl md:rounded-2xl py-3 md:py-5 flex flex-col'>
                <div className='grid grid-cols-3 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 justify-items-center gap-y-2 md:gap-y-4'>
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
