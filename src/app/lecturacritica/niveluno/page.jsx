import { fetchPreguntasAndTeoria } from "../../lib/data";
import OpcionsAndAlerts from "../../components/Opcions";
import Cronometro from '../../components/Cronometro';
import Header from "@/app/components/Header";
import TheoreticalContent from "@/app/components/TheoreticalContent";
import Enunciado from "@/app/components/Enunciado";
import AlertFinishLevel from "@/app/components/AlertFinishLevel";
import BtnLevels from "@/app/components/BtnLevels";
import { StructureActivities, ContentActivities } from "@/app/components/Activities";

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
            <AlertFinishLevel stateAlert={stateTimer} level={'1'} href={'./niveldos'} />
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
            <BtnLevels levelSubject={'LecturaCrítica'} />
        </>
    )
}