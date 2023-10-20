import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedHospitalScannerDetails() {
    const data = useOutletContext()

    const statusStyle = {
        color: data.status === "working" ? "green" : "red"
    }

    return (
        <div className="selected--hospital--scanner">
            <p>Name:  <span className="lite--text">{data.name}</span></p>
            <p>Category:  <span className="lite--text" style={statusStyle}>{data.status}</span></p>
            <p>Description:  <span className="lite--text">{data.description}</span></p>
            <p>Visibility:  <span className="lite--text">Public</span></p>
        </div>
    )
}