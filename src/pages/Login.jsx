import React from "react";
import { Form, Link, redirect, useActionData, useLoaderData } from "react-router-dom";
import { loginUser } from "../api";

export async function loader({ request }) {
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const message = params.get("message")
    return message
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const userData = { email, password }

    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)
    const redirectTo = params.get("redirectTo") ? params.get("redirectTo") : "/hospital"

    try {
        const data = await loginUser(userData)

        localStorage.setItem("isLoggedIn", true)
        return redirect(redirectTo)
    } catch (error) {

        return error
    }

}

export default function Login() {
    const error = useActionData()

    const message = useLoaderData()
    return (
        <div className="login--page">
            <div className="login--page--container">
                {message && <h2 className="error--text">{message}</h2>}
                {error && <h2 className="error--text">{error.message}</h2>}
                <Form className="login--form" method="post">
                    <input type="email" name="email" placeholder="Email adress" />
                    <input type="password" name="password" placeholder="password" />
                    <button className="login--btn">Sign in</button>
                </Form>
                <p>Don’t have an account? 
                    <Link to="/signup" className="sign--up--link">Create one now</Link>
                </p>
            </div>
        </div>
    )
}