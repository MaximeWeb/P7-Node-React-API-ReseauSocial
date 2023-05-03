import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import PostUsers from '../components/Postusers'
import '../styles/Home.css'



 const Home = () => {
  return (
    <div>
      <Header/>
      
<div className='flexboxHome'>
  <div className='navbar'>
  <Navbar/>
  </div>
  <div>
  <Link className='linkpost' to="/post">Poster un message</Link>
    <PostUsers/>
</div> 
     <div className='BodyDroite'>
     <div className='Amis'>Amis</div>
     <div className='Suggestions'>Suggestions</div>
     </div>
</div>

    </div>
    
    
  )
}

export default Home
