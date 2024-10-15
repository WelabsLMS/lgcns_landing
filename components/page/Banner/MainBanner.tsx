import Image from 'next/image'
import React from 'react'

function MainBanner() {
    return (
        <section className='h-max bg-[#C2D3FF] px-10 pt-10 lg:px-40 lg:py-40'>
            <div className='container mx-auto h-full flex flex-col lg:flex-row items-center z-20'>
                <div className='font-bold text-center lg:text-left z-30'>
                    <div className='rounded-2xl bg-white text-center py-1 lg:w-1/3 mx-auto lg:mx-0 my-2 text-lg lg:text-xl'>K-Digital Training</div>
                    <h1 className='text-2xl lg:text-3xl'>디지털 선도기업 아카데미</h1>
                    <p className='text-4xl lg:text-7xl my-2 text-[#AA1239]'>LG CNS</p>
                    <p className='text-3xl lg:text-7xl my-1'>AM* Inspire Camp</p>
                    <p className='text-lg lg:text-2xl'>(Application Modernization)</p>
                </div>
                <div className='relative lg:absolute lg:right-20 xl:right-40 w-full lg:w-1/2 h-[15rem] lg:h-[40rem]'>
                    <Image src='assets/images/banner/bannerImg.svg' alt='banner_Image' fill priority />
                </div>
            </div>
        </section>

    )
}

export default MainBanner