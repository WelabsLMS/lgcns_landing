import { courseEmployFieldData } from '@/data/staticData'
import React from 'react'

function EmploymentField() {
    return (
        <div className='w-full mt-10 md:mt-20 rounded-[30px] py-3 flex flex-col items-center bg-[#E0E9FF]'>
            <div className='rounded-full bg-white px-14 py-4 mb-10'>
                <p className='text-2xl lg:text-3xl font-extrabold text-[#5984EC]'>취업분야</p>
            </div>
            <div className='w-full flex items-center justify-center font-medium'>
                <ol className='list-disc w-full p-4 lg:py-5 px-28 text-xl md:text-2xl leading-7 md:leading-10 grid grid-rows-4 grid-flow-col justify-between'>
                    {
                        courseEmployFieldData[0].map((data, index) => (
                            <li key={index} className='mb-4'>
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
