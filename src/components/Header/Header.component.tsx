import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    const logo = require("./logo.png") as string;

    const langActive = (isActive :boolean) :string => {
       return isActive ? 'Header-Language active' : 'Header-Language'
    }
    return (
    <div className="Header-Wrapper">
        <img src={logo} className="Header-Logo" alt="logo" />
        <input type="text" className='Header-Search' placeholder="Search..." />
        <nav>
            <Link to="borrow-book" className='Header-Link'>Borrow</Link>
            <Link to="return-book" className='Header-Link'>Return</Link>
            <Link to="donate" className='Header-Link'>Donate</Link>
        </nav>
        <div className='Header-Language-Toggle'>
            <button
                className={langActive(true)}
            >English</button>
            <button className='Header-Language'>Spanish</button>
        </div>
    </div>
    )
}

export default Header;