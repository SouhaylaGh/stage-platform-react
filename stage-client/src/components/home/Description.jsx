import React from "react";
import { User2, Building2 } from 'lucide-react';
import  '../../assets/styles/Description.css';


const Description = () =>{
    return(
       <section className="hero-section-student4">
          <h1 className="hero-title-student4">Trouvez le stage parfait pour votre carrière</h1>
          <p className="hero-subtitle-student4">
             Plateforme moderne qui connecte les étudiants aux meilleures opportunités de stage
             et aide les entreprises à trouver les talents de demain.
           </p>
           <div className="hero-buttons-student4">
              <button className="student-btn-student4">
                 <User2 size={18} /> Je suis étudiant
               </button>
              <button className="company-btn-student4">
                 <Building2 size={18} /> Je suis une entreprise
              </button>
           </div>
       </section>


    );
};
export default Description;