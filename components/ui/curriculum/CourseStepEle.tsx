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
        <div className={`cursor-pointer relative lg:w-32 xl:w-full flex items-center lg:items-start text-nowrap`} onClick={() => handleCourseClick(index)}>
            <div ref={stepRef} className='w-full h-min flex flex-col items-center gap-2 md:gap-3'>
                <div className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full ${index === activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                <div>
                    <p className="text-[12px] md:text-base xl:text-2xl font-bold text-center mb-2 lg:mb-4">{title}</p>
                    <p className='text-center text-[12px] lg:text-sm xl:text-xl font-semibold whitespace-pre-line'>{subtitle}</p>
                </div>
            </div>
            {
                index !== 6 &&
                <span className={`absolute -right-1 md:-right-1/3 md:translate-x-1/2 xl:-right-1 md:w-8 lg:right-0 w-4 lg:w-12 xl:w-16 h-0.5 top-[6.5px] md:top-[9px] lg:top-3 bg-[#E0E0E0] transform translate-x-1/2`}></span>
            }
        </div>
    );
}

export default CourseStepEle;
