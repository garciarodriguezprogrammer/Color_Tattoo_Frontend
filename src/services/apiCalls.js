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

export const myAppointmentsCall = async(token, id) => {
    try {
        const response = await axios.get("http://localhost:3000/api/appointments/getAppointmentByClient/" + id, {
            headers: {"Authorization": `Bearer ${token}`}
        })     
       const appointments = response.data
       const appointmentsWithArtistName = []
       for (const appointment of appointments) {
        const artistId = appointment.id
        const artistDetails = await getArtistById(token, artistId);
        if(artistDetails) {
            appointmentsWithArtistName.push({
                ...appointment, 
                artistName: artistDetails.userName
            })
        } else {
            appointmentsWithArtistName.push(appointment)
        }
       }
        return appointmentsWithArtistName
    } catch (error) {
        console.error("Error:" + error) 
    }
} 

export const getArtistById = async(token, id) => {
    try {
        const response = await axios.get("http://localhost:3000/api/users/userId/" + id, {
            headers: {"Authorization": `Bearer ${token}`}
        })     
        return response.data
    } catch (error) {
        console.error("Error:" + error) 
    }
} 

export default {loginCall}