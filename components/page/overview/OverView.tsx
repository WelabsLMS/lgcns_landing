import React from 'react'

import { overviewData } from '@/data/overview/overviewData'
import SectionTitle from '@/components/ui/SectionTitle'
import OverViewEle from '@/components/ui/overview/OverViewEle'


function OverView() {
    return (
        <section className="section">
            <SectionTitle title={'모집개요'} />
            <div className='w-4/5 mx-auto  bg-[#C2D3FF50] rounded-[40px] py-16 pl-28'>
                <div className='flex flex-wrap gap-y-20'>
                    {
                        overviewData.map((data) => (
                            <OverViewEle key={data.id} title={data.title} contents={data.content} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OverView