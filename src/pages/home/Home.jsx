import { useHistory } from "react-router-dom";


const categories = [
    "Komputer", "Elektronik", "Smartphone", "TV", "Laptop"
];

const products = [
    {id:1, name:"Sumsang A50s",         url:"https://www.electrorates.com/blogimg/Samsung-Galaxy-A50s.png", price:3300000},
    {id:2, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
    {id:3, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
    {id:4, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
    {id:5, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
]

export default function Home(){
    const router = useHistory();

    const move=(link)=>{
        router.push(link);
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
                            <div onClick={()=>move("/home/detail/"+product.id)} className="col-6 col-md-4 col-lg-3 mb-3">
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