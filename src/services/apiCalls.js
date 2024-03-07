import axios from "axios";

export const loginCall = async(loginData) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/login", loginData)
        return response.data;
    } catch (error) {
        console.log("Error:"+ error)
    }
}

export const registerCall = async(formData) => {
    try {
        const response = await axios.post("http://localhost:3000/api/auth/register", formData)       
        return response.data;
    } catch (error) {
        console.log("Error:"+ error)
    }
}

export default {loginCall}