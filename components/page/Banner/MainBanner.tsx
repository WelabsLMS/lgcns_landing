import React from 'react'
import { mainBannerData, mainBannerDesc, mainBannerOverview } from '@/data/staticData'
import Image from 'next/image'

function MainBanner() {
    return (
        <section className='h-max bg-[#E0E9FF] px-4 py-10 lg:px-40 lg:py-20'>
            <div className='container mx-auto h-full flex flex-col gap-10'>
                <div className='text-center lg:text-left flex flex-col items-center'>
                    {
                        mainBannerData.map((data, index) => (
                            <React.Fragment key={index}>
                                <div className='rounded-2xl bg-white py-1 px-6 text-center mx-auto text-lg lg:text-xl font-semibold'>{data.title}</div>
                                <p className='text-4xl lg:text-6xl xl:text-7xl my-2 font-bold whitespace-pre-line lg:whitespace-normal'>{data.subTitle}</p>
                                <p className='text-lg lg:text-3xl font-semibold'>{data.desc}</p>
                            </React.Fragment>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-full md:py-8 rounded-[30px] shadow-lg border-[3px] border-[#000080] ">
                        <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium divide-y md:divide-x md:divide-y-0 divide-[#00227830] px-8 md:px-0">
                            {
                                mainBannerOverview[0].map((data, index) => (
                                    <div key={index} className='py-4 lg:py-4 lg:text-2xl'>
                                        <p className='mb-4 lg:mb-7 font-bold text-2xl'>{data.title}</p>
                                        <p className="whitespace-pre-line text-xl">{data.content}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    {
                        mainBannerDesc[0].map((data, index) => (
                            <div key={index} className='flex flex-col gap-4 justify-center text-center items-center whitespace-pre-line'>
                                <div className='flex items-center gap-4'>
                                    <Image src={data.img} alt="circlecheck" width={40} height={40} />
                                    <p className='text-xl font-bold text-[#5984EC]'>{data.title}</p>
                                </div>
                                <p className='hidden md:block text-xl font-semibold leading-8'>{data.desc}</p>
                                <p className='md:hidden text-xl font-semibold leading-8'>{data.mobileDesc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default MainBanner