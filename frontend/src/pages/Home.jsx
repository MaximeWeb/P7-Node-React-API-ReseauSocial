import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Post from '../components/Post'
import axios from "axios";
import { useAuthState, usePostState } from '../atoms'
import '../styles/Home.css'



 const Home = ({url}) => {

  const [connectState, setConnectState] = useAuthState()
  const [postState, setPostState] = usePostState([])
  const deleted = async (id) => {
    console.log(id)
    axios.delete(url+"post/"+ id , {
      headers: { Authorization: `Bearer ${connectState.token}` },
    }) 
    .then((res) => console.log(res)) 
    .catch((err) => console.log(err)) 
  } 
  const like = async (id) => {
    console.log(id)
    axios.post(url+"post/"+ id , {
      headers: { Authorization: `Bearer ${connectState.token}` },
    }) 
    .then((res) => console.log(res)) 
    .catch((err) => console.log(err)) 
  } 

  

 useEffect(() => {
  
    async function fetchData() {
      axios
      .get(url+"post", {
        headers: { Authorization: `Bearer ${connectState.token}` }
      })
      .then((data) => setPostState(data.data))
    
    }

    fetchData()
  
}, []);


  return (
   <div>
      <Header/>
      
<div className='flexboxHome'>
  <div className='navbar'>
  <Navbar/>
  </div>
  <div>
  <Link className='linkpost' to="/ajouter-post">Poster un message</Link>
  {postState.map(post => (
     <Post key={post._id} post={post} url={url} token={connectState.token} like={like} deleted={deleted}/>
  ))}
   
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
