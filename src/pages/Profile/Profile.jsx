import { NavBar } from "../../Components/NavBar/NavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";



export const Profile = () => {

    const [datos, setDatos] = useState(null)

    useEffect(() => {
        const id = localStorage.getItem("id")
        const token = localStorage.getItem("token")
        GetProfileData(token, id)
            .then((data) => {
                console.log(data)
                setDatos(data)
            })
    }, [])


    return (
        <>

            <NavBar />
            <div className="d-flex justify-contents-center">
                <div className="w-80">
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h2>Nombre de usuario: {datos.userName}</h2><h3>Email: {datos.email}</h3></>  
                      </div>
                      </div>
                    )
                    :(
                        <p>No hay datos para mostrar</p>)
                   }
                </div>
            </div>
        </>
    )
}