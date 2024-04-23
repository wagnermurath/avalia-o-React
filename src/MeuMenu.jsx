import React from "react";
import { Link } from "react-router-dom";

const MeuMenu = () => {
    return (
        <div className="menu">

        <nav className="menuContainer">

            <button className="clicar">
                <Link to="/"> Pagina inicial </Link>
            </button>
            <button className="clicar">
                <Link to="/SobreMim"> Sobre mim </Link>
            </button>


        </nav>
        </div>
    )
}

export default MeuMenu;