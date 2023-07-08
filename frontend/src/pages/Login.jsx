import React from 'react'
import FormLogin from '../components/Formlogin'
import Formsignup from '../components/Formsignup'
import { useState } from 'react'
import '../styles/Register.css'


const Login = ({url}) => {
const [isLogin, setIsLogin] = useState(true);

  return (
<div className='boxregister'>
  <div>
    <h1>Groupomania </h1>
    <h2>Avec Groupomania, partagez et restez en contact avec votre entourage.</h2>
  </div>
  <div>
   {isLogin ? (<FormLogin url= {url}/>) : (<Formsignup url= {url}/>)}
   <span className='switchlogin' style={{cursor:"pointer"}} onClick={()=>setIsLogin(!isLogin)}> {isLogin ? "Créer un nouveau compte" : "Vous avez deja un compte ? Connectez-vous"}     </span>
 </div>

 </div>
   
  )
}

export default Login