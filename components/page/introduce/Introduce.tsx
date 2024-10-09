import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import Summary from './Summary'
import EmploymentField from './EmploymentField'
import TechStack from './TechStack'

function Introduce() {
    return (
        <>
            <section id="introduce" className="section">
                <SectionTitle title="캠프소개" />
                <div className='container'>
                    <div className='text-center'>
                        <p className='mb-2 text-xl md:text-4xl font-bold text-nowrap'><span className='text-[26px] md:text-4xl text-[#bb003d]'>LG CNS</span>의 <br className='xl:hidden'/> SW, AM<span className='text-base md:text-2xl'>(Application Modernization)</span><br className='lg:hidden' /> 인재 육성 노하우를 그대로 녹인</p>
                        <span className="rounded-lg px-2 text-[28px] md:text-5xl font-extrabold bg-[#99B4F2]">Real AM 전문 인재 양성과정</span>
                    </div>
                    <div className='w-full'>
                        <Summary />
                        <EmploymentField />
                        <TechStack />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduce
