import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Post from '../components/Post'
import PostUsers from '../components/Postusers'
import '../styles/Home.css'



 const Home = () => {
  return (
    <div>
      <Header/>
      <body>
<div className='flexboxHome'>
  <div className='navbar'>
  <Navbar/>
  </div>
  <div>
     <div className='publications'><Post/></div>
     <div className='postpublic'><PostUsers/></div>
</div> 
     <div className='BodyDroite'>
     <div className='Amis'>Amis</div>
     <div className='Suggestions'>Suggestions</div>
     </div>
</div>
</body>
    </div>
    
    
  )
}

export default Home
