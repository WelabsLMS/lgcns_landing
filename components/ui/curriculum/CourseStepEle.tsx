import React, { useEffect, useRef } from 'react'

function CourseStepEle({ title, index, activeSlide, handleCourseClick }: { title: string, index: number, activeSlide: number, handleCourseClick: (index: number) => void }) {
    const stepRef = useRef<HTMLDivElement | null>(null);

    // 선택된 인덱스가 화면 가운데로 오도록 스크롤 처리
    useEffect(() => {
        if (index === activeSlide && stepRef.current) {
            const parent = stepRef.current.parentElement;
            const parentWidth = parent?.clientWidth || 0;
            const elementWidth = stepRef.current.clientWidth || 0;
            const elementOffset = stepRef.current.offsetLeft || 0;

            const scrollPosition = elementOffset - (parentWidth / 2) + (elementWidth / 2);
            parent?.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [activeSlide, index]);
    return (
        <>
            <div ref={stepRef} className={`relative w-28 flex flex-col gap-2 cursor-pointer `} onClick={() => handleCourseClick(index)}>
                <div className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full mx-auto ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                <div>
                    <p className="lg:text-2xl font-bold text-center">{title}</p>
                </div>
            </div>
            <div className="relative top-3 lg:top-5">
                <div className={`w-10 h-0.5 ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`}></div>
            </div>
        </>
    )
}

export default CourseStepEle