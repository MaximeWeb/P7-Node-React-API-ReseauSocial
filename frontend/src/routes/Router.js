import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Post from '../components/AddPost'
import { useAuthState } from '../atoms'



const Router = ({url}) => {
  const [connectState, setConnectState] = useAuthState()
  return (
    <Routes>
        <Route path="/" element={connectState.loggedIn ? <Navigate to= "../accueil" /> : <Login  url= {url}/> } />
         <Route path="/profil" element={connectState.loggedIn ? <Profil url= {url}/> : <Navigate to= "../"/> } />
        <Route path="/accueil" element={connectState.loggedIn ? <Home url= {url}/> : <Navigate to= "../"/> } />
        <Route path="/ajouter-post" element={connectState.loggedIn ? <Post url= {url}/> : <Navigate to= "../"/> } /> 
        <Route path="*" element={<NotFound/>} />  
    </Routes>
  )
}

export default Router



