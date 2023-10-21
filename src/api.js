

export async function getAllHospitalMachines() {
    const res = await fetch("http://localhost:3000/api/scanners")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText,
        }
    }

    return data
}

export async function getHospitalDetails(id) {
    const res =  await fetch(`http://localhost:3000/api/scanners/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText,
        }
    }

    return data
}

export async function getHospitalScanners() {
    const res = await fetch("http://localhost:3000/api/hospital/scanners")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText,
        }
    }

    return data
}

export async function getSelectedHospitalScanner(id) {
    const res =  await fetch(`http://localhost:3000/api/scanners/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText,
        }
    }

    return data
}

export async function loginUser(userData) {
    const res = await fetch("http://localhost:3000/api/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText: res.statusText,
        }
    }

    return data
}