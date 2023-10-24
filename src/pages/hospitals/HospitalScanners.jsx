import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import { getHospitalScanners } from "../../api";
import SingleHospitalScanner from "../../components/SingleHospitalScanner";

export async function loader() {
    return defer({ hospitalScanners: getHospitalScanners() })
}

export default function HospitalScanners() {
    const dataPromise = useLoaderData()



    function renderHospitalScanners(data) {

        const hospitalScannerElements = data.map(scanner => (
            <SingleHospitalScanner key={scanner.id} scanner={scanner} />
        ))

        return (
            <>
                <h1>Your listed  scanners</h1>
                <div className="hospital--scanners--container">
                    {hospitalScannerElements}
                </div>
            </>
        )
    }


    return (
        <div className="hospital--scanners--page">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.hospitalScanners}>
                    {renderHospitalScanners}
                </Await>
            </Suspense>
        </div>
    )
}