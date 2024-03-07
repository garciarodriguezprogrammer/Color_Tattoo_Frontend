import { Link } from "react-router-dom"

export const Home = () => {

    return (
        <div className= "container mt-5">
            <div className="mt-5">
                <h3>Color Tattoo Estudio de Tatuajes</h3>
            </div>
            <div className="mt-5">
                <Link to="/login" className="btn btn-secondary">Login</Link>
                <Link to="/register" className="btn btn-secondary">Register</Link>
            </div>

        </div>
    )
}