import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedHospitalScannerPricing() {

    const data = useOutletContext()

    return (
        <div className="selected--hospital--scanner">
            <h3>Ksh {data.price}</h3>
        </div>
    )
}