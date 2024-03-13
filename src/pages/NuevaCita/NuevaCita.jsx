import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetArtists } from "../../services/apiCalls"
import { GuardarCita } from "../../services/apiCalls"
import { NavBar } from "../../Components/NavBar/NavBar"
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA


export const NuevaCita = () => {
    const navigate = useNavigate()
    const id = useSelector(state => state.auth.userId)
    const token = useSelector(state => state.auth.token)

    useEffect(() => {
        if (!token) {
            navigate("/login")
        }
    }, [])

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [artists, setArtists] = useState([])
    const [datosCita, setDatosCita] = useState({
        idClient: id,
        idArtist: "",
        appointmentDate: "",
        descriptionTattoo: ""
    })

    useEffect(() => {
        GetArtists(token)
            .then((artists) => {
                setArtists(artists)
            })
    }, [])

    const handleChange = (e) => {
        setDatosCita({
            ...datosCita,
            [e.target.name]: e.target.value
        })
    }

    //Le enviamos la informacion de la cita al servidor
    const handleSubmit = (e) => {
        e.preventDefault()
        // Obtener la fecha y hora actual
        const currentDate = new Date();

        // Convertir la fecha y hora del formulario a objeto Date
        const appointmentDate = new Date(datosCita.appointmentDate);

        // Verificar si la cita es en un momento anterior al presente
        if (appointmentDate <= currentDate) {
            setErrorMessage("La cita no puede ser en un momento anterior al presente");
            return; // Terminar la función sin guardar la cita
        }
        GuardarCita(datosCita, token)
            .then((res) => {
                console.log(res)
                if (res) {
                    setSuccessMessage("Su cita ha sido creada exitosamente")
                    setTimeout(() => {
                        setSuccessMessage("")
                    }, 5000)
                }
            })
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <form onSubmit={handleSubmit} className="container mt-3">
                    {successMessage && (
                        <div className="alert alert-success">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="appointmentDate">Fecha y Hora</label>
                        <input type="datetime-local" onChange={handleChange} name="appointmentDate" id="appointmentDate" value={datosCita.appointmentDate} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Artista">Artista</label>
                        <select name="idArtist" id="" onChange={handleChange}>
                            <option value="">Selecciona un artista</option>
                            {artists.map((artist) => (
                                <option value={artist.id} key={artist.id}>
                                    {artist.userName}
                                </option>
                            ))}

                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="descriptionTattoo">Descripción</label>
                        <textarea name="descriptionTattoo" id="" cols="30" rows="10" onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-secondary">Confirmar</button>
                    </div>
                </form>
            </div>
        </>
    )

}