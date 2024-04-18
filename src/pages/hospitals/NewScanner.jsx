import { useState } from "react"
import { createScanner } from "../../api"


export default function NewHospital() {

    const [formData, setFormData] = useState({
        hospitalName: '',
        status: '',
        price: 0,
        imageUrl: '',
        description: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)

        const res = await fetch("http://localhost:3000/api/scanners", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const data = await res.json()
        console.log(data)
    }

    return (
        <div className="new-hospital-page">
            <div className=".new-hospital-page-container">
            <h1>Add new hospital:</h1>

            <form onSubmit={handleSubmit} className="new-hospital-form">

                <div className="">
                    <label htmlFor="hospitalName">Hospital Name:</label>
                    <input
                        type="text"
                        name="hospitalName"
                        id="hospitalName"
                        onChange={handleChange}
                        value={formData.hospitalName}
                    />
                </div>
                <div className="">
                    <label htmlFor="status">Status:</label>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        onChange={handleChange}
                        value={formData.status}
                    />
                </div>
                <div className="">
                    <label htmlFor="price">Price per session(Ksh/hr):</label>
                    <input
                        type="Number"
                        name="price"
                        id="price"
                        onChange={handleChange}
                        value={formData.price}
                    />
                </div>
                <div className="">
                    <label htmlFor="imageUrl">Image URI:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        onChange={handleChange}
                        value={formData.imageUrl}
                    />
                </div>
                <div className="">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={formData.description}
                    />

                </div>

                <button className="signup-btn">Submit</button>
            </form>
        </div>
        </div >
    )
}
