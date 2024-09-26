import React from 'react'
import SectionTitle from '../../ui/SectionTitle'
import { centerImagesData } from '../../../data/centerimage/centerImagesData'
import CampImageEle from '../../ui/imageofcenter/CampImageEle'

function CenterImageList() {
    return (
        <section className="h-max">
            <SectionTitle title="교육장 사진" />
            <div className='my-16 container mx-auto flex flex-wrap content-around justify-center gap-y-16'>
                {
                    centerImagesData.map((image) => (
                        <CampImageEle key={image.id} img={image.img} />
                    ))
                }
            </div>
        </section>
    )
}

export default CenterImageList