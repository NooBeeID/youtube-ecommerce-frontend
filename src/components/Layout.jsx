import Navbar from "./Navbar";

export default function Layout({children}){
    return(
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}