'use client'
import { useState, useEffect } from 'react';
import { Buttons } from "../../app/components/Buttons";
import { guardarRespuestas } from '../lib/guardarRespuestas';

export default function OpcionsAndAlerts({ opciones, correctAnswer, numIndex, justifyContent, totalPreguntas, levelSubject }) {
    const [alert, setAlert] = useState(false)
    const [alert2, setAlert2] = useState(false)
    const [ask, setAsk] = useState(false)

    const previousAnswers = JSON.parse(localStorage.getItem(`${levelSubject}`)) || {}
    const userResponse = previousAnswers[numIndex];

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        guardarRespuestas(numIndex, correctAnswer, selectedValue, levelSubject)
        if (selectedValue === correctAnswer) {
            setAlert(true)
            setAlert2(false)
        }
        else {
            setAlert2(true)
            setAlert(false)
        }
        setAsk(true)
    };

    useEffect(() => {
        setAlert(false)
        setAlert2(false)
        setAsk(false)
    }, [numIndex]);

    return (
        <>
            {userResponse && (
                <div className='mb-4 ms-4'>
                    {opciones.map((opcion) => (
                        <div className="form-check" key={opcion.value}>
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value={opcion.value}
                                onChange={handleOptionChange}
                                checked={opcion.value === userResponse.respuestaUser}
                            />
                            <label className="form-check-label">
                                {opcion.label}
                            </label>
                        </div>
                    ))}
                    {userResponse.isCorrect ? (
                        <div className="alert alert-success" role="alert">
                            Respuesta Correcta
                        </div>
                    ) : (<div className="alert alert-danger" role="alert">
                        La respuesta correcta: {userResponse.respuestaCorrecta} <a className="" data-bs-toggle="modal" data-bs-target="#Modaljustificacion"><strong>Conocé la justificación. Haz Click aquí.</strong></a>
                        {/* MODAL */}
                        <div className="modal fade" id="Modaljustificacion" aria-labelledby="ModalJustify" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-black">
                                        {justifyContent}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Ok! Gracias.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            )}
            {!userResponse && (
                <div className='mb-4 ms-4'>
                    {opciones.map((opcion) => (
                        <div className="form-check" key={opcion.value}>
                            <input
                                className="form-check-input border border-secondary border-2"
                                type="radio"
                                name="flexRadioDefault"
                                value={opcion.value}
                                onChange={handleOptionChange}
                            />
                            <label className="form-check-label">
                                {opcion.label}
                            </label>
                        </div>
                    ))}
                    {alert ? <div className="alert alert-success" role="alert">
                        Respuesta Correcta
                    </div> : null}
                    {alert2 ? (<div className="alert alert-danger" role="alert">
                        La respuesta correcta: {correctAnswer} <a className="" data-bs-toggle="modal" data-bs-target="#Modaljustificacion"><strong>Conocé la justificación. Haz Click aquí.</strong></a>
                        {/* MODAL */}
                        <div className="modal fade" id="Modaljustificacion" aria-labelledby="ModalJustify" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-body text-black">
                                        {justifyContent}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Ok! Gracias.</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : null}
                </div>
            )}
            {userResponse ? <Buttons totalPreguntas={totalPreguntas} ask={true} /> : <Buttons totalPreguntas={totalPreguntas} ask={ask} />}
        </>
    )
}