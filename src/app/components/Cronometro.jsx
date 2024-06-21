'use client'
import { useState, useEffect } from 'react';

export default function Cronometro({ stateTimer, levelSubject }) {

    const previousCronometro = JSON.parse(localStorage.getItem(`${levelSubject}`)) || {};
    const cronometro = previousCronometro.cronometro || {};
    const initialSegundos = cronometro.segundos || 0;
    const initialStopped = cronometro.stopped || false;

    const [segundos, setSegundos] = useState(initialSegundos);
    const [corriendo, setCorriendo] = useState(!initialStopped);
    const [stopped, setStopped] = useState(initialStopped);

    useEffect(() => {
        let interval;
        if (stateTimer === "false") {
            setCorriendo(false)
            setStopped(true)
        }
        if (corriendo) {
            interval = setInterval(() => {
                setSegundos(segundos => segundos + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [corriendo, stateTimer]);

    const segundosMostrados = segundos % 60;
    const minutos = Math.floor(segundos / 60);
    const Horas = Math.floor(minutos / 60);

    useEffect(() => {
        const previousCronometro = JSON.parse(localStorage.getItem(`${levelSubject}`)) || {};
        previousCronometro.cronometro = {
            segundos: segundos,
            minutos: minutos, // Actualiza los minutos correctamente
            Horas: Horas,
            stopped: stopped === true ? true : false
        };
        localStorage.setItem(`${levelSubject}`, JSON.stringify(previousCronometro));
    }, [segundos, minutos, Horas, levelSubject, stopped]);

    return (
        <div>
            {previousCronometro.cronometro && (
                <h4 className='fs-2 text-center text-danger py-3'>
                    {previousCronometro.cronometro.Horas}:
                    {previousCronometro.cronometro.minutos}:
                    {segundosMostrados}
                </h4>
            )}
        </div>
    );
}