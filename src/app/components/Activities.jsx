export function StructureActivities({ children }) {
    return (
        <div className="container mb-5">
            <div className="row d-flex align-items-center justify-content-center py-1">
                {children}
            </div>
        </div>
    );
}
export function ContentActivities({ children }) {
    return (
        <>
            <div className="col-md-6 mt-3 mb-5">
                {children[0]}
                {children[1]}
            </div>
            <div className="col-md-6">
                {children[2]}
            </div>
        </>
    )
}