import React from "react";
import logo from "../../assets/logo.png";

const estilos_navbar = {
    backgroundColor: "#006D77",
    
};


const Navbar = () => {
    return (
        <nav className="navbar" style={estilos_navbar}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <p>Muebleria DAF</p>
                </a>
            </div>
        </nav>

    );
};


export default Navbar;