import "./AppointmentsCards.css"

export const AppointmentsCard = ({ artistName, appointmentDate, descriptionTattoo, id, modificarCita }) => {
    return (

        <div className="appointment-card" key={id}>
            <div className="card-content">
                <h2 id="artistName">{artistName}</h2>
                <h2 id="fecha_inicio">{appointmentDate}</h2>
                <h2 id="fecha_fin">{descriptionTattoo}</h2>
                <div>
                    <button className="btn btn-secondary" onClick={() => modificarCita({
                        id: id,
                        artistName: artistName,
                        appointmentDate: appointmentDate,
                        descriptionTattoo: descriptionTattoo
                    })}>Modificar</button>
                </div>
            </div>
        </div>
    );

}

