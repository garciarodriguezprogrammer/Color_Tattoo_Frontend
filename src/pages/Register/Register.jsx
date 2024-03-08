import { useState } from "react";
import { registerCall } from "../../services/apiCalls";
import { AuthInput } from "../../Components/AuthInput/AuthInput";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function RegisterForm(){
    //useRef para hacer referencias a elementos Html
    const errorRef = useRef(null)
    // useState para agregar funcionalidades a los componentes
    //formData sera la variable donde guardaremos los datos del usuario que se registra
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        password: ""
    })
    //Evento para capturar los datos del formulario y guardarlos dentro de formData
    const handleChange = (event) => {
        setFormData({
            ...formData, 
            [event.target.name]: event.target.value
        })
    }
    const navegar = useNavigate()

    //Evento que usamos para hacer la request al servidor para registrar un usuario
    const handleSubmit = async(event) => {
        event.preventDefault();
        registerCall(formData)
        .then(data => {
            // console.log(data)
            if(!data) {
                errorRef.current.style.display = "block"
            }
            else {
                navegar("/login")
            }
        }) 
    }

    return(
        <div>
            {/* El siguiente div es para el error al registrarse */}
            <div className="container bg-danger" ref={errorRef} style={{display:"none"}}>This user already exists</div>
           {/* Formulario de registro, importamos AuthInput desde componentes */}
            <form onSubmit={handleSubmit}>
                <AuthInput type={"text"} placeholder= {"Name"} name={"userName"} handler={handleChange}/>
                <AuthInput type={"text"} placeholder= {"Email"} name={"email"} handler={handleChange}/>
                <AuthInput type={"password"} placeholder= {"Password"} name={"password"} handler={handleChange}/>
                {/* Evento para envío de formularios */}
                <button type="submit">Register</button> 
            </form>
            
        </div>
    )
}

