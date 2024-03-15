import { useEffect, useState } from "react"
import { AdminNavBar } from "../../Components/NavBar/adminNavBar"
import "./MyAppointments.css"
import { AdminAppointmentsCard } from "../../Components/AppointmentsCards/AdminAppointmentsCards"
import { myAppointmentsCallAdmin } from "../../services/apiCalls"
import { DeleteAppointment } from "../../services/apiCalls"
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux 

export const GetMyAppointmentsAdmin = () => {

    const [appointments, setAppointments] = useState([]) 
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        if (token) {
            myAppointmentsCallAdmin(token)
                .then((response) => {
                    setAppointments(response);

                })
        }
    }, [])

    const eliminarCita = (id) => {
        DeleteAppointment(token, id)
            .then((res) => {
                //Para volver a cargar las citas, y que desaparezca la que se ha eliminado
                const updateAppointments = appointments.filter(appointment => appointment.id !== id) 
                setAppointments(updateAppointments)
            })

    }

    return (
        <>
            <AdminNavBar />
            <div className="citasContainer">
                <div className="container">
                    <h2 className="text-white">Todas las citas</h2>
                </div>
                {appointments.length > 0 ? (
                    appointments.map((appointment) => (
                        <AdminAppointmentsCard
                            key={appointment.id}
                            clientName={appointment.clientName} 
                            artistName={appointment.artistName}
                            appointmentDate={appointment.appointmentDate}
                            descriptionTattoo={appointment.descriptionTattoo}
                            id={appointment.id}
                            eliminarCita={eliminarCita}

                        />
                    ))
                ) : (
                    <p>No tienes citas programadas.</p>
                )}
            </div>
        </>
    )

}