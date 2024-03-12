import axios from "axios";

//Sería una buena practica poner lo de const API_URL= etc() y sustituirmlo por lo de (`${etc}`)

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

export const myAppointmentsCall = async(token, id) => {
    try {
        const response = await axios.get("http://localhost:3000/api/appointments/getAppointmentByClient/" + id, {
            headers: {"Authorization": `Bearer ${token}`}
        })        
        return response.data   
    } catch (error) {
        console.error("Error:" + error) 
    }
} 

export const getArtistById = async(token, id) => {
    try {
        const response = await axios.get("http://localhost:3000/api/users/getArtistById/" + id, {
            headers: {"Authorization": `Bearer ${token}`}
        }) 
        console.log(response.data)    
        return response.data
    } catch (error) {
        console.error("Error:" + error) 
    }
} 

//Aqui no ponemos id porque es de todos los usuarios
export const BringAllUsers = async(token) => {
    const res = await axios.get("http://localhost:3000/api/users/getUsers", {
        headers: {"Authorization": `Bearer ${token}`}
    })
    return res.data
}

export const GetProfileData = async(token, id) => {
    try {
        const response = await axios.get("http://localhost:3000/api/users/userId/" + id, {
            headers: {"Authorization": `Bearer ${token}`}
        })     
        return response.data
    } catch (error) {
        console.error("Error:" + error) 
    }
} 

export const GetArtists = async(token) => {
    try {
        const response = await axios.get("http://localhost:3000/api/artist/getArtists/", {
            headers: {"Authorization": `Bearer ${token}`}
        })     
        return response.data
    } catch (error) {
        console.error("Error:" + error) 
    }
}

export const GuardarCita = async(datosCita, token) => {
    try {
        const response = await axios.post("http://localhost:3000/api/appointments/createAppointment/", datosCita, {
            headers: {"Authorization": `Bearer ${token}`}
        })     
        return response.data
    } catch (error) {
        console.error("Error:" + error) 
    }
}


export default {loginCall}







