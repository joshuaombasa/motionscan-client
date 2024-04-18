import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

export async function loader({ request }) {
    return null
}

export async function action({ request }) {
    return null
}

export default function Signup() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: ''
    })



    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const res = await fetch('http://localhost:3000/api/users', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json()
        console.log(data)
        if (res.ok) {
            setFormData({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                phoneNumber: ''
            })
        }
    }

    return (
        <div className="signup--page">
            <div className="sign--up--page--container">
                <h1>Register via email and phone</h1>
                <form onSubmit={handleSubmit} className="signup--form">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <label htmlFor="firstName">FirstName</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                    <label htmlFor="lastName">LastName</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                    <label htmlFor="phoneNumber">PhoneNumber</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        placeholder="Phone (digits only)"
                        onChange={handleChange}
                        value={formData.phoneNumber}
                    />
                    <button className="login--btn">Register</button>
                </form>
                <p>Already have an account?
                    <Link to="/login" className="sign--up--link">  Sign in</Link>
                </p>
            </div>
        </div>
    )
}