//Sitio para definir las rutas de mi aplicación para luego ir navegando por todas ellas 
//a través del navegador
//Este Body se va a usar en el para dentro de él ir importando las distintas vistas
import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { LoginForm } from "../Login/Login"
import { RegisterForm } from "../Register/Register"



export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>} /> {/* //Para que cada vez que se indique una ruta distinta de las que tenemos aquí listadas, nos dirija a la página */}
                <Route path="/" element={<Home/>} /> {/* //Aqui indicamos la ruta de la vista del Home, componente de React */}
                <Route path="/login/" element={<LoginForm/>}></Route>
                <Route path="/register/" element={<RegisterForm/>}></Route>
            </Routes>
        </>
    )

}