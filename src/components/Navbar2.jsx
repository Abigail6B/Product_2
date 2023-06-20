import React from "react";
import logo from "../assets/logo.png"

const estilos = {
    backgroundColor: "#006D77",
    color:"#ffffff",
}

const Navbar = () => {
    return (
        <nav className="navbar " style={estilos}>
            <div className="container-fluid text-left">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo" width="90" height="90" className="d-inline" />
                </a>
                <p>
                    MUEBLERIA DAF
                </p>
            </div>
        </nav>

    );
};


export default Navbar;