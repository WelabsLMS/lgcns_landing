import React from 'react'
import { mainBannerData, mainBannerDesc, mainBannerOverview } from '@/data/staticData'
import Image from 'next/image'

function MainBanner() {
    return (
        <section className='h-max bg-[#E0E9FF] px-10 pt-10 lg:px-40 lg:py-20'>
            <div className='container mx-auto h-full flex flex-col gap-10'>
                <div className='text-center lg:text-left flex flex-col items-center'>
                    {
                        mainBannerData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className='rounded-2xl bg-white py-1 px-6 text-center mx-auto text-lg lg:text-xl font-semibold'>{data.title}</div>
                                <p className='text-4xl lg:text-7xl my-2 font-bold'>{data.subTitle}</p>
                                <p className='text-lg lg:text-3xl font-semibold'>{data.desc}</p>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-full px-6 py-8 rounded-[30px] shadow-lg border-[3px] border-[#000080] ">
                        <div className="grid grid-cols-4 gap-4 text-center font-medium text-2xl divide-x divide-[#00227830]">
                            {
                                mainBannerOverview[0].map((data, index) => (
                                    <div key={index} className='py-4'>
                                        <p className='mb-7 font-bold'>{data.title}</p>
                                        <p className="whitespace-pre-line">{data.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {
                        mainBannerDesc[0].map((data, index) => (
                            <div className='flex flex-col gap-4 justify-center text-center items-center whitespace-pre-line'>
                                <div className='flex items-center gap-4'>
                                    <Image src={data.img} alt="circlecheck" width={40} height={40} />
                                    <p className='text-xl font-bold text-[#5984EC]'>{data.title}</p>
                                </div>
                                <p className='text-lg font-semibold leading-8'>{data.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default MainBanner