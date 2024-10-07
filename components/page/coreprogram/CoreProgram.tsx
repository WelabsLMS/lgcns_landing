import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { coreProgramData } from '@/data/staticData'
import CoreProgramEle from '../../ui/coreprogram/CoreProgramEle'

function CoreProgram() {
    return (
        <section id='coreprogram' className="section relative">
            <div className='absolute w-72 h-72 sm:w-96 sm:h-96 bg-[#5081FF] rounded-full top-1/2 -translate-y-1/2 blur-[200px] sm:blur-[300px]' />
            <SectionTitle title="핵심 프로그램" />
            <p className='text-center mb-6 sm:mb-10 text-sm sm:text-base'>* 자세히 보기 버튼을 클릭하여 <br className='sm:hidden'/> 각 프로그램에 대해 알아보세요!</p>
            <div className='w-[90%] sm:w-[80%] lg:w-[70%] mx-auto'>
                <div className="flex flex-wrap justify-center gap-5">
                    {
                        coreProgramData[0].map((data) => (
                            <CoreProgramEle key={data.id} data={data} />
                        ))
                    }
                </div>
            </div>
            <div className='right-0 absolute top-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#5081FF] -translate-y-1/2 rounded-full blur-[200px] sm:blur-[300px] z-[-1]' />
        </section>
    )
}

export default CoreProgram
