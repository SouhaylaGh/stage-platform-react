import React from 'react';
import { CalendarDays } from 'lucide-react';
import '../../assets/styles/Entreprise/Candidatures.css';

const candidatures = [
  {
    nom: "Marie Dubois",
    offre: "Stage Développement Web",
    date: "2024-01-16",
    etat: "En attente",
    photo:'src/assets/images/Capture écran 2025-08-01 021018.png'
  },
  {
    nom: "Ahmed Benali",
    offre: "Stage Marketing Digital",
    date: "2024-01-15",
    etat: "Examiné",
    photo:'src/assets/images/Capture écran 2025-08-01 013440.png'
  },
   {
    nom: "souha Benali",
    offre: "Stage Data Digital",
    date: "2024-01-15",
    etat: "Examiné",
    photo:'src/assets/images/souha.jpeg'
  }
];

const Candidatures = () => {
  return (
    <div className="candidatures-container-Entreprise33">
      <div className="candidatures-header-Entreprise33">
        <h2>Toutes les Candidatures</h2>
        <p>Gérez les candidatures reçues pour vos offres</p>
      </div>

      {candidatures.map((candidat, index) => (
        <div key={index} className="candidature-card-Entreprise33">
          <div className="candidat-info-Entreprise33">
            <div className="candidat-avatar-Entreprise33"><img src={candidat.photo}/></div>
            <div>
              <div className="candidat-nom-Entreprise33">{candidat.nom}</div>
              <div className="candidat-poste-Entreprise33">{candidat.offre}</div>
              <div className="candidat-date-Entreprise33">
                <CalendarDays size={14} /> Candidature du {candidat.date}
              </div>
            </div>
          </div>

          <div className="candidat-actions-Entreprise33">
            <button className="btn-profil-Entreprise33">Voir profil</button>
            <button className="btn-light-Entreprise33">Télécharger CV</button>
          </div>

          <div className={`badge-etat-Entreprise33 ${candidat.etat === "En attente" ? "etat-attente-Entreprise33" : "etat-examine-Entreprise33"}`}>
            {candidat.etat}
          </div>
        </div>
      ))}
    </div>
  );
};
export default  Candidatures;