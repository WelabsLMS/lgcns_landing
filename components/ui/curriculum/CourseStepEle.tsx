import React, { useEffect, useRef } from 'react'

function CourseStepEle({ title, index, activeSlide, handleCourseClick }: { title: string, index: number, activeSlide: number, handleCourseClick: (index: number) => void }) {
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
        <div className={`cursor-pointer flex items-center lg:items-start text-nowrap`} onClick={() => handleCourseClick(index)}>
            <div ref={stepRef} className='w-16 md:w-10 xl:w-28 flex flex-col items-center gap-2 md:gap-3'>
                <div className={`w-4 h-4 md:w-6 md:h-6 lg:w-10 lg:h-10 rounded-full ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                <div>
                    <p className="text-sm md:text-base xl:text-2xl font-bold text-center">{title}</p>
                </div>
            </div>
            <div className="relative bottom-3 md:bottom-5 lg:top-5">
                <div className={`w-8 md:w-10 h-0.5 ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`}></div>
            </div>
        </div>
    );
}

export default CourseStepEle;
