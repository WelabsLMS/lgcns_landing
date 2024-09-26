import React from 'react'

interface CoreProgramEleProps {
    id: number
    title: string
    desc: string
    link: string
}

function CoreProgramEle({ data }: { data: CoreProgramEleProps }) {
    return (
        <div className='lg:w-1/2 flex justify-center mb-10'>
            <div className='w-[25rem] h-[19rem] border-[1px] py-10 px-11 flex flex-col justify-between bg-white rounded-2xl drop-shadow-lg'>
                <h3 className='text-3xl font-extrabold'>{data.title}</h3>
                <p className='text-lg font-semibold'>{data.desc}</p>
                <button className='rounded-2xl border-[1px] border-[#C2D3FF] px-4 py-1 w-1/2 hover:bg-[#C2D3FF] '>자세히 보기</button>
            </div>
        </div>
    )
}

export default CoreProgramEle