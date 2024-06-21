import { fetchPreguntasAndTeoria } from "../../lib/data";
import OpcionsAndAlerts from "../../components/Opcions";
import Cronometro from '../../components/Cronometro';
import Header from "@/app/components/Header";
import TheoreticalContent from "@/app/components/TheoreticalContent";
import Enunciado from "@/app/components/Enunciado";
import { StructureActivities, ContentActivities } from "@/app/components/Activities";
import Link from "next/link";

export default async function NivelUnoPage({ searchParams }) {
    const preguntas = await fetchPreguntasAndTeoria("https://docs.google.com/spreadsheets/d/e/2PACX-1vRv0ynO2c7TTuc-UWoCZqg0RqEht5Ep660w8JwTDL9WZLT9mCKpdCE_ihgKhNsEqD8mRRHMX8sO1vVr/pub?output=csv");

    const stateTimer = searchParams?.state;
    const numIndex = searchParams?.index;
    const totalPreguntas = preguntas.length;
    const pregunta = preguntas[numIndex || 0]; // Obtener solo una pregunta
    const formattedText = pregunta.Teoria.replace(/\n/g, '<br>'); // Reemplazar saltos de linea por <br>

    return (
        <>
            <Header titleSubject={"Lectura Crítica"} href={"/progress"} />
            <Cronometro stateTimer={stateTimer} levelSubject={'LecturaCríticaNivelUno'} />
            <StructureActivities>
                <ContentActivities>
                    <Enunciado Enunciado={pregunta.Enunciado} />
                    <OpcionsAndAlerts levelSubject={'LecturaCríticaNivelUno'}  totalPreguntas={totalPreguntas} justifyContent={pregunta.Explicación} numIndex={numIndex} correctAnswer={pregunta.Respuestas} opciones={[
                        { label: "A. " + pregunta.A, value: pregunta.A },
                        { label: "B. " + pregunta.B, value: pregunta.B },
                        { label: "C. " + pregunta.C, value: pregunta.C },
                        { label: "D. " + pregunta.D, value: pregunta.D }
                    ]} />
                    <TheoreticalContent {...pregunta} Teoria={formattedText} />
                </ContentActivities>
            </StructureActivities>
            {/* BOTONES DE NIVELES (HACERLO COMO COMPONENTE)  */}
            <div className="d-flex justify-content-around align-items-center mt-5 mb-3 me-2 ms-2">
                <Link href="/progress" className="btn btn-danger">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                    </svg>
                </Link>
                <div className="d-flex justify-content-center">
                    <div className="d-flex justify-content-center">
                        <Link id="levelLockButton1" href="./niveluno" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg>
                        </Link>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton2" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg>
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton3" type="button" className="btn btn-secondary me-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                        </svg></button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button id="levelLockButton4" href="../" type="button" className="btn btn-secondary me-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                            </svg>
                        </button>
                    </div>
                </div>
                <Link href={stateTimer === "false" ? "/lecturacritica/niveldos" : "#"} className="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                </Link>
            </div>
        </>
    )
}