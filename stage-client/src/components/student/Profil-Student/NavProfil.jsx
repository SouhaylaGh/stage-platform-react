import React, { useState } from 'react';
import '../../../assets/styles/NavProfil.css';
import {GraduationCap, Search, UserRound, Menu, X } from 'lucide-react';

const NavProfil = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-Profil8">
      <div className="navbar-Profil-left8">
        <GraduationCap className="logo-icon-Nav-Profil8" />
        <span className="logo-text-Nav-Profil8">Mon Profil</span>
      </div>

      <button className="menu-toggle-Profil8" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={20} />}
      </button>

      <div className={`navbar-Profil-menu8 ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-Profil-center8">
          <a href="/offres" className="nav-Profil-link8">Offres de stage</a>
          <a href="#annonces" className="nav-Profil-link8">Mes Condidatures</a>
        </div>

       {/*<div className="navbar-Profil-right8">
          <div className="search-box-Profil8">
            <Search size={16} />
            <input type="text" placeholder="Rechercher..." />
          </div>
          <a href="/login" className="btn-login-Nav-Profil8">
            <UserRound size={16} /> Accueil Etudiant
          </a>
        </div>*/}
      </div>
    </nav>
  );
};

export default NavProfil ;
