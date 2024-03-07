import { useState } from "react";
import {loginCall} from "../../services/apiCalls"
import { AuthInput } from "../../Components/AuthInput/AuthInput";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

 export function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const navegar = useNavigate();

    const handleChange = (event) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        loginCall(loginData)
        .then((res) => {
           console.log(res)
            if(!res.token) {
                navegar("/login");
                return null;                
            } else {
                const decodedToken = jwtDecode(res.token)
                const isUser = decodedToken.rol.includes("user")
                console.log(decodedToken)
                if (isUser) {
                    navegar("/profile")
                }
            }
        })
        // console.log("Mensaje" + res.data.message)
        // console.log("Token " + res.data.token)
    }
    return (
        <div className="container mt-5 row">
            <form onSubmit={handleSubmit}>
                <AuthInput type={"text"} placeholder={"Email"} handler={handleChange} name={"email"} /> <br /> <br />
                <AuthInput type={"password"} placeholder={"Password"} handler={handleChange} name={"password"} />
                {/* Evento para envío de formularios */}
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

// return (
//     <div className="container mt-5 row">
//         <form onSubmit={handelSubmit}>
//             <input type="text" placeholder="Email" onChange={handelChange} name="email" /> <br /> <br />
//             <input type="password" placeholder="Password" onChange={handelChange} name="password" />
//             {/* Evento para envío de formularios */}
//             <button type="submit">Login</button>
//         </form>
//     </div>
// )

