import FaqItem from '@/components/ui/faq/FaqItem';
import SectionTitle from '@/components/ui/SectionTitle'
import React from 'react'

const faqData = [
    {
        question: '지원 자격이 어떻게 되나요?',
        answer: '1. 내일배움카드 발급 가능자 \n2. 대학(원) 졸업 및 졸업예정자 \n나이, 학력 및 전공 제한 없이 지원 가능합니다.',
    },
    {
        question: '비전공자인데, 수강이 가능할까요??',
        answer:
            '전공자 뿐만 아니라 비전공자도 지원 가능합니다. \n해당 과정은 기초부터 학습하므로 비전공자도 관심과 열정이 있다면 충분히 수강할 수 있습니다.',
    },
    {
        question: '국민취업지원제도와 병행 가능한가요?',
        answer:
            '국민취업지원제도와 병행하여 수강 가능합니다.',
    },
    {
        question: '온라인으로 교육이 진행되나요?',
        answer:
            '온라인과 오프라인 병행하여 진행됩니다.',
    },
    {
        question: '내일배움카드가 필수인가요?',
        answer:
            '국민내일배움카드 발급자 및 발급 가능자 모두 지원 가능합니다. \n단, 국민내일배움카드 발급자는 기존에 내일배움카드 교육을 수강하여 지원금 잔액이 0원이라면 고용센터에 확인하시기 바랍니다. \n국민내일배움카드 발급 가능자는 교육 시작일 전에 내일배움카드 발급 및 수령을 권장드립니다.',
    },
    {
        question: '개인 노트북이 있어야 지원 가능한가요?',
        answer:
            '교육수강에 필요한 노트북은 제공해드립니다.',
    },
];

function Faq() {



    return (
        <section className="section">
            <div className='absolute w-[384px] h-[384px] hidden lg:block bg-[#5081FF] blur-[400px] -left-1/2' />
            <SectionTitle title="FAQ" />
            <div className="container mx-auto">
                <div className="mx-auto my-8 p-4 bg-white shadow-md rounded-lg flex flex-col gap-5 z-20">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
            <div className='absolute w-[384px] h-[384px] hidden lg:block bg-[#5081FF] blur-[400px] -right-1/2' />
        </section>
    );
}

export default Faq;
