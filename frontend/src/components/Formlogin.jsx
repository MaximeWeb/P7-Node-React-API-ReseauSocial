import React from 'react'

import '../styles/Form.css'

const Form = () => {
return (

  <div className='BlocForm'>
<form className='formulaire'>
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