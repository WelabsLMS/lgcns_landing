'use client'
import React, { useEffect } from 'react'
import { useState } from 'react'
import SectionTitle from '../../ui/SectionTitle'
import Image from 'next/image'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import CourseStepEle from '../../ui/curriculum/CourseStepEle'
import CurriculumProject from './CurriculumProject'
import { curriculumData, curriculumStepData } from '@/data/staticData'

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

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
        <section className="relative mt-10 md:mt-20">
            <SectionTitle title="커리큘럼" />
            <div className='text-center my-8 md:my-16'>
                <p className='mb-2 text-lg md:text-2xl font-bold'>기초부터 심화까지 <br className='md:hidden' /> 단계적으로 성장할 수 있도록 설계하였습니다.</p>
                <span className="rounded-xl px-2 text-3xl md:text-4xl xl:text-5xl font-extrabold">단계별 프로젝트를 통해 <br className='md:hidden' /> 포트폴리오 완벽 준비!</span>
            </div>

            <div className='flex justify-center'>
                <div className="hidden w-full md:flex items-start justify-between my-10 px-20">
                    {
                        curriculumStepData[0].map((data, index) => (
                            <CourseStepEle
                                key={index}
                                title={data.title}
                                subtitle={data.subTitle}
                                index={data.id - 1}
                                activeSlide={slideIndex}
                                handleCourseClick={handleCourseClick}
                            />
                        ))
                    }
                    <div className='relative -top-7 w-20 h-20 md:h-24 lg:w-28 lg:h-28 flex-shrink-0'> {/* 이미지 크기 조정 및 마진 조정 */}
                        <Image
                            src='assets/images/curriculum/curriculumstep/trophy.svg'
                            alt='curriculum'
                            width={150} // 이미지 너비 조정
                            height={150} // 이미지 높이 조정
                            className='object-contain' // 이미지가 잘리지 않도록 설정
                        />
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4'>
                {/* Slider */}
                <div className='relative flex items-center'>
                    <div className={`prev-button-wrap relative invisible md:visible left-5 w-8 h-8 md:w-10 md:h-10 md:left-0 rounded-xl ${isBeginning ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
                        <div id='curriculumSwiper' className='button-prev'></div>
                    </div>
                    <div className='bg-[#C2D3FF50] w-full px-4 md:px-0 md:w-4/5 lg:h-[50vh] mx-auto rounded-2xl whitespace-pre-line text-pretty'>
                        <Swiper
                            id='curriculumSwiper'
                            slidesPerView={1}
                            pagination
                            modules={[Navigation, Pagination]}
                            navigation={{
                                nextEl: '.next-button-wrap',
                                prevEl: '.prev-button-wrap',
                            }}
                            onSwiper={(swiper) => setSwiper(swiper)}
                            onActiveIndexChange={(swiper) => setSlideIndex(swiper.activeIndex)}
                            className='h-full'
                        >
                            {
                                curriculumData[0].map((data, index) => (
                                    <SwiperSlide key={index} className='py-8 mb-8 md:py-10 md:px-14 lg:px-10 gap-6 lg:py-10'>
                                        <p className='text-xl font-bold md:hidden'>{curriculumStepData[0][index].title}</p>
                                        <div className='text-xl md:text-3xl font-bold text-center'>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className='w-full text-center lg:text-start flex flex-col-reverse h-full items-center  lg:flex-row text-base md:text-2xl gap-14'>
                                            <div className='font-semibold w-full lg:w-1/2 flex items-center justify-center'>{data.desc}</div>
                                            <div className='relative h-[20vh] md:h-[30vh] lg:w-1/2 bg-white flex justify-center py-2'>
                                                <Image src={data.img} alt='curriculum_img' width={300} height={100} priority />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className={`next-button-wrap relative invisible md:visible right-5 w-8 h-8 md:w-10 md:h-10 md:right-0 rounded-xl ${isEnd ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
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