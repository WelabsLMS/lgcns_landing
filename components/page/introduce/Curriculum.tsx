'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import SectionTitle from '../../ui/SectionTitle'
import Image from 'next/image'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import "swiper/css"
import "swiper/css/navigation"
import { curriculumStepData } from '@/data/curriculum/curriculumStepperData'
import { curriculumData } from '@/data/curriculum/curriculumData'
import CourseStepEle from '../../ui/curriculum/CourseStepEle'
import CurriculumProject from './CurriculumProject'

function Curriculum() {
    const [swiper, setSwiper] = useState<SwiperClass>()
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
            swiper.on('slideChange', () => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
            });
        }
    }, [swiper]);

    const handleCourseClick = (index: number) => {
        if (swiper) {
            setSlideIndex(index);
            swiper.slideTo(index); // 특정 슬라이드로 이동
        }
    };

    return (
        <section className="relative my-10 md:my-20">
            <SectionTitle title="커리큘럼" />
            <div className='text-center my-8 md:my-16'>
                <p className='mb-2 text-lg md:text-2xl font-bold'>기초부터 심화까지 <br className='md:hidden' /> 단계적으로 성장할 수 있도록 설계하였습니다.</p>
                <span className="rounded-xl px-2 text-3xl md:text-5xl font-extrabold">단계별 프로젝트를 통해 <br className='md:hidden' /> 포트폴리오 완벽 준비!</span>
            </div>

            <div className='container mx-auto px-4 md:px-20'>
                <div className="relative flex my-10 text-nowrap px-4 overflow-x-auto">
                    {
                        curriculumStepData.map((data, index) => (
                            <CourseStepEle
                                key={index}
                                title={data.title}
                                index={data.id - 1}
                                activeSlide={slideIndex}
                                handleCourseClick={handleCourseClick}
                            />
                        ))
                    }
                    <div className='relative bottom-5 w-28 h-28 lg:w-32 lg:h-32 flex-shrink-0'> {/* 이미지 크기 조정 및 마진 조정 */}
                        <Image
                            src='assets/images/curriculum/trophy.svg'
                            alt='curriculum'
                            width={150} // 이미지 너비 조정
                            height={150} // 이미지 높이 조정
                            className='object-contain' // 이미지가 잘리지 않도록 설정
                        />
                    </div>
                </div>


                {/* Slider */}
                <div className='flex items-center md:px-20'>
                    <div className={`prev-button-wrap relative left-5 w-8 h-8 md:w-10 md:h-10 rounded-xl ${isBeginning ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
                        <div id='curriculumSwiper' className='button-prev'></div>
                    </div>
                    <div className='bg-[#C2D3FF50] w-full px-4 md:px-0 md:w-4/5 mx-auto rounded-2xl'>
                        <Swiper
                            id='curriculumSwiper'
                            slidesPerView={1}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.next-button-wrap',
                                prevEl: '.prev-button-wrap',
                            }}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            onActiveIndexChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                        >
                            {
                                curriculumData.map((data, index) => (
                                    <SwiperSlide key={index} className='py-8 px-6 md:pt-10 md:pb-20 md:px-10 gap-6'>
                                        <div className='text-xl md:text-3xl font-bold'>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className='flex flex-col-reverse lg:flex-row text-base md:text-2xl'>
                                            <div className='lg:w-1/2'>{data.desc}</div>
                                            <div className='h-40 lg:w-1/2'><img src={data.img}></img></div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className={`next-button-wrap relative right-5 w-8 h-8 md:w-10 md:h-10 rounded-xl ${isEnd ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
                        <div id='curriculumSwiper' className='button-next'></div>
                    </div>
                </div>
                {/* project */}
                <CurriculumProject />
            </div>
        </section>

    )
}

export default Curriculum