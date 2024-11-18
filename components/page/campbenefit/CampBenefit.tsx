import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { campbenefitData } from '../../../data/staticData'
import CampBenefitEle from '../../ui/campbenefit/CampBenefitEle'

function CampBenefit() {
    return (
        <section id="benefit" className="section">
            <SectionTitle title="훈련생 혜택" />
            <div className='container mx-auto lg:px-20'>
                <div className='flex flex-col items-center mb-10 text-2xl lg:text-[40px] lg:leading-[3rem] font-semibold text-center lg:text-start '>
                    <p><span className='text-[#AA1239] font-bold'>LG CNS</span><br className='md:hidden'/> AM Inspire Camp만의</p>
                    <p>특별한 혜택</p>
                </div>
                <div className='flex flex-wrap justify-center gap-x-1 lg:gap-x-11 xl:gap-x-4 gap-y-10 md:gap-y-16'>
                    {
                        campbenefitData.first.map((benefit) => (
                            <CampBenefitEle key={benefit.id} benefitData={benefit} />
                        ))
                    }
                </div>
                <div className='flex flex-wrap justify-evenly gap-y-10 md:gap-y-16 mt-10'>
                    {
                        campbenefitData.second.map((benefit) => (
                            <CampBenefitEle key={benefit.id} benefitData={benefit} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default CampBenefit
