'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

function CurriculumProject() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div>
            <div className='text-center my-10 md:my-20'>
                <div className='rounded-xl px-2 text-2xl md:text-5xl font-bold'>
                    <p className="">LG CNS 전문가와 함께하는 </p>
                    <p>산업 도메인별 프로젝트</p>
                </div>
                <div className='md:text-2xl font-semibold my-10 w-max flex flex-col items-center mx-auto'>
                    <div className='relative'>
                        <Image className='absolute -top-2 -left-5 w-3 md:w-4' src='assets/images/curriculum/project/quotes_left.svg' alt='curriculum' width={15} height={25} />
                        AM 전문가로 성장하기 위한 첫 걸음
                    </div>
                    <div className='relative'>
                        실무 경험이 풍부한 실무 전문가에게 배우세요!
                        <Image className='absolute -bottom-2 -right-5 w-3 md:w-4' src='assets/images/curriculum/project/quotes_right.svg' alt='curriculum' width={15} height={25} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center gap-8'>
                <div className='w-full lg:w-2/5 flex lg:flex-col gap-5 text-center lg:text-start'>
                    <div className={`hacker h-auto w-1/2 md:w-full lg:h-1/2 flex flex-col justify-between gap-5 border-2 px-8 py-4 rounded-2xl cursor-pointer ${activeIndex === 0 ? 'bg-[#E0E9FF]' : ''}`}>
                        <p className='hacker text-lg md:text-3xl font-semibold text-nowrap'>해커톤</p>
                        <p className='hidden lg:block text-xl'>공공, 리테일, 금융, 교육, 스마트팩토리, 스마트모빌리티 분야의 각 산업별 도메인에 따라 AI를 활용한 서비스를 개발합니다.</p>
                    </div>
                    <div className={`last h-auto w-1/2 md:w-full lg:h-1/2 flex flex-col justify-between gap-5 border-2 px-8 py-4 rounded-2xl cursor-pointer ${activeIndex === 1 ? 'bg-[#E0E9FF]' : ''}`}>
                        <p className='last text-lg md:text-3xl font-semibold text-nowrap'>최종 프로젝트</p>
                        <p className='hidden lg:block text-xl'>AM 기반의 최종 프로젝트를 통해 LG CNS만의 AM 기술과 Agile 개발방법론을 통해 AM 프로젝트 사이클을 경험하고 시스템을 구축합니다.</p>
                    </div>
                </div>
                <div className='flex h-[20vh] lg:h-[427px] xl:h-[447px] w-full lg:w-3/5 rounded-2xl'>
                    <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.last',
                            prevEl: '.hacker',
                        }}
                        className='w-full rounded-2xl'
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    >
                        <SwiperSlide>
                            <Image src='assets/images/curriculum/project/project_hackathon.svg' alt='project_hackathon' fill />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='assets/images/curriculum/project/project_final.svg' alt='project_final' fill />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CurriculumProject;
