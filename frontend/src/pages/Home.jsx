import React, { useEffect } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import BlocPostInfo from '../components/BlocPostInfo'
import axios from "axios";
import { usePostState } from '../atoms'
import Swal from 'sweetalert2'
import '../styles/Home.css'

 const Home = ({url,token}) => {

 
  const [postState, setPostState] = usePostState([])
  const deleted =  (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log("test")
      await axios.delete(url+"post/"+ id , {
          headers: { Authorization: `Bearer ${token}` },
        }) 
        .then((res) => setPostState((current)=>
                                    current.filter((postState) => postState._id !== id) ) ) 
        .catch((err) => console.log(err))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  } 


  const like = async (id) => {
     axios.put(url + "post/like/" + id, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

 

  

  

 useEffect(() => {
  
    async function fetchData() {
      axios
      .get(url+"post", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((data) => setPostState(data.data))
    
    }

    fetchData()
  
}, []);


  return (
   <div>

  <Header/>
  <Navbar/>
  
  <div className='BlocPostHome'>
  <Link className='PosterMessage' to="/ajouter-post">Poster un message</Link>
  {postState.map(post => (
     <BlocPostInfo key={post._id} post={post} url={url} token={token} like={like} deleted={deleted}  />
  ))}
   
</div> 
   
</div>

    
    
    
  )
}

export default Home
