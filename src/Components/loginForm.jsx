import { useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const handelChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }
    const handelSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", loginData)
            console.log("Mensaje" + response.data.message)
            console.log("Token " + response.data.token)
        } catch (error) {
            console.log("Error:"+ error)
        }
        console.log(loginData);
    }
    return (
        <div className="container mt-5 row">
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Email" onChange={handelChange} name="email" /> <br /> <br />
                <input type="password" placeholder="Password" onChange={handelChange} name="password" />
                {/* Evento para envío de formularios */}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;