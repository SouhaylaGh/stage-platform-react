import React from "react";
import '../../assets/styles/Footer.css';
import { BookOpen } from 'lucide-react'; 

const Footer = () => {
  return (
  <footer className="footer-student5">
  <div className="footer-container-student5">

    {/* Bloc logo à gauche */}
    <div className="footer-logo-student5">
      <div className="footer-brand-student5">
        <BookOpen className="logo-icon-footer-student5" />
        <span className="logo-text-footer-student5">StageConnect</span>
      </div>
      <p className="footer-description-student5">
        La plateforme qui connecte étudiants <br />
        et entreprises pour des stages réussis.
      </p>
    </div>

    {/* Bloc Étudiants */}
    <div className="footer-block-student5">
      <h4>Étudiants</h4>
      <a href="#">Offres de stage</a>
      <a href="#">Mon profil</a>
    </div>

    {/* Bloc Entreprises */}
    <div className="footer-block-student5">
      <h4>Entreprises</h4>
      <a href="#">Dashboard</a>
      <a href="#">Publier une offre</a>
    </div>

    {/* Bloc Support */}
    <div className="footer-block-student5">
      <h4>Support</h4>
      <a href="#">Aide</a>
      <a href="#">Contact</a>
      <a href="#">À propos</a>
    </div>
    
  </div>

  <div className="footer-bottom-student5">
    <p>© 2024 StageConnect. Tous droits réservés.</p>
  </div>
</footer>

  );
};

export default Footer;