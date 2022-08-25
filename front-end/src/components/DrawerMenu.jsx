import "../css/menu.css";
import { Link } from "react-router-dom";
const DrawerMenu=()=>{

    return(
        <div className="drawer-menu-wrapper">
            <ul className="list-group mt-5">
                <li className="list-group-item"><Link to="/register">Register User</Link></li>
                <li className="list-group-item"><Link to="/get-all-users">View All Users</Link></li>
            </ul>
        </div>
    );
}
export default DrawerMenu;