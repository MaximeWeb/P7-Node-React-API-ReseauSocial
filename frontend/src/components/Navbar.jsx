import React from 'react'
import { Link } from 'react-router-dom'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/NavBar.css'






 const Navbar = () => {
  return (
   
        

  <div className='NavBar'>
   <Link className='icon' to="/"><FontAwesomeIcon icon={faHome} /></Link>
    <Link className='icon' to="/Profil"><FontAwesomeIcon icon={faUser} /></Link>
    </div>

  )
}

export default Navbar