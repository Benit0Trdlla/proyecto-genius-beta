import Header from "../components/Header"
import { RowList, Row } from '../components/ExplanationSubject';

export default function LecturaCriticaPage() {
    return (
        <>
            <Header MyImage={'/Images/Logo/Nav.png'} href={"/progress"} />
            <RowList title="Lectura Critica">
                <Row subTitle="CONTENIDO A EVALUAR DE LECTURA CRÍTICA" subTitleTwo="SISTEMA DE EVALUACIÓN DE LECTURA CRÍTICA" href={"/lecturacritica/niveluno"}>
                    <div>
                        La lectura crítica se evalúa como parte del módulo de Lenguaje, específicamente en la subprueba de Lectura Crítica.
                        Esta sección mide competencias relacionadas con la habilidad para leer de manera crítica,
                        comprender estructuras formales de textos y analizar información implícita y explícita.
                        La prueba busca evaluar no solo la comprensión literal, sino también la capacidad de análisis,
                        interpretación y evaluación de la información presentada en una variedad de formatos.
                        Es fundamental para el desarrollo de habilidades críticas en la lectura y la interpretación de textos en contextos académicos y cotidianos.
                        Estos son los niveles de desempeño de lectura crítica:
                        <br />
                        <br />
                        <strong>- Nivel 1:</strong> En este nivel, el evaluado identifica elementos literales en textos continuos y discontinuos sin establecer relaciones de significado. Reconoce información explícita y la relaciona con el contexto. Además, puede identificar la estructura de textos y fenómenos semánticos básicos como sinónimos y antónimos.
                        <br />
                        <strong>- Nivel 2:</strong> Además de lo descrito en el nivel 2, el evaluado interpreta información de textos al inferir contenidos implícitos y reconocer estructuras, estrategias discursivas y juicios valorativos. Relaciona marcadores textuales y analiza y sintetiza la información contenida en un texto.
                        <br />
                        <strong>- Nivel 3:</strong> Además de lo descrito en los niveles 1 y 2, el evaluado comprende la estructura formal de un texto y la función de sus partes. Entiende el significado de expresiones relacionales en un texto, como conectores y marcadores.
                        <br />
                        <strong>- Nivel 4:</strong> En este nivel, además de lo descrito en los niveles anteriores, el evaluado reflexiona a partir de un texto sobre la visión de mundo del autor, considerando costumbres, creencias, juicios, carácter ideológico-político y posturas éticas. También valora y contrasta elementos paratextuales presentes en el texto.
                    </div>
                    <div>
                        El sistema de evaluación de la prueba de lectura crítica en las pruebas Saber 11 se enfoca en evaluar la competencia lectora de los estudiantes a través de preguntas de selección múltiple con única respuesta. La prueba evalúa tres competencias principales:
                        <br />
                        <br />
                        <ul>
                            
                            <li><strong>Identificar y comprender el significado de las partes que conforman un texto, como frases, palabras y expresiones.</strong></li>
                            <li><strong>Comprender cómo se enlazan las partes de un texto para darle un sentido global.</strong></li>
                            <li><strong>Analizar y evaluar el contenido del texto, así como la intención y el contexto en el que se produce.</strong></li>
                        </ul>
                        La prueba consta de <strong>41 preguntas</strong> y utiliza dos tipos de textos para evaluar estas competencias. Además, el diseño de la prueba propone una serie de pasos que permiten desagregar y generar un puente entre lo que se quiere evaluar (las competencias) y las tareas que debería desarrollar un estudiante para dar cuenta de ello.
                    </div>
                </Row>
            </RowList>
        </>
    )
}