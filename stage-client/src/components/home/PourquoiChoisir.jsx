import React from 'react';
import '../../assets/styles/PourquoiChoisir.css';
import { FaSearch, FaUserCircle, FaRegListAlt } from 'react-icons/fa';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const PourquoiChoisir = () => {
  const items = [
    {
      icon: <FaSearch size={36} color="#2563eb" />,
      title: 'Recherche Intelligente',
      text: 'Filtrez par domaine, ville, et mots-clés. Notre IA recommande les stages qui correspondent à votre profil.'
    },
    {
      icon: <FaUserCircle size={36} color="#2563eb" />,
      title: 'Profil Personnalisé',
      text: 'Créez votre profil, uploadez votre CV et laissez les entreprises vous découvrir.'
    },
    {
      icon: <FaRegListAlt size={36} color="#2563eb" />,
      title: 'Gestion Simplifiée',
      text: 'Interface intuitive pour les entreprises : publiez vos offres et gérez vos candidatures facilement.'
    }
  ];

   const offres = [
    {
      domaine: 'Informatique',
      titre: 'Stage Développement Web',
      entreprise: 'TechCorp',
      ville: 'Casablanca',
      date: "Aujourd'hui"
    },
    {
      domaine: 'Marketing',
      titre: 'Stage Marketing Digital',
      entreprise: 'MarketPro',
      ville: 'Rabat',
      date: "Aujourd'hui"
    },
    {
      domaine: 'Finance',
      titre: 'Stage Comptabilité',
      entreprise: 'FinanceExpert',
      ville: 'Marrakech',
      date: "Aujourd'hui"
    }
    
  ];
  
  const navigate=useNavigate();
  

  return (
    <>
      <section className="pourquoi-section-student8">
         <h2 className="pourquoi-title-student8">Pourquoi choisir StageConnect ?</h2>
          <div className="pourquoi-cards-student8">
             {items.map((item, index) => (
             <div key={index} className="card-student8">
                  <div className="icon-student8">{item.icon}</div>
                  <h3 className="card-title-student8">{item.title}</h3>
                  <p className="card-text-student8">{item.text}</p>
              </div>
              ))}
           </div>
      </section>
       <section className="offres-section-student8">
        <div className="offres-header-student8">
          <h2>Offres publiées aujourd'hui</h2>
          <button className="voir-btn-student8" onClick={()=>navigate("/offres")}>Voir toutes les offres</button>
        </div>
        <div className="offres-cards-student8">
          {offres.map((offre, index) => (
            <div key={index} className="offre-card-student8">
              <div className="offre-header-student8">
                <span className="offre-tag-student8">{offre.domaine}</span>
                <span className="offre-date-student8"><FaCalendarAlt /> {offre.date}</span>
              </div>
              <h3 className='offre-title-student8'>{offre.titre}</h3>
              <p className="offre-entreprise-student8"><FaBuilding /> {offre.entreprise}</p>
              <p className="offre-ville-student8"><FaMapMarkerAlt /> {offre.ville}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer/>


    </>
    
  );
};

export default PourquoiChoisir;
