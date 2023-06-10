import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from "@fortawesome/free-solid-svg-icons";
import '../styles/BlocUserInfo.css' 

function UserInfo({url,token}) {

    const [userInfo, setUserInfo] = useState({})
    const profilData = JSON.parse(localStorage.getItem('profil'));
    const userId = profilData.userId;

    const [image, setImage] = useState('');
    const [file, setFile] = useState();
     
    useEffect(() => {
  
        async function fetchUser() {
          axios
          .get(url+"user/" + userId, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((data) => setUserInfo(data.data))
        
        }
    
        fetchUser()
      
    }, []);

    function ProfilImage (e) {
  
        setImage(URL.createObjectURL(e.target.files[0]) );
        setFile(e.target.files[0])
      }


  return (
    <div className="blocprofil">
    <div>
          <p>Pseudo : {userInfo.pseudo}</p>
          <p>Email : {userInfo.email}</p>
          <p>A propos de moi : {userInfo.bio}</p>
    </div>
    <div>
          <img className="imageprofil" src={userInfo.picture} alt={userInfo.title} onChange={ProfilImage} /><br/>
          <label htmlFor="file" title="modifier image" className="label-file" ><FontAwesomeIcon icon={faImage} /></label>
<input id="file" className="input-file" type="file" accept="image/png, image/jpg, image/jpeg"    />

     
         </div>
        </div>   
  ) 
}

export default UserInfo;