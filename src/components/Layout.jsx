
import BottomBar from "./BottomBar";
import Navbar from "./Navbar";

export default function Layout({children}){
    return(
        <>
            <Navbar/>
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-12 mb-5">
                        {children}
                    </div>
                </div>
            </div>
            <BottomBar/>
        </>
    )
}