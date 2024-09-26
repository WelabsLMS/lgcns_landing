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
        <section className="relative my-20">
            <SectionTitle title="커리큘럼" />
            <div className='text-center my-16'>
                <p className='mb-2 text-2xl font-bold'>기초부터 심화까지 단계적으로 성장할 수 있도록 설계하였습니다.</p>
                <span className="rounded-xl px-2 text-5xl font-extrabold">단계별 프로젝트를 통해 포트폴리오 완벽 준비!</span>
            </div>

            <div className='container mx-auto px-20'>
                <div className="h-max flex items-start mx-auto justify-between my-16 text-nowrap">
                    {
                        curriculumStepData.map((data, index) => (
                            <React.Fragment key={index}>
                                <CourseStepEle title={data.title} index={data.id - 1} activeSlide={slideIndex} handleCourseClick={handleCourseClick} />
                            </React.Fragment>
                        ))}
                    <div className='relative bottom-5'>
                        <Image src='assets/images/curriculum/trophy.svg' alt='curriculum' width={100} height={100} />
                    </div>
                </div>
                {/* Slider */}
                <div className='flex items-center px-20'>
                    <div className={`prev-button-wrap relative w-10 h-10 rounded-xl ${isBeginning ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'} `}>
                        <div id='curriculumSwiper' className='button-prev'></div>
                    </div>
                    <div className='bg-[#C2D3FF50] w-4/5 mx-auto rounded-2xl'>
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
                                    <SwiperSlide
                                        key={index}
                                        className='pt-10 pb-20 px-10 gap-10'
                                    >
                                        <div className='text-3xl font-bold'>
                                            <p>{data.title}</p>
                                        </div>
                                        <div className='flex text-2xl'>
                                            <div className='w-1/2'>{data.desc}</div>
                                            <div className='w-1/2'><img src={data.img}></img></div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className={`next-button-wrap relative w-10 h-10 rounded-xl ${isEnd ? 'bg-[#C2D3FF50]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
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