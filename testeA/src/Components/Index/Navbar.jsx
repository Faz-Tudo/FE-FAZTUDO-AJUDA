import React from 'react';
import '../../Styles/StylesIndex/NavbarStyle.css';
import logo from '../../Images/Navbar/logoFaztudo.png'



function Navbar() {

    return (
            <nav className="navbar">
                <img src={logo} alt=""/>
                <ul className="nav-bar-list">
                        
                        <li>
                            <a href="">
                                Home
                            </a>
                        </li>
                        <li> <a href="">Quem somos</a></li>
                        <li><a href="">Avaliações</a></li>
                        <button className="button-login">Login</button>
                        
                </ul>
            </nav>
    )
}
export default Navbar;