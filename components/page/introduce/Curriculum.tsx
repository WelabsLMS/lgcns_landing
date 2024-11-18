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
import InnerTitleBtrn from '@/components/ui/curriculum/InnerTitleBtrn'

interface curriculumData {
    id: number;
    title: string;
    subtitle?: string;
    desc: string;
    mobileDesc: string;
    img: string;
    inner?: {
        title: string;
        desc: string;
        goal?: string;
        subject?: string;
        tech?: string;
        pjt?: string[];
        mobileGoal?: string;
        mobileSubject?: string;
        mobileTech?: string;
        mobilePjt?: string[];
    };
}

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
        <section className="relative mt-10">
            <SectionTitle title="커리큘럼" />
            <div className='text-center mt-8'>
                <p className='mb-2 text-lg md:text-2xl font-bold'>기초부터 심화까지 <br className='md:hidden' /> 단계적으로 성장할 수 있도록 설계하였습니다.</p>
                <span className="rounded-xl px-2 text-2xl md:text-4xl xl:text-5xl font-extrabold">단계별 프로젝트를 통해 <br className='md:hidden' /> 포트폴리오 완벽 준비!</span>
            </div>

            <div className='container mx-auto px-1 lg:px-10'>
                <div className='w-full mt-5 flex justify-center '>
                    <div className="w-full flex items-center justify-around mb-5 lg:my-10 ">
                        {
                            curriculumStepData[1].map((data, index) => (
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

                        {/* <div className='relative -top-7 w-20 h-20 md:w-10 md:h-10 lg:w-28 lg:h-28 flex-shrink-0'> 
                        <Image
                            src='assets/images/curriculum/curriculumstep/trophy.svg'
                            alt='curriculum'
                            width={150} // 이미지 너비 조정
                            height={150} // 이미지 높이 조정
                            className='object-contain' // 이미지가 잘리지 않도록 설정
                        />
                    </div> */}
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 lg:px-10 xl:px-0'>
                {/* Slider */}
                <div className='relative flex items-center'>
                    <div className={`prev-button-wrap relative invisible md:visible left-5 w-8 h-8 md:w-10 md:h-10 md:left-0 rounded-xl ${isBeginning ? 'bg-[#adb5c850]' : 'bg-[#A5B4FC] cursor-pointer'}`}>
                        <div id='curriculumSwiper' className='button-prev'></div>
                    </div>
                    <div className={`bg-[#C2D3FF50] w-full px-4 md:px-0 md:w-4/5 lg:w-[85%] xl:w-[60%] ${slideIndex === 6 ? "h-max" : "h-max"} xl:h-min mx-auto rounded-2xl text-pretty`}>
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
                                curriculumData[1].map((data,index)  => (
                                    <SwiperSlide key={index} className='py-8 md:py-10 md:px-14 lg:px-10 gap-6 lg:py-12 xl:px-9 xl:py-16 h-full whitespace-pre-line '>
                                        <div className='flex flex-col justify-around '>
                                            {/* <p className='text-xl font-bold md:hidden'>{curriculumStepData[0][index].title}</p> */}
                                            <div className='relative w-max mx-auto text-xl md:text-[28px] font-bold text-center mb-2'>
                                                <div>
                                                    {data.title}
                                                    <Image 
                                                    src='/assets/images/curriculum/accent.svg' 
                                                    alt='accent' 
                                                    width={50} 
                                                    height={50} 
                                                    className='absolute -top-5 -right-5 rotate-12'
                                                    />
                                                    </div>
                                            </div>
                                            <div className='relative w-max mx-auto text-xl md:text-[28px] font-bold text-center mb-5 xl:mb-10'>
                                                {data.subtitle && <p>{data.subtitle}</p>}
                                            </div>
                                            {/* <div className='w-full text-center lg:text-start flex flex-col-reverse items-center lg:flex-row text-base md:text-2xl justify-around'>
                                            <div className='hidden font-semibold w-full lg:w-[55%] lg:flex items-center justify-center'>{data.desc}</div>
                                            <div className='font-semibold w-full lg:w-[55%] flex lg:hidden items-center justify-center mt-10'>{data.mobileDesc}</div>
                                            <div className='relative h-[20vh] md:h-[30vh] lg:w-[43%] bg-white flex justify-center py-2'>
                                                <Image src={data.img} alt='curriculum_img' width={300} height={100} priority />
                                            </div>
                                        </div> */}

                                            <div className='text-base lg:text-2xl whitespace-pre-line'>
                                                {data.inner && 'goal' in data.inner &&
                                                    <div className='mt-4 mb-10 space-y-5'>
                                                        <InnerTitleBtrn title={'학습목표'} />
                                                        <p className='hidden md:block text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.goal}</p>
                                                        <p className='md:hidden text-base font-semibold px-1 md:px-5'>{data.inner.mobileGoal}</p>
                                                    </div>
                                                }
                                                {data.inner && 'subject' in data.inner &&
                                                    <div className='mb-10 space-y-5'>
                                                        <InnerTitleBtrn title={'교과목'} />
                                                        <p className='hidden md:block text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.subject}</p>
                                                        <p className='md:hidden text-base md:text-2xl font-semibold px-1 md:px-5'>{data.inner.mobileSubject}</p>
                                                    </div>
                                                }
                                                {
                                                    data.inner && 'detail' in data.inner &&
                                                    <div className='mb-10 space-y-5'>
                                                        <InnerTitleBtrn title={'세부내용'} />
                                                        <p className='hidden md:block text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.detail}</p>
                                                        <p className='md:hidden text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.mobileDetail}</p>
                                                    </div>
                                                }
                                                {data.inner && 'tech' in data.inner &&
                                                    <div className='mb-5 space-y-5'>
                                                        <InnerTitleBtrn title={'기술스택'} />
                                                        <p className='hidden md:block text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.tech}</p>
                                                        <p className='md:hidden text-base lg:text-2xl font-semibold px-1 md:px-5'>{data.inner.mobileTech}</p>
                                                    </div>
                                                }

                                                {
                                                    data.inner && 'pjt' in data.inner &&
                                                    <div className='mb-5 space-y-5'>
                                                        <InnerTitleBtrn title={'프로젝트'} />
                                                        <div className='hidden lg:block'>
                                                            <ol className='space-y-5'>
                                                                {
                                                                    data.inner.pjt && data.inner.pjt.map((project, index) => (
                                                                        <li key={index} className='text-base lg:text-2xl font-semibold px-1 md:px-5'>{project}</li>
                                                                    ))
                                                                }
                                                            </ol>
                                                        </div>
                                                        <div className='lg:hidden'>
                                                            <ol className='space-y-3'>
                                                                {
                                                                    data.inner.mobilePjt && data.inner.mobilePjt.map((project, index) => (
                                                                        <li key={index} className='text-base lg:text-xl font-semibold px-1 md:px-5'>{project}</li>
                                                                    ))
                                                                }
                                                            </ol>
                                                        </div>
                                                    </div>
                                                }
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