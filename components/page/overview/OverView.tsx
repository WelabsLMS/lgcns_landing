import React from 'react'
import { overviewData } from '@/data/staticData'
import SectionTitle from '@/components/ui/SectionTitle'
import OverViewEle from '@/components/ui/overview/OverViewEle'

function OverView() {
    return (
        <section className="section">
            <SectionTitle title={'모집개요'} />
            <div className='container mx-auto'>
            <div className='bg-[#C2D3FF50] rounded-[40px] py-8 lg:py-16 px-6 lg:px-8 lg:pl-28'>
                <div className='flex flex-wrap gap-y-10 lg:gap-y-20 justify-center md:gap-20 lg:gap-0'>
                    {
                        overviewData[0].map((data) => (
                            <OverViewEle key={data.id} title={data.title} contents={data.content} />
                        ))
                    }
                </div>
            </div>
            </div>
        </section>
    )
}

export default OverView
