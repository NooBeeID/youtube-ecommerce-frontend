import { Search, ShoppingCart } from 'react-feather';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">NBS</a>
                <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-sm-none">
                    <ShoppingCart />
                </div>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="me-auto"></div>
                    <div className="navbar-nav">
                        <input type="text" className="rounded-start border px-2" placeholder="Cari produk" />
                        <a className="nav-link bg-primary rounded-end text-white" href="#"><Search/></a>
                        <a className="nav-link me-5 active" aria-current="page" href="#"><ShoppingCart/></a>
                        <a className="nav-link me-2 btn btn-outline-dark text-dark" href="#">Daftar</a>
                        <a className="nav-link me-2 btn btn-primary text-white" href="#">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}