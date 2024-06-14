'use client'
import Image from 'next/image'
import Header from "@/app/components/Header";
import Loading from '../progress/loading';
import { useUser } from '@auth0/nextjs-auth0/client';
import { redirect } from 'next/navigation'
export default function IngresarPage() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <Loading />;
    if (error) return <div>{error.message}</div>;

    if (user) {
        redirect('/progress');
    }
    return (
        <>
            {!user &&
                <>
                    <Header MyImage={'/Images/Logo/Nav.png'} href={"/"} />
                    <section className='gradient-custom'>
                        <div className="container py-5">
                            <div className="row d-flex justify-content-center align-items-center mt-4">
                                <div className="col-12 col-md-6 col-lg-5">
                                    <Image src='/Images/Login.png' width={800} height={800} className="img-fluid d-none d-md-block" alt="Imagen de Login" style={{ width: "auto" }} />
                                </div>
                                <div className="col-12 col-md-6 col-lg-7">
                                    <div className="row gy-5 justify-content-center">
                                        <div className="col-12 d-flex justify-content-center">
                                            <Image src='/Images/Logo/Nav.png' width={100} height={100} className="img-fluid" alt="Imagen Logo del Login" style={{ width: "auto" }} />
                                        </div>
                                        <div className='text-center'>
                                            <h1 className='display-6 fw-bold text-body-emphasis'>Haz login para entrar a los cursos</h1>
                                            <a href="/api/auth/login?returnTo=/progress" className='text-black btn btn-warning'>Iniciar sesión</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}