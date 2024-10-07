import React from 'react'

function personal() {
  return (
    <section className='flex flex-col items-center mt-[50px]'>
        <form>
            <div className='flex flex-col'>
                {/* 지원과정 */}
                <p className='font-semibold text-lg'>지원과정</p>
                <label className='flex items-center gap-2 cursor-pointer'>
                    <input
                        type="checkbox"
                        className="hidden peer"
                        name="course"
                    />
                    <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                    <p className='font-semibold'>LG CNS AM Inspire Camp 1기</p>
                </label>
                {/* 성명 */}
                <p className='font-semibold text-lg'>성명</p>
                <input
                    className='border border-gray-300 rounded-lg w-[500px] h-[30px] p-2'
                    name="name"
                    required
                    placeholder="이름을 작성해주세요."
                    type="text"
                />
                {/* 성별 */}
                <p className='font-semibold text-lg'>성별</p>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center cursor-pointer'>
                        <input
                            required
                            type="radio"
                            className="hidden peer"
                            name="gender"
                            value="male"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                        <p className='ml-2'>남자</p>
                    </label>

                    <label className='flex items-center cursor-pointer'>
                        <input
                            required
                            type="radio"
                            className="hidden peer"
                            name="gender"
                            value="female"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                        <p className='ml-2'>여자</p>
                    </label>
                </div>
                {/* 생년월일 */}
                <p className='font-semibold text-lg'>생년월일</p>
                {/* 연락처 */}
                <p className='font-semibold text-lg'>연락처</p>
                <input
                    className='border border-gray-300 rounded-lg w-[500px] h-[30px] p-2'
                    name="name"
                    required
                    placeholder="하이픈(-)을 포함하여 작성해주세요."
                    type="text"
                />
                {/* 주소 */}
                <p className='font-semibold text-lg'>주소</p>
                <p className='font-medium text-sm text-[#969696]'>(상세주소는 작성하지 않으셔도 됩니다.)</p>
                <input
                    className='border border-gray-300 rounded-lg w-[500px] h-[30px] p-2'
                    name="name"
                    required
                    placeholder="서울시 중구 동호로"
                    type="text"
                />
                {/* 이메일 */}
                <p className='font-semibold text-lg'>이메일</p>
                <input
                    className='border border-gray-300 rounded-lg w-[500px] h-[30px] p-2'
                    name="name"
                    required
                    placeholder="이메일을 작성해주세요."
                    type="text"
                />
                {/* 내일배움카드 */}
                <p className='font-semibold text-lg'>내일배움카드 발급 여부</p>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center cursor-pointer'>
                        <input
                            required
                            type="radio"
                            className="hidden peer"
                            name="card" // 동일한 name 속성
                            value="true"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                        <p className='ml-2'>발급</p>
                    </label>

                    <label className='flex items-center cursor-pointer'>
                        <input
                            required
                            type="radio"
                            className="hidden peer"
                            name="card"
                            value="false"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-no-repeat bg-center peer-checked:bg-blue-500 bg-[url('/assets/images/check.svg')]"/>
                        <p className='ml-2'>미발급</p>
                    </label>
                </div>
                {/* 지원경로 */}
                <p className='font-semibold text-lg'>지원경로</p>
                <p className='font-medium text-sm text-[#969696]'>(최소 1개 선택, 복수 선택 가능합니다.)</p>
                <div className='flex flex-col gap-2'>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="checkbox"
                            className="hidden peer"
                            name="recommend"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                        <p>지인추천</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="checkbox"
                            className="hidden peer"
                            name="session"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                        <p>대학교 설명회</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="checkbox"
                            className="hidden peer"
                            name="ad"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                        <p>SNS 광고 (인스타그램, 블로그 등)</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="checkbox"
                            className="hidden peer"
                            name="web"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                        <p>웹사이트 (인크루트, 자소설닷컴, 부트텐트 등)</p>
                    </label>
                    <label className='flex items-center gap-2 cursor-pointer'>
                        <input
                            type="checkbox"
                            className="hidden peer"
                            name="etc"
                        />
                        <div className="w-6 h-6 rounded-md border-2 border-gray-300 bg-[url('/assets/images/check.svg')] bg-no-repeat bg-center peer-checked:bg-blue-500"/>
                        <p>기타</p>
                    </label>
                </div>
                {/* 병역구분 */}
            </div>
        </form>
    </section>
  )
}

export default personal