import React, { useState } from 'react';
import '../assets/styles/Signup.css';
import { GraduationCap, Building2, Mail, Phone, Lock, Eye, EyeOff, User, MapPin } from 'lucide-react';
import EntrepriseSignup from '../components/entreprise/EntrepriseSignup';

export default function Signup() {
  const [isStudent, setIsStudent] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="form-container-Entreprise66">
      <h2>Inscription</h2>
      <p className="subtitle-Entreprise66">Choisissez votre type de compte</p>

      <div className="account-type-toggle-Entreprise66">
        <button
          className={isStudent ? 'active' : ''}
          onClick={() => setIsStudent(true)}
        >
          <GraduationCap size={16} /> Étudiant
        </button>
        <button
          className={!isStudent ? 'active' : ''}
          onClick={() => setIsStudent(false)}
        >
          <Building2 size={16} /> Entreprise
        </button>
      </div>
      {isStudent ? (
          <form className="form-grid-Entreprise66">
        <div className="form-group-Entreprise66">
          <label>Prénom *</label>
          <div className="input-icon-Entreprise6">
            <User size={16} />
            <input type="text" placeholder="Votre prénom" />
          </div>
        </div>

        <div className="form-group-Entreprise66">
          <label>Nom *</label>
          <div className="input-icon-Entreprise6">
            <User size={16} />
            <input type="text" placeholder="Votre nom" />
          </div>
        </div>

        <div className="form-group-Entreprise66">
          <label>Email *</label>
          <div className="input-icon-Entreprise66">
            <Mail size={16} />
            <input type="email" placeholder="votre.email@exemple.com" />
          </div>
        </div>

        <div className="form-group-Entreprise66">
          <label>Téléphone</label>
          <div className="input-icon-Entreprise66">
            <Phone size={16} />
            <input type="tel" placeholder="+212 6XX XXX XXX" />
          </div>
        </div>
        <div className="form-row-Entreprise66">
           <div className="form-group1-Entreprise66">
             <label>Ville</label>
             <div className="input-icon-Entreprise6">
                  <MapPin size={16} />
                  <select>
                     <option>Sélectionner</option>
                     <option>Casablanca</option>
                     <option>Rabat</option>
                     <option>Marrakech</option>
                   </select>
               </div>
           </div>

           <div className="form-group1-Entreprise66">
             <label>Niveau d'études</label>
             <div className="input-icon-Entreprise6">
                 <select>
                 <option>Sélectionner</option>
                 <option>Bac+2</option>
                 <option>Bac+3</option>
                 <option>Bac+5</option>
                 </select>
               </div>
           </div>

           <div className="form-group1-Entreprise66">
              <label>Domaine d'études</label>
              <div className="input-icon-Entreprise6">
                 <select>
                  <option>Sélectionner</option>
                  <option>Informatique</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                 </select>
               </div>
           </div>
        </div>
        <div className="form-group-Entreprise66">
          <label>Mot de passe *</label>
          <div className="input-icon-Entreprise66">
            <Lock size={16} />
            <input type={showPassword ? "text" : "password"} placeholder="Minimum 6 caractères" />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>

        <div className="form-group-Entreprise66">
          <label>Confirmer le mot de passe *</label>
          <div className="input-icon-Entreprise66">
            <Lock size={16} />
            <input type={showConfirm ? "text" : "password"} placeholder="Répéter le mot de passe" />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>

        <div className="form-group-Entreprise66 checkbox-full">
          <label className="checkbox-label-Entreprise66">
            <input type="checkbox" />
            J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a>
          </label>
        </div>

        <button type="submit" className="submit-btn-Entreprise55-Entreprise66">
          Créer mon compte étudiant
        </button>

        <p className="login-link-Entreprise66">
          Déjà un compte ? <a href="/login">Se connecter</a>
        </p>
           </form>
        ) : (
         <EntrepriseSignup />
        )}
    </div>
  );
}
