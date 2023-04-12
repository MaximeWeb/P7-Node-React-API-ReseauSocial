import React, { useState } from "react";
//import { useSelector } from "react-redux";
import axios from "axios";


const Post = () => {
  
  const [message, setPost] = useState("");
  
  

 
 

  const handlePost = (e) => {
    e.preventDefault();
    
    
  

  axios.post( `http://localhost:5000/api/post/`, {message})
  .then(res => {
    localStorage.getItem('profil', JSON.stringify(res.data));
    
   
  })

};

return   (
 
  <form  className='formulaire'    method='post'>

<label htmlFor="Post"> </label>

  <textarea  name="Post" id="Post" placeholder="Poster un message" onChange={(e) => setPost(e.target.value)} value={message} />

  <input  type="submit" value="Envoyer"  onClick={handlePost} />

</form>
)

}
 export default Post