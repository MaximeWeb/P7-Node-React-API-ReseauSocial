import React from 'react'
import { Link } from 'react-router-dom'




 const Navbar = () => {
  return (
   
        

  <div>
   <Link to="/"><div className='onglet'>Home</div></Link>
    <Link to="/Profil"><div className='onglet'>Profil</div></Link>
    </div>

  )
}

export default Navbar