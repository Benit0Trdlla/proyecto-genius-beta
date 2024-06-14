export default function TheoreticalContent({ Titulo, Teoria, Imagen }) {
    return (
        <>
            <h1 className="text-center fw-bold fs-1">{Titulo}</h1>
            <div className="overflow-auto" style={{ maxHeight: '400px' }}>
                <p className="me-2 mt-3" dangerouslySetInnerHTML={{ __html: Teoria }}></p>
                <div className="d-flex flex-column align-items-center">
                    {Imagen && (
                        <>
                            {Imagen.split(',').map((url, index) => (
                                <div key={index} className="mb-3">
                                    <img src={url.trim()} // Eliminar espacios en blanco alrededor de la URL
                                        className="img-fluid"
                                        // style={{ maxWidth: '450px', height: '150px' }}
                                        alt={`Imagen ${index + 1} de ayuda para el contenido teorico`}
                                    />
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
            <style>
                {`
                                    /* Estilos para la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar {
                                        width: 8px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento */
                                    .overflow-auto::-webkit-scrollbar-thumb {
                                        background-color: #888;
                                        border-radius: 4px;
                                    }

                                    /* Estilos para el thumb de la barra de desplazamiento al pasar el cursor */
                                    .overflow-auto::-webkit-scrollbar-thumb:hover {
                                        background-color: #555;
                                    }
                                `}
            </style>
        </>
    )
}