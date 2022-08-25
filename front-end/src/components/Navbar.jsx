import {Link} from "react-router-dom";
const Navbar=()=>{
    return(
        <div className="navbar-wrapper">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" href="#"><b>GoMobit</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active"><Link className="nav-link" to="/register"><b>Register</b></Link></li>
                        <li className="nav-item active"><Link className="nav-link" to="/getAllUsers"><b>Get All Users</b></Link></li>
                    </ul>
                </div>
            </nav>      
        </div>
    );
}
export default Navbar;