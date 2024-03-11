import { useEffect, useState } from 'react'
import './AllUsers.css'
import { BringAllUsers } from '../../services/apiCalls'
import { AllUsersCard } from '../../Components/AllUsersCard/AllUsersCard'
import { AdminNavBar } from '../../Components/NavBar/adminNavBar'
import "./AllUsers.css"



export const AllUsers = () => {
    const [users, setUsers] = useState([]) //Funcion que nos permite acceder y actualizar el estado de users


    useEffect(() => {  
        const token =  localStorage.getItem('token')        
        BringAllUsers(token)
        .then((users) => {
             setUsers(users)
            console.log(users)
         })        
    }, [])



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
                                email={user.email}>
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