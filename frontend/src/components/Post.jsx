import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/Home.css'

function Post({ post,url,token,deleted,like }) {
  
  const [posts, setPosts] = useState([]);
  const [usernames, setUsernames] = useState({});
  const profil = JSON.parse(localStorage.getItem("profil"))
  const config = {Authorization: `Bearer ${profil.token}`}
  const [user, setUser] = useState({pseudo:""})
  

  

 /* useEffect(() => {
    async function fetch() {
      
    }
    axios
      .get("http://localhost:5000/api/post", {
        headers: { Authorization: `Bearer ${profil.token}` }
      })
      .then(response => {
        setPosts(response.data);
  
        // Récupérer les IDs des utilisateurs dans les articles
       const userIds = response.data.map(post => post.userId);
  
        // Faire une requête pour récupérer les détails des utilisateurs
        axios
          .get("http://localhost:5000/api/user", {
            headers: { Authorization: `Bearer ${profil.token}` },
            params: { userIds }
          })
          .then(usersResponse => {
            const users = usersResponse.data;
  
            // Créer un objet avec les pseudos des utilisateurs associés aux IDs
            const usernamesObj = users.reduce((obj, user) => {
              obj[user._id] = user.pseudo;
              return obj;
            }, {});
  
            setUsernames(usernamesObj);
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        console.error(error);
      });
  }, ); */


  useEffect(() => {
  
    async function fetchUser() {
      axios
      .get(url+"user/" + post.userId, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((data) => setUser(data.data))
    
    }

    fetchUser()
  
}, []);


/*
  const handleDeletePost = (_id) => {
 
     
      // Supprimer le post correspondant à l'ID passé en paramètre
      axios.delete(`http://localhost:5000/api/post/${_id}`, {
        headers: { Authorization: `Bearer ${profil.token}` },
      }) 
     
        .then((response) => {
         
          console.log(response);
        
        })
        .catch((error) => {
          console.log(error);
        }); 
    
  }; */

  const likeById  = (id) => {
    like(id)
   
  }

  const deleteById = (id) => {
    deleted(id)
      .then(() => {
        // Suppression réussie, actualisation de la page
        window.location.reload();
      })
      .catch((error) => {
        // Gestion des erreurs
        console.log(error);
      });
  }



  return (
    <div className="BlocPosts">
   
      <div className="blocposthome" >
      
      <p>Auteur : {user.pseudo}</p>
      
        
        <p className="messageposthome">{post.message}</p>
        <img className="imagepost" src={post.picture} alt={post.title} /><br/>
      <div className="footerpost">
      <button className="likepost" title="like this post" onClick={() => likeById(post._id)}>
      <FontAwesomeIcon icon={faThumbsUp} />
       </button>
       {profil.userId === post.userId && ( // le boutton supprimer n'apprarait que sur ces propre posts
       <button className="deletepost" title="Delete post" onClick={() => deleteById(post._id)}>
       <FontAwesomeIcon icon={faTrashAlt} />
        </button>
       )} 
       </div>
      </div>
    
  </div>
  ) 
}

export default Post;
