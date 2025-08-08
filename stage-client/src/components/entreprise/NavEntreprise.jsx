import React,{useState} from "react";
import {Search,Building2,X,AlignJustify,CircleUserRound} from 'lucide-react';
import '../../assets/styles/NavEntreprise.css'
import { useNavigate } from "react-router-dom";

const NavEntreprise = () =>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const navigate = useNavigate();


    return(
        <nav className="NavbarEntreprise-Entreprise-Entreprise9">
            <div className="NavbarEntreprise-left-Entreprise-Entreprise9">
                <Building2 className='logo-icon-NavbarEntreprise-Entreprise-Entreprise9'/>
                <span className="logo-text-NavbarEntreprise-Entreprise-Entreprise9">Espace Entreprise</span>
            </div>

            <button className="menu-toggle-NavbarEntreprise-Entreprise9" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24}/>:<AlignJustify size={24}/>}
            </button>

            <div className={`NavbarEntreprise-menu-Entreprise-Entreprise9 ${isMenuOpen ? 'open':''}`}>
                <div className="NavbarEntreprise-center-Entreprise-Entreprise9">
                    <a href="/Dashboard" className="NavbarEntreprise-link-Entreprise-Entreprise9">Dashboard</a>
                    <a href="/create" className="NavbarEntreprise-link-Entreprise-Entreprise9">créer une offre</a>
                </div>

                <div className="NavbarEntreprise-right-Entreprise-Entreprise9">
                     {/*<div className="search-box-NavbarStudent-student9">
                          <Search size={16} />
                          <input type="text" placeholder="Rechercher..." />
                      </div>
                    <a href="/student" className="btn-NavbarStudent-student9">
                      <CircleUserRound size={16} />Accueil 
                    </a>*/}
                    <button className="btn-NavbarEntreprise-Entreprise9" onClick={()=>navigate("/Home")}>
                         <CircleUserRound size={16} />Accueil 
                    </button>

                </div>
          </div>
        </nav>
    );
};
export default NavEntreprise;