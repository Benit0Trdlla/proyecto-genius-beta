import Image from 'next/image';
import BtnLevelProgress from './BtnLevelProgress';
export default function SubjectCards({ SubjectInfo }) {
    return (
        <div className="card-group gap-2 py-3">
            {SubjectInfo.map((subject) => (
                <div className="shadow card border-start rounded border-dark border-2" key={subject.id}>
                    <div className='card-body'>
                        <h5 className="card-title text-center text-black">{subject.tittle}</h5>
                    </div>
                    <a href={subject.href}>
                        <Image src={subject.image} width={400} height={400} className="card-img-top w-100 h-100" alt={`Imagen ${subject.tittle}`} priority />
                    </a>
                    <BtnLevelProgress levelSubject={subject.levelSubject} BtnHref={subject.href}/>
                </div>
            ))}
            <style>
                {`
                    .card {
                        transition: transform 0.3s, box-shadow 0.3s; /* Agrega una transición suave de 0.3 segundos a la propiedad transform y box-shadow */
                    }
                    
                    .card:hover {
                        // background-color: lightgray; /* Cambia el color de fondo al pasar el mouse sobre la tarjeta */
                        transform: scale(1.05); /* Aumenta ligeramente el tamaño de la tarjeta */
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Añade una sombra sutil */
                    }
                `}
            </style>
        </div>
    )
}