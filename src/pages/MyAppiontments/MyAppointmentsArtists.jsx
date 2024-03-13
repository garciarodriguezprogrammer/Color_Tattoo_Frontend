import { useEffect, useState } from "react"
import { ArtistNavBar } from "../../Components/NavBar/artistNavBar"
import "./MyAppointments.css"
import { ArtistAppointmentsCard } from "../../Components/AppointmentsCards/ArtistAppointmentsCards"
import { myAppointmentsCallArtist } from "../../services/apiCalls"
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA

export const GetMyAppointmentsArtist = () => {

    const [appointments, setAppointments] = useState([])
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)

    
    //Esta funcion es un ejemplo de cuando recuperamos el token para ejecutar la funcion
    useEffect(() => { 
        if(id && token) {
            myAppointmentsCallArtist(token, id)
            .then((response) => {                                     
                setAppointments(response);        

            })
        }
    },[])

    return (
        <>
        <ArtistNavBar/> 
        <div className="citasContainer">
            <div className="container">
                <h2 >Mis citas</h2>
            </div> 
                {appointments.length > 0 ? (
                appointments.map((appointment) => (
                    <ArtistAppointmentsCard
                        key={appointment.id}
                        clientName={appointment.clientName} // Asegúrate de que estos nombres coincidan con los de tus datos
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