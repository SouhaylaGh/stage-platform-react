import React from 'react';
import '../../../assets/styles/Dashboard.css';
import OffresRecentes from './OffresRecentes';
import {
  FileText,
  TrendingUp,
  User,
  Sparkles,
  Search,
  UserCircle
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container-student9">
      <h1>Bienvenue dans votre espace étudiant</h1>
      <p className="subtitle-student9">Trouvez le stage parfait pour votre carrière</p>

      <div className="dashboard-buttons-student9">
        <button className="btn-student9 primary" onClick={()=>navigate("/offres")}><Search size={20} className='btn-icon-student9' /> Parcourir les offres</button>
        <button className="btn-student9 secondary" onClick={()=>navigate("/profil")}><User size={20} /> Compléter mon profil</button>
      </div>

      <div className="dashboard-stats-student9">
        <div className="card-student9 blue">
          <FileText size={28} />
          <h2>156</h2>
          <p>Offres disponibles</p>
        </div>
        <div className="card-student9 green">
          <TrendingUp size={28} />
          <h2>12</h2>
          <p>Nouvelles aujourd'hui</p>
        </div>
        <div className="card-student9 purple">
          <User size={28} />
          <h2>0</h2>
          <p>Mes candidatures</p>
        </div>
        <div className="card-student9 orange">
          <Sparkles size={28} />
          <h2>8</h2>
          <p>Recommandés pour moi</p>
        </div>
      </div>

      <div className="dashboard-actions-student9">
        <div className="action-box-student9" onClick={()=>navigate("/offres")} style={{ cursor: "pointer" }}>
          <Search size={38} color='#2563eb'/>
          <h3>Rechercher des stages</h3>
          <p>Explorez toutes les offres disponibles avec nos filtres avancés</p>
        </div>
        <div className="action-box-student9" onClick={()=>navigate("/profil")} style={{ cursor: "pointer" }}>
          <UserCircle size={38} color='#10b981' />
          <h3>Gérer mon profil</h3>
          <p>Complétez votre profil et uploadez votre CV pour attirer les recruteurs</p>
        </div>
        <div className="action-box-student9 recommended" onClick={()=>navigate("/offres")} style={{ cursor: "pointer" }}>
          <Sparkles size={38} color='#f97316' />
          <h3>Stages recommandés</h3>
          <p>Découvrez les stages qui correspondent parfaitement à votre profil</p>
        </div>
        <OffresRecentes/>
      </div>
      
    </div>
  );
};

export default Dashboard;
