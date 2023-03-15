import React from 'react'
import Header from '../components/Header'
import Form from '../components/Formlogin'
import '../styles/Login.css'

const Login = () => {
  return (
    <div>
    <Header/>
    <div className='LoginBloc'>
    <h1 >Connectez-vous !</h1>
    <Form/>
</div>
  </div>
    
  )
}

export default Login