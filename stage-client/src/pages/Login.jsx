import React, { useState } from 'react';
import { GraduationCap, Building2, Mail, Lock , Eye, EyeOff} from 'lucide-react';
import '../assets/styles/Login.css';


const Login = () => {
  const [accountType, setAccountType] = useState('etudiant');
  const [showPassword, setShowPassword] = useState(false); // 👁️ état
  return (
    <div className="login-container-login22">
      <h2>Se connecter</h2>
      <p className="subtext-login22">Choisissez votre type de compte</p>

      <div className="account-switch-login22">
        <button
          className={accountType === 'etudiant' ? 'active' : ''}
          onClick={() => setAccountType('etudiant')}
        >
          <GraduationCap size={18} />
          Étudiant
        </button>
        <button
          className={accountType === 'entreprise' ? 'active entreprise' : ''}
          onClick={() => setAccountType('entreprise')}
        >
          <Building2 size={18} />
          Entreprise
        </button>
      </div>

      <form className="login-form-login22">
        <label>Adresse email{accountType === 'entreprise' && ' professionnelle'}</label>
        <div className="input-icon-login22">
          <Mail size={16} />
          <input
            type="email"
            placeholder={
              accountType === 'etudiant'
                ? 'votre.email@exemple.com'
                : 'contact@entreprise.com'
            }
          />
        </div>

        <label>Mot de passe</label>
        <div className="input-icon-login22">
          <Lock size={16} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Votre mot de passe"
          />
          <span
            className="eye-icon-login22"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </span>
        </div>

        <div className="options-login22">
          <label>
            <input type="checkbox" /> Se souvenir de moi
          </label>
          <a href="#">Mot de passe oublié ?</a>
        </div>

        <button type="submit" className="submit-btn-login22">
          Se connecter
        </button>

        <p className="bottom-text-login22">
          {accountType === 'etudiant'
            ? 'Pas encore de compte ?'
            : 'Première fois sur StageConnect ?'}{' '}
          <a href="/signup">Créer un compte</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

