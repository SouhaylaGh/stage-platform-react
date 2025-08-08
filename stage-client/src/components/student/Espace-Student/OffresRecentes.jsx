import React from 'react';
import '../../../assets/styles/OffresRecentes.css';
import { MapPin, CalendarDays,Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const offres = [
  {
    domaine: 'Informatique',
    recommande: true,
    date: "Aujourd'hui",
    titre: 'Stage Développement Web',
    entreprise: 'TechCorp',
    ville: 'Casablanca'
  },
  {
    domaine: 'Marketing',
    recommande: false,
    date: "Aujourd'hui",
    titre: 'Stage Marketing Digital',
    entreprise: 'MarketPro',
    ville: 'Rabat'
  },
  {
    domaine: 'Design',
    recommande: true,
    date: 'Hier',
    titre: 'Stage UX/UI Design',
    entreprise: 'CreativeStudio',
    ville: 'Casablanca'
  }
];

const OffresRecentes = () => {
  
  const navigate = useNavigate();
  return (
    <div className="offres-container-student9">
      <div className="offres-header-student9">
        <h2>Offres récentes</h2>
        <button className="voir-toutes-btn-student9" onClick={()=>navigate("/offres")}>Voir toutes les offres</button>
      </div>

      <div className="offres-list-student9">
        {offres.map((offre, index) => (
          <div className="offre-card-student9" key={index}>
            <div className="offre-tags-student9">
              <span className="tag-student9 domaine">{offre.domaine}</span>
              {offre.recommande && <span className="tag-student9 recommande">✨ Recommandé</span>}
              <span className="tag-student9 date"><CalendarDays size={14} /> {offre.date}</span>
            </div>
            <h3>{offre.titre}</h3>
            <p className="entreprise-student9"><Building2 size={14}  />{offre.entreprise}</p>
             <p className="ville-student9"><MapPin size={14} /> {offre.ville}</p>
              <button className="details-btn-student9">Voir détails</button>
          </div>
        ))}
      </div>

      <div className="conseils-box-student9">
        <h3>💡 Conseils pour réussir</h3>
        <div className="conseils-content-student9">
          <div className="conseil-student9">
            <h4>Optimisez votre profil</h4>
            <p>Complétez toutes les sections de votre profil et ajoutez un CV récent pour augmenter vos chances.</p>
          </div>
          <div className="conseil-student9">
            <h4>Postulez rapidement</h4>
            <p>Les meilleures offres partent vite ! Consultez régulièrement les nouvelles opportunités.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffresRecentes;
