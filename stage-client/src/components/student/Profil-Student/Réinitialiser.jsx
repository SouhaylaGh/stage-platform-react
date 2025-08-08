import React from "react";
import "../../../assets/styles/Réinitialiser.css";
import { AlertTriangle, Mail, Settings, RotateCcw, HelpCircle } from "lucide-react";

const Réinitialiser = () => {
  return (
    <div className="reset-container-student14">
      <h2 className="reset-title-student14">
        <AlertTriangle  className="icon11-student14" />
        Réinitialiser mon profil
      </h2>
      <p className="reset-warning-student14">
        Attention : Cette action supprimera définitivement toutes vos informations personnalisées
      </p>

      <div className="reset-box-student14 danger-box-student14">
        <p className="danger-title-student14">
          <AlertTriangle  className="icon2-student14" />
          Action irréversible :
        </p>
        <ul className="student14">
          <li>Toutes vos informations personnelles (sauf email)</li>
          <li>Vos compétences et expériences</li>
          <li>Vos projets et certifications</li>
          <li>Votre CV et documents</li>
          <li>Vos centres d'intérêt</li>
        </ul>
      </div>

      <div className="reset-box-student14 info-box-student14">
        <p className="info-title-student14">
          Informations qui seront conservées :
        </p>
        <ul className="student14">
          <li>Votre adresse email</li>
          <li>Votre historique de candidatures</li>
          <li>Vos paramètres de compte</li>
        </ul>
      </div>

      <div className="reset-box-student14 reason-box-student14">
        <p className="info-title1-student14">
          Pourquoi réinitialiser ?
        </p>
        <ul className="student14">
          <li>Recommencer avec un profil vierge</li>
          <li>Changer complètement d'orientation</li>
          <li>Corriger des erreurs importantes</li>
        </ul>
      </div>

      <button className="reset-button1-student14">
        <RotateCcw size={16} className="icon-btn-student14" />
        Réinitialiser mon profil
      </button>

      <p className="support-text-student14">
        Besoin d'aide ? <a href="#">Contactez le support</a>
      </p>
    </div>
  );
};

export default Réinitialiser ;

