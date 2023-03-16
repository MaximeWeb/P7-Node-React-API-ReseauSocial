import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import '../styles/Form.css'



const Form = () => {
return (
 
  <div>
<Header/>
<div className='ProfilBloc'>
<Link to="/login"><div className='onglet'>Vous avez deja un compte ?</div></Link>
<Link to="/profil"><div className='onglet'>Retour au profil</div></Link>
  <div className='BlocForm'>
<form className='formulaire'>
<label>
    Pseudo : 
    <input type="text" name="password" />
 </label>
<label>
    Email :
    <input type="email" name="email" />
  </label>
  <label>
    Mot de passe : 
    <input type="text" name="password" />
 </label>
  <input className='button' type="submit" value="Envoyer" />
</form>
</div>
</div>
</div>

)

}
 export default Form