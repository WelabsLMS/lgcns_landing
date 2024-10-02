import Image from 'next/image'
import React from 'react'

function Footer() {
    return (
        <footer className='pt-10 pb-10'>
            <div className='mx-auto'>
                <div className='w-full py-5 flex items-center justify-between'>
                    <div className='relative w-1/5 h-8 lg:w-1/5 lg:h-16'>
                        <Image src='/assets/images/layout/moel_logo.svg' alt='moel_logo' fill priority/>
                    </div>
                    <div className='relative w-1/6 h-7 lg:w-1/5 lg:h-12'>
                        <Image src='/assets/images/layout/LGCNS_ROW_ENG.svg' alt='lgcns_logo' fill priority/>
                    </div>
                    <div className='relative w-1/4 h-6 md:h-10 lg:w-1/5 lg:h-16'>
                        <Image src='/assets/images/layout/welabs_logo.svg' alt='welabs_logo' fill priority/>
                    </div>
                    <div className='relative w-[16%] h-10 md:h-16 lg:w-1/5 lg:h-24'>
                        <Image src='/assets/images/layout/kmdi.svg' alt='kmdi_logo' fill priority/>
                    </div>
                    <div className='relative w-[20%] h-8 md:h-12 lg:w-1/5 lg:h-20'>
                        <Image src='/assets/images/layout/themagnet2.svg' alt='themagnet_logo' fill priority/>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer