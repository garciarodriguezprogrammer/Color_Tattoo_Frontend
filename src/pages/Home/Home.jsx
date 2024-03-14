import { Link } from "react-router-dom"
import './Home.css'

export const Home = () => {

    // return (
    //     <div className= "container mt-5">
    //         <div className="mt-5">
    //             <h3>Color Tattoo Estudio de Tatuajes</h3>
    //         </div>
    //         <div className="mt-5">
    //             <Link to="/login" className="btn btn-secondary">Login</Link>
    //             <Link to="/register" className="btn btn-secondary">Register</Link>
    //         </div>

    //     </div>
    // )

    return (
        <div className= "home-container">
            <div className="home-title">
                <h3 className="titulo3">Color Tattoo Estudio de Tatuajes</h3>
            </div>
            <div>
                <Link to="/login" className="btnHome btn">Login</Link>
                <Link to="/register" className="btnHome btn">Register</Link>
            </div>
        </div>
    )
}