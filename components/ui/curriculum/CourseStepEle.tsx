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
        <div className={`cursor-pointer relative flex items-center lg:items-start text-nowrap`} onClick={() => handleCourseClick(index)}>
            <div ref={stepRef} className='w-max h-min flex flex-col items-center gap-2 md:gap-3'>
                <div className={`w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                <div>
                    <p className="text-sm md:text-base xl:text-2xl font-bold text-center mb-4">{title}</p>
                    <p className='text-center text-xl font-semibold whitespace-pre-line'>{subtitle}</p>
                </div>
            </div>
            <div className="absolute -right-5 bottom-3 md:bottom-5 lg:top-3 h-0.5">
                <div className={`w-8 md:w-10 h-0.5 ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`}></div>
            </div>
        </div>
    );
}

export default CourseStepEle;
