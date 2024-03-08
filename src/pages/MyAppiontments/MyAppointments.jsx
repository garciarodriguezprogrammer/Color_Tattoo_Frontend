import { useEffect, useState } from "react"

export const GetMyAppointments = () => {

    const [appointment, setAppointment] = useState([])
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const id = localStorage.getItem("id")
        const token = localStorage.getItem("token")
        console.log(id)
        if(id) {
            
        }
    })

}