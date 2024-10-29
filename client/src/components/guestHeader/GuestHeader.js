import React from "react";
import { Link} from "react-router-dom"; // Import Link for routing
// import "./styles.css"
import { useDispatch } from "react-redux";
import { AuthActions } from "../../store/authSlice";


export function GuestHeader (){
    const dispatch=useDispatch();
    // const isUser=useSelector(state => state.auth.user);

    const handleLogout = () => {
        dispatch(AuthActions.logout());
        // navigate("/guest/login");
    }
    return (
        <header className="p-3 " style={{ backgroundColor: '#557571' }}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <h1 className="mb-0 me-3">
                        <Link to="/guest/homepagefull" className="heading1 text-decoration-none text-light">HomeAway</Link>
                    </h1>
                    <div className="dropdown">
                        <Link to="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/imgs/profilepic.jpg" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </Link>
                        <ul className="dropdown-menu text-small dropdown-menu-end">
                            {/* <li><Link to="#" className="dropdown-item">New project...</Link></li> */}
                            <li><Link to="/guest/editPass" className="dropdown-item">Change Password</Link></li>
                            <li><Link to="/guest/profile" className="dropdown-item">View Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link to="/guest/login" onClick={handleLogout} className="dropdown-item">Sign out</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

