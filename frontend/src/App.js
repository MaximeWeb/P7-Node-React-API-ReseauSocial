import React, { useEffect } from 'react'
import Router from './routes/Router'
import { useAuthState } from './atoms'


function App() {
  const [connectState, setConnectState] = useAuthState()
  const url = "http://localhost:5000/api/"
  useEffect(() => {
   const data = JSON.parse(localStorage.getItem("profil"))
   if (data) {
    setConnectState({loggedIn: true, token: data.token})
   } else {
    setConnectState({loggedIn: false, token: "" })
   }

  }, []);

  return (
    <div>
      
          <Router url={url} token={connectState.token}/>
      
    </div>
  );
}

export default App;
