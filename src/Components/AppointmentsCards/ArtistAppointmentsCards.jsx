import "./AppointmentsCards.css"

export const ArtistAppointmentsCard = ({clientName, appointmentDate, descriptionTattoo, id}) => {
    
    return(
        <div className="appointment-card" key={id}>
            <div className="card-content">
            <h2 id="clientName">{clientName}</h2>
            <h2 id="fecha_inicio">{appointmentDate}</h2>
            <h2 id="fecha_fin">{descriptionTattoo}</h2>
            </div>
        </div>
    );

}


