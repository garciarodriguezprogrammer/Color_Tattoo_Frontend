import "./AppointmentsCards.css"


export const AdminAppointmentsCard = ({clientName, artistName, appointmentDate, descriptionTattoo, id, eliminarCita}) => {
    

    return(
        <div className="appointment-card" key={id}>
            <div className="card-content">
                <h2 id="clientName">Cliente: {clientName}</h2>
                <h2 id="artistName">Artista: {artistName}</h2>
                <h2 id="fecha_inicio">{appointmentDate}</h2>
                <h2 id="fecha_fin">{descriptionTattoo}</h2>
            </div>
            <button className="btn btn-danger" onClick={() => eliminarCita(id)}>Eliminar</button>
        </div>
    );

}


