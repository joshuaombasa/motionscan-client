import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="home--page">
            <div className="home--page--container">
                <h1>Welcome to motionScan, your hassle-free solution for booking CT scans in leading hospitals. Our user-friendly platform simplifies the process, allowing you to secure a convenient appointment at your preferred hospital with just a few clicks.</h1>
                <p>Take the first step towards a convenient and efficient healthcare experience. Book your CT scan today with motionScan.</p>
                <Link to="/scanners">Find affordable CT scan options</Link>
            </div>
        </div>
    )
}

// With a wide network of trusted medical facilities, we prioritize your comfort and well-being, ensuring timely access to vital diagnostic services. Experience seamless booking, reliable service, and peace of mind with motionScan.