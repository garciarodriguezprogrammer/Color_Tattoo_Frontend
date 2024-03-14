import { useEffect, useState } from "react"
import { myAppointmentsCall } from "../../services/apiCalls"
import { AppointmentsCard } from "../../Components/AppointmentsCards/AppointmentsCards"
import { NavBar } from "../../Components/NavBar/NavBar"
import "./MyAppointments.css"
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA
import { useNavigate } from "react-router-dom"



export const GetMyAppointments = () => {
    const [appointments, setAppointments] = useState([])
    //Esta funcion es un ejemplo de cuando recuperamos el token para ejecutar la funcion
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)
    useEffect(() => {     
        if (id && token) {
            myAppointmentsCall(token, id)
                .then((res) => {
                    setAppointments(res)
                })
        }
    }, [])

    const navegar = useNavigate()

    const modificarCita = (appointment) => {
        navegar("/modificarCita", {state: {appointment}})
    }

    return (
        <>
            <NavBar />
            <div className="citasContainer">
                <div className="container">
                    <h2 >Mis citas</h2>
                </div>
                
                    {appointments.length > 0 ? (
                        appointments.map((appointment) => (
                            <AppointmentsCard
                                key={appointment.id}
                                artistName={appointment.artistName} // Asegúrate de que estos nombres coincidan con los de tus datos
                                appointmentDate={appointment.appointmentDate}
                                descriptionTattoo={appointment.descriptionTattoo}
                                id={appointment.id}
                                modificarCita={modificarCita}
                            />
                        ))
                    ) : (
                        <p>No tienes citas programadas.</p>
                    )}
               
            </div>
        </>
    )

}