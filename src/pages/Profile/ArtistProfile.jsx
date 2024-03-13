import { ArtistNavBar } from "../../Components/NavBar/artistNavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA



export const ArtistProfile = () => {

    const [datos, setDatos] = useState(null)
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)


    useEffect(() => {
        GetProfileData(token, id)
            .then((data) => {
                console.log(data)
                setDatos(data)
            })
    }, [])


    return (
        <>

            <ArtistNavBar />
            <div className="d-flex justify-contents-center">
                <div className="w-80">
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h2>Nombre de artista: {datos.userName}</h2><h3>Email: {datos.email}</h3></>  
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
