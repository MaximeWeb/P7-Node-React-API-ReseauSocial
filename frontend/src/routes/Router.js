import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Post from '../pages/AddPost'
import UserInfo from '../pages/UserInfo'


import { useAuthState } from '../atoms'



const Router = ({url,token,role}) => {
  const [connectState] = useAuthState()
  return (
    <Routes>
        <Route path="/" element={connectState.loggedIn ? <Navigate to= "../accueil" /> : <Login  url= {url} token={token}/> } />
         <Route path="/profil" element={connectState.loggedIn ? <Profil url= {url} token={token} role={role}/> : <Navigate to= "../"/> } />
         <Route path="/user-info/:id" element={connectState.loggedIn ? <UserInfo url= {url} token={token} role={role}/> : <Navigate to= "../"/> } />
        <Route path="/accueil" element={connectState.loggedIn ? <Home url= {url} token={token} role={role}/> : <Navigate to= "../"/> } />
        <Route path="/ajouter-post" element={connectState.loggedIn ? <Post url= {url} token={token} role={role}/> : <Navigate to= "../"/> } /> 
        <Route path="/update-post/:id" element={connectState.loggedIn ? <Post url= {url} token={token} role={role}/> : <Navigate to= "../"/> } /> 
        <Route path="*" element={<NotFound/>} />  
    </Routes>
  )
}

export default Router



