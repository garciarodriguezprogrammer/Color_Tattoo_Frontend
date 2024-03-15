import { Link } from "react-router-dom"
import './Home.css'

export const Home = () => {



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