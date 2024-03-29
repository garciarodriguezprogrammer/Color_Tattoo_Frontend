import { ArtistNavBar } from "../../Components/NavBar/artistNavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";
import { useSelector } from "react-redux" 



export const ArtistProfile = () => {

    const [datos, setDatos] = useState(null)
    const id = useSelector(state => state.auth.userId) 
    const token = useSelector(state => state.auth.token)


    useEffect(() => {
        GetProfileData(token, id)
            .then((data) => {
                setDatos(data)
            })
    }, [])


    return (
        <>

            <ArtistNavBar />
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>           
           
                <div>
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h4>Nombre de artista: {datos.userName}</h4><h5>Email: {datos.email}</h5></>  
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
