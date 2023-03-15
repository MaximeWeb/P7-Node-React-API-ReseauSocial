import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'


 const Header = () => {
  return (
    <nav className='header'>
        
<div className='flexbox'>
  <div>
    <Link to="/"><div className='imagemenu'>Groupomania</div></Link>
</div> 
   <div className='register'> 
    <Link to="/login"><div className='onglet'>Login</div></Link>
    <Link to="/signup"><div className='onglet'>Signup</div></Link>
    <Link to="/profil"><div className='onglet'>Profil</div></Link>
    </div>
</div>
</nav>
  )
}

export default Header