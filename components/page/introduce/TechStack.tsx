import Image from 'next/image'
import React from 'react'
import { techLogoList } from '@/data/introduce/techLogoList'
import TechListEle from '../../ui/introduce/TechListEle'

function TechStack() {
    return (
        <div className='mt-16'>
            <div className='flex gap-4 items-center'>
                <Image src="assets/images/introduce/circle_check.svg" alt="circlecheck" width={50} height={50} />
                <p className='text-3xl font-extrabold text-[#5984EC]'>기술스택</p>
            </div>
            <div className='mt-10 border-[1px] rounded-3xl py-6 flex flex-col'>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center gap-y-5'>
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