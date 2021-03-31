import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Navigation.css';
import logo from '../../images/android-chrome-192x192.png'
import { UserContext } from "../../App";

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <ul>
                <li><img className="navLogo" src={logo} alt="MEM-logo"/></li>
                
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/admin">Admin</Link></li>
                <li><Link to="/deals">Deals</Link></li>
                
                <li className="navLogin">
                    <Link className="active" to="/login" onClick={() => setLoggedInUser({})}>
                        {
                            !loggedInUser.email ? "Login" : "Logout"
                        }
                    </Link>
                </li>

                <li className="navUser">
                    {
                        !loggedInUser.email ? "user" : loggedInUser.email
                    }
                </li>
            </ul>
        </div>
    );
};

export default Navigation;