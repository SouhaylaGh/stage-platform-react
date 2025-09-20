import React, { useState , useEffect } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../../assets/styles/Offres.css';
import { getOffers } from "../../Services/api";

const Offres = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tri, setTri] = useState("Plus récentes");
  const [offres, setOffres] = useState([]); // State pour stocker les offres récupérées
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
   
   useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await getOffers(); 
         console.log("Offres récupérées :", res.data);
        setOffres(res.data); // res.data contient ton tableau d'offres venant du backend
      } catch (err) {
        console.error("Erreur lors de la récupération des offres :", err);
        setError("Impossible de charger les offres");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
   }, []);
  const handleTriChange = (value) => {
    setTri(value);
    setShowDropdown(false);
    // ici tu peux ajouter la logique de tri selon `value`
  };
   if (loading) return <p>Chargement des offres...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

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
              <h3>{offre.title}</h3>
              {offre.recommande && <span className="recommande-student3"></span>}
              <span className="favori-icon-student3">
                {offre.favori ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
            </div>

            <div className="offre-infos-student3">
              <span><FaBuilding /> {offre.address}</span>
              <span><FaMapMarkerAlt /> {offre.city}</span>
              
            </div>

            <div className="offre-date-domaine-student3">
              <span><FaCalendarAlt /> Publié {offre.startDate}</span>
              <span className="badge-student3">{offre.domain}</span>
            </div>

            <p className="offre-description-student3">{offre.description}</p>

            <div className="offre-footer-student3">
              <div className="tags-student3">
                {offre.skills && JSON.parse(offre.skills).length > 0 ? (
                  JSON.parse(offre.skills).map((skill, index) => (
                    <span key={index} className="tag-student3">{skill}</span>
                 ))
                ) : (
                  <span className="tag-student3">Aucune compétence spécifiée</span>
               )}
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
