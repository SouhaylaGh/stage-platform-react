import React,{useState} from "react";
import {Search,X,AlignJustify,CircleUserRound} from 'lucide-react';
import '../../assets/styles/NavStudent.css';
import { useNavigate } from "react-router-dom";

const NavStudent = () =>{
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    const navigate=useNavigate();

    return(
        <nav className="navbar-Student">
            <div className="navbar-left-Student">
                <Search className='logo-icon-Nav-Student'/>
                <span className="logo-text-Nav-Student">Offres de Stage</span>
            </div>

            <button className="menu-toggle-Student" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24}/>:<AlignJustify size={24}/>}
            </button>

            <div className={`navbar-menu-Student ${isMenuOpen ? 'open':''}`}>
                <div className="navbar-center-Student">
                    <a href="#accueil" className="nav-link-Student">Mes Candidatures</a>
                    <a href="/profil" className="nav-link-Student">Profil</a>
                </div>

                <div className="navbar-right-Student">
                     <div className="search-box-Student2">
                          <Search size={16} />
                          <input type="text" placeholder="Rechercher..." />
                      </div>
                   {/* <a href="/student" className="btn-Student">
                      <CircleUserRound size={16} />Accueil Etudiant
                    </a>*/}
                    <button className="btn-Student" onClick={()=>navigate("/")}>
                        <CircleUserRound size={16} />Accueil Etudiant
                    </button>

                </div>
          </div>
        </nav>
    );
};
export default NavStudent;