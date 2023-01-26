import { Link } from "react-router-dom";

import Bar from "./Bar/Bar";
import Logo from "../../assets/logo.png"

import s from "./Nav.module.css"

function Nav () {
    return (
        <nav className={`${s.nav_ctn}`}>
            <ul className={`${s.ul_nav}`}>
                <li className={`${s.li_nav}`}>
                    <Link to="/home" className={`${s.nav_text}`}><h5 className={`${s.nav_text}`}>Home</h5></Link>
                </li>
                <li className={`${s.li_nav}`}>
                    <Link to="/aboutus" className={`${s.nav_text}`}><h5 className={`${s.nav_text}`}>About Us</h5></Link>
                </li>
            </ul>
            <div className={`${s.logo_ctn}`}>
                <Link to="/"><img src={Logo} alt="logo" className={`${s.logo_image}`}/></Link>
            </div>
            <div className={`${s.bar_ctn}`}>
                <Bar/>
            </div>
        </nav>
    )
}

export default Nav;