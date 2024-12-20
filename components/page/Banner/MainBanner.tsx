import React from 'react'
import { mainBannerData, mainBannerDesc, mainBannerOverview } from '@/data/staticData'
import Image from 'next/image'

function MainBanner() {
    return (
        <section className='h-max bg-[#E0E9FF] px-4 py-10 lg:px-12 lg:py-20'>
            <div className='container mx-auto h-full flex flex-col gap-4 lg:gap-8'>
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
                    <div className="w-full lg:w-[85%] md:py-8 rounded-[30px] shadow-lg border-[3px] border-[#000080] ">
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium divide-y divide-x md:divide-y-0 divide-[#00227830] divide-dotted px-0 lg:px-0 lg:mr-4 xl:mr-8 md:px-0"> */}
                        <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium lg:px-0 lg:mr-4 xl:mr-8 md:px-0">
                            {
                                mainBannerOverview[0].map((data, index) => (
                                    <div key={index} className={`py-3 ${data.id === 1 && 'border-r-2 border-b-2 md:border-b-0'} ${data.id === 2 && 'md:border-r-2 border-b-2 md:border-b-0'} ${data.id === 3 && 'border-r-2 md:w-[105%] lg:w-full'} border-dotted border-[#00227830] p-1`}>
                                        <p className='mb-3 lg:mb-7 font-bold text-xl lg:text-2xl'>{data.title}</p>
                                        <p className={`whitespace-pre-line text-sm font-semibold ${index === 2 ? "text-xs md:text-sm lg:text-sm" : "lg:text-base"} xl:text-lg`}>{data.content}</p>
                                        <p className='text-sm lg:text-lg text-red-500'>{data.notice}</p>
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
                                <div className='flex items-center gap-2'>
                                    <Image src={data.img} alt="circlecheck" width={23} height={23} className='block md:hidden' />
                                    <Image src={data.img} alt="circlecheck" width={25} height={25} className='hidden md:block' />
                                    <p className='text-lg md:text-xl font-bold text-[#5984EC]'>{data.title}</p>
                                </div>
                                <p className='hidden md:block md:text-xl lg:text-2xl font-semibold leading-8'>{data.desc}</p>
                                <p className='md:hidden text-base font-semibold leading-7'>{data.mobileDesc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>

    )
}

export default MainBanner