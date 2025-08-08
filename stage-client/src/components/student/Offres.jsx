import React, { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../../assets/styles/Offres.css';

const Offres = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tri, setTri] = useState("Plus récentes");

  const offres = [
    {
      id: 1,
      titre: 'Stage Développement Full Stack',
      entreprise: 'TechInnovate',
      ville: 'Casablanca',
      duree: '6 mois',
      date: "Aujourd'hui",
      domaine: 'Informatique',
      description: 'Rejoignez notre équipe pour développer des applications web modernes avec React et Node.js.',
      competences: ['React', 'Node.js', 'MongoDB'],
      recommande: true,
      favori: false,
    },
    {
      id: 2,
      titre: 'Stage Marketing Digital',
      entreprise: 'DigitalPro',
      ville: 'Rabat',
      duree: '4 mois',
      date: 'Hier',
      domaine: 'Marketing',
      description: 'Participez à nos campagnes marketing digital et apprenez les dernières tendances du secteur.',
      competences: ['Google Ads', 'Facebook Ads', 'Analytics'],
      recommande: false,
      favori: true,
    },
  ];

  const handleTriChange = (value) => {
    setTri(value);
    setShowDropdown(false);
    // ici tu peux ajouter la logique de tri selon `value`
  };

  return (
    <div className="stages-wrapper-offres-student3">
      <div className="offres-section-student3">
        <div className="offres-header-student3">
          <h2>Toutes les offres ({offres.length})</h2>
          <div className="tri-container-student3">
            <button className="tri-btn-student3" onClick={() => setShowDropdown(!showDropdown)}>
              {tri} ▾
            </button>
            {showDropdown && (
              <div className="tri-dropdown-student3">
                <div onClick={() => handleTriChange("Plus récentes")}>Plus récentes</div>
                <div onClick={() => handleTriChange("Par entreprise")}>Par entreprise</div>
                <div onClick={() => handleTriChange("Plus pertinent")}>Plus pertinent</div>
              </div>
            )}
          </div>
        </div>

        {offres.map((offre) => (
          <div key={offre.id} className="offre-card-student3">
            <div className="offre-header-student3">
              <h3>{offre.titre}</h3>
              {offre.recommande && <span className="recommande-student3"></span>}
              <span className="favori-icon-student3">
                {offre.favori ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
            </div>

            <div className="offre-infos-student3">
              <span><FaBuilding /> {offre.entreprise}</span>
              <span><FaMapMarkerAlt /> {offre.ville}</span>
              <span><FaClock /> {offre.duree}</span>
            </div>

            <div className="offre-date-domaine-student3">
              <span><FaCalendarAlt /> Publié {offre.date}</span>
              <span className="badge-student3">{offre.domaine}</span>
            </div>

            <p className="offre-description-student3">{offre.description}</p>

            <div className="offre-footer-student3">
              <div className="tags-student3">
                {offre.competences.map((skill, i) => (
                  <span key={i} className="tag-student3">{skill}</span>
                ))}
              </div>
              <div className="actions-student3">
                <button className="btn-details-student3">Voir détails</button>
                <button className="btn-postuler-student3">Postuler</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offres;
