import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../actions/products";
import NavbarWithBack from "../../components/NavbarWithBack";


export default function Detail(){
    const {id} = useParams();
    const [product, setProduct] = useState(null)

    const fetchProductByID=(id)=>{
        const data = getProductById(id);
        setProduct(data);
    }

    useEffect(()=>{
        fetchProductByID(id);
    },[])
    
    return(
        <div className="mt-3 mb-3">
            <NavbarWithBack label={product?.name ?? ""}/>
            <h3>Nama Produk : {product?.name ?? ""}</h3>
            <img src={product?.url ?? ""} width="400" alt="" />

        </div>

    )
}