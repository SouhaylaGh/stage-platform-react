import React from 'react';
import { Eye, Users, CalendarDays } from 'lucide-react';
import '../../assets/styles/Entreprise/MesOffres.css';

const offres = [
  {
    titre: "Stage Développement Web",
    publie: "2024-01-15",
    expire: "2024-02-15",
    candidatures: 12,
    vues: 89,
    actif: "actif"
  },
  {
    titre: "Stage Marketing Digital",
    publie: "2024-01-10",
    expire: "2024-02-10",
    candidatures: 8,
    vues: 56,
    actif: "actif"
  },
  {
    titre: "Stage Marketing Digital",
    publie: "2024-01-10",
    expire: "2024-02-10",
    candidatures: 8,
    vues: 56,
    actif:"Expiré"
  }
];

const MesOffres = () => {
  return (
    <div className="gestion-container-Entreprise44">
      <div className="header-section-Entreprise44">
        <div>
          <h2>Gestion des Offres</h2>
          <p>Gérez toutes vos offres de stage</p>
        </div>
        <button className="btn-add-offre-Entreprise44">+  Nouvelle offre</button>
      </div>

      {offres.map((offre, index) => (
        <div key={index} className="offre-card-Entreprise44">
          <div className="offre-header-Entreprise44">
            <h3>{offre.titre}</h3>
            <span className={`badge-actif-Entreprise44 ${offre.actif=='Expiré'? 'badge-expire-Entreprise44' : 'badge-actif-Entreprise44'}`}>{offre.actif}</span>
          </div>

          <div className="offre-infos-Entreprise44">
            <span><CalendarDays size={16} /> Publié le {offre.publie}</span>
            <span>•</span>
            <span>Expire le {offre.expire}</span>
          </div>

          <div className="stats-row-Entreprise44">
            <div className="stat-box-Entreprise44">
              <Users size={20} color='rgb(37 99 235)' />
              <div>
                <div className="stat-number-Entreprise44">{offre.candidatures}</div>
                <div className="stat-label-Entreprise44">Candidatures</div>
              </div>
            </div>

            <div className="stat-box-Entreprise44">
              <Eye size={20} color='rgb(22 163 74)' />
              <div>
                <div className="stat-number-Entreprise44">{offre.vues}</div>
                <div className="stat-label-Entreprise44">Vues</div>
              </div>
            </div>
          </div>

          <div className="action-buttons-Entreprise44">
            <button className="btn-light-Entreprise44">Modifier</button>
            <button className="btn-light-Entreprise44">Candidatures</button>
            <button className="btn-danger-Entreprise44">Désactiver</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default  MesOffres;