'use client'
import Link from "next/link";

export default function BtnLevelProgress({ levelSubject, BtnHref }) {
    function getCronometroState(nameSubject, nivel) {
        if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
            const previousCronometro = JSON.parse(localStorage.getItem(`${nameSubject}${nivel}`)) || {};
            const cronometro = previousCronometro.cronometro || {};
            const initialStoppedLvl = cronometro.stopped || false;
            return initialStoppedLvl;
        } else {
            // Si localStorage no está disponible
            return false;
        }
    }
    const initialStoppedLvl1 = getCronometroState(levelSubject, "NivelUno");
    const initialStoppedLvl2 = getCronometroState(levelSubject, "NivelDos");
    const initialStoppedLvl3 = getCronometroState(levelSubject, "NivelTres");
    const initialStoppedLvl4 = getCronometroState(levelSubject, "NivelCuatro");

    return (
        <div className="d-flex justify-content-around align-items-center mt-5 mb-3 me-2 ms-2">
            <div className="d-flex justify-content-center">
                {initialStoppedLvl1 ? <BtnLevelUnlocked href={`${BtnHref}/niveluno`} /> :
                    <div className="d-flex justify-content-center">
                        <Link href={`${BtnHref}/niveluno`} type="button" className="btn btn-secondary me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                            </svg>
                        </Link>
                    </div>
                }
                {initialStoppedLvl2 ? <BtnLevelUnlocked href={`${BtnHref}/niveldos`} /> : <BtnLevelLocked state={initialStoppedLvl1} href={`${BtnHref}/niveldos`} />}
                {initialStoppedLvl3 ? <BtnLevelUnlocked href={`${BtnHref}/niveltres`} /> : <BtnLevelLocked state={initialStoppedLvl2} href={`${BtnHref}/niveltres`}/>}
                {initialStoppedLvl4 ? <BtnLevelUnlocked href={`${BtnHref}/nivelcuatro`} /> : <BtnLevelLocked state={initialStoppedLvl3} href={`${BtnHref}/nivelcuatro`}/>}
            </div>
        </div>
    );
}
export function BtnLevelUnlocked({ href }) {
    return (
        <div className="d-flex justify-content-center">
            <Link href={href} type="button" className="btn btn-success me-2 d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
            </Link>
        </div>
    );
}

export function BtnLevelLocked({state, href}) {
    return (
        <div className="d-flex justify-content-center">
            <Link href={state ? href : '#'} type="button" className="btn btn-secondary me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
            </Link>
        </div>
    );
}