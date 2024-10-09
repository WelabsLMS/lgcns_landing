import React from 'react'

interface CoreProgramEleProps {
    id: number
    title: string
    desc: string
    link: string
}

function CoreProgramEle({ data }: { data: CoreProgramEleProps }) {
    return (
        <div className='mx-auto w-full h-max md:w-[21rem] md:h-[19rem] lg:w-[25rem] lg:h-[20rem] border px-10 py-5 md:py-10 md:px-11 flex flex-col gap-4 justify-evenly bg-white rounded-2xl drop-shadow-lg text-center items-center md:text-start md:items-start whitespace-break-spaces'>
            <h3 className='h-1/5 text-xl xl:text-2xl font-extrabold'>{data.title}</h3>
            <p className='h-3/5 lg:text-xl font-semibold'>{data.desc}</p>
            <div className='h-1/5 w-full'>
                <button className='rounded-full font-semibold border-2 border-[#C2D3FF] px-8 py-2 hover:bg-[#C2D3FF]'>
                    자세히 보기
                </button>
            </div>
        </div>
    )
}

export default CoreProgramEle
