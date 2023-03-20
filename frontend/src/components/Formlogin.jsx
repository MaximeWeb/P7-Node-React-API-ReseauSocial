import React from 'react'

import '../styles/Form.css'

const FormLogin = () => {

  
return (

  <div className='BlocForm'>
<form className='formulaire'>
<label>
   
    <input type="email" name="email" placeholder="Adresse E-mail" />
  </label>
  <label>
   
    <input type="text" name="password" placeholder="Mot de passe" />
 </label>
  <input className='button' type="submit" value="Se connecter"  />
</form>
</div>


)

}
 export default FormLogin