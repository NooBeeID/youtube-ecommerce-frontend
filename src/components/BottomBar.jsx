import { Home, Search, User } from "react-feather";
import { Link } from "react-router-dom";


export default function BottomBar(){
    return (
        <div className="fixed-bottom w-100 bg-white d-inline d-lg-none">
            <div className="container-fluid">
                <div className="row p-2 text-center">
                    <div className="col-4">
                        <Link to="/home" className="active">
                            <>
                                <div>
                                    <Home size={24}/>
                                </div>
                                <div>
                                    Home
                                </div>
                            </>
                        </Link>
                        
                    </div>
                    <div className="col-4">
                        <Link to="/home/search">
                            <>
                                <div>
                                    <Search size={24}/>
                                </div>
                                <div>
                                    Search
                                </div>
                            </>
                        </Link>
                        
                    </div>
                    <div className="col-4">
                        <Link to="/profile">
                            <>
                            <div>
                                <User size={24}/>
                            </div>
                            <div>
                                Profile
                            </div>
                            </>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}