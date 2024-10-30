'use client';
import React, { useState } from "react";
import Input from "@/components/ui/apply/Input";
import ApplyTitle from "@/components/ui/apply/ApplyTitle";
import { useRouter } from "next/navigation";
import ApplySubmitModal from "@/components/ui/modal/ApplySubmitModal";
import axios from "axios";

// FormData 타입 정의
interface FormData {
    name: string;
    gender: string;
    birthday: string;
    phoneNumber: string;
    address: string;
    email: string;
    learningCardStatus: string;
    applyRoute: (string | { [key: string]: string })[];
    military: string;
    disability: string;
    educationStatus: string;
    schoolName: string;
    major: string;
    finalCredits: string;
    graduatedDate: string;
    latestStatus: string;
    remainingCredits: string;
    eduFiles: File | null;
    availableLanguages: string[];
    experience: string;
    certificate: string;
    certFiles: File | null;
    introductionAndPlanGoal: string;
    personalStrengths: string;
    others: string;
    agreeCheck: number;
    confirm: boolean;
}

export default function ApplyForm() {
    const router = useRouter();
    const applyRouteRef = React.useRef<HTMLDivElement>(null);
    const languagesRouteRef = React.useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [additionalText, setAdditionalText] = useState<{ sns: string; website: string; applyEtc: string, programEtc: string }>({
        sns: '',
        website: '',
        applyEtc: '',
        programEtc: '',
    }); // 추가 텍스트

    // 파일명 관리
    const [uploadFileName, setUploadFileName] = useState<{ eduFiles: string; certFiles: string }>({
        eduFiles: '',
        certFiles: '',
    });

    // 상태 관리
    const [formData, setFormData] = useState<FormData>({
        name: '',
        gender: '',
        birthday: '',
        phoneNumber: '',
        address: '',
        email: '',
        learningCardStatus: '',
        applyRoute: [],
        military: '',
        disability: '',
        educationStatus: '',
        schoolName: '',
        major: '',
        finalCredits: '',
        graduatedDate: '',
        latestStatus: '',
        remainingCredits: '',
        eduFiles: null as File | null,
        availableLanguages: [],
        experience: '',
        certificate: '',
        certFiles: null as File | null,
        introductionAndPlanGoal: '',
        personalStrengths: '',
        others: '',
        agreeCheck: 0,
        confirm: false,
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

    const handleAdditionalTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAdditionalText(prev => ({ ...prev, [name]: value }));
        setFormData(prev => {
            let newApplyRoute = [...(Array.isArray(prev.applyRoute) ? prev.applyRoute : [])];
            let newProgamLanguages = [...(Array.isArray(prev.availableLanguages) ? prev.availableLanguages : [])];

            if (name === 'sns') {
                const snsEntry = `SNS 광고:${value}`;
                newApplyRoute = newApplyRoute.filter(entry => typeof entry === 'string' && !entry.startsWith('SNS 광고:'));
                newApplyRoute.push(snsEntry);
            } else if (name === 'website') {
                const websiteEntry = `웹사이트:${value}`;
                newApplyRoute = newApplyRoute.filter(entry => typeof entry === 'string' && !entry.startsWith('웹사이트:'));
                newApplyRoute.push(websiteEntry);
            } else if (name === 'applyEtc') {
                const etcEntry = `지원기타:${value}`;
                newApplyRoute = newApplyRoute.filter(entry => typeof entry === 'string' && !entry.startsWith('지원기타:'));
                newApplyRoute.push(etcEntry);
            } else if (name === 'programEtc') {
                const programEntry = `프로그램기타:${value}`;
                newProgamLanguages = newProgamLanguages.filter(entry => typeof entry === 'string' && !entry.startsWith('프로그램기타:'));
                newProgamLanguages.push(programEntry);
            }
            return {
                ...prev,
                applyRoute: newApplyRoute,
                availableLanguages: newProgamLanguages,
            };
        });
    };

    // 입력 값 업데이트 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const files = (e.target as HTMLInputElement).files;

        if (files) {
            if (name === 'eduFiles') {
                setFormData(prev => ({ ...prev, eduFiles: files[0] }));
                setUploadFileName(prev => ({ ...prev, eduFiles: files[0].name }));
            } else {
                setFormData(prev => ({ ...prev, certFiles: files[0] }));
                setUploadFileName(prev => ({ ...prev, certFiles: files[0].name }));
            }
        }

        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement; // 타입 단언
            if (name === 'availableLanguages') {
                setFormData(prev => ({
                    ...prev,
                    availableLanguages: target.checked
                        ? [...(Array.isArray(prev.availableLanguages) ? prev.availableLanguages : []), value]
                        : (Array.isArray(prev.availableLanguages) ? prev.availableLanguages : []).filter(lang => lang !== value || lang !== '기타'),
                }));
                if (!target.checked) {
                    if (value === '기타') {
                        setAdditionalText(prev => ({ ...prev, programEtc: '' }));
                        setFormData(prev => ({ ...prev, availableLanguages: prev.availableLanguages.filter(lang => lang !== '기타' && !lang.startsWith('프로그램기타:')) }));
                    }
                    setFormData(prev => ({ ...prev, availableLanguages: prev.availableLanguages.filter(lang => lang !== value) }));
                }
            } else if (name === 'applyRoute') {
                setFormData(prev => ({
                    ...prev,
                    applyRoute: target.checked
                        ? [...(Array.isArray(prev.applyRoute) ? prev.applyRoute : []), value]
                        : (Array.isArray(prev.applyRoute) ? prev.applyRoute : []).filter(route => route !== value),
                }));
                if (!target.checked) {
                    if (value === 'SNS 광고') {
                        setAdditionalText(prev => ({ ...prev, sns: '' }));
                        setFormData(prev => ({
                            ...prev,
                            applyRoute: prev.applyRoute.filter(route => typeof route === 'string' && !route.startsWith('SNS 광고:'))
                        }));
                    }
                    if (value === '웹사이트') {
                        setAdditionalText(prev => ({ ...prev, website: '' }));
                        setFormData(prev => ({
                            ...prev,
                            applyRoute: prev.applyRoute.filter(route => typeof route === 'string' && !route.startsWith('웹사이트:'))
                        }));
                    }
                    if (value === '기타') {
                        setAdditionalText(prev => ({ ...prev, applyEtc: '' }));
                        setFormData(prev => ({
                            ...prev,
                            applyRoute: prev.applyRoute.filter(route => typeof route === 'string' && !route.startsWith('지원기타:'))
                        }));
                    }
                    setAdditionalText(prev => ({ ...prev, [value]: '' }));
                }
            } else if (name === 'agreeCheck') {
                setFormData(prev => ({ ...prev, agreeCheck: target.checked ? 1 : 0 }));
            } else {
                setFormData(prev => ({ ...prev, [name]: target.checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        // 필수 항목 검사
        if (!formData.name) {
            alert('이름을 입력해 주세요.');
            return;
        }
        if (!formData.gender) {
            alert('성별을 선택해 주세요.');
            return;
        }
        if (!formData.birthday) {
            alert('생년월일을 입력해 주세요.');
            return;
        }
        if (!formData.phoneNumber) {
            alert('연락처를 입력해 주세요.');
            return;
        }
        if (!formData.email) {
            alert('이메일을 입력해 주세요.');
            return;
        }
        if (formData.applyRoute.length === 0) {
            alert('지원경로를 최소 1개 이상 선택해야 합니다.');
            const offsetTop = applyRouteRef.current?.offsetTop || 0;
            window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' }); // 100px 위로 스크롤
            return;
        }
        if (formData.availableLanguages.length === 0) {
            alert('사용 가능한 언어를 최소 1개 이상 선택해야 합니다.');
            const offsetTop = languagesRouteRef.current?.offsetTop || 0;
            window.scrollTo({ top: offsetTop - 100, behavior: 'smooth' }); // 100px 위로 스크롤
            return;
        }
        if (formData.agreeCheck === 0) {
            alert('약관에 동의해 주세요.');
            return;
        }
        const newFormData = new FormData();
        newFormData.append('courseName', 'LG CNS AM Inspire Camp 1기' );
        newFormData.append('classId', '1');
        Object.entries(formData).forEach(([key, value]:[key:string, value:any]) => {
            if (Array.isArray(value)) {
                value.forEach((v: string) => {
                    newFormData.append(key, v);
                });
            } else {
                newFormData.append(key, value);
            }
        });

        console.log('newFormData', newFormData);

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/landing/account/saveClassApplyInfo`, newFormData, {
                headers: {
                    'Content-Type': `multipart/form-data`,
                }
            });

            console.log('res', res);

            if (res.status === 200) {
                e.preventDefault();
                setIsModalOpen(true);
            }
        } catch (error) {
            console.error('Error submitting form', error);
        }
    }

    return (
        <>
            <ApplySubmitModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            <section className="min-h-screen mb-28">
                {/* 상단 배너 */}
                <div className="text-center h-max mb-16 bg-[#C2D3FF] py-16 px-2">
                    <h2 className="text-4xl lg:text-5xl font-bold">LG CNS AM* Inspire Camp 1기 지원</h2>
                    <p className='text-3xl mb-6'>(Application Modernization)</p>
                    <p className="text-2xl font-semibold">LG CNS AM Inspire Camp <br className="lg:hidden" /> 1기 지원 페이지입니다.<br />지원서 제출은 1회로 제한하며, 제출 후 수정이 불가하니 신중을 기해 주세요.</p>
                    <p className="text-2xl mt-2 font-semibold"><span className="text-red-500">*</span>표시는 필수 입력사항입니다.</p>
                </div>
                <div className='container mx-auto px-2 lg:px-52 xl:px-64'>
                    <div className="mb-10">
                        <button
                            type="button"
                            className="flex items-center text-3xl font-bold"
                            onClick={() => router.push('/')}
                        >
                            <svg className="w-[52px] h-[52px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="52" height="52" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4" />
                            </svg>
                            뒤로가기
                        </button>
                    </div>
                    <form className="space-y-14">
                        {/* 지원과정 */}
                        <div>
                            <ApplyTitle title="지원과정" />
                            <div className="flex items-center">
                                <Input type="checkbox" title="LG CNS AM Inspire Camp 1기" value="LG CNS AM Inspire Camp 1기" checked disabled />
                            </div>
                        </div>

                        {/* 성명 */}
                        <div>
                            <ApplyTitle title="성명" required />
                            <input
                                type="text"
                                className='applyContent'
                                placeholder="이름을 작성해주세요."
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 성별 */}
                        <div>
                            <ApplyTitle title="성별" required />
                            <div className="flex flex-col space-y-4 mt-1">
                                <Input type="radio" id="male" name="gender" title="남자" value="남자" checked={formData.gender === '남자'} onChange={handleChange} required />
                                <Input type="radio" id="female" name="gender" title="여자" value="여자" checked={formData.gender === '여자'} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* 생년월일 */}
                        <div>
                            <ApplyTitle title="생년월일" required />
                            <input
                                type="date"
                                className="applyContent"
                                name="birthday"
                                value={formData.birthday}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 연락처 */}
                        <div>
                            <ApplyTitle title="연락처" required />
                            <input
                                type="tel"
                                className="applyContent"
                                placeholder="하이픈(-)을 포함하여 작성해주세요."
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 주소 */}
                        <div>
                            <ApplyTitle title="주소" subTitle="(상세주소는 작성하지 않아도 됩니다.)" required />
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
                            <ApplyTitle title="이메일" required />
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
                            <ApplyTitle title="내일배움카드 발급 여부" required />
                            <div className="flex flex-col space-y-4">
                                <Input type="radio" id="issued" name="learningCardStatus" title="발급" value="발급" checked={formData.learningCardStatus === '발급'} onChange={handleChange} required />
                                <Input type="radio" id="noteIssued" name="learningCardStatus" title="미발급" value="미발급" checked={formData.learningCardStatus === '미발급'} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* 지원경로 */}
                        <div>
                            <ApplyTitle title="지원경로" subTitle="(최소 1개 선택, 복수 선택 가능합니다.)" required />
                            <div className="flex flex-col space-y-2 mt-1" ref={applyRouteRef}>
                                <Input type="checkbox" id="friendApply" name="applyRoute" title="지인추천" onChange={handleChange} value="지인추천" />
                                <Input type="checkbox" id="colleage" name="applyRoute" title="대학교 설명" onChange={handleChange} value="대학교 설명" />
                                <Input type="checkbox" id="sns" name="applyRoute" title="SNS 광고 (인스타그램, 블로그 등)" onChange={handleChange} value="SNS 광고" />
                                {formData.applyRoute.includes('SNS 광고') && (
                                    <input
                                        type="text"
                                        placeholder="SNS 경로를 입력하세요."
                                        name="sns"
                                        value={additionalText.sns}
                                        onChange={handleAdditionalTextChange}
                                        className="mt-2 border-b border-gray-300 p-2 text-xl font-semibold rounded focus:outline-none focus:border-t-0"
                                    />
                                )}
                                <Input type="checkbox" id="website" name="applyRoute" title={`웹사이트 (링크드인, 서치닷컴, 부트캠프 등)`} onChange={handleChange} value="웹사이트" />
                                {formData.applyRoute.includes('웹사이트') && (
                                    <input
                                        type="text"
                                        placeholder="웹사이트 경로를 입력하세요."
                                        name="website"
                                        value={additionalText.website}
                                        onChange={handleAdditionalTextChange}
                                        className="mt-2 border-b border-gray-300 p-2 text-xl font-semibold rounded focus:outline-none focus:border-t-0"
                                    />
                                )}
                                <Input type="checkbox" id="applyEtc" name="applyRoute" title="기타" onChange={handleChange} value="기타" />
                                {formData.applyRoute.includes('기타') && (
                                    <input
                                        type="text"
                                        placeholder="기타 경로를 입력하세요."
                                        name="applyEtc"
                                        value={additionalText.applyEtc}
                                        onChange={handleAdditionalTextChange}
                                        className="mt-2 border-b border-gray-300 p-2 text-xl font-semibold rounded focus:outline-none focus:border-t-0"
                                    />
                                )}
                            </div>
                        </div>

                        {/* 병역구분 */}
                        <div>
                            <ApplyTitle title="병역구분" required />
                            <select className="applyContent" name="military" onChange={handleChange} required>
                                <option value="">선택해주세요</option>
                                <option value="군필">군필</option>
                                <option value="미필">미필</option>
                                <option value="면제">면제</option>
                            </select>
                        </div>

                        {/* 장애 여부 */}
                        <div>
                            <ApplyTitle title="장애 여부" required />
                            <div className="flex flex-col space-y-2 mt-1">
                                <Input type="radio" id="disabled" name="disability" title="대상" value="장애대상" checked={formData.disability === '장애대상'} onChange={handleChange} required />
                                <Input type="radio" id="abled" name="disability" title="비대상" value="장애비대상" checked={formData.disability === '장애비대상'} onChange={handleChange} required />
                            </div>
                        </div>

                        {/* 학교명 */}
                        <div>
                            <ApplyTitle title="학교명" required />
                            <input
                                type="text"
                                className="applyContent"
                                placeholder="OO대학교(원)"
                                name="schoolName"
                                value={formData.schoolName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 전공 */}
                        <div>
                            <ApplyTitle title="전공" subTitle="(복수전공이 있을 경우, 주전공과 복수전공 모두 작성해주세요.)" required />
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
                            <ApplyTitle title="학점" required />
                            <input
                                type="text"
                                className="applyContent"
                                placeholder="ex) 4.5"
                                name="finalCredits"
                                value={formData.finalCredits}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 재학상태 */}
                        <div>
                            <ApplyTitle title="재학상태" required />
                            <select className="applyContent" name="educationStatus" onChange={handleChange} required>
                                <option value="">선택해주세요</option>
                                <option value="재학 중">재학 중</option>
                                <option value="휴학 중">휴학 중</option>
                                <option value="졸업">졸업</option>
                            </select>
                        </div>

                        {/* 졸업예정일 */}
                        <div>
                            <ApplyTitle title="졸업(예정)일" required />
                            <input
                                type="date"
                                className="applyContent"
                                name="graduatedDate"
                                value={formData.graduatedDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 현재 학기 */}
                        <div>
                            <ApplyTitle title="현재 학기" required />
                            <input
                                type="text"
                                className="applyContent"
                                placeholder="ex) 4학년 2학기"
                                name="latestStatus"
                                value={formData.latestStatus}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* 잔여 학점 */}
                        <div>
                            <ApplyTitle title="잔여 학점" subTitle="(졸업요건을 충족하기 위한 잔여 학점을 기입해주세요.)" required />
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

                        {/* 학력사항관련 증빙 서류 */}
                        <div>
                            <ApplyTitle title="학력사항 관련 증빙 서류" subTitle="zip 파일로 압축하여 업로드해주세요." required />
                            <div className="mt-4 flex items-center">
                                <label htmlFor="eduFiles" className="border border-[#9F9F9F] text-2xl font-semibold cursor-pointer px-4 py-3 rounded-[10px] text-nowrap">파일 첨부</label>
                                <input
                                    type="file"
                                    id="eduFiles"
                                    className="hidden"
                                    name="eduFiles"
                                    accept=".zip"
                                    onChange={handleChange}
                                    required
                                />
                                <div className="ml-4 text-[#969696] font-semibold text-xl lg:text-2xl">
                                    {uploadFileName.eduFiles}
                                </div>
                            </div>

                        </div>

                        {/* 활용 가능한 프로그래밍 언어 */}
                        <div>
                            <ApplyTitle title="활용 가능한 프로그래밍 언어" subTitle="(최소 1개 선택, 복수 선택 가능합니다.)" required />
                            <div className="flex flex-col space-y-2 mt-1" ref={languagesRouteRef}>
                                <Input type="checkbox" id="python" name="availableLanguages" title="Python" checked={formData.availableLanguages.includes('Python')} value="Python" onChange={handleChange} />
                                <Input type="checkbox" id="java" name="availableLanguages" title="Java" checked={formData.availableLanguages.includes('Java')} value="Java" onChange={handleChange} />
                                <Input type="checkbox" id="javascript" name="availableLanguages" title="JavaScript" checked={formData.availableLanguages.includes('JavaScript')} value="JavaScript" onChange={handleChange} />
                                <Input type="checkbox" id="typescript" name="availableLanguages" title="TypeScript" checked={formData.availableLanguages.includes('TypeScript')} value="TypeScript" onChange={handleChange} />
                                <Input type="checkbox" id="langetc" name="availableLanguages" title="기타" checked={formData.availableLanguages.includes('기타')} value="기타" onChange={handleChange} />
                                {formData.availableLanguages.includes('기타') && (
                                    <input
                                        type="text"
                                        placeholder="기타 프로그래밍 언어를 입력하세요."
                                        name="programEtc"
                                        value={additionalText.programEtc}
                                        onChange={handleAdditionalTextChange}
                                        className="mt-2 border-b border-gray-300 p-2 text-xl font-semibold rounded focus:outline-none focus:border-t-0"
                                    />
                                )}
                                <Input type="checkbox" name="availableLanguages" title="없음" checked={formData.availableLanguages.includes('없음')} value="없음" onChange={handleChange} />
                            </div>
                        </div>

                        {/* 경력 */}
                        <div>
                            <ApplyTitle title="경력" />
                            <textarea
                                className="applyContent h-44"
                                placeholder="경력 내용을 입력해주세요."
                                maxLength={200}
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                            <div className="text-right text-sm text-gray-500">
                                {formData.experience.length} / 200
                            </div>
                        </div>

                        {/* 자격증 */}
                        <div>
                            <ApplyTitle title="자격증" />
                            <input
                                className="applyContent"
                                placeholder="자격증 내용을 입력해주세요 (ex) 정보처리기사/한국산업인력공단/2024.03.20.)"
                                type="text"
                                name="certificate"
                                value={formData.certificate}
                                onChange={handleChange}
                            />
                        </div>

                        {/* 자격증 증빙성류 */}
                        <div>
                            <ApplyTitle title="자격증 및 경력 증빙 서류 첨부" subTitle="zip 파일로 압축하여 업로드해주세요." />
                            <div className="mt-4 flex items-center">
                                <label htmlFor="certFiles" className="border border-[#9F9F9F] text-2xl font-semibold cursor-pointer px-4 py-3 rounded-[10px] text-nowrap">파일 첨부</label>
                                <input
                                    type="file"
                                    id="certFiles"
                                    className="applyContent hidden"
                                    name="certFiles"
                                    accept=".zip"
                                    onChange={handleChange}
                                    required
                                />
                                <div className="ml-4 text-[#969696] font-semibold text-xl lg:text-2xl text-ellipsis">
                                    {uploadFileName.certFiles}
                                </div>
                            </div>
                        </div>

                        {/* 지원 동기 */}
                        <div>
                            <ApplyTitle title="지원 동기" required />
                            <textarea
                                className="applyContent h-44"
                                placeholder="지원 동기를 입력해주세요."
                                maxLength={200}
                                name="introductionAndPlanGoal"
                                value={formData.introductionAndPlanGoal}
                                onChange={handleChange}
                                required
                            />
                            <div className="text-right text-sm text-gray-500">
                                {formData.introductionAndPlanGoal.length} / 200
                            </div>
                        </div>

                        {/* 장점 */}
                        <div>
                            <ApplyTitle title="본인의 특/장점" required />
                            <textarea
                                className="applyContent h-44"
                                placeholder="본인의 특징 및 장점을 입력해주세요."
                                name="personalStrengths"
                                maxLength={200}
                                value={formData.personalStrengths}
                                onChange={handleChange}
                                required
                            />
                            <div className="text-right text-sm text-gray-500">
                                {formData.personalStrengths.length} / 200
                            </div>
                        </div>

                        {/* 교육 이력 */}
                        <div>
                            <ApplyTitle title="타 교육 수강 이력" />
                            <textarea
                                className="applyContent h-44"
                                maxLength={200}
                                placeholder="관련 교육 이수 경험이 있다면 해당 교육명과 기간을 작성해주시기 바랍니다. "
                                name="others"
                                value={formData.others}
                                onChange={handleChange}
                            />
                            <div className="text-right text-sm text-gray-500">
                                {formData.others.length}/200
                            </div>
                        </div>

                        {/* 개인정보 수집 및 이용에 대한 동의 */}
                        <div>
                            <ApplyTitle title="개인정보 수집 및 이용 동의" required />
                            <div className="w-full bg-white rounded-lg shadow-lg">
                                <div className="flex justify-between items-center p-4 cursor-pointer" id="accordion-header" onClick={() => toggleAccordion()}>
                                    <Input type="checkbox" id="agree" title="동의합니다!" name="agreeCheck" checked={formData.agreeCheck === 1} value="1" onChange={handleChange} required />
                                    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                                <div id="accordion-content" className="max-h-0 overflow-hidden transition-all duration-300">
                                    <div className="w-full text-lg p-4 rounded mt-2">
                                        <p>LG CNS와 ㈜위랩스페이스는 2024년 LG CNS AM Inspire Camp 1기 선발을 위하여 <br />하기와 같이 귀하의 정보를 수집 및 이용하고자 합니다.</p>
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
                                required
                            />
                            <Input type="checkbox" id="confirm" title="네, 확인했습니다!" name="confirm" checked={formData.confirm} onChange={handleChange} required />
                        </div>
                        {/* 제출 버튼 */}
                        <div className="w-full flex justify-center mt-20">
                            <button onClick={handleSubmit} type="submit" title={!formData.agreeCheck || !formData.confirm ? "필수항목에 동의해주세요." : ""} className="w-48 h-16 bg-[#002278] text-white font-bold text-3xl p-2 rounded-lg disabled:bg-gray-500" disabled={!formData.agreeCheck || !formData.confirm}>
                                제출하기
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
