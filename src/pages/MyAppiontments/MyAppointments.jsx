import { useEffect, useState } from "react"
import { myAppointmentsCall } from "../../services/apiCalls"

export const GetMyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [artist, setArtist] = useState([])

    useEffect(() => {
        const id = localStorage.getItem("id")
        const token = localStorage.getItem("token")
        console.log(id)
        if(id && token) {
            myAppointmentsCall(token, id)
            .then((res) => {
                console.log(res)
                setAppointments(res)
            })
        }
    })

}