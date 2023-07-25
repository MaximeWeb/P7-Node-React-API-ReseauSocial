import React, { useEffect, useState } from "react";
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import '../styles/AddPost.css'


const AddPost = ({url,token,role}) => {

  const navigate = useNavigate();
  
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [file, setFile] = useState();
  const {id} = useParams();
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchData = async () => {
    axios
    .get(url+"post/"+ id ,{
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((data) => {
      setMessage(data.data.message);
      setImage(data.data.picture);
      setIsEditMode(true); // Si l'ID est présent, on est en mode édition

    })
    .catch((err) => console.log(err))
    
  }

useEffect(() => {
  if (id) {
    fetchData()
  }
}, []);

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
  headers: {Authorization: `Bearer ${token}`}
 }
 )
  .then((res) => {
     Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Le Post a été ajouté avec succes ! ',
      showConfirmButton: false,
      timer: 1500
    })
   navigate("/accueil");
  }).catch ((err) => {
    console.log(err)
  }) 
};

function newImage (e) {
  setImage(URL.createObjectURL(e.target.files[0]) );
  setFile(e.target.files[0])
}


const EditPost = (e) => {
  e.preventDefault();
   let formData = new FormData()
   formData.append("message",message)
   if (file) {
  formData.append("image", file);
}
   console.log(file)
  
axios.put(url+'post/'+ id, formData, 
{
headers: {Authorization: `Bearer ${token}`}
}
)
.then((res) => {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Le Post a été modifier avec succes ! ',
    showConfirmButton: false,
    timer: 1500
  })
 navigate("/accueil"); 
}).catch ((err) => {
  console.log(err)
}) 

};

return   (
<div>
  <Header/>
  <Navbar/>
  <div>
     <div className='blocpost'>
       <div className="texttop">Créer une publication</div>
          <form  className='formulairepost'  onSubmit={(id) ? EditPost : handlePost}   method='post'>
            <label htmlFor="Post"> </label>
              <textarea className="textpost" type="text"  name="message" id="message" placeholder="Poster un message" value={message} onChange={(e) => setMessage(e.target.value)}  required/>
                <div className="flexboximage">
                 <div className="boximage">
                    <p> Ajouter une image ?</p>
                      <label htmlFor="file" title="Ajouter une image" className="label-filePost" ><FontAwesomeIcon icon={faImage} /></label>
                        <input id="file" className="input-filePost" type="file" accept="image/png, image/jpg, image/jpeg"    onChange={newImage}/>

                 </div>
                <img  className={(image) ? "newimage" : ""} alt="" src={image} /> 
                </div>
                 <div className="boxbutton">
                  <input
                    className="buttonpost"
                    type="submit"
                    value={isEditMode ? "Modifier" : "Envoyer"} />
                   <Link className="retouraccueil" to="/accueil">Annuler</Link>
                 </div>
         </form>
      </div>
   </div>
 </div>

)

}
 export default AddPost