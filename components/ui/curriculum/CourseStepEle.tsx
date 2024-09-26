import React from 'react'

function CourseStepEle({ title, index, activeSlide, handleCourseClick }: { title: string, index: number, activeSlide: number, handleCourseClick: (index: number) => void }) {
    return (
        <>
            <div className={`relative flex flex-col gap-4 w-28 cursor-pointer `} onClick={() => handleCourseClick(index)}>
                <div className={`w-10 h-10 rounded-full mx-auto ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`} />
                <div>
                    <p className="text-2xl font-bold text-center">{title}</p>
                </div>
            </div>
            <div className="relative top-5">
                <div className={`w-10 h-0.5 ${index <= activeSlide ? 'bg-[#002278]' : 'bg-[#E0E0E0]'}`}></div>
            </div>
        </>
    )
}

export default CourseStepEle