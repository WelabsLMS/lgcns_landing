import Image from 'next/image'
import React from 'react'

function MainBanner() {
    return (
        <section className='h-max bg-[#C2D3FF] p-40'>
            <div className='container mx-auto h-full flex items-center z-20'>
                <div className='font-bold text-nowrap z-30'>
                    <div className='rounded-2xl bg-white text-center py-1 w-1/3 my-2 text-xl'>K-Digital Training</div>
                    <h1 className=' text-3xl'>디지털 선도기업 아카데미</h1>
                    <p className=' text-7xl my-2'>LG CNS</p>
                    <p className='text-7xl my-1'>AM* Inspire Camp</p>
                    <p className=' text-2xl'>(Application Modernization)</p>
                </div>
                <div className='absolute right-40 w-1/2 h-[40rem]'>
                    <Image src='assets/images/banner/bannerImg.svg' alt='banner_Image' fill />
                </div>
            </div>
        </section>
    )
}

export default MainBanner