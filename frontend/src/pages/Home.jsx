import React from 'react'
import Header from '../components/Header'
import '../styles/Home.css'



 const Home = () => {
  return (
    <div>
      <Header/>
      <body>
<div className='flexboxHome'>
     <h1 className='Publications'>publications</h1>
     <div className='BodyDroite'>
     <h2 className='Amis'>Amis</h2>
     <h3 className='Suggestions'>Suggestions</h3>
     </div>
</div>
</body>
    </div>
    
    
  )
}

export default Home
