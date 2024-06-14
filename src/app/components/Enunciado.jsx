export default function Enunciado({ Enunciado }) {
    const isImageUrl = (Enunciado) => {
        return /^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i.test(Enunciado);
    };
    return (
        <>
            <h6 className="text-center">
                {isImageUrl(Enunciado) ? (
                    <img src={Enunciado} style={{ maxWidth: '100%', height: 'auto' }} alt="Imagen como Enunciado de la actividad a responder" />
                ) : (
                    <p>{Enunciado}</p>
                )}
            </h6>
        </>
    )

}