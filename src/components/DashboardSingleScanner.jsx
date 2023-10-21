import React from "react";
import { Link } from "react-router-dom";

export default function DashboardSingleHospitalScanner({ scanner }) {
    return (
        <div className="single--hospital--scanner">
                <img src={scanner.imageUrl} alt="" />
                <div className="data">
                    <h3>{scanner.name}</h3>
                    <span>Ksh {scanner.price}</span>
                </div>
                <Link className="edit--link" to={`/hospital/scanners/${scanner.id}`}>Edit</Link>
        </div>
    )
}