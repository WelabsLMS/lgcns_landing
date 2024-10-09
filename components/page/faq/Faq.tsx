import FaqItem from '@/components/ui/faq/FaqItem';
import SectionTitle from '@/components/ui/SectionTitle'
import React from 'react'
import { faqData } from '@/data/staticData'

function Faq() {
    return (
        <section id='faq' className="section">

            <SectionTitle title="FAQ" />
            <div className="relative container mx-auto lg:px-20 z-20">
                <div className='absolute w-[192px] h-[192px] lg:w-[192px] lg:h-[384px] bg-[#5081FF] blur-[300px] left-0 top-1/3 lg:top-1/2' /> 
                <div className="mx-auto relative mt-8 p-2 flex flex-col gap-5 z-[10000]">
                    {faqData[0].map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
                <div className='right-0 absolute w-[192px] h-[192px] lg:w-[192px] lg:h-[384px] bg-[#5081FF] blur-[300px] top-3/4 lg:top-1/2' />
            </div>
        </section>
    );
}

export default Faq;
