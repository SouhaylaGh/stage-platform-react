import React from 'react';
import { FaUniversity, FaMapMarkerAlt,FaStar } from 'react-icons/fa';
import '../../../assets/styles/UserProfile.css';
import DetailsStudent from './DetailsStudent';

const UserProfile = () => {
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
              <h2>Jean Dupont</h2>
              <p className="education">Master 2 en Informatique</p>
              <div className="details-student12">
                <p><FaUniversity /> École Nationale Supérieure d'Informatique</p>
                <p><FaMapMarkerAlt /> Casablanca • 22 ans</p>
              </div>
              <div className="tags-rating-student12">
                <span className="rating-student12"><FaStar className="star-student12" /> 16.5/20</span>
                <span className="tag-student12">Master 2</span>
                <span className="tag-student12">Informatique</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-student12">
          <h4>À propos</h4>
          <p>
            Étudiant en informatique passionné par le développement web et mobile.
            À la recherche d'un stage pour mettre en pratique mes compétences et contribuer à des projets innovants.
          </p>
        </div>
      </div>
      <DetailsStudent /> 
    </div>
  );
};

export default UserProfile;
