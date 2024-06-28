import Image from 'next/image'
import Link from 'next/link'
export default function Header({ titleSubject, MyImage, href }) {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        {titleSubject && !MyImage && (
                            <a className="navbar-brand fs-2 text-black">{titleSubject}</a>
                        )}
                        {MyImage && !titleSubject && (
                            <Image src={MyImage} width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        )}
                        <ul className="navbar-nav ms-auto">
                            <Link href={href} className="btn btn-warning">
                                Volver
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </>
    )
}

export function HeaderHomePage() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <Image src='/Images/Logo/Nav.png' width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-3">
                                <li className="nav-item">
                                    <a href="#services" className="nav-link text-secondary"><small>Servicios</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#preguntas" className="nav-link text-secondary"><small>Preguntas Frecuentes</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#instrucciones" className="nav-link text-secondary"><small>Instrucciones</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#donate" className="nav-link text-black"><strong> Haz tu donación</strong></a>
                                </li>
                                <li className="nav-item">
                                    <a href="./ingresar" className="btn btn-warning"><small>Iniciar</small></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </>
    )
}

export function HeaderLogin() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-md bg-white">
                    <div className="container">
                        <a href='./'>
                            <Image src='/Images/Logo/Nav.png' width={50} height={60} className="navbar-brand img-fluid" alt="Logo Proyecto Genius" style={{ width: "auto" }} priority={true} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto gap-3">
                                <li className="nav-item">
                                    <a href="/" className="btn btn-warning"><small>Home</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="btn btn-warning"><small>Mi progreso</small></a>
                                </li>
                                <li className="nav-item">
                                    <a href="/api/auth/logout" className="btn btn-warning"><small>Cerrar sesión</small></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="d-flex justify-content-center">
                <hr className="w-75 border-secondary m-0" />
            </div>
        </>
    )
}