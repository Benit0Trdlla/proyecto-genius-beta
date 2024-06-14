export function CardServicesList({ children }) {
    return (
        <div id="services" className="container py-5 mt-5">
            <div className="text-center">
                <h2 className="mb-4 mt-3">Servicios</h2>
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row" >
                {children}
            </div>
        </div>
    )
}

export function Cards({ children, title, href }) {
    return (
        <div className="col-md-3 mb-3">
            <div className="card">
                <div className="card-body text-center">
                    <i className="fa-regular fa-heart fa-2x my-3"></i>
                    <h5 className="fw-bold">{title}</h5>
                    <a className="" data-bs-toggle="modal" data-bs-target={`#${href}`}><strong>Más Información.</strong></a>
                    {/* Modal */}
                    <div className="modal fade" id={href} aria-labelledby="ModalJustify" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{title}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body text-black">
                                    <p className='mt-3'>
                                        {children}
                                    </p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-gray border border-dark text-black" data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}