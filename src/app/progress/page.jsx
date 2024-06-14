import { HeaderLogin } from "@/app/components/Header";
import { getSession } from '@auth0/nextjs-auth0';
import SubjectCards from "@/app/components/SubjectCards";
// import { useUser } from '@auth0/nextjs-auth0/client';

// import { parse } from 'papaparse';
// const urls = ['https://docs.google.com/spreadsheets/d/e/2PACX-1vSuLH4t-YFmRI5phxbxvBEo9uRQaRP-P70Kpoa3PT7ZwRPWmiJdEwduLz5bKkSBWxGQV2ynDHHWIpYJ/pub?output=csv', 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRv0ynO2c7TTuc-UWoCZqg0RqEht5Ep660w8JwTDL9WZLT9mCKpdCE_ihgKhNsEqD8mRRHMX8sO1vVr/pub?output=csv'];

// export const MultipleFetch = async (urls) => {
//     const responses = await Promise.all(urls.map(url => fetch(url, { next: { revalidate: 30 } })));
//     const csvData = await Promise.all(responses.map(response => response.text()));
//     const jsonData = csvData.map(data => parse(data, { header: true }));
//     return jsonData.flat();
// }
export default async function ProgressPage() {
    const { user } = await getSession();

    // MultipleFetch(urls)
    //     .then(data => {
    //         const datosJSON = JSON.stringify(data[1].data); // Convierte los datos en una cadena JSON
    //         localStorage.setItem('datos', datosJSON); // Guarda los datos en el localStorage
    //         console.log(datosJSON); // Muestra los datos en formato JSON
    //         // Hacer algo con los datos recibidos
    //     })
    //     .catch(error => console.error(error));
    return (
        user && (
            <>
                <HeaderLogin />
                <div id="inicio" className="container">
                    <h1 className="display-5 font-weight-bold py-4 text-black"><strong>{user.nickname}, Empieza la prueba!</strong></h1>
                    <SubjectCards SubjectInfo={[
                        { id: 1, tittle: 'Razonamiento lógico', href: '/razonamientologico', image: '/Images/Matemática.png' },
                        { id: 2, tittle: 'Lectura Critica', href: '/lecturacritica', image: '/Images/Lengua.png' },
                        { id: 3, tittle: 'Sociales y ciudadanas', href: '/sociales&ciudadanas', image: '/Images/Sociales.png' },
                        { id: 4, tittle: 'Ciencias naturales', href: '/naturales', image: '/Images/Naturales.png' },
                        { id: 5, tittle: 'Ingles', href: '/ingles', image: '/Images/Ingles.png' },
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