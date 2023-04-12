import React, { useState } from "react";
import axios from "axios";


const PostUsers = () => {



    const [message, setPost] = useState("");
  
  

 
 

    const handlePostUser = (e) => {
      e.preventDefault();
      
      
    
  
    axios.get( `http://localhost:5000/api/post/`, {message})
    .then(res => {
      localStorage.getItem('profil', JSON.stringify(res.data));
      
     
    })
  
  };




    return (
        <div>
        <div>
           Pseudo : 
        </div>
        <div>
            Post :
        </div>
        </div>
    )
}

export default PostUsers