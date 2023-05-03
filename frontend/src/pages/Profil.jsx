import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/Header'
import NavBar from '../components/Navbar'

import '../styles/Profil.css'



  function Profil() {
   
    const [users, setUser] = useState({});
    

    useEffect(() => {
    
    /**besoin de l'id de l'utilisateur egalement  */
    axios
    .get(`http://localhost:5000/api/user/`)
    .then(response => {
        setUser(response.data);
    })
    .catch(error => {
      console.error(error);
    }); 
  }, []);


  return (
    <div>
    <Header/>
    
   <div className='navbar'>
    <NavBar />
    </div>

    <div className="blocprofil">
     
    
    
           
          <p>Pseudo : {users.pseudo}</p>
          <p>Email : {users.email}</p>
          
        </div>
    
 
      </div>
    
    
    
    
  

  

    
  );
}

export default Profil