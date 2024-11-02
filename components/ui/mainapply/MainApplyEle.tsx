import React from 'react'

function MainApplyEle({ title, desc }: { title: string, desc: string }) {
    return (
        <div className='bg-white rounded-[20px] w-full md:w-[48%] p-5 mb-4 lg:mb-0 text-base lg:text-xl' >
            <p className='text-[#002278] font-semibold mb-1' dangerouslySetInnerHTML={{ __html: title }}></p>
            <p className='text-sm lg:text-base font-medium' dangerouslySetInnerHTML={{ __html: desc }}></p>
        </div>
    )
}

export default MainApplyEle;
