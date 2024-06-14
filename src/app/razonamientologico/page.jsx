import Header from "../components/Header"
import { RowList, Row } from '../components/ExplanationSubject';

export default function MathExplanationPage() {
    return (
        <>
            <Header MyImage={'/Images/Logo/Nav.png'} href={"/progress"} />
            <RowList title="Razonamiento Logico">
                <Row subTitle="CONTENIDO A EVALUAR DE RAZONAMIENTO LÓGICO" subTitleTwo="SISTEMA DE EVALUACIÓN DE RAZONAMIENTO LÓGICO" href={"/razonamientologico/niveluno"}>
                    <div>
                        El razonamiento lógico se evalúa como parte del módulo de Matemáticas, específicamente en la subprueba de Razonamiento Cuantitativo. Esta sección evalúa habilidades fundamentales como la capacidad de argumentación, la destreza para plantear y resolver problemas, y la comprensión de estructuras lógicas y matemáticas. Los niveles de desempeño abarcan desde el reconocimiento de procedimientos y conceptos básicos hasta la aplicación de conocimientos en contextos complejos y la resolución de problemas que demandan un alto nivel de abstracción y razonamiento. Aunque la prueba no asigna explícitamente un nivel a cada pregunta, se presentan aleatoriamente cuestiones que cubren los siguientes niveles de desempeño:
                        <br />
                        <strong>-Nivel 1:</strong>Reconocimiento de procedimientos y conceptos básicos.
                        <br />
                        <strong>-Nivel 2:</strong>Aplicación de conocimientos en contextos simples.
                        <br />
                        <strong>-Nivel 3:</strong>Resolución de problemas en contextos de mediana complejidad.
                        <br />
                        <strong>-Nivel 4:</strong>Aplicación de conocimientos en contextos complejos y resolución de problemas que requieren un alto nivel de abstracción y razonamiento.
                    </div>
                    <div>
                        <p>
                            El sistema de evaluación de la prueba de razonamiento lógico en las pruebas Saber 11, <strong>con más de 50 preguntas</strong>, se centra en evaluar la capacidad de los estudiantes para aplicar principios lógicos y matemáticos en la resolución de problemas. La prueba de razonamiento cuantitativo, que forma parte del módulo de Matemáticas,
                            incluye preguntas diseñadas para medir competencias como:
                        </p>
                        <strong>-Comprensión de conceptos:</strong> Entender y aplicar conceptos matemáticos y lógicos básicos.
                        <br />
                        <strong>-Análisis de información:</strong> Interpretar y analizar datos presentados en diversas formas.
                        <br />
                        <strong>-Razonamiento deductivo e inductivo:</strong> Inferir hechos y deducir conclusiones a partir de la información dada.
                        <br />
                        <strong>-Resolución de problemas:</strong> Aplicar el razonamiento lógico para resolver problemas matemáticos y situacionales.
                        <br />
                        <br />
                        <p>
                            La prueba consta de preguntas de selección múltiple con única respuesta y está diseñada para evaluar
                            diferentes niveles de complejidad, desde lo más básico hasta lo más avanzado. Además,
                            se utilizan contextos variados para asegurar que las preguntas sean representativas
                            de situaciones reales y relevantes para los estudiantes.
                        </p>
                    </div>
                </Row>
            </RowList>
        </>
    )
}