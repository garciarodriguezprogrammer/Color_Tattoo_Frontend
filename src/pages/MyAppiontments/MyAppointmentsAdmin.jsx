import { useEffect, useState } from "react"
import { AdminNavBar } from "../../Components/NavBar/adminNavBar"
import "./MyAppointments.css"
import { AdminAppointmentsCard } from "../../Components/AppointmentsCards/AdminAppointmentsCards"
import { myAppointmentsCallAdmin } from "../../services/apiCalls"
import { DeleteAppointment } from "../../services/apiCalls"
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA

export const GetMyAppointmentsAdmin = () => {

    const [appointments, setAppointments] = useState([]) 
    const token = useSelector(state => state.auth.token)


    //Esta funcion es un ejemplo de cuando recuperamos el token para ejecutar la funcion
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
                console.log(res)
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
                            clientName={appointment.clientName} // Asegúrate de que estos nombres coincidan con los de tus datos
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