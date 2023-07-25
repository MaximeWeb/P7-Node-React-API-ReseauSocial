import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import '../styles/BlocUserInfo.css';

const UserInfo = ({ url, token, role }) => {
  const { id } = useParams(); // Récupère l'ID de l'utilisateur depuis les paramètres de l'URL

  const [user, setUser] = useState({ pseudo: "" });

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(url + "user/" + id, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchUser();
  }, [id, url, token]);

  return (
    <div>
      <Header/>
      <Navbar />
      <div className="blocprofil">
      <div className="blocprofilflex">
        <div>
          <p className="fontbold">Pseudo :</p> {user.pseudo}
          <p className="fontbold">Email :</p> {user.email}
         <p className="fontbold">Quelques mots  : </p>{user.bio} <br/>
         <img className="ImageUserInfo" src={user.picture} alt={user.title} />
        </div>  
      </div>
    </div>
    </div>
  );
};

export default UserInfo;