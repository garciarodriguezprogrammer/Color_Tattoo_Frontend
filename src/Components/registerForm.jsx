import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from "./loginForm";
import axios from "axios";

function RegisterForm(){
    // useState para agregar funcionalidades a los componentes
    //formData sera la variable donde guardaremos los datos del usuario que se registra
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: ""
    })
    //Evento para capturar los datos del formulario y guardarlos dentro de formData
    const handelChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    //Evento que usamos para hacer la request al servidor para registrar un usuario
    const handelSubmit = async(event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/register", formData)
            console.log("Mensaje" + response.data.message)
        } catch (error) {
            console.log("Error:"+ error)
        }
    }

    return(
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder= "Name" name="userName" onChange={handelChange}/>
                <input type="text" placeholder= "Email" name="email" onChange={handelChange}/>
                <input type="password" placeholder= "Password" name="password" onChange={handelChange}/>
                {/* Evento para envío de formularios */}
                <button type="submit">Register</button> 
            </form>
            
        </div>
    )
}

export default RegisterForm;