import React from 'react'
import '../styles/Formsignup.css'


const Form = () => {
return (

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

)

}
 export default Form