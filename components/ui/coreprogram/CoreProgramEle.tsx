import React from 'react'

interface CoreProgramEleProps {
    id: number
    title: string
    desc: string
    link: string
}

function CoreProgramEle({ data }: { data: CoreProgramEleProps }) {
    return (
        <div className='w-[18rem] h-max md:w-[21rem] md:h-[25rem] lg:w-[30rem] lg:h-[25rem] border px-5 py-8 lg:px-11 flex flex-col gap-4 justify-evenly bg-white rounded-2xl drop-shadow-lg text-center items-center md:text-start md:items-start whitespace-break-spaces'>
            <h3 className='h-1/5 text-xl xl:text-2xl font-extrabold'>{data.title}</h3>
            <p className='h-3/5 lg:text-lg font-semibold'>{data.desc}</p>
            <div className='h-1/5 w-full'>
                <button className='h-9 rounded-2xl font-semibold border-2 border-[#C2D3FF] px-3 py-1 sm:px-4 sm:py-1 w-3/5 sm:w-1/2 hover:bg-[#C2D3FF]'>
                    자세히 보기
                </button>
            </div>
        </div>
    )
}

export default CoreProgramEle
