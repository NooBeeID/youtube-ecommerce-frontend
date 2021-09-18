import { ArrowLeft, Search, ShoppingCart } from "react-feather";
import { useHistory } from "react-router-dom";


export default function NavbarWithBack({label}){
    const router = useHistory();

    const move=()=>{
        router.goBack()
    }
    return(

            <div className="d-flex align-items-center" style={{marginTop:"-20px"}}>
                <div style={{cursor:"pointer"}} className="fw-bold me-2" onClick={move}><ArrowLeft/></div>
                <div>
                    {label}
                </div>
            </div>
    )
}