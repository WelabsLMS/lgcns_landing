import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { campbenefitData } from '../../../data/campbenefit/campbenefitData'
import CampBenefitEle from '../../ui/campbenefit/CampBenefitEle'

function CampBenefit() {
    return (
        <section className="section">
            <SectionTitle title="캠프혜택" />
            <div className='container mx-auto flex flex-wrap content-around justify-center gap-y-24'>
                {
                    campbenefitData.map((benefit) => (
                        <CampBenefitEle key={benefit.id} content={benefit.content} img={benefit.img} />
                    ))
                }
            </div>
        </section>
    )
}

export default CampBenefit