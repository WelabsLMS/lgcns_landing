import SectionTitle from '@/components/ui/SectionTitle'
import Image from 'next/image'
import React from 'react'

export default function RoadMap() {
    return (
        <section className="section">
            <SectionTitle title={'과정로드맵'} />
            <div className='container mx-auto'>
                <div className='relative w-full h-[250px] md:h-[500px] lg:h-[800px]'>
                    <Image src={'/assets/images/roadmap/roadmap.svg'} alt='roadmap' fill />
                </div>
            </div>
        </section>
    )
}
