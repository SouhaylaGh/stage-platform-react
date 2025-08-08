import React,{useState} from "react";
import {Search,Building2,X,AlignJustify,CircleUserRound} from 'lucide-react';
import '../../assets/styles/OffreEntreprise.css'
import { useNavigate } from "react-router-dom";

const OffreEntreprise = () =>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const navigate = useNavigate();


    return(
        <nav className="NavbarEntreprise-Entreprise-Entreprise10">
            <div className="NavbarEntreprise-left-Entreprise-Entreprise10">
                <Building2 className='logo-icon-NavbarEntreprise-Entreprise-Entreprise10'/>
                <span className="logo-text-NavbarEntreprise-Entreprise-Entreprise10">Créer une Offre</span>
            </div>

            <button className="menu-toggle-NavbarEntreprise-Entreprise10" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24}/>:<AlignJustify size={24}/>}
            </button>

            <div className={`NavbarEntreprise-menu-Entreprise-Entreprise10 ${isMenuOpen ? 'open':''}`}>
                <div className="NavbarEntreprise-center-Entreprise-Entreprise10">
                    <a href="#accueil" className="NavbarEntreprise-link-Entreprise-Entreprise10">Dashboard</a>
                </div>

                <div className="NavbarEntreprise-right-Entreprise-Entreprise10">
                     {/*<div className="search-box-NavbarStudent-student9">
                          <Search size={16} />
                          <input type="text" placeholder="Rechercher..." />
                      </div>
                    <a href="/student" className="btn-NavbarStudent-student9">
                      <CircleUserRound size={16} />Accueil 
                    </a>*/}
                    <button className="btn-NavbarEntreprise-Entreprise10" onClick={()=>navigate("/Home")}>
                         <CircleUserRound size={16} />Accueil 
                    </button>

                </div>
          </div>
        </nav>
    );
};
export default OffreEntreprise;