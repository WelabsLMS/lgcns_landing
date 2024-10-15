'use client';
import React, { useState } from "react";
import Input from "@/components/ui/apply/Input";
import ApplyTitle from "@/components/ui/apply/ApplyTitle";

// FormData 타입 정의
interface FormData {
    name: string;
    gender: string;
    birthDate: string;
    phone: string;
    address: string;
    email: string;
    card: string;
    disabilities: string;
    school: string;
    major: string;
    gpa: string;
    enrollmentStatus: string;
    graduationDate: string;
    currentSemester: string;
    remainingCredits: string;
    programmingLanguages: string[];
    experience: string;
    certification: string;
    motivation: string;
    strengths: string;
    trainingHistory: string;
    agreeToPrivacyPolicy: boolean;
    confirmBeforeSubmit: boolean;
}

export default function ApplyForm() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // 상태 관리
    const [formData, setFormData] = useState<FormData>({
        name: '',
        gender: '',
        birthDate: '',
        phone: '',
        address: '',
        email: '',
        card: '',
        disabilities: '',
        school: '',
        major: '',
        gpa: '',
        enrollmentStatus: '',
        graduationDate: '',
        currentSemester: '',
        remainingCredits: '',
        programmingLanguages: [],
        experience: '',
        certification: '',
        motivation: '',
        strengths: '',
        trainingHistory: '',
        agreeToPrivacyPolicy: false,
        confirmBeforeSubmit: false,
    });

    function toggleAccordion() {
        const content = document.getElementById("accordion-content");
        const arrow = document.getElementById("arrow");

        if (content && arrow) {
            setIsOpen(!isOpen);
            content.style.maxHeight = isOpen ? content.scrollHeight + "px" : "0";
            arrow.style.transform = isOpen ? "rotate(180deg)" : "rotate(0)";
        }
    }

    // 입력 값 업데이트 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement; // 타입 단언
            if (name === 'programmingLanguages') {
                setFormData(prev => ({
                    ...prev,
                    programmingLanguages: target.checked
                        ? [...prev.programmingLanguages, value]
                        : prev.programmingLanguages.filter(lang => lang !== value),
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: target.checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="min-h-screen mb-28">
            {/* 상단 배너 */}
            <div className="text-center h-max mb-16 bg-[#C2D3FF] py-16 px-2">
                <h2 className="text-4xl lg:text-5xl font-bold">LG CNS AM* Inspire Camp 1기 지원</h2>
                <p className='text-3xl mb-6'>(Application Modernization)</p>
                <p className="text-2xl mt-2 font-semibold">LG CNS AM Inspire Camp <br className="lg:hidden"/> 1기 지원 페이지입니다.<br />지원서 제출은 1회로 제한하며, 제출 후 수정이 불가하니 신중을 기해 주세요.</p>
            </div>
            <div className='container mx-auto px-2 lg:px-80'>
                <form className="space-y-14" onSubmit={handleSubmit}>
                    {/* 지원과정 */}
                    <div>
                        <ApplyTitle title="지원과정" />
                        <div className="flex items-center">
                            <Input type="checkbox" title="LG CNS AM* Inspire Camp 1기" checked disabled />
                        </div>
                    </div>

                    {/* 성명 */}
                    <div>
                        <ApplyTitle title="성명" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="이름을 작성해주세요."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 성별 */}
                    <div>
                        <ApplyTitle title="성별" />
                        <div className="flex flex-col space-y-4 mt-1">
                            <Input type="radio" name="gender" title="남자" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
                            <Input type="radio" name="gender" title="여자" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* 생년월일 */}
                    <div>
                        <ApplyTitle title="생년월일" />
                        <input
                            type="date"
                            className="applyContent"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 연락처 */}
                    <div>
                        <ApplyTitle title="연락처" />
                        <input
                            type="tel"
                            className="applyContent"
                            placeholder="하이픈(-)을 포함하여 작성해주세요."
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 주소 */}
                    <div>
                        <ApplyTitle title="주소" subTitle="(상세주소는 작성하지 않아도 됩니다.)" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="서울특별시 중구 동호로"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 이메일 */}
                    <div>
                        <ApplyTitle title="이메일" />
                        <input
                            type="email"
                            className="applyContent"
                            placeholder="이메일을 작성해주세요."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 내일배움카드 발급 여부 */}
                    <div>
                        <ApplyTitle title="내일배움카드 발급 여부" />
                        <div className="flex flex-col space-y-4">
                            <Input type="radio" name="card" title="발급" value="issued" checked={formData.card === 'issued'} onChange={handleChange} required />
                            <Input type="radio" name="card" title="미발급" value="notissued" checked={formData.card === 'notissued'} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* 지원경로 */}
                    <div>
                        <ApplyTitle title="지원경로" subTitle="(최소 1개 선택, 복수 선택 가능합니다.)" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="checkbox" name="referral" title="지인추천" onChange={handleChange} value="지인추천" />
                            <Input type="checkbox" name="university" title="대학교 설명" onChange={handleChange} value="대학교 설명" />
                            <Input type="checkbox" name="sns" title="SNS 광고 (인스타그램, 블로그 등)" onChange={handleChange} value="SNS 광고" />
                            <Input type="checkbox" name="website" title={`웹사이트 \n (링크드인, 서치닷컴, 부트캠프 등)`} onChange={handleChange} value="웹사이트" />
                            <Input type="checkbox" name="other" title="기타" onChange={handleChange} value="기타" />
                        </div>
                    </div>

                    {/* 병역구분 */}
                    <div>
                        <ApplyTitle title="병역구분" />
                        <select className="applyContent" name="militaryStatus" onChange={handleChange} required>
                            <option value="">선택해주세요</option>
                            <option value="군필">군필</option>
                            <option value="미필">미필</option>
                            <option value="면제">면제</option>
                        </select>
                    </div>

                    {/* 장애 여부 */}
                    <div>
                        <ApplyTitle title="장애 여부" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="radio" name="disabilities" title="대상" value="disabled" checked={formData.disabilities === 'disabled'} onChange={handleChange} required />
                            <Input type="radio" name="disabilities" title="비대상" value="abled" checked={formData.disabilities === 'abled'} onChange={handleChange} required />
                        </div>
                    </div>

                    {/* 학교명 */}
                    <div>
                        <ApplyTitle title="학교명" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="OO대학교(원)"
                            name="school"
                            value={formData.school}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 전공 */}
                    <div>
                        <ApplyTitle title="전공" subTitle="(복수전공이 있을 경우, 주전공과 복수전공 모두 작성해주세요.)" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="전공을 입력해주세요."
                            name="major"
                            value={formData.major}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 학점 */}
                    <div>
                        <ApplyTitle title="학점" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="ex) 4.5"
                            name="gpa"
                            value={formData.gpa}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 재학상태 */}
                    <div>
                        <ApplyTitle title="재학상태" />
                        <select className="applyContent" name="enrollmentStatus" onChange={handleChange} required>
                            <option value="">선택해주세요</option>
                            <option value="재학 중">재학 중</option>
                            <option value="휴학 중">휴학 중</option>
                            <option value="졸업">졸업</option>
                        </select>
                    </div>

                    {/* 졸업예정일 */}
                    <div>
                        <ApplyTitle title="졸업(예정)일" />
                        <input
                            type="date"
                            className="applyContent"
                            name="graduationDate"
                            value={formData.graduationDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 현재 학기 */}
                    <div>
                        <ApplyTitle title="현재 학기" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="ex) 1학기, 2학기"
                            name="currentSemester"
                            value={formData.currentSemester}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 잔여 학점 */}
                    <div>
                        <ApplyTitle title="잔여 학점" subTitle="(졸업요건을 충족하기 위한 잔여 학점을 기입해주세요.)" />
                        <input
                            type="text"
                            className="applyContent"
                            placeholder="ex) 3학점"
                            name="remainingCredits"
                            value={formData.remainingCredits}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 활용 가능한 프로그래밍 언어 */}
                    <div>
                        <ApplyTitle title="활용 가능한 프로그래밍 언어" />
                        <div className="flex flex-col space-y-2 mt-1">
                            <Input type="checkbox" name="programmingLanguages" title="Python" checked={formData.programmingLanguages.includes('Python')} value="Python" onChange={handleChange} />
                            <Input type="checkbox" name="programmingLanguages" title="Java" checked={formData.programmingLanguages.includes('Java')} value="Java" onChange={handleChange} />
                            <Input type="checkbox" name="programmingLanguages" title="JavaScript" checked={formData.programmingLanguages.includes('JavaScript')} value="JavaScript" onChange={handleChange} />
                            <Input type="checkbox" name="programmingLanguages" title="TypeScript" checked={formData.programmingLanguages.includes('TypeScript')} value="TypeScript" onChange={handleChange} />
                            <Input type="checkbox" name="programmingLanguages" title="기타" checked={formData.programmingLanguages.includes('etc')} value="etc" onChange={handleChange} />
                            <Input type="checkbox" name="programmingLanguages" title="없음" checked={formData.programmingLanguages.includes('no')} value="no" onChange={handleChange} />
                        </div>
                    </div>

                    {/* 경력 */}
                    <div>
                        <ApplyTitle title="경력" />
                        <textarea
                            className="applyContent"
                            placeholder="경력 내용을 입력해주세요."
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 자격증 */}
                    <div>
                        <ApplyTitle title="자격증" />
                        <textarea
                            className="applyContent"
                            placeholder="자격증 내용을 입력해주세요."
                            name="certification"
                            value={formData.certification}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 지원 동기 */}
                    <div>
                        <ApplyTitle title="지원 동기" />
                        <textarea
                            className="applyContent"
                            placeholder="지원 동기를 입력해주세요."
                            name="motivation"
                            value={formData.motivation}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 장점 */}
                    <div>
                        <ApplyTitle title="본인의 장점" />
                        <textarea
                            className="applyContent"
                            placeholder="본인의 장점을 입력해주세요."
                            name="strengths"
                            value={formData.strengths}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 교육 이력 */}
                    <div>
                        <ApplyTitle title="교육 이력" />
                        <textarea
                            className="applyContent"
                            placeholder="교육 이력을 입력해주세요."
                            name="trainingHistory"
                            value={formData.trainingHistory}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* 개인정보 수집 및 이용에 대한 동의 */}
                    <div>
                        <ApplyTitle title="개인정보 수집 및 이용 동의" />
                        <div className="w-full bg-white rounded-lg shadow-lg">
                            <div className="flex justify-between items-center p-4 cursor-pointer" id="accordion-header" onClick={() => toggleAccordion()}>
                                <Input type="checkbox" title="동의합니다!" name="agreeToPrivacyPolicy" checked={formData.agreeToPrivacyPolicy} onChange={handleChange} required />
                                <svg id="arrow" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            <div id="accordion-content" className="max-h-0 overflow-hidden transition-all duration-300">
                                <div className="w-full text-lg p-4 rounded mt-2">
                                    <p>LG CNS와 ㈜위랩스페이스는 2024년 LG CNS AM Inspire Camp 1기 선발을 위하여 하기와 같이 귀하의 정보를 수집 및 이용하고자 합니다.</p>
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
                        <ApplyTitle
                            title="제출 전 확인사항"
                            subTitle={`지원서 제출 후 수정이 불가하므로 확인 후 제출해주시기 바랍니다.\n*정확한 이메일 주소를 작성해주셔야 프로세스 안내가 가능합니다.`}
                        />
                        <Input type="checkbox" title="네, 확인했습니다!" name="confirmBeforeSubmit" checked={formData.confirmBeforeSubmit} onChange={handleChange} required />
                    </div>

                    {/* 제출 버튼 */}
                    <div className="w-full flex justify-center">
                        <button type="submit" className="w-48 h-16 bg-[#002278] text-white font-bold text-3xl p-2 rounded-lg disabled:bg-gray-500 disabled:cursor-pointer" disabled={!formData.agreeToPrivacyPolicy || !formData.confirmBeforeSubmit}>
                            제출하기
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
