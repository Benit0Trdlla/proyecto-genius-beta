import { HeaderLogin } from "@/app/components/Header";
import { getSession } from '@auth0/nextjs-auth0';
import SubjectCards from "@/app/components/SubjectCards";

export default async function ProgressPage() {
    const { user } = await getSession();

    return (
        user && (
            <>
                <HeaderLogin />
                <div id="inicio" className="container">
                    <h1 className="display-5 font-weight-bold py-4 text-black"><strong>{user.nickname}, Empieza la prueba!</strong></h1>
                    <SubjectCards SubjectInfo={[
                        { id: 1, tittle: 'Razonamiento lógico', href: '/razonamientologico', image: '/Images/Matemática.png', levelSubject: 'RazonamientoLógico' },
                        { id: 2, tittle: 'Lectura Crítica', href: '/lecturacritica', image: '/Images/Lengua.png', levelSubject: 'LecturaCrítica' },
                        { id: 3, tittle: 'Sociales y ciudadanas', href: '/sociales&ciudadanas', image: '/Images/Sociales.png', levelSubject: 'SocialesCiudadanas' },
                        { id: 4, tittle: 'Ciencias naturales', href: '/naturales', image: '/Images/Naturales.png', levelSubject: 'CienciasNaturales' },
                        { id: 5, tittle: 'Ingles', href: '/ingles', image: '/Images/Ingles.png', levelSubject: 'Ingles' },
                    ]} />
                </div>
                <div className="mt-3 px-2 text-black">
                    <p className="fs-3 text-center">
                        <strong>
                            Estas son las áreas que vas a explorar, subdivididas por 4 niveles.
                            <br />
                            ¡El aprendizaje con diversión va empezar!
                        </strong>
                    </p>
                </div>
            </>
        )
    );
}