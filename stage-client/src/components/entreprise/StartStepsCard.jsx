import React from 'react';
import '../../assets/styles/StartStepsCard.css';
import { UserCheck, FilePlus, MailCheck, Target } from 'lucide-react';

const StartStepsCard = () => {
  return (
    <div>
      <div className="start-card-entreprise9">
      <h2 className="start-title-entreprise9">
        <Target size={20} className="start-icon-entreprise9" />
        Commencer avec StageConnect
      </h2>
      <p className="start-subtitle-entreprise9">Suivez ces étapes pour optimiser votre recrutement</p>

      <div className="start-steps-entreprise9">
        {/* Étape 1 */}
        <div className="step-entreprise9">
          <div className="step-icon-circle-entreprise9">
            <UserCheck size={24} className="icon-green-entreprise9" />
          </div>
          <h3 className="step-title-entreprise9">Complétez votre profil</h3>
          <p className="step-desc-entreprise9">Ajoutez les informations de votre entreprise pour attirer les candidats</p>
        </div>

        {/* Étape 2 */}
        <div className="step-entreprise9">
          <div className="step-icon-circle-entreprise9">
            <FilePlus size={24} className="icon-green-entreprise9" />
          </div>
          <h3 className="step-title-entreprise9">Publiez votre première offre</h3>
          <p className="step-desc-entreprise9">Créez une offre détaillée pour attirer les meilleurs profils</p>
        </div>

        {/* Étape 3 */}
        <div className="step-entreprise9">
          <div className="step-icon-circle-entreprise9">
            <MailCheck size={24} className="icon-green-entreprise9" />
          </div>
          <h3 className="step-title-entreprise9">Recevez des candidatures</h3>
          <p className="step-desc-entreprise9">Examinez les profils et sélectionnez vos candidats idéaux</p>
        </div>
      </div>
      </div>
      <div className="conseils-box-entreprise9">
        <h3>💡 Conseils pour réussir</h3>
        <div className="conseils-content-entreprise9">
          <div className="conseil-entreprise9">
            <h4>Soignez la description de vos offres</h4>
            <p>Rédigez des annonces claires et détaillées pour attirer les candidats les plus qualifiés.</p>
          </div>
          <div className="conseil-entreprise9">
            <h4>Répondez rapidement aux candidatures</h4>
            <p>Un retour rapide améliore votre image et augmente vos chances de recruter les meilleurs talents.</p>
          </div>
        </div>
      </div>
   </div>
  );
};

export default StartStepsCard;
