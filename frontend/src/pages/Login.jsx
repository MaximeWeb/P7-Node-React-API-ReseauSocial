import React from 'react'
import Header from '../components/Header'
import Form from '../components/Formlogin'
import { Link } from 'react-router-dom'
import '../styles/Profil.css'

const Login = () => {
  return (
    <div>
    <Header/>
   <div className='ProfilBloc'>
   <Link to="/signup"><div className='onglet'>Inscrivez-vous !</div></Link>
   <Link to="/profil"><div className='onglet'>Retour au profil</div></Link>
    <Form/>
  
  </div>
</div>
    
  )
}

export default Login