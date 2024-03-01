import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginForm from "./Components/loginForm"
import RegisterForm from './Components/registerForm'

//Para las rutas de navegación dentro de la web, carga los componentes
function App() {


  return (
    <Router>
      <div className= "App">
        <Routes>
          <Route path="/login/" element={<LoginForm/>}></Route>
          <Route path="/register/" element={<RegisterForm/>}></Route>
         
        </Routes>
      </div>
    </Router>

  )
}

export default App
