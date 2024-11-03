import React from 'react'

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="flex items-center w-full xl:w-2/3 mx-auto mb-5 lg:mb-7 px-4">
            <div className="flex-grow border-t border-gray-400"></div>
            <p className="flex-shrink mx-4 lg:mx-10 text-white text-2xl lg:text-5xl border px-4 lg:px-10 py-2 lg:py-6 rounded-2xl bg-[#002278] text-nowrap font-bold">
                {title}
            </p>
            <div className="flex-grow border-t border-gray-400"></div>
        </div>
    )
}

export default SectionTitle
