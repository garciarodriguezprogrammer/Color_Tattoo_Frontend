import { useEffect, useState } from 'react'
import './AllUsers.css'
import { BringAllUsers } from '../../services/apiCalls'
import { AllUsersCard } from '../../Components/AllUsersCard/AllUsersCard'
import { AdminNavBar } from '../../Components/NavBar/adminNavBar'
import "./AllUsers.css"
import { DeleteUsers } from '../../services/apiCalls'
import { useSelector } from "react-redux" //Esto es para recuperar datos del estado de redux AHORA


export const AllUsers = () => {
    const [users, setUsers] = useState([]) //Funcion que nos permite acceder y actualizar el estado de users
    const token = useSelector(state => state.auth.token)


    useEffect(() => {  
        // const token =  localStorage.getItem('token')        
        BringAllUsers(token)
        .then((users) => {
             setUsers(users)
            console.log(users)
         })        
    }, [])

    const eliminarUsuario = (id) => {
        console.log("Se ha eliminado el usuario con id" + id)
        const token = localStorage.getItem('token')
        DeleteUsers(token, id)
            .then((res) => {
                console.log(res)
                //Para volver a cargar las citas, y que desaparezca la que se ha eliminado
                const updateUsers = users.filter(user => user.id !== id) 
                setUsers(updateUsers)
            })
    }

    return (
        <>
        <AdminNavBar/>
        <div className="miDiv">
           
            {/* Este boton de abajo ya me sobraría para obtener los personajes, ya que tambien lo quitare de arriba */}
            {/* <div className="apiCallButton" onClick={buttonHandler}>Chars</div>
            <div className="apiCallButton" onClick={loginHandler}>Login</div> */}

            {/* Esto a continuacion tiene que quedarse */}
            <div className="citasContainer">
                {users.length > 0 && (
                    <>
                        {users.map((user) => {
                            return (<AllUsersCard
                                key={user.id}                                
                                userName={user.userName}
                                email={user.email}
                                eliminarUsuario={() => eliminarUsuario(user.id)}
                                >
                            </AllUsersCard>
                            )
                        })}
                    </>
                )

                }

            </div>
        </div>
        </>
    )

}