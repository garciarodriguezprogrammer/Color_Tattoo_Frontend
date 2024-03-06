import { useState } from "react";
import {loginCall} from "../../services/apiCalls"

 export function LoginForm() {
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
        const res = loginCall(loginData)
        console.log("Mensaje" + res.data.message)
        console.log("Token " + res.data.token)
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



