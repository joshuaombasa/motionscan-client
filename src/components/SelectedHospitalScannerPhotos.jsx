import React from "react";
import { useOutletContext } from "react-router-dom";

export default function SelectedHospitalScannerPhotos() {

    const data = useOutletContext()

    return (
        <div className="selected--hospital--scanner">
            <img src={data.imageUrl} alt="" />
        </div>
    )
}