import React from "react";
import { Link } from "react-router-dom";

export default function SingleHospitalScanner({ scanner }) {
    return (
        <div >
            <Link to={scanner.id} className="single--hospital--scanner">
                <img src={scanner.imageUrl} alt="" />
                <div className="data">
                    <h3>{scanner.name}</h3>
                    <span>Ksh {scanner.price}</span>
                </div>
            </Link>
        </div>
    )
}