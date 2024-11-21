import Image from 'next/image'
import React from 'react'

function OverViewEle({ title, contents }: { title: string, contents: string, id: number }) {
    // 강조할 키워드 정의
    const highlightKeywords = ['온라인 메타버스 캠퍼스', '오프라인 동국대 서울캠퍼스'];

    // 컨텐츠 파싱 및 강조 처리
    const parseContent = (text: string) => {
        let parts: (string | JSX.Element)[] = [text];

        highlightKeywords.forEach(keyword => {
            parts = parts.flatMap(part => {
                if (typeof part === 'string') {
                    const splits = part.split(keyword);
                    return splits.reduce((acc: (string | JSX.Element)[], curr, i) => {
                        if (i === splits.length - 1) return [...acc, curr];
                        return [...acc, curr,
                        <span key={i} className="text-[#ba003a] font-bold">
                            {keyword}
                        </span>
                        ];
                    }, []);
                }
                return [part];
            });
        });

        return parts;
    };
    return (
        // <div className={`whitespace-pre flex flex-col p-4 ${id == 1 && 'border-r border-b md:border-b-0 w-[80%]'} ${id == 2 && 'md:border-r border-b md:border-b-0'} border-dotted border-[#00227830]`}>
        <div className={`whitespace-pre flex flex-col p-4 items-center text-center md:items-start md:text-start`}>
            <div className='flex flex-col items-center md:items-start'>
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={25} height={25} className='block md:hidden' />
                <Image src={'/assets/images/overview/cloudIcon.svg'} alt={'cloud'} width={30} height={30} className='hidden md:block' />
                <p className="text-xl lg:text-2xl xl:text-3xl font-extrabold text-gray-800">{title}</p>
            </div>
            <p className={`text-base md:text-sm lg:text-base xl:text-xl font-semibold lg:mt-4`}>{parseContent(contents)}</p>
        </div>
    )
}

export default OverViewEle
