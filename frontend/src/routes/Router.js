import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'



const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/profil" element={<Profil/>} />
        <Route path="/accueil" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />  
    </Routes>
  )
}

export default Router



