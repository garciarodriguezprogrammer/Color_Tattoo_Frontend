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
                const isArtist = decodedToken.rol.includes("artist")
                const isAdmin = decodedToken.rol.includes("admin")

                
                localStorage.setItem("id", decodedToken.id)  //Hemos gardado el id en localStorage para que sea accesible en toda la pagina y evitar llamadas a la api
                localStorage.setItem("token", res.token)  //Hemos gardado el token en localStorage para que sea accesible en toda la pagina y evitar llamadas a la api
                if (isUser) {
                    navegar("/profile")
                } else if(isArtist) {
                    navegar("/profileArtist")
                } else if (isAdmin) {
                    navegar ("/profileAdmin")
                }
            }
        })
 
    }
    return (
        <div className="container mt-5 row">
             <div className="container bg-danger" ref={errorRef} style={{display:"none"}}>This user already exists</div>
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

