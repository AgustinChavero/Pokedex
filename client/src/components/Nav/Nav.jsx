import { Link } from "react-router-dom";

import Bar from "./Bar/Bar";
import Logo from "../../assets/logo.png"

/* import s from "./Nav.module.css" */
import "./Nav.css";

function Nav () {
    return (
        <nav className="nav-ctn">
            <ul className="ulNav">
                <li className="liNav">
                    <Link to="/home" className="navText"><h5 className="navText">Home</h5></Link>
                </li>
                <li className="liNav">
                    <Link to="/aboutus" className="navText"><h5 className="navText">About Us</h5></Link>
                </li>
            </ul>
            <div className="logo-ctn">
                <Link to="/"><img src={Logo} alt="logo" className="logoImage"/></Link>
            </div>
            <div className="bar-ctn">
                <Bar/>
            </div>
        </nav>
    )
}

export default Nav;