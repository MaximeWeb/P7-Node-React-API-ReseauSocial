import React from 'react'

import '../styles/Form.css'



const Formsignup = () => {
return (
 

  <div className='BlocForm'>
<form className='formulaire'>
<label>
   
    <input type="text" name="password" placeholder="Pseudo" />
 </label>
<label>
   
    <input type="email" name="email" placeholder="Adresse E-mail" />
  </label>
  <label>
    
    <input type="text" name="password" placeholder="Password"/>
 </label>
  <input className='button' type="submit" value="S'inscrire" />
</form>
</div>


)

}
 export default Formsignup