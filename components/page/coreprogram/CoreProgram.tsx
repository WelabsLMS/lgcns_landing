import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { coreProgramData } from '../../../data/coreprogram/coreProgramData'
import CoreProgramEle from '../../ui/coreprogram/CoreProgramEle'

function CoreProgram() {
    return (
        <section id='coreprogram' className="section">
            <div className='absolute w-96 h-96  bg-[#5081FF] rounded-full top-1/2 -translate-y-1/2 blur-[300px]' />
            <SectionTitle title="핵심 프로그램" />
            <p className='text-center mb-10'>* 자세히 보기 버튼을 클릭하여 각 프로그램에 대해 알아보세요!</p>
            <div className='w-[70%] mx-auto'>
                <div className="flex flex-wrap justify-center">
                    {
                        coreProgramData.map((data) => (
                            <CoreProgramEle key={data.id} data={data} />
                        ))
                    }
                </div>
            </div>
            <div className='right-0 absolute top-1/2 w-96 h-96  bg-[#5081FF] -translate-y-1/2 rounded-full blur-[300px] z-[-1]' />
        </section>

    )
}

export default CoreProgram