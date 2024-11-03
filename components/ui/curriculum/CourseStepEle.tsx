import React, { useEffect, useRef } from 'react'

function CourseStepEle({ title, subtitle, index, activeSlide, handleCourseClick }:
    { title: string, subtitle: string, index: number, activeSlide: number, handleCourseClick: (index: number) => void }) {
    const stepRef = useRef<HTMLDivElement | null>(null);

    // 선택된 인덱스가 화면 중앙으로 오도록 스크롤 처리
    useEffect(() => {
        if (index === activeSlide && stepRef.current) {
            const parent = stepRef.current.parentElement;
            if (parent) {
                const parentWidth = parent.clientWidth;
                const elementWidth = stepRef.current.clientWidth;
                const elementOffset = stepRef.current.offsetLeft;

                // 중앙으로 스크롤
                const scrollPosition = elementOffset - (parentWidth / 2) + (elementWidth / 2);

                parent.scrollTo({
                    left: scrollPosition,
                    behavior: 'smooth',  // 부드러운 스크롤
                });
            }
        }
    }, [activeSlide, index]);

    return (
        <>
            <div className={`cursor-pointer relative lg:w-32 xl:w-full hidden md:flex items-center lg:items-start text-nowrap`} onClick={() => handleCourseClick(index)}>
                <div ref={stepRef} className='w-full h-min flex flex-col items-center gap-2 md:gap-3'>
                    <div className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full ${index === activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                    <div className={`lg:w-28 xl:w-36 rounded-lg lg:outline-dashed p-2 lg:p-4 ${index === activeSlide ? 'outline-[#002278]' : 'outline-[#E0E0E0]'}`}>
                        <p className="text-[12px] md:text-base xl:text-2xl font-bold text-center mb-2 lg:mb-4">{title}</p>
                        <p className='text-center text-[12px] lg:text-sm xl:text-xl font-semibold whitespace-pre-line'>{subtitle}</p>


                    </div>
                </div>
                {
                    index !== 6 &&
                    <span className={`absolute -right-1 md:-right-1/3 md:translate-x-1/2 xl:-right-1 md:w-8 lg:right-0 w-4 lg:w-12 xl:w-16 h-0.5 top-[6.5px] md:top-[9px] lg:top-3 bg-[#E0E0E0] transform translate-x-1/2`}></span>
                }
            </div>

            <div className="overflow-hidden md:hidden">
                <div className={`cursor-pointer relative flex items-center text-nowrap`} onClick={() => handleCourseClick(index)}>
                    <div ref={stepRef} className='w-full h-[180px] flex flex-col items-center gap-0'>
                        <div className={`h-[40%] lg:w-28 xl:w-36 rounded-lg`}>
                            <div className={`${index % 2 === 0 && 'hidden'}`}>
                                <p className="text-[12px] font-bold text-center mb-2">{title}</p>
                                <p className='text-center text-[12px] font-semibold whitespace-pre-line'>{subtitle}</p>
                            </div>
                        </div>
                        <div className='h-[20%] flex items-center'>
                            <div className={`w-3 h-3 rounded-full ${index === activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                            {
                                index !== 6 &&
                                <span className={`absolute -right-0.5 w-4 h-0.5 top-[90px] bg-[#E0E0E0] transform translate-x-1/2`}></span>
                            }
                        </div>
                        <div className={`h-[40%] rounded-lg lg:outline-dashed ${index === activeSlide ? 'outline-[#002278]' : 'outline-[#E0E0E0]'} ${index % 2 !== 0 && 'hidden'}`}>
                            <p className="text-[12px] font-bold text-center mb-2">{title}</p>
                            <p className='text-center text-[12px] font-semibold whitespace-pre-line'>{subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseStepEle;
