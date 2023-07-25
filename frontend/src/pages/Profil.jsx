import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BlocProfil from '../components/BlocProfil'


/*import axios from "axios";*/


 const Profil = ({url,token,role}) => {

return (
  <div>
   <Header/>
   <Navbar />
  <BlocProfil url={url} token={token}  />
  </div>
);
}

export default Profil