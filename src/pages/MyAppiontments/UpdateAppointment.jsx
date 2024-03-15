import { useLocation, useNavigate } from "react-router-dom"
import React from "react"
import { useState } from "react"
import { NavBar } from "../../Components/NavBar/NavBar"
import { useSelector } from "react-redux"
import { UpdateAppointment } from "../../services/apiCalls"



export const ModificarCita = () => {
    const location = useLocation()
    const navegar = useNavigate()
    const { appointment } = location.state

    const [formData, setFormData] = useState({
        appointmentDate: appointment.appointmentDate,
        descriptionTattoo: appointment.descriptionTattoo
    })

    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const token = useSelector(state => state.auth.token)
    const id = appointment.id
    const handleUpdate = (e) => {
        e.preventDefault()
        UpdateAppointment(token, formData, id)
        .then((res) =>{
            if(res){
                navegar("/getAppointments")
            }
        })
    }
    //Para formatear la fecha
    const formatDate = (fecha) => {
        if(!fecha) return ""
        const date = new Date(fecha)
        const year = date.getFullYear()
        const month = (date.getMonth() +1 ).toString().padStart(2, "0")
        const day = date.getDate().toString().padStart(2, "0")
        const hour = date.getHours().toString().padStart(2, "0")
        const minute = date.getMinutes().toString().padStart(2, "0")
        return `${year}-${month}-${day} ${hour}:${minute}`
    }

    return (
        <>
            <NavBar />
            <div className="container">
                <form onSubmit={handleUpdate} className="container mt-3">
                    {successMessage && (
                        <div className="alert alert-success">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="alert alert-danger">{errorMessage}</div>
                    )}
                    <div className="mb-3">
                        <label htmlFor="appointmentDate">Fecha y Hora</label>
                        <input type="datetime-local" name="appointmentDate" onChange={handleChange} id="appointmentDate" defaultValue={formatDate(appointment.appointmentDate)} className="form-control" />
                    </div>                   
                    <div className="mb-3">
                        <label htmlFor="descriptionTattoo">Descripción</label>
                        <textarea name="descriptionTattoo" id="" onChange={handleChange} cols="30" rows="10" defaultValue={appointment.descriptionTattoo}></textarea>
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-secondary">Actualizar</button>
                    </div>
                </form>
            </div>
        </>
    )
    
}