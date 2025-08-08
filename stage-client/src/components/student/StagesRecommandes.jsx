import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaMagic } from 'react-icons/fa';
import '../../assets/styles/StagesRecommandes.css';

const stages = [
  {
    id: 1,
    titre: 'Stage Développement Full Stack',
    entreprise: 'TechInnovate',
    ville: 'Casablanca',
    description: 'Rejoignez notre équipe pour développer des applications web modernes avec React et Node.js.',
    competences: ['React', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    titre: 'Stage UX/UI Design',
    entreprise: 'CreativeStudio',
    ville: 'Casablanca',
    description: 'Créez des interfaces utilisateur exceptionnelles et participez à nos projets de design.',
    competences: ['Figma', 'Adobe XD', 'Prototyping'],
  },
];

const StagesRecommandes = () => {
  return (
    <div className="stages-wrapper-student4">
      <div className="stages-header-student4">
        <FaMagic className="icon-student4" />
        <h2>Stages recommandés pour moi</h2>
        <p>Basé sur votre profil et vos compétences</p>
      </div>

      {stages.map((stage) => (
        <div key={stage.id} className="stage-card-student4">
          <div className="stage-info-student4">
            <h3>{stage.titre}</h3>
            <div className="stage-meta-student4">
              <FaBuilding className="meta-icon-student4" />
              <span>{stage.entreprise}</span>
              <FaMapMarkerAlt className="meta-icon-student4" />
              <span>{stage.ville}</span>
            </div>
            <p>{stage.description}</p>
            <div className="tags-row-student4">
               <div className="tags-student4">
                  {stage.competences.map((tag, index) => (
                    <span key={index} className="tag-student4">{tag}</span>
                 ))}
               </div>
                
           </div>

          </div>
          <div className="stage-actions-student4">
            <span className="badge-student4">⭐ Recommandé</span>
            <button className="apply-btn-student4">Postuler</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default StagesRecommandes;
