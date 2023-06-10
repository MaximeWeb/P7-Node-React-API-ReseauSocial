import React from 'react'
import { Link } from 'react-router-dom'
import {  faEdit, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/NavBar.css'






 const Navbar = () => {
  return (
   
        

  <div className='NavBar'>
    <Link className='icon' title="accueil" to="/accueil"><FontAwesomeIcon icon={faHome} /></Link>
   <Link className='icon' title="post" to="/ajouter-post"><FontAwesomeIcon icon={faEdit} /></Link>
    <Link className='icon' title="profil" to="/profil"><FontAwesomeIcon icon={faUser} /></Link>
    </div>

  ) 
}

export default Navbar