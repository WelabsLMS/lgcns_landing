import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import Summary from './Summary'
import EmploymentField from './EmploymentField'
import TechStack from './TechStack'

function Introduce() {
    return (
        <section id="introduce" className="section">
            <SectionTitle title="Camp 소개" />
            <div className='container lg:px-28'>
                <div className='text-center'>
                    <p className='text-xl md:text-3xl font-bold text-nowrap'>LG CNS의 <br className='lg:hidden' /> SW, AM 노하우를 그대로 적용한
                        {/* <br className='xl:hidden' /> 인재 육성 노하우를 그대로 적용한 */}
                    </p>
                    <span className="rounded-lg text-2xl md:text-4xl font-extrabold bg-[#99B4F2]">LG CNS AM 전문가 양성과정</span>
                    <div className='text-lg lg:text-[28px] mt-5 md:mt-10 font-medium lg:leading-10'>
                        <p><span className='font-bold text-[#BA003A]'>LG CNS 현업 전문가 그룹</span>이 <br className='md:hidden' /> 직접 멘토로 참여하는</p>
                        <p>Cloud Native Application <br className='md:hidden' /> 환경에서의 AM 전문가 양성과정</p>
                    </div>
                </div>
                <div className='w-full'>
                    <Summary />
                    <TechStack />
                    <EmploymentField />
                </div>
            </div>
        </section>
    )
}

export default Introduce
