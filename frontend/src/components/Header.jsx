import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'



 const Header = () => {
  return (
    <nav className='header'>
        
<div className='flexbox'>
  
   <div className='imagemenu'>Groupomania</div>

  
    
    <Link to="/"><div className='onglet'>Déconnexion</div></Link>
    
</div>
</nav>
  )
}

export default Header