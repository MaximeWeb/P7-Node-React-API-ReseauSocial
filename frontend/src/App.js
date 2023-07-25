import React, { useEffect,useState } from 'react'
import Router from './routes/Router'
import axios from "axios";
import { useAuthState } from './atoms'


function App() {
  const [connectState, setConnectState] = useAuthState()
  const url = "http://localhost:5000/api/"
  const data = JSON.parse(localStorage.getItem("profil"))
  useEffect(() => {
   

   if (data) {
      setConnectState({loggedIn: true})
console.log(data.role)
   } else {
    setConnectState({loggedIn: false})
   }

  }, []);

  return (
    <div>
      
          <Router url={url} token={data?.token} role={data?.role} />
      
    </div>
  );
}

export default App;
