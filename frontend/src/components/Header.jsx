import React from 'react'
import { Link } from 'react-router-dom'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Header.css'



 const Header = () => {
  return (
    <nav className='header'>
        
    <div className='flexbox'>
  
   <div className='imagemenu'>Groupomania</div>

  
    
    <Link to="/"><div className='onglet'><FontAwesomeIcon icon={faSignOut} /></div></Link>
    
</div>
</nav>
  )
}

export default Header