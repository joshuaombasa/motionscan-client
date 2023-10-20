import React from "react";
import { useLoaderData } from "react-router-dom";
import { getHospitalScanners } from "../../api";
import SingleHospitalScanner from "../../components/SingleHospitalScanner";

export async function loader() {
    return getHospitalScanners()
}

export default function HospitalScanners() {
    const data = useLoaderData()
   
    const hospitalScannerElements = data.map(scanner => (
        <SingleHospitalScanner key={scanner.id} scanner={scanner}/>
    ))

    
    return (
        <div className="hospital--scanners--page">
            <h1>This is hospital scanners page</h1>
            <div className="hospital--scanners--container">
                {hospitalScannerElements}
            </div>
        </div>
    )
}