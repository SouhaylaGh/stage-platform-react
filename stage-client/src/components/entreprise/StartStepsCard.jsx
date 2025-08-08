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
            <h4>Optimisez votre profil</h4>
            <p>Complétez toutes les sections de votre profil et ajoutez un CV récent pour augmenter vos chances.</p>
          </div>
          <div className="conseil-entreprise9">
            <h4>Postulez rapidement</h4>
            <p>Les meilleures offres partent vite ! Consultez régulièrement les nouvelles opportunités.</p>
          </div>
        </div>
      </div>
   </div>
  );
};

export default StartStepsCard;
