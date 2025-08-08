import React from 'react';
import { CheckCircle,Star,FileText,Dot,Users} from 'lucide-react';
import '../../assets/styles/Entreprise/DétailsOffre.css';

const missions = [
  "Développement d’applications web avec React et Node.js",
  "Participation à la conception d’APIs REST",
  "Intégration de bases de données MongoDB",
  "Tests unitaires et d’intégration",
  "Collaboration avec l’équipe UX/UI",
  "Veille technologique et documentation",
  "Participation aux réunions d’équipe et code reviews",
  "Optimisation des performances des applications",
];
const profilItems = [
  "Étudiant en informatique (Bac+4/Bac+5)",
  "Maîtrise de JavaScript et des frameworks modernes",
  "Connaissance de React et Node.js",
  "Bases en bases de données (SQL/NoSQL)",
  "Esprit d'équipe et autonomie",
  "Curiosité et envie d'apprendre",
  "Capacité d’adaptation et de résolution de problèmes",
  "Bonnes compétences en communication",
];
const techSkills = [
  "React", "Node.js", "MongoDB", "JavaScript", "Git", "REST API", "HTML/CSS", "TypeScript"
];

const languages = [
  "Français (courant)",
  "Anglais (intermédiaire)",
  "Arabe (optionnel)"
];
const avantages = [
  "Encadrement par des seniors expérimentés",
  "Formation continue et certifications",
  "Tickets restaurant (50 MAD/jour)",
  "Transport remboursé à 100%",
  "Environnement de travail moderne",
  "Possibilité de télétravail 2j/semaine",
  "Accès à une bibliothèque technique",
  "Événements d'équipe réguliers"
];
const DétailsOffre = () => {
  return (
    <div className="stage-container">
      <div className="card">
        <h2 className="card-title"><FileText  size={23} color='#10b981'/> Description du stage</h2>
        <p>
          Rejoignez notre équipe dynamique pour un stage de développement web de 6 mois. 
          Vous travaillerez sur des projets innovants utilisant les dernières technologies web.
        </p>
        <p>
          Vous serez intégré(e) dans une équipe de 8 développeurs expérimentés qui vous accompagneront
          tout au long de votre stage. C’est une excellente opportunité pour acquérir une expérience pratique
          dans un environnement professionnel stimulant.
        </p>
        <p>
          Notre entreprise valorise l’innovation, la créativité et l’apprentissage continu. 
          Vous aurez l’occasion de travailler sur des projets réels qui impactent directement nos clients.
        </p>
      </div>

      <div className="card">
        <h2 className="card-title"><CheckCircle size={23} color='#10b981'/> Missions principales</h2>
        <ul className="missions-list">
          {missions.map((mission, index) => (
            <li key={index}>
              <CheckCircle className="check-icon" strokeWidth={2} size={18} />
              {mission}
            </li>
          ))}
        </ul>
      </div>
      <div className="profil-container">
      <div className="card">
        <h2 className="card-title"><Users size={23} color='#10b981'/> Profil recherché</h2>
        <ul className="profil-list">
          {profilItems.map((item, index) => (
            <li key={index}>
              <Dot className="dot-icon" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="card grid-card">
        <div className="tech-skills">
          <h3 className="card-subtitle">Compétences techniques</h3>
          <div className="tag-list">
            {techSkills.map((skill, index) => (
              <span className="tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      

        <div className="languages">
          <h3 className="card-subtitle">Langues requises</h3>
          <ul className="lang-list">
            {languages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        </div>
      </div>
     </div>
     <div className="card avantages-card">
      <h2 className="card-title">
        <Star size={18} style={{ marginRight: '6px', color: '#16a34a' }} />
        Avantages offerts
      </h2>
      <div className="avantages-grid">
        {avantages.map((item, index) => (
          <div className="avantage-item" key={index}>
            <CheckCircle className="check-icon" size={18} strokeWidth={2} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DétailsOffre;
