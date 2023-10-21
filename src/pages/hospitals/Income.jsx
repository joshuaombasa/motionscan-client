import React from "react";

export default function Income() {
    const incomeData = [
        { amount: 720000, date: "February 15, 2023", id: "1" },
        { amount: 560000, date: "March 8, 2023", id: "2" },
        { amount: 980000, date: "April 20, 2023", id: "3" },
    ];

    const transactionElements = incomeData.map(item => (
        <div className="transaction--item" key={item.id}>
            <h3>Ksh {item.amount}</h3>
            <h4>{item.date}</h4>
        </div>
    ))
    return (
        <div className="income--page">
            <div className="income--page--container">
                <h1>Income</h1>
                <p>Last 30 days</p>
                <span>Ksh 3000000</span>
                <div className="transactions">
                    <h2>Your transactions</h2>
                    <p>Last 30 days</p>
                </div>
                {transactionElements}
            </div>
        </div>
    )
}