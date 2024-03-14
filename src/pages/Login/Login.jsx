import { useState } from "react";
import { loginCall } from "../../services/apiCalls"
import { AuthInput } from "../../Components/AuthInput/AuthInput";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/AuthSlice"

export function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const errorRef = useRef(null)
    const dispatch = useDispatch()
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
                if (!res) {
                    console.log(res)
                    errorRef.current.style.display = "block"
                    navegar("/login");
                    return null;
                } else {
                    const decodedToken = jwtDecode(res.token)
                    const isUser = decodedToken.rol.includes("user")
                    const isArtist = decodedToken.rol.includes("artist")
                    const isAdmin = decodedToken.rol.includes("admin")
                    //Mediante dispatch guardamos el token y el id
                    dispatch(setCredentials({
                        token: res.token,
                        userId: decodedToken.id
                    }))
                    // localStorage.setItem("id", decodedToken.id)  //Hemos gardado el id en localStorage para que sea accesible en toda la pagina y evitar llamadas a la api
                    // localStorage.setItem("token", res.token)  //Hemos gardado el token en localStorage para que sea accesible en toda la pagina y evitar llamadas a la api
                    if (isUser) {
                        navegar("/profile")
                    } else if (isArtist) {
                        navegar("/profileArtist")
                    } else if (isAdmin) {
                        navegar("/profileAdmin")
                    }
                }
            })

    }
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col">
                    <p className="bg-danger" ref={errorRef} style={{ display: "none" }}>Your email or password is wrong</p>

                    <div className="card p-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <AuthInput
                                    type="text"
                                    placeholder="Email"
                                    handler={handleChange}
                                    name="email"
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <AuthInput
                                    type="password"
                                    placeholder="Password"
                                    handler={handleChange}
                                    name="password"
                                    className="form-control"
                                />
                            </div>
                            <button type="submit" className=" btn-primary w-100">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

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

