import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

/* 
    The Header is used of ease navigation between pages because
    it's not a complete app
*/     

const Header = () => {
    return (
        <header className="header">
            <p className="header__text">Pages:</p>
            <nav className="header__nav">
                <Link className="header__nav--link" to="/home">Home</Link>
                <Link className="header__nav--link" to="/">Login</Link>
                <Link className="header__nav--link" to="/loan">Loan</Link>
            </nav>
        </header>
    )
}

export default Header;

