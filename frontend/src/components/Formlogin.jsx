import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthState } from '../atoms'
import '../styles/Register.css'



const FormLogin = ({url}) => {
 const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [connectState, setConnectState] = useAuthState()

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios.post(url+'user/login', {email,password})
    .then(res => {
      localStorage.setItem("profil",JSON.stringify(res.data)) 
      setConnectState({loggedIn: true, token: res.data.token})
      navigate("/accueil");
    })
    .catch (err => { 
      if (err.response.data.errorEmail){
      emailError.innerHTML =  err.response.data.errorEmail; 
    } else {
      passwordError.innerHTML = err.response.data.error;
    } 
   
    }) ;
  }; 
  
return (

  <div className='Bloclogin'>
<form  className='formulaire' onSubmit={handleLogin}  method='post'>
<label htmlFor="email"></label>
   
    <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}
        value={email} placeholder="Adresse E-mail" />
  
  <div className="email error"></div>
 <br/>

  <label htmlFor="password"> </label>
   
    <input type="password" name="password"  id="password"  onChange={(e) => setPassword(e.target.value)}
        value={password} placeholder="Mot de passe" />
 <div className="password error"></div>
 <br/>
  <input className='button' type="submit" value="Se connecter"  />
</form>

</div>


)

}
 export default FormLogin