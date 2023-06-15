import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BlocUserInfo from '../components/BlocUserInfo'


/*import axios from "axios";*/


 const Profil = ({url,token}) => {

return (
  <div>
   <Header/>
   <Navbar />
  <BlocUserInfo  url={url} token={token}  />
  </div>
);
}

export default Profil