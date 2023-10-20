import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import authRequired from "../utils/authRequired";

export async function loader ({request}) {
    await authRequired(request)
    return null
}

export default function HospitalLayout() {
    const activeStyle = {
        textDecoration : "underline"
    }
    
    return (
        <div className="hospital--layout--container">
            <nav className="hospital--layout--nav">
                <NavLink
                    to="." 
                    style={({isActive}) => isActive ? activeStyle : null}
                    end
                >Dashboard</NavLink>
                <NavLink
                    to="income" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Income</NavLink>
                <NavLink
                    to="scanners" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Scanners</NavLink>
                <NavLink
                    to="reviews" 
                    style={({isActive}) => isActive ? activeStyle : null}
                >Reviews</NavLink>
            </nav>
            
            <Outlet/>
        </div>
    )
}