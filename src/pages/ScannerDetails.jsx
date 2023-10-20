import React from "react";
import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getHospitalDetails } from "../api";

export async function loader({params}) {
    return getHospitalDetails(params.id)
}

export default function ScannerDetails() {

    const location = useLocation()

    const hospital = useLoaderData()

    const statusStyle = {
        backgroundColor: hospital.status === "working" ? "green" : "red"
    }

    const params = location.state.searchParameters ? location.state.searchParameters :""
    const filterType = location.state.filterType ? location.state.filterType : "all"

    return (
        <div className="hospital--details--page">
            <Link 
               to={`..?${params}`} 
               relative="path" 
               className="back--link"
            >&larr; Back to {filterType} scanners</Link>
            <div className="hospital--details--page--container">
                <img src={hospital.imageUrl} alt="" />
                <span style={statusStyle}>{hospital.status}</span>
                <h2>{hospital.name}</h2>
                <h3>Ksh {hospital.price}</h3>
                <p>{hospital.description}</p>
                <Link>Book a session</Link>
            </div>
        </div>
    )
}