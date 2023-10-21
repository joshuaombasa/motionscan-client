import { redirect } from "react-router-dom"


export default async function authRequired(request) {
    const url = new URL(request.url)
    const pathname = url.pathname
 
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    if (!isLoggedIn) {
        throw redirect(`/login?message=Please login first&redirectTo=${pathname}`)
    }
}