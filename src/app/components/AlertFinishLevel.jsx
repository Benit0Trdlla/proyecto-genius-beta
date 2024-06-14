'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import "/public/css/MyStyle/global.css";


export default function AlertFinishLevel({ stateAlert, level }) {
    const [finishedLevel, setfinishedLevel] = useState(true);

    useEffect(() => {
        if (stateAlert === "false") {
            setfinishedLevel(false);
        }
    }, [stateAlert]);

    return (
        <>
            {!finishedLevel && (
                <div className="LevelCompleted" >
                    <div className='alert alert-light' role='alert'>
                        <button type="button" className="btn-close float-end" data-bs-dismiss="alert" aria-label="Close"></button>
                        <h4 className="alert-heading mb-3">{`¡Nivel ${level} Completado!`}</h4>
                        <img src="/Images/Donaciones.png" alt="Imagen de nivel completado" width={200} height={200} />
                        <hr />
                        <Link href="/progress" className="btn btn-primary">
                            Comienza el siguiente nivel aquí
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}
