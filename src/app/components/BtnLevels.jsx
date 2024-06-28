'use client'
import Link from "next/link";

export default function BtnLevels({ levelSubject }) {
    function getCronometroState(nameSubject, nivel) {
        const previousCronometro = JSON.parse(localStorage.getItem(`${nameSubject}${nivel}`)) || {};
        const cronometro = previousCronometro.cronometro || {};
        const initialStoppedLvl = cronometro.stopped || false;
        return initialStoppedLvl;
    }
    const initialStoppedLvl1 = getCronometroState(levelSubject, "NivelUno");
    const initialStoppedLvl2 = getCronometroState(levelSubject, "NivelDos");
    const initialStoppedLvl3 = getCronometroState(levelSubject, "NivelTres");
    const initialStoppedLvl4 = getCronometroState(levelSubject, "NivelCuatro");

    return (
        <div className="d-flex justify-content-around align-items-center mt-5 mb-3 me-2 ms-2">
            <Link href="/progress" className="btn btn-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                    <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                </svg>
            </Link>
            <div className="d-flex justify-content-center">
                {initialStoppedLvl1 ? <BtnLevelUnlocked href="./niveluno" /> : <BtnLevelLocked />}
                {initialStoppedLvl2 ? <BtnLevelUnlocked href="./niveldos" /> : <BtnLevelLocked />}
                {initialStoppedLvl3 ? <BtnLevelUnlocked href="./niveltres" /> : <BtnLevelLocked />}
                {initialStoppedLvl4 ? <BtnLevelUnlocked href="./nivelcuatro" /> : <BtnLevelLocked />}
            </div>
            {initialStoppedLvl1 ?
                <Link href="./niveldos" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Link> :
                <Link href="#" className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Link>
            }
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

export function BtnLevelLocked() {
    return (
        <div className="d-flex justify-content-center">
            <Link href="#" type="button" className="btn btn-secondary me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>
            </Link>
        </div>
    );
}