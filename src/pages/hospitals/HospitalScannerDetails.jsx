import React from "react";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getSelectedHospitalScanner } from "../../api";

export async function loader({ params }) {
    return getSelectedHospitalScanner(params.id)
}

export default function HospitalScannerDetails() {
    const data = useLoaderData()

    const statusStyle = {
        backgroundColor: data.status === "working" ? "green" : "red"
    }

    const activeStyle = {
        textDecoration : "underline"
    }

    return (
        <div className="hospital--scanner--details--page">
            <Link 
                to=".." 
                relative="path" 
                className="back--link"
            >&larr; Back to all scanners</Link>
            <div className="hospital--scanner--details--page--container">
                <div className="scanner--details--top">
                    <img src={data.imageUrl} alt="" />
                    <div className="text--section">
                        <span style={statusStyle}>{data.status}</span>
                        <h3>{data.name}</h3>
                        <h4>Ksh {data.price}</h4>
                    </div>
                </div>
                <div className="scanner--details--botton--section">
                    <nav>
                        <NavLink 
                             style={({isActive}) => isActive ? activeStyle : null}
                             to="."
                             end
                             >Details</NavLink>
                        <NavLink 
                             style={({isActive}) => isActive ? activeStyle : null}
                             to="pricing"
                             >Pricing</NavLink>
                        <NavLink 
                             style={({isActive}) => isActive ? activeStyle : null}
                             to="photos"
                             >Photos</NavLink>
                    </nav>
                    <Outlet context={data}/>
                </div>
            </div>
        </div>
    )
}