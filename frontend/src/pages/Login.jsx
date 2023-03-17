import React from 'react'
import Header from '../components/Header'
import Form from '../components/Formlogin'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navbar'
import '../styles/Register.css'


const Login = () => {
  return (
    <div>
    <Header/>
    <div className='navbar'>
    <NavBar />
    </div>
    <div className='blocregister'>
   <Link to="/signup"><div className='onglet'>Inscrivez-vous !</div></Link>
   <Link to="/profil"><div className='onglet'>Retour au profil</div></Link>
    <Form/>
  </div>
  </div>

    
  )
}

export default Login