import BoxTitle from '@/components/ui/introduce/BoxTitle'
import { courseEmployFieldData } from '@/data/staticData'
import React from 'react'

function EmploymentField() {
    return (
        <div className='mt-10 rounded-[30px] px-2 py-3 flex flex-col items-center bg-[#E0E9FF]'>
            <BoxTitle title='취업분야' />
            <div className='w-full rounded-xl md:rounded-[30px] py-3 md:py-5 flex flex-col items-center bg-white font-medium'>
                <ol className='list-disc w-max lg:w-full lg:gap-x-10 lg:px-20 xl:pr-12 pl-4 xl:pl-32 text-lg md:text-2xl md:leading-10 grid grid-cols-2 md:grid-cols-3 lg:grid-rows-none lg:grid-cols-4 grid-flow-row justify-evenly lg:justify-between gap-x-8 gap-y-4'>
                    {
                        courseEmployFieldData[0].map((data, index) => (
                            <li key={index}>
                                {data.title}
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default EmploymentField
