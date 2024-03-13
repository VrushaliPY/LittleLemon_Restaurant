import { useState } from "react"
import logo from "../images/Logo.svg"

const Nav = () =>{

    const[menuOpen,setMenuOpen]= useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    
    return(
        <nav className="navbar">
            <div>
                <a href="/" className="logo">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>

            {/*Nav Items*/}

            <ul className={menuOpen ? "open" : ""} >
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Menu</a>
                </li>
                <li>
                    <a href="/">Reservations</a>
                </li>
                <li>
                    <a href="/">Order Online</a>
                </li>
                <li>
                    <a href="/">Login</a>
                </li>
            </ul>

             {/*mobile navigation bar*/}
             <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>

        </nav>
    )
}

export default Nav;