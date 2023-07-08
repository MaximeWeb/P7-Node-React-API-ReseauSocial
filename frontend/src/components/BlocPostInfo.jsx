import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faThumbsUp, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import '../styles/BlocPostInfo.css';

function BlocPostInfo({ post, url, token, deleted, like }) {
  const profil = JSON.parse(localStorage.getItem("profil"));
  const [user, setUser] = useState({ pseudo: "" });
  const [likes, setLikes] = useState (post.likes.length);
  const [liked, setLiked] = useState (post.likes.includes(profil.userId));
  const likeButtonClassName = liked ? "likepostbutton liked" : "likepostbutton";

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(url + "user/" + post.userId, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [post.userId, token, url, profil.userId]);

  const likeById = async (id) => {
   like(id)
   setLiked((prev) => !prev)
   liked ? setLikes((prev) => prev -1) : setLikes((prev) => prev +1)
  
  };

  
  const deleteById = (id) => {
    deleted(id);
  };

  return (
    <div className="Home">
      <div className="blocposthome">
        <div className="Auteurflexbox">
          <img className="Imageprofilpost" src={user.picture} alt={user.title} />
          <Link to={`/user-info/${user._id}`}> <p className="Username">{user.pseudo}</p></Link>

        </div>
        <p className="messageposthome">{post.message}</p>
        <img className="imagepost" src={post.picture} alt={post.title} /><br/>
        <div className="footerpost">
        <button className={likeButtonClassName} title="Like this post" onClick={() => likeById(post._id)}>
  <FontAwesomeIcon icon={faThumbsUp} /> 
  <span className="compteurlike">{likes}</span>
</button>
      
          {profil.userId === post.userId && (
            <Link className='updatepostbutton' title="Update Post" to={"/update-post/" + post._id}>
              <FontAwesomeIcon icon={faEdit} />
            </Link>
          )}
          {profil.userId === post.userId && (
            <button className="deletepostbutton" title="Delete post" onClick={() => deleteById(post._id)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlocPostInfo;