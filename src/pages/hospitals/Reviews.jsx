import React from "react";
import { BsStarFill } from 'react-icons/bs';

export default function Reviews() {
    const scannerReviewsData = [
        {
            rating: 5,
            name: "John",
            date: "February 15, 2023",
            text: "Oasis General Hospital's Siemens SOMATOM Definition AS+ scanner played a crucial role in my diagnosis. The high-resolution imaging provided by this machine allowed the doctors to identify my condition accurately, leading to timely and effective treatment. I am grateful for the precision and clarity it offered in my diagnosis.",
            id: "1",
        },
        {
            rating: 4,
            name: "Maria",
            date: "March 8, 2023",
            text: "Horizon View Health Center's scanner (Hitachi Scenaria) significantly aided in my diagnosis. Despite a minor issue during the scan, the detailed imaging it provided helped the medical team identify the root cause of my condition. The reduced radiation exposure was an added benefit, ensuring a safe and accurate diagnosis process.",
            id: "4",
        },
        {
            rating: 5,
            name: "David",
            date: "April 20, 2023",
            text: "The GE Optima CT660 at Apex Care Hospital played a vital role in my diagnosis journey. Its exceptional image quality and rapid scanning capabilities allowed the medical professionals to pinpoint the issue promptly, leading to a well-informed and effective treatment plan. The experience with this scanner undoubtedly contributed to a positive outcome in my diagnosis.",
            id: "6",
        }
    ]

    const StarRating = ({ rating }) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<BsStarFill className="review-star" key={i} />);
            } else {
                stars.push(<BsStarFill key={i} style={{ opacity: 0.5 }} />);
            }
        }
        return <div>{stars}</div>;
    };


    const reviewElements = scannerReviewsData.map(review => (
        <div key={review.id} className="reviews-card">
            <StarRating rating={review.rating} />
            <div className="info">
                <p className="name">{review.name}</p>
                <p className="date">{review.date}</p>
            </div>
            <p className="text">{review.text}</p>
        </div>
    ))

    return (
        <section className="reviews--page">
            <div className="reviews-page-container">
                <div className="top--text">
                    <h1>Your reviews</h1>
                    <span>Last 30 days</span>
                </div>
                {reviewElements}
            </div>
        </section>
    )
}