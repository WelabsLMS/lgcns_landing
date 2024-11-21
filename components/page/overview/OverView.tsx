import React from 'react'
import { overviewData } from '@/data/staticData'
import SectionTitle from '@/components/ui/SectionTitle'
import OverViewEle from '@/components/ui/overview/OverViewEle'

function OverView() {
    return (
        <section className="section">
            <SectionTitle title={'모집개요'} />
            <div className='container mx-auto'>
                <div className='bg-[#C2D3FF50] rounded-[20px] py-4 lg:py-12 md:px-4'>
                    {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-y-2 lg:gap-y-20 justify-center md:gap-20 lg:gap-4'> */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium divide-y divide-x md:divide-y-0 divide-[#00227830] divide-dotted px-0 lg:px-0 lg:mr-4 xl:mr-8 md:px-0"> */}
                    {/* <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium px-0 lg:px-0 lg:mr-4 xl:mr-8 md:px-0"> */}
                    <div className="w-full flex flex-col md:flex-row justify-evenly font-medium px-0 lg:px-0 lg:mr-4 xl:mr-8 md:px-0">

                        {
                            overviewData[2].map((data) => (
                                <OverViewEle key={data.id} title={data.title} contents={data.content} id={data.id}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OverView
