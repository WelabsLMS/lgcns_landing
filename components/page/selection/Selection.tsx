import SectionTitle from '@/components/ui/SectionTitle'
import Curve from '@/components/ui/selectionProcedure/Curve'
import SelectionEle from '@/components/ui/selectionProcedure/SelectionEle'
import { selectionProcedureData } from '@/data/selection/selectionProcedureData'
import React from 'react'

function Selection() {
    return (
        <section className="pt-20">
            <SectionTitle title='선발절차' />
            <div className='flex flex-wrap sm:flex-row justify-center items-center container mx-auto lg:gap-12 md:gap-0 my-8 md:my-16'>
                {
                    selectionProcedureData.map((data) => (
                        <React.Fragment key={data.id}>
                            <SelectionEle title={data.title} />
                            <Curve id={data.id} />
                        </React.Fragment>
                    ))
                }
            </div>
            <div className='container mx-auto px-8 md:text-xl'>
                <p className='mb-4'>교육과정 신청 후 순차적으로 이메일 안내 진행 예정입니다.</p>
                <p>내일배움카드는 교육 시작 전 발급 필수이며, <br className='lg:hidden'/> 상세내용은 FAQ 확인 또는 문의처로 문의 부탁드립니다.</p>
            </div>
        </section>
    )
}

export default Selection
