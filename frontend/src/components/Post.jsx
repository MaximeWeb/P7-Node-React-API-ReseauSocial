import React, { useState } from "react";
import axios from "axios";


const  Post = () => {
  

const [message, setPost] = useState("");
 
const baseURL = "http://localhost:5000/api/post";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("profil")
        ? JSON.parse(localStorage.getItem("profil")).token
        : null
    }`,
  }
});

const handlePost = (e) => {
  e.preventDefault();
  console.log(localStorage.getItem("profil"))
  

 /* axiosInstance.post()
  .then(res => {
   console.log(res.data)
  }) 

.catch (err => { 
console.log(err)

})*/

}


return (
 
  <form  className='formulaire'   onSubmit={handlePost}  method='post'>

<label htmlFor="Post"> </label>

  <textarea  name="Post" id="Post" onChange={(e) => setPost(e.target.value)} value={message}
        placeholder="Poster un message" />

  <input className='button' type="submit" value="Envoyer"  />

</form>
)

}
 export default Post