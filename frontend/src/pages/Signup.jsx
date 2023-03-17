import React from 'react'
import Header from '../components/Header'
import Form from '../components/Formsignup'
import { Link } from 'react-router-dom'
import NavBar from '../components/Navbar'
import '../styles/Register.css'


const Signup = () => {
  return (
    <div>
    <Header/>
    <div className='navbar'>
    <NavBar />
    </div>
   <div className='blocregister'>
   <Link to="/login"><div className='onglet'>Vous avez deja un compte ?</div></Link>
   <Link to="/profil"><div className='onglet'>Retour au profil</div></Link>
  <Form />
  </div>
  </div>

    
  )
}

export default Signup