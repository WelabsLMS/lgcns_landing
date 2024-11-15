import SectionTitle from '@/components/ui/SectionTitle'
import { BriefingScheduleData } from '@/data/staticData'
import React from 'react'

export default function BriefingSchedule() {
    return (
        <section id='briefing' className='section'>
            <SectionTitle title='홍보 일정' />
            <div className='container mx-auto lg:px-20'>
                <div className='mt-5 mb-10 text-center '>
                    <p className='text-2xl lg:text-[40px] mb-1 lg:mb-4 font-bold' >DX 전문기업 <span className='text-[#AA1239] font-bold'>LG CNS</span>의 <br className='md:hidden' />첫 교육프로그램 런칭!</p>
                    <p className='text-lg lg:text-[30px] font-semibold'>LG CNS가 여러분을 찾아갑니다.</p>
                </div>
                <table className='w-full text-center'>
                    <thead>
                        <tr className='text-xl lg:text-2xl font-bold border divide-x text-white bg-[#002278]'>
                            {
                                BriefingScheduleData.headers.map((header, index) => (
                                    <th key={index} className='py-3'>{header.label}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BriefingScheduleData.rows.map((row, index) => (
                                <tr key={index} className='text-xl lg:text-2xl border divide-x'>
                                    <td className='py-3'>{row.university}</td>
                                    <td className='py-3'>{row.date}</td>
                                    <td className='py-3'>{row.location}</td>
                                    <td className='py-3'>{row.time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className='mt-10 text-xl text-center font-semibold'>설명회 일정은 추가될 예정이며, 참가에 관한 자세한 문의는 카카오톡 채널을 통해 부탁드립니다.</p>
            </div>
        </section>
    )
}
