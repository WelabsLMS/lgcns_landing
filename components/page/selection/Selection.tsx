import SectionTitle from '@/components/ui/SectionTitle'
import SelectionEle from '@/components/ui/selectionProcedure/SelectionEle'
import { selectionProcedureData } from '@/data/staticData'
import React from 'react'

function Selection() {
    return (
        <section id="selection" className="section">
            <SectionTitle title='선발절차' />
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 lg:mt-12'>
                    {
                        selectionProcedureData[0].map((data, index) => (
                            <SelectionEle key={index} selectionEle={data} />
                        ))
                    }
                </div>
                {/* <div className='text-center font-semibold lg:px-10 xl:px-40 text-lg md:text-xl'>
                    <p className='mb-4'>교육과정 신청 후 순차적으로 <br className='md:hidden' /> 이메일 안내 진행 예정입니다.</p>
                    <p>내일배움카드는 교육 시작 전 발급 필수이며, <br className='lg:hidden' /> 상세내용은 FAQ 확인 또는 문의처로 문의 부탁드립니다.</p>
                </div> */}
            </div>
        </section>
    )
}

export default Selection
