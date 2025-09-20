import  React, { useEffect, useState } from 'react';
import { FaUniversity, FaMapMarkerAlt,FaStar } from 'react-icons/fa';
import '../../../assets/styles/UserProfile.css';
import DetailsStudent from './DetailsStudent';
import {getLastProfil} from '../../../Services/api'

const UserProfile = () => {

  const [profil, setProfil] = useState(null);
  
     useEffect(() => {
      (async () => {
        try {
          const data = await getLastProfil();
          setProfil(data);
        } catch (e) {
          console.error("❌ Erreur profil :", e);
        }
      })();
    }, []);

    if (!profil) return <aside className="sidebar-student13"><p>Chargement...</p></aside>;
  return (
    <div className="user-profile-container-student12">
      {/* Barre supérieure */}
      {/*<div className="top-bar">
        <button className="top-btn"><span className="icon-shift"><FaEye /></span> Voir mon profil</button>
        <button className="top-btn"><FaEdit /> Modifier</button>
        <button className="top-btn"><FaRedoAlt /> Réinitialiser</button>
      </div>*/}

      {/* Profil principal */}
      <div className="profile-wrapper-student12">
        <div className="profile-header-student12">
          <div className="left-section-student12">
            <div className="profile-picture-student12"><img src='src/assets/images/souha.jpeg'/></div>
            <div className="profile-info-student12">
              <h2>{profil.prenom}  {profil.nom}</h2>
              <p className="education">{profil.niveauEtudes} en {profil.domain}</p>
              <div className="details-student12">
                <p><FaUniversity />{profil.ecole}</p>
                <p><FaMapMarkerAlt />{profil.ville} • {profil.age} ans</p>
              </div>
              <div className="tags-rating-student12">
                <span className="rating-student12"><FaStar className="star-student12" /> 16.5/20</span>
                <span className="tag-student12">{profil.niveauEtudes}</span>
                <span className="tag-student12">{profil.domain}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-student12">
          <h4>À propos</h4>
          <p>
             {profil.biographie}
          </p>
        </div>
      </div>
      <DetailsStudent /> 
    </div>
  );
};

export default UserProfile;
