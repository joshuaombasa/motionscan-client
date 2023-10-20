import React from "react";
import { Link } from "react-router-dom";

export default function HospitalItem({ hospital,searchParameters , filterType}) {

    const statusStyle = {
        backgroundColor: hospital.status === "working" ? "green" : "red"
    }
    return (
        <div>
            <Link to={hospital.id} className="hospital--item--container" state={{searchParameters, filterType}}>
                <img src={hospital.imageUrl} alt="" />
                <h2>{hospital.name}</h2>
                <span style={statusStyle}>{hospital.status}</span>
                <h3>Ksh {hospital.price}</h3>
            </Link>
        </div>
    )
}