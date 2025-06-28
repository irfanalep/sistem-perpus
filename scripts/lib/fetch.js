export const BASE_URL ="https://backend-basic-gdsc.vercel.app"

// function untuk ambil access token
export function getAccessToken() {
    return localStorage.getItem("accessToken")
}

// function untuk naro access token
export function putAccessToken(accessToken) {
    localStorage.setItem("accessToken", accessToken)
}

// function untuk hapus access token
export function deleteAccessToken() {
    localStorage.removeItem("accessToken")
}

//function buat fetch data
export async function fetchWithToken(url, options) {
    const response = await fetch(url, {
        ...options, 
        headers: {
            ...options.headers, 
            Authorization: `Bearer ${getAccessToken()}`, 
        }
    })

    return response.json()
}
