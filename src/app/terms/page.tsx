"use client"

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function TermsPage() {
    const router = useRouter();
    const [recordAgreement, setRecordAgreement] = useState(false);
    const [personalInformationAgreement, setPersonalInformationAgreement] = useState(false);

    const handleAgreementSubmit = async () => {
        const tempToken = localStorage.getItem('tempToken');
        const tempUsername = localStorage.getItem('tempUsername');

        if (!tempToken || !tempUsername) {
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_API_URL}/aar/authn/regist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tempToken}`,
                },
                body: JSON.stringify({ recordAgreement, personalInformationAgreement }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('accessToken', data.accessToken);
                localStorage.setItem('username', data.username);
                router.push('/main');
            } else {
                throw new Error('동의 처리 실패');
            }
        } catch (error) {
            console.error('동의 처리 오류:', error);
            alert('동의 처리 중 문제가 발생했습니다.');
        }
    };


    return (
        <div className="p-10 bg-violet-100">
            <h1>이용약관 동의</h1>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={recordAgreement}
                        onChange={(e) => setRecordAgreement(e.target.checked)}
                    />
                    음성 기록에 동의합니다.
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={personalInformationAgreement}
                        onChange={(e) => setPersonalInformationAgreement(e.target.checked)}
                    />
                    개인정보 수집 및 이용에 동의합니다.
                </label>
            </div>
            <Button label="동의하고 계속하기" type="submit" onClick={handleAgreementSubmit} disabled={!recordAgreement || !personalInformationAgreement} />
        </div >
    );
}