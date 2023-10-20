import React from "react";
import aboutpg1 from "../assets/aboutpg1.jpg"
import aboutpg2 from "../assets/aboutpg2.jpg"
import aboutPage3 from "../assets/aboutPage3.jpg"
import aboutPage4 from "../assets/aboutPage4.jpg"
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about--page">
            <div className="images--section">
                <img src={aboutpg1} alt="" />
                <img src={aboutpg2} alt="" />
                <img src={aboutPage3} alt="" />
                <img src={aboutPage4} alt="" />
            </div>
            <div className="about--page--container">
                <h1>Your health matters, and so does your peace of mind. Discover a new era of affordable diagnostics with us.</h1>
                <p>At motionScan, we are dedicated to simplifying the process of booking CT scans, making it convenient and accessible for everyone. Our mission is to provide a user-friendly platform that connects individuals in need of critical diagnostic services with top-tier medical facilities.</p>
                <p> By leveraging the latest technology and a network of trusted hospitals, we strive to streamline the healthcare journey for our users.</p>
                <div className="about--page--cta">
                    <h2>Your well-being is our priority, and we are dedicated to providing you with a seamless and stress-free experience every step of the way</h2>
                    <Link to="/scanners">Explore our options</Link>
                </div>
            </div>

        </div>
    )
}