import React, { useState } from 'react';
import UserProfile from '../components/student/Profil-Student/UserProfile';
import Modifier from '../components/student/Profil-Student/Modifier';
import Réinitialiser from '../components/student/Profil-Student/Réinitialiser';
import '../assets/styles/UserProfile.css'
import {  FaEye, FaRedoAlt, FaEdit } from 'react-icons/fa';

const ProfilContainer = () => {
  const [view, setView] = useState('profil'); 

  const renderComponent = () => {
    switch (view) {
      case 'modifier':
        return <Modifier />;
      case 'reinitialiser':
        return <Réinitialiser />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div>
      {/* Barre supérieure */}
      <div className="top-bar-student12">
        <button className={`top-btn-student12 ${view === 'profil' ? 'active-btn-student12' : ''}`} onClick={() => setView('profil')}>
          <span className="icon-shift-student12"><FaEye /></span>Voir mon profil
        </button>
        <button className={`top-btn-student12 ${view === 'modifier' ? 'active-btn-student12' : ''}`} onClick={() => setView('modifier')}>
          <FaEdit />Modifier
        </button>
        <button className={`top-btn-student12 ${view === 'reinitialiser' ? 'active-btn-student12' : ''}`} onClick={() => setView('reinitialiser')}>
          <FaRedoAlt />Réinitialiser
        </button>
      </div>

      {/* Composant dynamique */}
      {renderComponent()}
    </div>
  );
};

export default ProfilContainer;
