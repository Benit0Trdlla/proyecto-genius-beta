export default function Loading() {
    return (
        <>
            <h1 className="text-center mt-5">Espere un momento...</h1>
            <div className="d-flex justify-content-center">
                <div className="spinner-border m-5 text-warning" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}