import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Profil from '../pages/Profil'
import NotFound from '../pages/NotFound'
import Login from '../pages/Login'
import Signup from '../pages/Signup'


const Router = () => {
  return (
    <Routes>
      
        <Route path="/" element={<Home/>} />
         <Route path="/profil" element={<Profil/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
       
        <Route path="*" element={<NotFound/>} />
            
        
    </Routes>
  )
}

export default Router



