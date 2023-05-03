import React, { useState } from "react";
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Post.css'


const Post = () => {
  const navigate = useNavigate();
  
  const profil = JSON.parse(localStorage.getItem("profil"))
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState();
  


  const handlePost = (e) => {
    e.preventDefault();
//* Préparation des données pour l'envoie au backend *// 
     let formData = new FormData()
     formData.append("message",JSON.stringify({ message: message }))
     formData.append("image",file)
     console.log(file)

     
//* Configuration des données envoyé *//
/*const config = {Authorization: `Bearer ${profil.token}`}*/

 
 axios.post('http://localhost:5000/api/post', formData, 
 {
  headers: {Authorization: `Bearer ${profil.token}`}
 }
 )
  .then((res) => {
   console.log(res.data)
   navigate("/accueil");
  }).catch ((err) => {
    console.log(err)
  }) 

};

function newImage (e) {
  
  setImage(URL.createObjectURL(e.target.files[0]) );
  setFile(e.target.files[0])
}





return   (
  <div>
  <Header/>

  <div className='flexboxHome'>
  <div className='navbar'>
  <Navbar/>
  </div>
  <div>

  <div className='blocpost'>

    <div className="texttop">Créer une publication</div>

<form  className='formulairepost'  onSubmit={handlePost}   method='post'>
    

<label htmlFor="Post"> </label>
<textarea className="textpost" type="text"  name="message" id="message" placeholder="Poster un message" value={message} onChange={(e) => setMessage(e.target.value)}  required/>

<div className="flexboximage">
<div className="boximage"><p> Ajouter une image ?</p>
<label htmlFor="file" title="Ajouter une image" className="label-file" ><FontAwesomeIcon icon={faImage} /></label>
<input id="file" className="input-file" type="file" accept="image/png, image/jpg, image/jpeg"    onChange={newImage}/>

</div>

  <img  className={(image) ? "newimage" : ""} alt="" src={image} /> 
</div>
            
<div className="boxbutton">
<input className="buttonpost"   type="submit" value="Envoyer"  />
<Link className="retouraccueil" to="/accueil">Annuler</Link>
</div>

</form>
</div>
</div>
</div>
</div>
)

}
 export default Post