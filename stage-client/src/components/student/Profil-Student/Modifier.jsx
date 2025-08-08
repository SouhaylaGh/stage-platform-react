import React, { useState } from 'react';
import '../../../assets/styles/Modifier.css';

const Modifier = () => {
  const [competence, setCompetence] = useState('');
  const [competences, setCompetences] = useState([
    'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'MongoDB', 'TypeScript'
  ]);

  const handleAddCompetence = () => {
    if (competence && !competences.includes(competence)) {
      setCompetences([...competences, competence]);
      setCompetence('');
    }
  };

  const handleRemoveCompetence = (item) => {
    setCompetences(competences.filter((c) => c !== item));
  };

  return (
    <div className="modifier-profil-container-student15">
      <h2>Modifier mon profil</h2>
      <p className="subtitle-modifier-profil-student15">Mettez à jour vos informations personnelles et professionnelles</p>

      <form className="form-profil-modifier-profil-student15">
        {/* Informations personnelles */}
        <h3>Informations personnelles</h3>
       {/* <div className="form-grid">
          <input type="text" placeholder="Prénom" defaultValue="Jean" />
          <input type="text" placeholder="Nom" defaultValue="Dupont" />
          <input type="email" placeholder="Email" defaultValue="jean.dupont@email.com" />
          <input type="text" placeholder="Téléphone" defaultValue="+212 6XX XXX XXX" />
          <select defaultValue="Casablanca">
            <option>Casablanca</option>
            <option>Rabat</option>
            <option>Marrakech</option>
          </select>
          <input type="number" placeholder="Âge" defaultValue="22" />
        </div>*/}
        <div className='input-row-student15'>
            <div className='input-group-student15'>
                <label>Prénom</label>
                <input type="text" placeholder="Prénom" defaultValue="Jean" />
            </div>
            <div className='input-group-student15'>
                <label>Nom</label>
                <input type="text" placeholder="Nom" defaultValue="Dupont" />
            </div>
        </div>
        <div className="input-row-student15">
          <div className="input-group-student15">
             <label>Email</label>
              <input type="email" placeholder="Email" defaultValue="jean.dupont@email.com" />
          </div>
           <div className="input-group-student15">
              <label>Téléphone</label>
              <input type="text" placeholder="Téléphone" defaultValue="+212 6XX XXX XXX" />
           </div>
       </div>
       <div className="input-row-student15">
          <div className="input-group-student15">
              <label>Ville</label>
              <select defaultValue="Casablanca">
                   <option>Casablanca</option>
                   <option>Rabat</option>
                   <option>Marrakech</option>
               </select>
           </div>
           <div className="input-group-student15">
               <label>Âge</label>
               <input type="number" placeholder="Âge" defaultValue="22" />
            </div>
       </div>
        <textarea
          className="bio-textarea-student15"
          rows="4"
          defaultValue="Étudiant en informatique passionné par le développement web et mobile. À la recherche d'un stage pour mettre en pratique mes compétences et contribuer à des projets innovants."
        />

        <hr className="separator-student15" />

        {/* Formation */}
        <h3>Formation</h3>
        {/*<div className="form-grid">
          <select defaultValue="Master 2">
            <option>Licence</option>
            <option>Master 1</option>
            <option>Master 2</option>
          </select>
          <select defaultValue="Informatique">
            <option>Informatique</option>
            <option>Mathématiques</option>
            <option>Physique</option>
          </select>
          <input type="text" placeholder="École/Université" defaultValue="École Nationale Supérieure d'Informatique" />
          <input type="text" placeholder="Année d'obtention" defaultValue="2024" />
        </div>*/}

        <div className='input-row-student15'>
            <div className="input-group-student15">
                <label>Niveau d'études</label>
                <select defaultValue="Master 2">
                  <option>Licence</option>
                  <option>Master 1</option>
                  <option>Master 2</option>
               </select>
            </div>
            <div className='input-group-student15'  >
                <label>Domaine d'études</label>
                <select defaultValue="Informatique">
                   <option>Informatique</option>
                   <option>Mathématiques</option>
                   <option>Physique</option>
               </select>
            </div>
        </div>
        <div className='input-row-student15'>
            <div className='input-group-student15'>
                <label>École/Université</label>
                <input type="text" placeholder="École/Université" defaultValue="École Nationale Supérieure d'Informatique" />
            </div>
            <div className='input-group-student15'>
                <label>Année d'obtention</label>
                <input type="text" placeholder="Année d'obtention" defaultValue="2024" />
            </div>
        </div>

        <hr className="separator-student15" />

        {/* Compétences */}
        <h3>Compétences</h3>
        <div className="competences-box-student15">
          {competences.map((item) => (
            <span className="competence-tag-student15" key={item}>
              {item} <button onClick={() => handleRemoveCompetence(item)}>×</button>
            </span>
          ))}
        </div>
        <div className="competence-input-student15">
          <input
            type="text"
            placeholder="Ajouter une compétence"
            value={competence}
            onChange={(e) => setCompetence(e.target.value)}
          />
          <button type="button" onClick={handleAddCompetence}>Ajouter</button>
        </div>

        {/* Boutons */}
        <div className="form-buttons-student15">
          <button type="button" className="btn-cancel-student15">Annuler</button>
          <button type="submit" className="btn-save-student15">Sauvegarder</button>
        </div>
      </form>
    </div>
  );
};

export default Modifier;
