import { AdminNavBar } from "../../Components/NavBar/adminNavBar";
import { useState, useEffect } from "react";
import { GetProfileData } from "../../services/apiCalls";
import { useSelector } from "react-redux" 


export const AdminProfile = () => {

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

            <AdminNavBar />
            <div className="d-flex justify-contents-center">
                <div className="w-80">
                   {
                    datos?(
                     <div className="card"> 
                     <div className="card-body">
                      <>
                      <h2>Nombre de admin: {datos.userName}</h2><h3>Email: {datos.email}</h3></>  
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
