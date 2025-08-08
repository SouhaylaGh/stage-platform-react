import React, { useState } from 'react';
import '../../assets/styles/NavHome.css';
import { BookOpen, Search, LogIn, UserPlus, Menu, X } from 'lucide-react';

const NavHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-student6">
      <div className="navbar-left-student6">
        <BookOpen className="logo-icon-Nav-student6" />
        <span className="logo-text-Nav-student6">StageConnect</span>
      </div>

      <button className="menu-toggle-student6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={24} /> : <Menu size={20} />}
      </button>

      <div className={`navbar-menu-student6 ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-center-student6">
          <a href="#accueil" className="nav-link-student6">Accueil</a>
          <a href="#annonces" className="nav-link-student6">Espace Etudiant</a>
          <a href="#annonces" className="nav-link-student6">Espace Entreprise</a>
          <a href="#apropos" className="nav-link-student6">À propos</a>
          <a href="#faq" className="nav-link-student6">FAQ</a>
        </div>

        <div className="navbar-right-student6">
          {/*<div className="search-box-student6">
            <Search size={16} />
            <input type="text" placeholder="Rechercher..." />
          </div>*/}
          <a href="/login" className="btn-login-Nav-student6">
            <LogIn size={16} /> Connexion
          </a>
          <a href="/signup" className="btn-signup-Nav-student6">
            <UserPlus size={16} /> Inscription
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavHome;
