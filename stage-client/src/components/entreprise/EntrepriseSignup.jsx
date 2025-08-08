import React, { useState } from 'react';
import { Building2, Mail, Phone, Lock, Eye, EyeOff, User, Globe, MapPin, Home } from 'lucide-react';
import '../../assets/styles/Entreprise/EntrepriseSignup.css'

export default function EntrepriseSignup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <form className="entreprise-form-Entreprise33">
      <h3>Informations de l'entreprise</h3>

      <div className="form-group-Entreprise33">
        <label>Nom de l'entreprise *</label>
        <div className="input-icon-Entreprise33">
          <Building2 size={16} />
          <input type="text" placeholder="Nom de votre entreprise" />
        </div>
      </div>

      <div className="form-row-Entreprise33">
        <div className="form-group-Entreprise33">
          <label>Secteur d'activité</label>
          <select>
            <option>Sélectionner</option>
            <option>Informatique</option>
            <option>Finance</option>
          </select>
        </div>
        <div className="form-group-Entreprise33">
          <label>Taille de l'entreprise</label>
          <select>
            <option>Sélectionner</option>
            <option>1-10</option>
            <option>11-50</option>
            <option>51+</option>
          </select>
        </div>
      </div>

      <div className="form-group-Entreprise33">
        <label>Description de l'entreprise</label>
        <textarea placeholder="Décrivez brièvement votre entreprise, ses activités et sa culture…" />
      </div>

      <h3>Informations de contact</h3>

      <div className="form-group-Entreprise33">
        <label>Nom du contact *</label>
        <div className="input-icon-Entreprise33">
          <User size={16} />
          <input type="text" placeholder="Nom de la personne responsable" />
        </div>
      </div>

      <div className="form-row-Entreprise33">
        <div className="form-group-Entreprise33">
          <label>Email professionnel *</label>
          <div className="input-icon-Entreprise3">
            <Mail size={16} />
            <input type="email" placeholder="contact@entreprise.com" />
          </div>
        </div>
        <div className="form-group-Entreprise33">
          <label>Téléphone</label>
          <div className="input-icon-Entreprise3">
            <Phone size={16} />
            <input type="tel" placeholder="+212 522 XXX XXX" />
          </div>
        </div>
      </div>

      <div className="form-group-Entreprise33">
        <label>Site web</label>
        <div className="input-icon-Entreprise3">
          <Globe size={16} />
          <input type="url" placeholder="www.entreprise.com" />
        </div>
      </div>

      <div className="form-row-Entreprise33">
        <div className="form-group-Entreprise33">
          <label>Adresse</label>
          <div className="input-icon-Entreprise33">
            <Home size={16} />
            <input type="text" placeholder="Adresse complète" />
          </div>
        </div>
        <div className="form-group-Entreprise33">
          <label>Ville</label>
          <div className="input-icon-Entreprise33">
            <MapPin size={16} />
            <select>
              <option>Sélectionner</option>
              <option>Casablanca</option>
              <option>Rabat</option>
              <option>Marrakech</option>
            </select>
          </div>
        </div>
      </div>

      <h3>Sécurité</h3>

      <div className="form-row-Entreprise33">
        <div className="form-group-Entreprise33">
          <label>Mot de passe *</label>
          <div className="input-icon-Entreprise3">
            <Lock size={16} />
            <input type={showPassword ? "text" : "password"} placeholder="Minimum 6 caractères" />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>
        <div className="form-group-Entreprise33">
          <label>Confirmer le mot de passe *</label>
          <div className="input-icon-Entreprise3">
            <Lock size={16} />
            <input type={showConfirm ? "text" : "password"} placeholder="Répéter le mot de passe" />
            <span onClick={() => setShowConfirm(!showConfirm)}>
              {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
            </span>
          </div>
        </div>
      </div>

      <div className="form-group-Entreprise33 checkbox-full-Entreprise33">
        <label className="checkbox-label-Entreprise33">
          <input type="checkbox" /> J'accepte les <a href="#">conditions d'utilisation</a> et la <a href="#">politique de confidentialité</a>
        </label>
      </div>

      <button type="submit" className="submit-btn-Entreprise33">
        Créer mon compte entreprise
      </button>

      <p className="login-link-Entreprise33">
        Déjà un compte ? <a href="/login">Se connecter</a>
      </p>
    </form>
  );
}
