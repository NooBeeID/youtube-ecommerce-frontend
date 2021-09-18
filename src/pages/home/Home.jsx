import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getCategories, getProducts } from "../../actions/products";




export default function Home(){
    const router = useHistory();

    const move=(link)=>{
        router.push(link);
    }

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getAllProducts();
        getAllCategories();
    },[])

    async function getAllProducts(){
        const p = await getProducts();
        setProducts(p)
    }

    async function getAllCategories(){
        const c = await getCategories();
        setCategories(c)
    }

    return (
        <>
            <h2 className="text-center d-lg-none">NooBeeShop</h2>
            <div className="row">
                <div className="col-12 col-md-8 offset-md-2">
                    <div className="banner">
                        <img src="/img/banner.jpg" width="100%" alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12">
                    <h6>Kategori</h6>
                    <div className="row">
                        {categories.map((cat, i)=>(
                            <div className="col-6 col-md-4 col-lg-2 mb-2">
                                <div className="bg-white p-2 text-center">
                                    {cat}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-12 col-md-12">
                    <h6>Beragam Produk Menarik</h6>
                    <div className="row">
                        {products.map((product, i)=>(
                            <div onClick={()=>move("/home/detail/"+product.id)} className="col-6 col-md-4 col-lg-3 mb-3 pointer" key={i} style={{cursor:"pointer"}}>
                                <div className="card p-2 py-3" style={{borderRadius:"10px"}}>
                                    <div className="c-header">
                                        <div className="img" style={{
                                            height:'200px',
                                            backgroundImage:`url("${product.url}")`,
                                            maxHeight:"30vw",
                                            borderRadius:"10px",
                                            backgroundPosition:"top center",
                                            backgroundSize:"cover"
                                        }}></div>
                                    </div>
                                    <div className="c-body">
                                        <h6 className="mt-3">{product.name}</h6>
                                        <h6 className="fw-bold">Rp. {product.price.toLocaleString()}</h6>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                        
                        
                    </div>
                </div>
            </div>
        </>
    )
}