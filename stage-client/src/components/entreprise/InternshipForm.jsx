import React, { useState } from "react";
import "../../assets/styles/InternshipForm.css";
import { MapPin, Calendar ,Save } from "lucide-react";


const InternshipForm = () => {
   const [newSkill, setNewSkill] = useState("");
   const [skills, setSkills] = useState(["js"]);

  const handleAddSkill = () => {
    const trimmed = newSkill.trim();
    if (trimmed !== "" && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };
  return (
    <div className="form-container-Entreprise10">
      {/* Section Informations de base */}
      <section className="form-section-Entreprise10">
        <h2>Informations de base</h2>
        <p>Détails principaux de votre offre de stage</p>

        <div className="form-group-Entreprise10">
          <label>Titre du stage *</label>
          <input type="text" placeholder="Ex: Stage Développement Web Full Stack" />
        </div>

        <div className="form-row-Entreprise10">
          <div className="form-group-Entreprise10">
            <label>Domaine *</label>
            <select>
              <option>Sélectionnez un domaine</option>
               <option>Informatique</option>
               <option>Marketing</option>
               <option>Finance</option>
               <option>Design</option>
               <option>Commerce</option>
               <option>Ressources Humaines </option>
               <option>Communication</option>
               <option>Ingenierie</option>
            </select>
          </div>
          <div className="form-group-Entreprise10">
            <label>Niveau requis *</label>
            <select>
              <option>Niveau d'études</option>
              <option>Bac+2</option>
              <option>Bac+3</option>
              <option>Bac+4</option>
              <option>Bac+5</option>
            </select>
          </div>
        </div>

        <div className="form-group-Entreprise10">
          <label>Description du stage *</label>
          <textarea placeholder="Décrivez les missions, objectifs et contexte du stage..."></textarea>
        </div>
      </section>

      {/* Section Lieu et Durée */}
      <section className="form-section-Entreprise10">
        <h2>Lieu et Durée</h2>
        <p>Informations pratiques sur le stage</p>

        <div className="form-row-Entreprise10">
          <div className="form-group-Entreprise10 icon-select-Entreprise10">
            <label>Ville *</label>
            <div className="input-with-icon-Entreprise1">
              <MapPin size={16} />
              <select>
                <option>Sélectionnez une ville</option>
                <option value="casablanca">Casablanca</option>
                <option value="rabat">Rabat</option>
                <option value="marrakech">Marrakech</option>
                <option value="tanger">Tanger</option>
                <option value="fes">Fès</option>
                <option value="agadir">Agadir</option>
                <option value="meknes">Meknès</option>
                <option value="oujda">Oujda</option>
                <option value="nador">Nador</option>
  <             option value="eljadida">El Jadida</option>
              </select>
            </div>
          </div>
          <div className="form-group-Entreprise10">
            <label>Mode de travail</label>
            <select>
              <option>Présentiel</option>
              <option>Télétravail</option>
              <option>Hybride</option>
            </select>
          </div>
        </div>

        <div className="form-group-Entreprise10">
          <label>Adresse complète</label>
          <input type="text" placeholder="Adresse de l'entreprise" />
        </div>

        <div className="form-row-Entreprise10">
          <div className="form-group-Entreprise10 icon-select-Entreprise10">
            <label>Date de début *</label>
            <div className="input-with-icon-Entreprise10">
              
              <input type="date" />
            </div>
          </div>

          <div className="form-group-Entreprise10 icon-select-Entreprise10">
            <label>Date de fin</label>
            <div className="input-with-icon-Entreprise10">
              
              <input type="date" />
            </div>
          </div>

          <div className="form-group-Entreprise10">
            <label>Durée (mois)</label>
            <input type="number" min="1" placeholder="6" />
          </div>
        </div>
      </section>
            {/* Section Exigences et Compétences */}
      <section className="form-section-Entreprise10">
        <h2>Exigences et Compétences</h2>
        <p>Profil recherché et compétences requises</p>

        <div className="form-group-Entreprise10">
          <label>Profil recherché *</label>
          <textarea placeholder="Décrivez le profil idéal du candidat, les qualités recherchées..."></textarea>
        </div>

        <div className="form-group-Entreprise10">
          <label>Compétences techniques</label>
          <div className="tag-input-container-Entreprise10">
            <input type="text" placeholder="Ajouter une compétence" value={newSkill} onChange={(e) => setNewSkill(e.target.value)}
               onKeyDown={(e) => {
               if (e.key === "Enter") {
               e.preventDefault();
               handleAddSkill();
              }
              }} 
            />
            <button className="add-btn-Entreprise10" onClick={handleAddSkill}>+</button>
          </div>
          <div className="tags-display-Entreprise10">
            {skills.map((skill) => (
              <span className="tag-Entreprise10" key={skill}>{skill}
                <button
                  className="tag-remove-btn-Entreprise10"
                  onClick={() => handleRemoveSkill(skill)}
                >
                ×
              </button>
              </span>
            ))}
          </div>
        </div>

        <div className="form-group-Entreprise10">
          <label>Langues requises</label>
          <input type="text" placeholder="Ex: Français (courant), Anglais (intermédiaire)" />
        </div>
      </section>

      {/* Section Informations Complémentaires */}
      <section className="form-section-Entreprise10">
        <h2>Informations Complémentaires</h2>
        <p>Détails supplémentaires sur l'offre</p>

        <div className="form-row-Entreprise10">
          <div className="form-group-Entreprise10">
            <label>Rémunération</label>
            <input type="text" placeholder="Ex: 3000 MAD/mois ou Non rémunéré" />
          </div>

          <div className="form-group-Entreprise10 icon-select-Entreprise10">
            <label>Nombre de postes</label>
            <div className="input-with-icon-Entreprise1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="8.5" cy="7" r="4" />
                <line x1="18" x2="18" y1="8" y2="14" />
                <line x1="21" x2="15" y1="11" y2="11" />
              </svg>
              <input type="number" min="1" defaultValue={1} />
            </div>
          </div>
        </div>

        <div className="form-group-Entreprise10">
          <label>Avantages offerts</label>
          <textarea placeholder="Transport, restauration, formation, encadrement..." />
        </div>

        <div className="form-group-Entreprise10">
          <label>Options supplémentaires</label>
          <div className="checkbox-group-Entreprise10">
            <label><input type="checkbox" /> Recrutement urgent</label>
            <label><input type="checkbox" /> Télétravail possible</label>
            <label><input type="checkbox" /> Aide au logement</label>
          </div>
        </div>
      </section>
      {/*----drenire section */}
      <section className="form-section-Entreprise10">
        <h2>Contact pour Candidatures</h2>
        <p>Informations de contact pour les candidats</p>

        <div className="form-row-Entreprise10">
          <div className="form-group-Entreprise10">
            <label>Nom du contact</label>
            <input type="text" id="contactName" placeholder="Nom de la personne à contacter" />
          </div>
          <div className="form-group-Entreprise10">
            <label>Email de contact</label>
            <input type="text" id="contactName" value="recrutement@entreprise.com"
              readOnly />
          </div>

        </div>

        <div className="form-group-Entreprise10">
          <label>Instructions pour candidater</label>
          <textarea placeholder="Précisez comment les candidats doivent postuler (documents à fournir, processus de sélection...)" />
        </div>

      </section>
       <div className="form-actions-Entreprise10">
        <button className="btn-secondary-Entreprise10">Sauvegarder comme brouillon</button>
        <button className="btn-primary-Entreprise10"><span className="icon-btn-primary-Entreprise10"><Save size={20}/></span>Publier l'offre</button>
      </div>


    </div>
  );
};

export default InternshipForm;
