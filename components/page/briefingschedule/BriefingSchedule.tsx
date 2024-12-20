import SectionTitle from '@/components/ui/SectionTitle'
import { BriefingScheduleData } from '@/data/staticData'
import React from 'react'

export default function BriefingSchedule() {
    return (
        <section id='briefing' className='section'>
            <SectionTitle title='홍보 일정' />
            <div className='container mx-auto lg:px-20'>
                <div className='mb-10 text-center '>
                    <p className='text-xl md:text-4xl font-semibold mb-1 md:mb-4'>Digital Business Innovator</p>
                    <p className='text-2xl md:text-[40px] mb-1 md:mb-4 font-bold' ><span className='text-[#AA1239] font-bold'>LG CNS</span>만의 <br className='md:hidden' />특별한 교육 프로그램으로</p>
                    <p className='text-xl md:text-4xl font-semibold'>여러분을 직접 찾아갑니다!</p>
                </div>
                <table className='w-full text-center'>
                    <thead>
                        <tr className='text-lg md:text-2xl lg:text-3xl font-bold border divide-x text-white bg-[#002278]'>
                            {
                                BriefingScheduleData.headers.map((header, index) => (
                                    <th key={index} className={`py-3 ${header.id === 'time' ? 'hidden md:block' : ''}`}>{header.label}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            BriefingScheduleData.rows.map((row, index) => (
                                <tr key={index} className='text-base h-20 md:h-auto md:text-lg lg:text-xl border-[2px] font-semibold divide-x-[2px]'>
                                    <td className='py-3 md:py-4 whitespace-pre-wrap md:whitespace-normal text-nowrap'>{row.university}</td>
                                    <td className='py-3 md:py-4 hidden md:table-cell'>{row.date}</td>
                                    <td className='py-3 md:hidden whitespace-pre-line'>{row.mobileDate}</td>
                                    <td className='py-3 md:py-4 whitespace-pre-line text-nowrap md:whitespace-normal'>{row.location}</td>
                                    <td className='py-3 md:py-4 hidden md:table-cell'>{row.time}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className='mt-10 text-lg md:text-xl text-center font-semibold'>설명회 일정은 추가될 예정이며, <br className='md:hidden' />참가에 관한 자세한 문의는 <br className='md:hidden' />카카오톡 채널을 통해 부탁드립니다.</p>
            </div>
        </section>
    )
}
