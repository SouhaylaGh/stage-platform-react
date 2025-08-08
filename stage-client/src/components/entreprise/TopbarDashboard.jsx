import React, { useState } from 'react';
import EntrepriseHome from '../../pages/EntrepriseHome';
import {  FaEye, FaRedoAlt, FaEdit } from 'react-icons/fa';
import '../../assets/styles/EntrepriseTopbar.css'
import MesOffres from './MesOffres';
import Candidatures from './Candidatures';
import ProfilEntreprise from './ProfilEntreprise';

const TopbarDashboard = () => {
  const [view, setView] = useState('mesOffres'); 

  const renderComponent = () => {
    switch (view) {
      case 'mesOffres':
        return <MesOffres />;
      case 'candidatures':
        return <Candidatures/>
      case 'profilEntreprise':
        return <ProfilEntreprise/>
      default:
        return <EntrepriseHome  />;
    }
  };

  return (
    <div >
        <h3 className='text-topbar-Entreprise12'>Dashboard Entreprise</h3>
        <p className='textP-topbar-Entreprise12'>Gérez vos offres de stage et candidatures</p>
       {/* Barre supérieure */}
      <div className="top-bar-Entreprise12">
        <button className={`top-btn-Entreprise12 ${view === 'mesOffres' ? 'active-btn-Entreprise12' : ''}`} onClick={() => setView('mesOffres')}>
          Mes Offres
        </button>
        <button className={`top-btn-Entreprise12 ${view === 'candidatures' ? 'active-btn-Entreprise12' : ''}`} onClick={() => setView('candidatures')}>
          Candidatures
        </button>
        <button className={`top-btn-Entreprise12 ${view === 'profilEntreprise' ? 'active-btn-Entreprise12' : ''}`} onClick={() => setView('profilEntreprise')}>
          Profil Entreprise
        </button>
      </div>

      {/* Composant dynamique */}
      {renderComponent()}
    </div>
  );
};

export default  TopbarDashboard;
