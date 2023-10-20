import React from "react";
import HospitalItem from "../components/HospitalItem";

import { getAllHospitalMachines } from "../api";
import { useLoaderData, useSearchParams } from "react-router-dom";

export async function loader() {
    return getAllHospitalMachines()
}

export default function Scanners() {


    const hospitalsData = useLoaderData()

    const [searchParams, setSearchParams] = useSearchParams()

    function generateNewUrlSearchParams(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }

        setSearchParams(sp)
    }

    const filterType = searchParams.get("status")

    const filteredHospitalsData = filterType ?
        hospitalsData.filter(hospital => hospital.status === filterType)
        : hospitalsData


    const hospitalElements = filteredHospitalsData.map(hospital => (
        <HospitalItem 
            key={hospital.id} 
            hospital={hospital} 
            filterType={filterType} 
            searchParameters={searchParams.toString()} 
        />
    ))

    return (
        <div className="hospitals--page">
            <h1>Listed hospitals with CT scan services</h1>
            <nav className="hospital--filter--nav">
                <button
                    onClick={() => generateNewUrlSearchParams("status", "working")}
                >Working</button>
                <button
                    onClick={() => generateNewUrlSearchParams("status", "failed")}
                >Failed</button>
                <button
                    onClick={() => generateNewUrlSearchParams("status", null)}
                    className="clear--filter--btn"
                >Clear filter</button>
            </nav>
            <div className="hospitals--page--container">
                {hospitalElements}
            </div>
        </div>
    )
}