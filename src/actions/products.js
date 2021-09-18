

const categories = [
    "Komputer", "Elektronik", "Smartphone", "TV", "Laptop"
];

const products = [
    {id:1, name:"Sumsang A50s",         url:"https://www.electrorates.com/blogimg/Samsung-Galaxy-A50s.png", price:3300000},
    {id:2, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
    {id:3, name:"Monitor LG MP2488",    url:"https://www.lg.com/in/images/monitors/md05772287/gallery/medium01.jpg", price:2500000},
    {id:4, name:"HP Usas",    url:"https://dlcdnwebimgs.asus.com/gain/e4b69759-4000-451e-99f2-d1e472229785/", price:2500000},
    {id:5, name:"Laptop Usas",    url:"https://dlcdnwebimgs.asus.com/gain/d1dba1f8-5fb4-4744-94f9-e1f91358950b/w800", price:2500000},
]

const getProducts=()=>{
    return products;
}

const getProductById=(id)=>{
    const data = products.find(p=>p.id===parseInt(id));
    return data;
}

const getCategories=()=>{
    return categories;
}

module.exports = {getCategories, getProducts, getProductById}