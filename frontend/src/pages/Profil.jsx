import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import BlocUserInfo from '../components/BlocUserInfo'
import { useAuthState } from '../atoms'

/*import axios from "axios";*/


 const Profil = ({url}) => {

  const [connectState, setConnectState] = useAuthState()

return (
  <div>
   <Header/>
   <Navbar />
  <BlocUserInfo  url={url} token={connectState.token} />
  </div>
);
}

export default Profil