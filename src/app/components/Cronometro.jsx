'use client'
import { useState, useEffect } from 'react';

export default function Cronometro({ stateTimer }) {
    // console.log("que pasa aca", mood)
    const [segundos, setSegundos] = useState(0);
    const [corriendo, setCorriendo] = useState(true);

    useEffect(() => {
        let interval;
        if (stateTimer === "false") {
            setCorriendo(false)
        }
        if (corriendo) {
            interval = setInterval(() => {
                setSegundos(segundos => segundos + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [corriendo, stateTimer]);

    const minutos = Math.floor(segundos / 60);
    const segundosMostrados = segundos % 60;
    const Horas = Math.floor(minutos / 60);

    // const detenerCronometro = () => {
    //     setCorriendo(false);
    // }

    return (
        <div>
            <h4 className='fs-2 text-center text-danger py-3'>{Horas}:{minutos}:{segundosMostrados}</h4>
            {/* <div className='d-flex justify-content-center'>
                <button className='btn btn-secondary bg-transparent text-black' onClick={detenerCronometro}>Detener Cronómetro</button>
            </div> */}
        </div>
    );
}