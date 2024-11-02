import SectionTitle from '@/components/ui/SectionTitle'
import SelectionEle from '@/components/ui/selectionProcedure/SelectionEle'
import { selectionProcedureData } from '@/data/staticData'
import React from 'react'

function Selection() {
    return (
        <section id="selection" className="section">
            <SectionTitle title='선발절차' />
            <div className='container'>
                <div className='w-full flex xl:justify-evenly xl:gap-12 lg:mt-6 mb-4 md:mb-6 lg:mb-16'>
                    {
                        selectionProcedureData[0].map((data, index) => (
                            <SelectionEle key={index} selectionEle={data} />
                        ))
                    }
                </div>
                <div className='text-center font-semibold text-lg md:text-2xl'>
                    <p className='mb-4'>졸업예정자의 경우 25년 2월 졸업인 <br className='md:hidden'/> 경우에만 지원 가능합니다.</p>
                    <p>위 일정은 선발 진행 절차에 따라 변동될 수 있습니다.</p>
                </div>
            </div>
        </section>
    )
}

export default Selection
