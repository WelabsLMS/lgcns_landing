import React from 'react'

export default function ApplyForm() {
    return (
        <section className="min-h-screen">
            {/* 상단 배너 */}
            <div className="text-center h-max mb-16 bg-[#C2D3FF] py-16">
                <h2 className="text-5xl font-bold">LG CNS AM* Inspire Camp 1기 지원</h2>
                <p className='text-3xl mb-6'>(Application Modernization)</p>
                <p className="text-2xl mt-2 font-semibold">LG CNS AM Inspire Camp 1기 지원 페이지입니다.<br />지원서 제출은 1회로 제한하며, 제출 후 수정이 불가하니 신중을 기해 주세요.</p>
            </div>
            <div className='container mx-auto lg:px-80'>
                <form className="space-y-4">
                    {/* 지원과정 */}
                    <div>
                        <label className="block text-gray-700 text-3xl font-bold">지원과정</label>
                        <label className="flex items-center mt-1 text-2xl font-semibold">
                            <input type="checkbox" className="mr-2 w-9 h-9 rounded-3xl" /> LG CNS AM* Inspire Camp 1기
                        </label>
                    </div>

                    {/* 성명 */}
                    <div>
                        <label className="block text-gray-700 font-medium">성명</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="이름을 작성해주세요."
                        />
                    </div>

                    {/* 성별 */}
                    <div>
                        <label className="block text-gray-700 font-medium">성별</label>
                        <div className="flex space-x-4 mt-1">
                            <label className="flex items-center">
                                <input type="radio" name="gender" className="mr-2" /> 남자
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="gender" className="mr-2" /> 여자
                            </label>
                        </div>
                    </div>

                    {/* 생년월일 */}
                    <div>
                        <label className="block text-gray-700 font-medium">생년월일</label>
                        <input
                            type="date"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* 연락처 */}
                    <div>
                        <label className="block text-gray-700 font-medium">연락처</label>
                        <input
                            type="tel"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="하이픈(-)을 포함하여 작성해주세요."
                        />
                    </div>

                    {/* 주소 */}
                    <div>
                        <label className="block text-gray-700 font-medium">주소</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="상세주소는 작성하지 않아도 됩니다."
                        />
                    </div>

                    {/* 이메일 */}
                    <div>
                        <label className="block text-gray-700 font-medium">이메일</label>
                        <input
                            type="email"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="이메일을 작성해주세요."
                        />
                    </div>

                    {/* 우대사항 (내일배움카드) */}
                    <div>
                        <label className="block text-gray-700 font-medium">내일배움카드</label>
                        <div className="flex space-x-4 mt-1">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 보유
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 미보유
                            </label>
                        </div>
                    </div>

                    {/* 지원경로 */}
                    <div>
                        <label className="block text-gray-700 font-medium">지원경로</label>
                        <div className="space-y-2 mt-1">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 지인추천
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 대학교 설정
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> SNS 광고 (인스타그램, 블로그 등)
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 웹사이트 (링크드인, 서치닷컴, 부트캠프 등)
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 기타
                            </label>
                        </div>
                    </div>

                    {/* 병역구분 */}
                    <div>
                        <label className="block text-gray-700 font-medium">병역구분</label>
                        <select className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200">
                            <option>선택해주세요</option>
                            <option value="군필">군필</option>
                            <option value="미필">미필</option>
                            <option value="면제">면제</option>
                        </select>
                    </div>

                    {/* 장애 여부 */}
                    <div>
                        <label className="block text-gray-700 font-medium">장애 여부</label>
                        <div className="space-y-2 mt-1">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 해당 없음
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" /> 비대상
                            </label>
                        </div>
                    </div>

                    {/* 재학상태 */}
                    <div>
                        <label className="block text-gray-700 font-medium">재학상태</label>
                        <select className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200">
                            <option>선택해주세요</option>
                            <option value="재학">재학</option>
                            <option value="졸업">졸업</option>
                            <option value="휴학">휴학</option>
                        </select>
                    </div>

                    {/* 졸업 예정일 */}
                    <div>
                        <label className="block text-gray-700 font-medium">졸업 예정일</label>
                        <input
                            type="date"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* 잔여학점 */}
                    <div>
                        <label className="block text-gray-700 font-medium">잔여학점</label>
                        <input
                            type="number"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="잔여학점을 작성해주세요."
                        />
                    </div>

                    {/* 학력사항 관련 증빙서류 첨부 */}
                    <div>
                        <label className="block text-gray-700 font-medium">학력사항 관련 증빙서류 첨부</label>
                        <input type="file" className="mt-1" />
                    </div>

                    {/* 이력사항 */}
                    <div>
                        <label className="block text-gray-700 font-medium">이력사항</label>
                        <textarea
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="이력사항을 작성해주세요."
                            rows={4}
                        />
                    </div>

                    {/* 자격증 */}
                    <div>
                        <label className="block text-gray-700 font-medium">자격증</label>
                        <input
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="자격증을 입력해주세요."
                        />
                    </div>

                    {/* 자격증 파일 첨부 */}
                    <div>
                        <label className="block text-gray-700 font-medium">자격증 파일 첨부</label>
                        <input type="file" className="mt-1" />
                    </div>

                    {/* 개인정보 수집 및 이용 동의 */}
                    <div>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> 개인정보 수집 및 이용 동의
                        </label>
                    </div>

                    {/* 제출 전 확인사항 */}
                    <div>
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" /> 제출 전 모든 사항을 확인하였습니다.
                        </label>
                    </div>

                    {/* 제출 버튼 */}
                    <button className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                        제출하기
                    </button>
                </form>
            </div>
        </section>
    );
}
