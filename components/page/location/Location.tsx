import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'
import React from 'react'

function Location() {
    return (
        <section className='section'>
            <SectionTitle title='교육장 위치' />
            <div className='container mx-auto flex flex-col gap-10'>
                <div className='relative w-full h-[300px] md:h-[550px] mx-auto'>
                    <Image src='/assets/images/location/location.svg' alt='location' fill />
                </div>
                <div className='flex flex-col gap-10 md:flex-row  justify-evenly text-center'>
                    <div>
                        <p className='text-[#002278] font-bold text-2xl md:text-4xl'>주소</p>
                        <div className='font-semibold text-lg md:text-3xl'>
                            <p>서울시 중구 필동로1길 30</p>
                            <p>동국대학교 학술관</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#002278] font-bold text-2xl md:text-4xl'>오시는 길</p>
                        <div className='font-semibold text-lg md:text-3xl'>
                            <p>동대입구역 6번출구</p>
                            <p>도보 5분</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location