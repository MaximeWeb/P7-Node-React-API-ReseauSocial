import React, { useEffect, useState } from "react";
import axios from "axios";


const Post = () => {
  
  const [user, setUser] = useState([])
  const [message, setPost] = useState("");
  
  

 useEffect(() => {
const user = JSON.parse(localStorage.getItem('user'));
if (user) {
  setUser(user);
}
 }, []);
 

  const handlePost = (e) => {
    e.preventDefault();
    
    
  

  axios.post( `http://localhost:5000/api/post/`, {message}, {user})
  .then(res => {
    localStorage.setItem('profil', JSON.stringify(res.data));
    
   
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