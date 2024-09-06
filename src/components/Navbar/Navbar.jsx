/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../../img/logo.png";
import arrow from "../../img/arrow-right.png";
import "../../components/Navbar/Navbar.css"
import { Link, NavLink } from "react-router-dom";

function Navbar () {
    return (
        <nav className="navbar">
           <a href="/"><img src={logo} alt="Logo" /></a> 
            <ul className="nav-links">
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/tvshows">TV Shows</NavLink>
                <NavLink to="/suggestme">Suggest me</NavLink>
                <NavLink to="/arrow"><img src={arrow} alt="->" /></NavLink>
            </ul>
        </nav>
    )
}
export default Navbar;