import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import Summary from './Summary'
import EmploymentField from './EmploymentField'
import Curriculum from './Curriculum'
import TechStack from './TechStack'

function Introduce() {
    return (
        <>
            <section id="introduce" className="section">
                <SectionTitle title="캠프소개" />
                <div className='text-center'>
                    <p className='mb-2 text-2xl font-bold text-nowrap'>LG CNS의 SW, AM(Application Modernization) 인재 육성 노하우를 그대로 녹인</p>
                    <span className="rounded-xl px-2 text-5xl font-extrabold bg-[#99B4F2]">Real AM 전문 인재 양성과정</span>
                </div>
                <div className='w-1/2 mx-auto'>
                    <Summary />
                    <EmploymentField />
                    <TechStack />
                </div>
            </section>
            <Curriculum />
        </>
    )
}

export default Introduce