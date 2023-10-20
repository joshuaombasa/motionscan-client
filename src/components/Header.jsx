import React from "react";
import { Link, NavLink } from "react-router-dom";


export default function Header() {

    const activeStyle = {
        textDecoration : "underline"
    }
    return (
        <header>
            <Link to="/" className="logo">motionScan</Link>
            <nav>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null}
                     to="/about"
                >About</NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null}
                     to="/scanners"
                >scanners</NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null}
                     to="/hospital"
                >Hospital </NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null}
                     to="/login"
                >Login</NavLink>
                <NavLink
                     style={({isActive}) => isActive ? activeStyle : null}
                     to="/signup"
                >Sign Up</NavLink>
            </nav>
        </header>
    )
}