import { Search, ShoppingCart } from 'react-feather';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-transparent mb-3 py-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/home">NBS</Link>
                <div className="d-lg-none">
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