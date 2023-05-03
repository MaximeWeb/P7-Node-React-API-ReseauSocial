import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Home.css'

function PostUsers() {
  
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const profil = JSON.parse(localStorage.getItem("profil"))

  const config = {Authorization: `Bearer ${profil.token}`}

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post", {
          headers: {Authorization: `Bearer ${profil.token}`}
      })
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  /*besoin de l'id de l'utilisateur ;creer une fonction pas besoin du .map */
  axios
  .get(`http://localhost:5000/api/post/`)
  .then(response => {
    setUsers(response.data);
  })
  .catch(error => {
    console.error(error);
  })

  

  const handleDeletePost = (_id) => {
    // Supprimer le post correspondant à l'ID passé en paramètre
    axios.delete(`http://localhost:5000/api/post/${_id}`, config)
      .then((response) => {
       /* utiliser la meme methode profil.token sauf que la c 'est profil.userId */
      })
      .catch((error) => {
        console.log(error);
      });
  };




  return (
   <div className="BlocPosts">
     
      {posts.map(posts => (
        <div className="blocposthome" key={posts.id}>
             
        
        <p> Par : {users.map(users =>  users.pseudo )} </p>
        
           
          <h2>{posts.message}</h2>
          <img className="imagepost" src={posts.picture} alt={posts.title} />
          <button onClick={() => handleDeletePost(posts.id)}>
              Supprimer ce post
            </button>
        </div>
      ))};


    </div>  
  ) 
}

export default PostUsers;
