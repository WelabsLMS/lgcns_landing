import Image from 'next/image'
import React from 'react'

interface SelectionEleProps {
    id: number
    imgSrc: string
    title: string
    desc: string
}

function SelectionEle({ selectionEle }: { selectionEle: SelectionEleProps }) {
    return (
        <div className='flex flex-col items-center w-[100px] md:w-full'>
            <div className='relative rounded-full flex flex-col w-[70px] h-[70px] md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] items-center bg-[#DEE7FF] justify-center mb-3'>
                <div className='relative mb-3 w-6 h-6 lg:w-20 lg:h-20'>
                    <Image src={selectionEle.imgSrc} alt={selectionEle.title} fill />
                </div>
                <p className='text-[10px] md:text-xl font-bold text-nowrap whitespace-pre-line text-center'>{selectionEle.title}</p>
                {
                    selectionEle.id !== 5 ?
                        <div className={`absolute -right-full w-full h-[3px] bg-[#DEE7FF] ${selectionEle.id == 3 && 'hidden md:block'}`} /> : null
                }
            </div>
            <p className='text-center whitespace-pre-line text-[9px] md:text-base lg:text-lg xl:text-xl font-semibold'>{selectionEle.desc}</p>
        </div>
    )
}

export default SelectionEle
