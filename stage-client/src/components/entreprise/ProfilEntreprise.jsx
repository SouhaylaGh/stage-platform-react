import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "../../assets/styles/Entreprise/ProfilEntreprise.css";

const ProfilEntreprise = () => {
  return (
    <div className="company-profile-container-Entreprise22">
      <h2>Profil de l'Entreprise</h2>
      <p className="subtitle-Entreprise22">Informations de votre entreprise</p>

      <div className="profile-content-Entreprise22">
        {/* Colonne gauche */}
        <div className="left-column-Entreprise22">
          <h3>Informations générales</h3>
          <div className="info-item-Entreprise22">
            <p className="label-Entreprise22">Nom de l'entreprise</p>
            <p className="value-Entreprise22">TechCorp</p>
          </div>
          <div className="info-item-Entreprise22">
            <p className="label-Entreprise22">Secteur d'activité</p>
            <p className="value-Entreprise22">Technologies de l'information</p>
          </div>
          <div className="info-item-Entreprise22">
            <p className="label-Entreprise22">Taille de l'entreprise</p>
            <p className="value-Entreprise22">50–100 employés</p>
          </div>

          <div className="info-item-Entreprise22">
            <p className="value-Des-Entreprise22">Description</p>
            <p className="label-Des-Entreprise22">
              TechCorp est une entreprise innovante spécialisée dans le développement de solutions technologiques pour les entreprises. Nous accompagnons nos clients dans leur transformation digitale.
            </p>
          </div>

          <button className="edit-button-Entreprise22">Modifier le profil</button>
        </div>

        {/* Colonne droite */}
        <div className="right-column-Entreprise22">
          <h3>Contact</h3>
          <div className="contact-item-Entreprise22">
            <Mail size={18} />
            <span>contact@techcorp.ma</span>
          </div>
          <div className="contact-item-Entreprise22">
            <Phone size={18} />
            <span>+212 522 XXX XXX</span>
          </div>
          <div className="contact-item-Entreprise22">
            <MapPin size={18} />
            <span>Casablanca, Maroc</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilEntreprise;