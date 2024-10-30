import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { campbenefitData } from '../../../data/staticData'
import CampBenefitEle from '../../ui/campbenefit/CampBenefitEle'

function CampBenefit() {
    return (
        <section id="benefit" className="section">
            <SectionTitle title="훈련생 혜택" />
            <div className='container mx-auto lg:px-20'>
                <div className='flex flex-col items-center mb-14 text-4xl lg:text-[40px] font-semibold text-center lg:text-start'>
                    <p><span className='text-[#AA1239] font-bold'>LG CNS</span><br className='md:hidden'/> AM Inspire Camp만의</p>
                    <p>훈련생 혜택</p>
                </div>
                <div className='flex flex-wrap justify-between gap-y-10 md:gap-y-16'>
                    {
                        campbenefitData[0].map((benefit) => (
                            <CampBenefitEle key={benefit.id} benefitData={benefit} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CampBenefit
