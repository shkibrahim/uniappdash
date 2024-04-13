import { BASE_URL, POST_REQUEST, loginUrl, registerUrl } from "./apiHelper"

export const signIn = async ({ email, password }) => {
    const loginUri = `${BASE_URL}${loginUrl}`
    try {
        const response = await fetch(loginUri, {
            method: POST_REQUEST,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email,password})
        })
        const token = await response.json()
        return token;
    } catch (error) {
        console.log(error)
    }
}

export const register = async ({ name, email, password, address, phone }) => {
    const registerUri = `${BASE_URL}/$${registerUrl}`
    try {
        const response = await fetch(registerUri, {
            method: POST_REQUEST,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name, email, password, address, phone)
        })
        console.log(await response.json())
    } catch (error) {
        console.log(error)
    }
}