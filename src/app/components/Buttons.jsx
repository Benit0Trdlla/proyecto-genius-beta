'use client'
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function Buttons({ totalPreguntas, ask }) {
    const [count, setCount] = useState(0);
    const [stateTimer, setStateTimer] = useState(true);
    const [textButton, setTextButton] = useState('Siguiente');

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const params = useMemo(() => new URLSearchParams(searchParams), [searchParams]);

    const handleNextClick = () => {
        if (count === totalPreguntas - 1) {
            return setStateTimer(false)
        }
        setCount(count => count + 1);
    }
    const handlePrevClick = () => {
        if (count === 0) return
        setCount(count => count - 1);
    }

    useEffect(() => {
        params.set('index', count)
        replace(`${pathname}?${params.toString()}`)
    }, [count, pathname, replace, params]);
    useEffect(() => {
        params.set('state', stateTimer)
        replace(`${pathname}?${params.toString()}`)
    }, [stateTimer, pathname, replace, params]);

    return (
        <div className='d-flex justify-content-center'>
            <button type="button" className="btn btn-primary me-4" onClick={handlePrevClick}>Anterior</button>
            <button type="button" className="btn btn-primary" onClick={handleNextClick} disabled={!ask}>{textButton}</button>
        </div>
    )
}