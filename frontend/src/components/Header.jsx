import React from 'react'
import { Link } from 'react-router-dom'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useAuthState } from '../atoms'
import '../styles/Header.css'





 const Header = () => {
  const [connectState, setConnectState] = useAuthState()
   const logout =  () => {
   localStorage.removeItem('profil');
   setConnectState({loggedIn: false, token: "" })

   };
   
   
   
    

  return (
    <nav className='header'>
        
    <div className='flexbox'>
  
   <div className='imagemenu'>Groupomania</div>

  
    
    <Link to="/" onClick={logout}><div className='onglet'><FontAwesomeIcon icon={faSignOut} /></div></Link>
    
</div>
</nav>
  )

  
}



export default Header