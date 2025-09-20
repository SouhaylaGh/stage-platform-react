import React, { useState } from 'react';
import { GraduationCap, Building2, Mail, Lock , Eye, EyeOff} from 'lucide-react';
import '../assets/styles/Login.css';
import {  loginStudent, loginCompany } from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
  const [accountType, setAccountType] = useState('etudiant');
  const [showPassword, setShowPassword] = useState(false); // 👁️ état
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
   const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (accountType === 'etudiant') {
        res = await loginStudent(credentials);
      } else {
        res = await loginCompany(credentials);
      }
      const token = res.data.token;
      if (token) {
        // Stocker le token
        localStorage.setItem("token", token);

        // Décoder pour vérifier le rôle (optionnel)
        const decoded = jwtDecode(token);
        //const role = decoded.role?.toLowerCase();
         console.log("Token reçu au login :", decoded);

        // Rediriger selon le rôle
        if (decoded.roleType?.toLowerCase() === "student") {
          navigate("/student-home");
        } else if (decoded.roleType?.toLowerCase() === "entreprise") {
          navigate("/company-home");
        } else if (decoded.roleType?.toLowerCase() === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/");
        }

      } else {
        alert("Erreur : aucun token reçu");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion");
    }
  };
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

      <form className="login-form-login22" onSubmit={handleLogin}>
        <label>Adresse email{accountType === 'entreprise' && ' professionnelle'}</label>
        <div className="input-icon-login22">
          <Mail size={16} />
          <input
            name={accountType === 'etudiant' ? 'email' : 'emailPro'}
            value={credentials[accountType === 'etudiant' ? 'email' : 'emailPro'] || ''}
            onChange={handleChange}
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
            name="password"
            value={credentials.password || ''}
            onChange={handleChange}
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

