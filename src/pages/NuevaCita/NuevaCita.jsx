import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetArtists } from "../../services/apiCalls"
import { GuardarCita } from "../../services/apiCalls"
import { NavBar } from "../../Components/NavBar/NavBar"


export const NuevaCita = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    useEffect(() => {
        if(!token) {
            navigate("/login")
        }
    }, [])

    const [successMessage, setSuccessMessage] = useState("")
    const id = localStorage.getItem("id")
    const [artists, setArtists] = useState([])
    const [datosCita, setDatosCita] = useState({
        idClient: id,
        idArtist: "",
        appointmentDate: "",
        descriptionTattoo: ""
    })

    useEffect(() =>{
        GetArtists(token)
        .then((artists) =>{           
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
        GuardarCita(datosCita, token)
        .then((res) => {
            console.log(res)
            if(res){
                setSuccessMessage("Su cita ha sido creada exitosamente")
                setTimeout(() =>{
                    setSuccessMessage("")
                }, 5000)
            }
        })
    }

    return(
        <>
        <NavBar/>
        <div className="container">
            <form onSubmit={handleSubmit} className="container mt-3">
                {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                )}
                <div className="mb-3">
                    <label htmlFor="appointmentDate">Fecha y Hora</label>
                    <input type="datetime-local" onChange={handleChange} name="appointmentDate" id="appointmentDate" value={datosCita.appointmentDate} className="form-control"/>
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