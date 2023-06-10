import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faThumbsUp, faTrashAlt, } from "@fortawesome/free-solid-svg-icons";
import '../styles/BlocPostInfo.css'

function Post({ post,url,token,deleted,like,edit }) {

  const profil = JSON.parse(localStorage.getItem("profil"))
  const [user, setUser] = useState({pseudo:""})
  
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

  const likeById  = (id) => {
    like(id)
  }
  const deleteById = (id) => {
    deleted(id)
  }


  return (
    <div className="Home">
   
      <div className="blocposthome" >
        <div className="Auteurflexbox">
      <img className="Imageprofilpost" src={user.picture} alt={user.title}  />
      <p className="Username">{user.pseudo}</p>
      </div>
        
        <p className="messageposthome">{post.message}</p>
        <img className="imagepost" src={post.picture} alt={post.title} /><br/>
      <div className="footerpost">
      <button className="likepostbutton" title="like this post" onClick={() => likeById(post._id)}>
      <FontAwesomeIcon icon={faThumbsUp} />
       </button>
        {profil.userId === post.userId && (
        <Link className='updatepostbutton' title="Update Post" to={"/update-post/" + post._id} > <FontAwesomeIcon icon={faEdit} /></Link>
        )} 

        {profil.userId === post.userId && ( // le boutton supprimer n'apprarait que sur ces propre posts
       <button className="deletepostbutton" title="Delete post" onClick={() => deleteById(post._id)}>
       <FontAwesomeIcon icon={faTrashAlt} />
        </button>
       )} 
       </div>
      </div>
    
  </div>
  ) 
}

export default Post;
