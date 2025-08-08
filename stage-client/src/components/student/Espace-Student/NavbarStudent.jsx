import React,{useState} from "react";
import {Search,GraduationCap,X,AlignJustify,CircleUserRound} from 'lucide-react';
import '../../../assets/styles/NavbarStudent.css'
import { useNavigate } from "react-router-dom";

const NavbarStudent = () =>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const navigate = useNavigate();


    return(
        <nav className="NavbarStudent-Student-student9">
            <div className="NavbarStudent-left-Student-student9">
                <GraduationCap className='logo-icon-NavbarStudent-Student-student9'/>
                <span className="logo-text-NavbarStudent-Student-student9">Espace Etudiant</span>
            </div>

            <button className="menu-toggle-NavbarStudent-student9" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24}/>:<AlignJustify size={24}/>}
            </button>

            <div className={`NavbarStudent-menu-Student-student9 ${isMenuOpen ? 'open':''}`}>
                <div className="NavbarStudent-center-Student-student9">
                    <a href="#accueil" className="NavbarStudent-link-Student-student9">Offres de Stage</a>
                    <a href="#annonces" className="NavbarStudent-link-Student-student9">Mon Profil</a>
                </div>

                <div className="NavbarStudent-right-Student-student9">
                     {/*<div className="search-box-NavbarStudent-student9">
                          <Search size={16} />
                          <input type="text" placeholder="Rechercher..." />
                      </div>
                    <a href="/student" className="btn-NavbarStudent-student9">
                      <CircleUserRound size={16} />Accueil 
                    </a>*/}
                    <button className="btn-NavbarStudent-student9" onClick={()=>navigate("/Home")}>
                         <CircleUserRound size={16} />Accueil 
                    </button>

                </div>
          </div>
        </nav>
    );
};
export default NavbarStudent;