import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <div>
            <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">Sobre</Link>
                </li>
                <li>
                    <Link to="/Contact">Contato</Link> </li>
            </ul>
            </nav>
        </div>
    )
}