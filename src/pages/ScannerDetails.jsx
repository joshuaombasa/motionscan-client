import React, { Suspense } from "react";
import { Await, defer, Link, useLoaderData, useLocation } from "react-router-dom";
import { getHospitalDetails } from "../api";

export async function loader({ params }) {
    return defer({ hospitalDetails: getHospitalDetails(params.id) })
}

export default function ScannerDetails() {

    const location = useLocation()

    const dataPromise = useLoaderData()

    const params = location.state.searchParameters ? location.state.searchParameters : ""
    const filterType = location.state.filterType ? location.state.filterType : "all"

    function renderHospitalDetails(hospital) {

        const statusStyle = {
            backgroundColor: hospital.status === "working" ? "green" : "red"
        }
        
        return (
            <>
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
                    <Link to="/">Book a session</Link>
                </div>
            </>
        )
    }

    return (
        <div className="hospital--details--page">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.hospitalDetails}>
                    {renderHospitalDetails}
                </Await>
            </Suspense>
        </div>
    )
}