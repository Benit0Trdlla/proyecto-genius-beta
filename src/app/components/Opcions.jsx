'use client'
import { useState, useEffect} from 'react';
// import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Buttons } from "../../app/components/Buttons";

export default function OpcionsAndAlerts({ opciones, correctAnswer, numIndex, justifyContent, totalPreguntas }) {
    const [alert, setAlert] = useState(false)
    const [alert2, setAlert2] = useState(false)
    const [ask, setAsk] = useState(false)

    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const { replace } = useRouter();
    // const params = new URLSearchParams(searchParams);
    // const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);

    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        // Obtener las respuestas anteriores del localStorage
        const previousAnswers = JSON.parse(localStorage.getItem('answers')) || {};
        // Guardar la respuesta del usuario en el localStorage
        previousAnswers[numIndex] = selectedValue;
        localStorage.setItem('answers', JSON.stringify(previousAnswers));
        if (selectedValue === correctAnswer) setAlert(true)
        else setAlert2(true)
        setAsk(true)
    };

    // useEffect(() => {
    //     params.set('a', ask)
    //     replace(`${pathname}?${params.toString()}`)
    // }, [ask, pathname, replace]);

    useEffect(() => {
        setAlert(false)
        setAlert2(false)
        setAsk(false)
    }, [numIndex]);

    return (
        <>
            <div className='mb-4 ms-4'>
                {opciones.map((opcion) => (
                    <div className="form-check" key={opcion.value}>
                        <input className="form-check-input border border-secondary border-2" type="radio" name="flexRadioDefault" value={opcion.value} onChange={handleOptionChange} />
                        <label className="form-check-label">
                            {opcion.label}
                        </label>
                    </div>
                ))}
            </div>
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
            <Buttons totalPreguntas={totalPreguntas} ask={ask} />
        </>
    )
}