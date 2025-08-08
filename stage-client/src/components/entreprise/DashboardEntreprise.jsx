import React from 'react';
import '../../assets/styles/DashboardEntreprise.css';
import {
  FileText,
  TrendingUp,
  Users,
  Sparkles,
  Search,
  Plus,
  UserCircle,
  Eye
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import StartStepsCard from './StartStepsCard';

const DashboardEntreprise = () => {
const navigate = useNavigate();
  return (
    <div className="dashboardEntreprise-container-Entreprise9">
      <h1>Bienvenue dans votre espace entreprise</h1>
      <p className="subtitle-Entreprise9">Trouvez les meilleurs talents pour vos stages</p>

      <div className="dashboardEntreprise-buttons-Entreprise9">
        <button className="btn-Entreprise9 primary" onClick={()=>navigate("/create")}>< Plus size={20} className='btn-icon-Entreprise9' />publier une offre</button>
        <button className="btn-Entreprise9 secondary" onClick={()=>navigate("/Dashboard")}><Eye size={20}  className='btn-icon-Entreprise9'  />Voir le dashboard</button>
      </div>

      <div className="dashboardEntreprise-stats-Entreprise9">
        <div className="card-Entreprise9 blue">
          <FileText size={28} />
          <h2>156</h2>
          <p>Offres publiées</p>
        </div>
        <div className="card-Entreprise9 green">
          <TrendingUp size={28} />
          <h2>12</h2>
          <p>Offres actives</p>
        </div>
        <div className="card-Entreprise9 purple">
          <Users size={28} />
          <h2>0</h2>
          <p>Candidatures reçues</p>
        </div>
        <div className="card-Entreprise9 orange">
          <Eye size={28} />
          <h2>8</h2>
          <p>Vues du profil</p>
        </div>
      </div>

      <div className="dashboardEntreprise-actions-Entreprise9">
        <div className="action-box-Entreprise9 offre" onClick={()=>navigate("/create")} style={{ cursor: "pointer" }}>
          <Plus size={38} color='rgb(22 163 74)'/>
          <h3>Publier une offre</h3>
          <p>Créez une nouvelle offre de stage et attirez les meilleurs candidats</p>
        </div>
        <div className="action-box-Entreprise9" onClick={()=>navigate("/Dashboard")} style={{ cursor: "pointer" }}>
          <Eye size={38} color='#1024b9ff' />
          <h3>Dashboard complet</h3>
          <p>Accédez à votre tableau de bord avec toutes vos statistiques</p>
        </div>
        <div className="action-box-Entreprise9 " onClick={()=>navigate("/Dashboard")} style={{ cursor: "pointer" }}>
          <Users size={38} color='#7807d4ff' />
          <h3>Gerer les Candidatures</h3>
          <p>Examinez et gerez toutes les Candidatures recues</p>
        </div>
        <StartStepsCard/>
      </div>
      
    </div>
  );
};

export default DashboardEntreprise;
