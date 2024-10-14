'use client'
import Input from "@/components/ui/apply/Input";
import ApplyTitle from "@/components/ui/apply/ApplyTitle";
import { useState } from "react";

export default function ApplyForm() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleAccordion() {
        const content = document.getElementById("accordion-content");
        const arrow = document.getElementById("arrow");

        if (content && arrow) {
            setIsOpen(!isOpen);
            content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";
            arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0)";
        }
    }

    return (
        <section className="min-h-screen mb-28">
            {/* 상단 배너 */}
            <div className="text-center h-max mb-16 bg-[#C2D3FF] py-16">
                <h2 className="text-5xl font-bold">LG CNS AM* Inspire Camp 1기 지원</h2>
                <p className='text-3xl mb-6'>(Application Modernization)</p>
                <p className="text-2xl mt-2 font-semibold">LG CNS AM Inspire Camp 1기 지원 페이지입니다.<br />지원서 제출은 1회로 제한하며, 제출 후 수정이 불가하니 신중을 기해 주세요.</p>
            </div>
            <div className='container mx-auto lg:px-80'>
                <form className="space-y-14">
                    {/* 지원과정 */}
                    <div className="">
                        <ApplyTitle title="지원과정" />
                        <div className="flex items-center">
                            <Input type="checkbox" title="LG CNS AM* Inspire Camp 1기" />
                        </div>
                    </div>

                    {/* 성명 */}
                    <div>
                        <ApplyTitle title="성명" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="이름을 작성해주세요."
                        />
                    </div>

                    {/* 성별 */}
                    <div>
                        <ApplyTitle title="성별" />
                        <div className="flex flex-col space-y-4 mt-1">
                            <Input type="checkbox" title="남자" />
                            <Input type="checkbox" title="여자" />
                        </div>
                    </div>

                    {/* 생년월일 */}
                    <div>
                        <ApplyTitle title="생년월일" />
                        <input
                            type="date"
                            className="applyContent"
                        />
                    </div>

                    {/* 연락처 */}
                    <div>
                        <ApplyTitle title="연락처" />
                        <input
                            type="tel"
                            className="applyContent"
                            placeholder="하이픈(-)을 포함하여 작성해주세요."
                        />
                    </div>

                    {/* 주소 */}
                    <div>
                        <ApplyTitle title="주소" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="서울특별시 중구 동호로"
                        />
                    </div>

                    {/* 이메일 */}
                    <div>
                        <ApplyTitle title="이메일" />
                        <input
                            type="email"
                            className="applyContent"
                            placeholder="이메일을 작성해주세요."
                        />
                    </div>

                    {/* 내일배움카드 발급 여부 */}
                    <div>
                        <ApplyTitle title="내일배움카드 발급 여부" />
                        <div className="flex flex-col space-y-4">
                            <Input type="checkbox" title="발급" />
                            <Input type="checkbox" title="미발급" />
                        </div>
                    </div>

                    {/* 지원경로 */}
                    <div>
                        <ApplyTitle title="지원경로" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="checkbox" title="지인추천" />
                            <Input type="checkbox" title="대학교 설명" />
                            <Input type="checkbox" title="SNS 광고 (인스타그램, 블로그 등)" />
                            <Input type="checkbox" title="웹사이트 (링크드인, 서치닷컴, 부트캠프 등)" />
                            <Input type="checkbox" title="기타" />
                        </div>
                    </div>

                    {/* 병역구분 */}
                    <div>
                        <ApplyTitle title="병역구분" />
                        <select className="applyContent">
                            <option>선택해주세요</option>
                            <option value="군필">군필</option>
                            <option value="미필">미필</option>
                            <option value="면제">면제</option>
                        </select>
                    </div>

                    {/* 장애 여부 */}
                    <div>
                        <ApplyTitle title="장애 여부" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="checkbox" title="대상" />
                            <Input type="checkbox" title="비대상" />
                        </div>
                    </div>

                    {/* 학교명 */}
                    <div>
                        <ApplyTitle title="학교명" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="OO대학교(원)"
                        />
                    </div>

                    {/* 전공 */}
                    <div>
                        <ApplyTitle title="전공" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="학과/전공"
                        />
                    </div>

                    {/* 학점 */}
                    <div>
                        <ApplyTitle title="학점" />
                        <input
                            type="number"
                            className="applyContent"
                            placeholder="ex) 4.0/4.5 (총점)"
                        />
                    </div>

                    {/* 재학상태 */}
                    <div>
                        <ApplyTitle title="재학상태" />
                        <select className="applyContent">
                            <option>선택해주세요</option>
                            <option value="재학">재학</option>
                            <option value="졸업">졸업</option>
                            <option value="휴학">휴학</option>
                        </select>
                    </div>

                    {/* 졸업 예정일 */}
                    <div>
                        <ApplyTitle title="졸업(예정)일" />
                        <input
                            type="date"
                            className="applyContent"
                            placeholder="ex) 25년 2월"
                        />
                    </div>

                    {/* 현재 학기 */}
                    <div>
                        <ApplyTitle title="현재 학기" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="ex) 4학년 2학기"
                        />
                    </div>

                    {/* 잔여학점 */}
                    <div>
                        <ApplyTitle title="잔여학점" />
                        <input
                            type="number"
                            className="applyContent"
                            placeholder="ex) 3학점"
                        />
                    </div>

                    {/* 학력사항 관련 증빙서류 첨부 */}
                    <div className="flex flex-col">
                        <ApplyTitle title="학력사항 관련 증빙서류 첨부" />
                        <input type="file" className="mt-1 hidden" id="applyFiles" />
                        <label htmlFor="applyFiles" className="w-28 h-12 flex items-center justify-center border-[#9F9F9F] border cursor-pointer font-bold text-2xl p-2 rounded-lg">
                            파일첨부
                        </label>
                    </div>

                    {/* 활용 가능한 프로그래밍 언어 */}
                    <div>
                        <ApplyTitle title="활용 가능한 프로그래밍 언어" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="checkbox" title="Python" />
                            <Input type="checkbox" title="Java" />
                            <Input type="checkbox" title="C/C++" />
                            <Input type="checkbox" title="JavaScript" />
                            <Input type="checkbox" title="TypeScript" />
                            <Input type="checkbox" title="기타" />
                            <Input type="checkbox" title="없음" />
                        </div>
                    </div>

                    {/* 이력사항 */}
                    <div>
                        <ApplyTitle title="이력사항" />
                        <textarea
                            className="applyContent"
                            placeholder="이력사항을 작성해주세요."
                            rows={4}
                        />
                    </div>

                    {/* 자격증 */}
                    <div>
                        <ApplyTitle title="자격증" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="ex) 정보처리기사/한국산업인력공단/2024.09.10"
                        />
                    </div>

                    {/* 자격증 파일 첨부 */}
                    <div className="">
                        <ApplyTitle title="자격증 파일 첨부" />
                        <input type="file" className="w-full mt-1" />
                    </div>

                    {/* 지원동기 및 수료 후 목표 */}
                    <div>
                        <ApplyTitle title="지원동기 및 수료 후 목표" />
                        <textarea
                            className="applyContent"
                            placeholder="지원동기 및 수료 후 목표를 작성해주세요."
                            rows={4}
                        />
                    </div>

                    {/* 본인의 특/장점 및 프로젝트 경험 */}
                    <div>
                        <ApplyTitle title="본인의 특/장점 및 프로젝트 경험" />
                        <textarea
                            className="applyContent"
                            placeholder="본인의 특/장점 및 프로젝트 경험을 작성해주세요."
                            rows={4}
                        />
                    </div>

                    {/* 타 교육 수강 이력 */}
                    <div>
                        <ApplyTitle title="타 교육 수강 이력" />
                        <textarea
                            className="applyContent"
                            placeholder="관련 교육 이수 경험이 있다면 교육 과정명과 기간을 작성해주세요."
                            rows={4}
                        />
                    </div>

                    {/* 개인정보 수집 및 이용 동의 */}
                    <div>
                        <ApplyTitle title="개인정보 수집 및 이용 동의" />
                        <div className="w-full bg-white rounded-lg shadow-lg">
                            <div className="flex justify-between items-center p-4 cursor-pointer" id="accordion-header" onClick={() => toggleAccordion()}>
                                <Input type="checkbox" title="동의합니다!" />
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div id="accordion-content" className="max-h-0 overflow-hidden transition-all duration-300">
                                <div className="w-full text-lg p-4 rounded mt-2">
                                    <p>㈜SK쉴더스와 ㈜위랩스페이스는 2024년 SK shieldus 루키즈 개발자 양성과정 1기 선발을 위하여 하기와 같이 귀하의 정보를 수집 및 이용하고자 합니다.</p>
                                    <br />
                                    <ul>
                                        <li>수집하는 개인정보의 항목 : 이름, 생년월일, 연락처, 이메일 주소 등</li>
                                        <li>개인정보 수집 및 이용 목적 : 본인 식별 및 교육생 선발, ㈜위랩스페이스 교육과정 홍보</li>
                                        <li>개인정보 보유 및 이용 기간 : 교육 종료 다음 해부터 1년간 보유</li>
                                        <p>개인정보 수집 및 이용에 대하여 거부할 권리가 있으며, 동의 거부 시 본 교육 참여가 제한될 수 있습니다.</p>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 제출 전 확인사항 */}
                    <div className="flex flex-col space-y-4">
                        <ApplyTitle title="제출 전 확인사항" subTitle='(지원서 제출 후 수정이 불가하므로 확인 후 제출해주시기 바랍니다. *정확한 이메일 주소를 작성해주셔야 프로세스 안내가 가능합니다.)' />
                        <Input type="checkbox" title="네, 확인했습니다!" />
                    </div>

                    {/* 제출 버튼 */}
                    <div className="w-full flex justify-center">
                        <button className="w-48 h-16 bg-[#002278] text-white font-bold text-3xl p-2 rounded-lg">
                            제출하기
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
