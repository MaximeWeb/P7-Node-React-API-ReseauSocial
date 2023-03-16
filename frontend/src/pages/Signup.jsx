import React from 'react'
import Header from '../components/Header'
import Form from '../components/Formsignup'
import { Link } from 'react-router-dom'
import '../styles/Signup.css'






const Signup = () => {
  return (
<div>
    <Header/>
     <div className='SignupBloc'>
     <Link to="/signup"><div className='onglet'>S'inscrire</div></Link>
    <Link to="/login"><div className='onglet'>Se connecter</div></Link>
   <Form/>
    </div>
</div>
    
  )
}

export default Signup