import Image from 'next/image';
export function Footer({ children, srcImg, titleMiddle, titleEnd }) {
    return (
        <footer className="footer mt-auto">
            <section className="bg-light py-4 py-md-5 py-xl-8 border-top">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-lg-0 justify-content-xl-between">
                        <div className="col-12 col-md-4 col-lg-3 col-xl-2">
                            <div className="widget">
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Image src={srcImg} width={120} height={120} alt='Logo Proyecto Genius' priority={true}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title">{titleMiddle}</h4>
                                {/* <address className="mb-4">Fundación Caribe Enseña</address> */}
                                <p className="mb-0">
                                    {children[0]}
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="widget">
                                <h4 className="widget-title mb-2">{titleEnd}</h4>
                                {children[1]}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {children[2]}
        </footer>
    )
}

export function SubFooter({children}) {
    return (
        <>
            <div className="bg-light py-4 py-md-5 py-xl-8 border-top border-light-subtle">
                <div className="container overflow-hidden">
                    <div className="row gy-4 gy-md-0">
                        <div className="col-xs-12 col-md-7 order-1 order-md-0">
                            <div className="copyright text-center text-md-start">
                                &copy; 2024. Todos los derechos reservados.
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-5 order-0 order-md-1">
                            <ul className="nav justify-content-center justify-content-md-end">
                                {children}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function NavItemSubFooter({ href, svgUrl, icon, pathUrl }) {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link link-dark" href={href}>
                    <svg xmlns={svgUrl} width="24" height="24" fill="currentColor" className={icon} viewBox="0 0 16 16">
                        <path d={pathUrl} />
                    </svg>
                </a>
            </li>
        </>
    )
}