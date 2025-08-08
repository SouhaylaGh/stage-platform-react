import React,{useState} from "react";
import {Search,Building2,X,AlignJustify,CircleUserRound,Plus} from 'lucide-react';
import '../../assets/styles/NavDashboard.css'
import { useNavigate } from "react-router-dom";

const NavDashboard = () =>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const navigate = useNavigate();


    return(
        <nav className="NavbarEntreprise-Entreprise-Entreprise12">
            <div className="NavbarEntreprise-left-Entreprise-Entreprise12">
                <Building2 className='logo-icon-NavbarEntreprise-Entreprise-Entreprise12'/>
                <span className="logo-text-NavbarEntreprise-Entreprise-Entreprise12">TechCorp Dashboard</span>
            </div>

            <button className="menu-toggle-NavbarEntreprise-Entreprise12" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24}/>:<AlignJustify size={24}/>}
            </button>

            <div className={`NavbarEntreprise-menu-Entreprise-Entreprise12 ${isMenuOpen ? 'open':''}`}>
                <div className="NavbarEntreprise-center-Entreprise-Entreprise12">
                    <a href="#accueil" className="NavbarEntreprise-link-Entreprise-Entreprise12">Accueil Entreprise</a>
                </div>

                <div className="NavbarEntreprise-right-Entreprise-Entreprise12">
                     {/*<div className="search-box-NavbarStudent-student9">
                          <Search size={16} />
                          <input type="text" placeholder="Rechercher..." />
                      </div>
                    <a href="/student" className="btn-NavbarStudent-student9">
                      <CircleUserRound size={16} />Accueil 
                    </a>*/}
                    <button className="btn-NavbarEntreprise-Entreprise12" onClick={()=>navigate("/Home")}>
                         <Plus size={16} />Nouvelle offre 
                    </button>

                </div>
          </div>
        </nav>
    );
};
export default NavDashboard;