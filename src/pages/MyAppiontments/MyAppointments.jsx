import { useEffect, useState } from "react"
import { myAppointmentsCall } from "../../services/apiCalls"
import { AppointmentsCard } from "../../Components/AppointmentsCards/AppointmentsCards"
import { NavBar } from "../../Components/NavBar/NavBar"
import "./MyAppointments.css"

export const GetMyAppointments = () => {

    const [appointments, setAppointments] = useState([])
    const [artist, setArtist] = useState([])
    
    //Esta funcion es un ejemplo de cuando recuperamos el token para ejecutar la funcion
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
    },[])

    return (
        <>
        <NavBar/> 
        <div className="citasContainer">
        <h2>Mis citas</h2>
        {appointments.length > 0 ? (
            appointments.map((appointment) => (
                <AppointmentsCard
                    key={appointment.id}
                    artistName={appointment.artistName} // Asegúrate de que estos nombres coincidan con los de tus datos
                    appointmentDate={appointment.appointmentDate}
                    descriptionTattoo={appointment.descriptionTattoo}
                    id={appointment.id}
                />
            ))
        ) : (
            <p>No tienes citas programadas.</p>
        )}
        </div>
        </>
    )

}