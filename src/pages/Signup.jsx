import React from "react";
import { Form } from "react-router-dom";

export async function loader({request}) {
    return null
}

export async function action({request}) {
    return null
}

export default function Signup() {
    return (
        <div className="signup--page">
            <div className="sign--up--page--container">
                <h1>Register via email and phone</h1>
                <Form className="signup--form">
                    <input type="email" name="email" placeholder="Enter email" />
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="text" name="firstName" placeholder="First name"/>
                    <input type="text" name="lastName" placeholder="Last name"/>
                    <input type="tel" name="phoneNumber" placeholder="Phone (digits only)"/>
                    <button className="login--btn">Register</button>
                </Form>
                <p>Already have an account? <span className="sign--up--link"> Sign in</span></p>
            </div>
        </div>
    )
}