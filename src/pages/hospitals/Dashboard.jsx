import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsStarFill } from 'react-icons/bs';
import { getHospitalScanners } from "../../api";
import DashboardSingleHospitalScanner from "../../components/DashboardSingleScanner";

export async function loader() {
    return getHospitalScanners()
}

export default function Dashboard() {
    const data = useLoaderData()

    const hospitalScannerElements = data.map(scanner => (
        <DashboardSingleHospitalScanner key={scanner.id} scanner={scanner}/>
    ))

    return (
        <div className="dashboard--page">
            <div className="dashboard-page-container">
                <h1>Welcome!</h1>
                <div className="income-tag tags">
                    <p>Income last 30 days</p>
                    <Link to="/hospital/income">Details</Link>
                </div>
                <span>Ksh 30000000</span>
                <div className="ratings-tag tags">
                    <p>Review score</p>
                    <p><BsStarFill className="review-star"  />5.0/5</p>
                    <Link to="/hospital/reviews">Details</Link>
                </div>
                <div className="listings-tag tags">
                    <h2>Your listed scanners</h2>
                    <Link to="/hospital/scanners">View all</Link>
                </div>
                {hospitalScannerElements}
            </div>
        </div>
    )
}