import React, { useState } from 'react';
import '../../../assets/styles/Modifier.css';
import {createProfil , updateProfil} from "../../../Services/api";

const Modifier = () => {
  const [competence, setCompetence] = useState('');
  const [competences, setCompetences] = useState([
    'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'MongoDB', 'TypeScript'
  ]);
  const [cvFile, setCvFile] = useState(null);

  const [dataform,setDataForm] = useState({
    Prenom:"",
    Nom:"",
    Email:"",
    Telephone:"",
    Ville:"",
    Age:"",
    Biographie:"",
    NiveauEtudes:"",
    Domain:"",
    Ecole:"",
    AnneObtion:"",
    Competances:[],
    
  });

  const handleAddCompetence = () => {
    if (competence && !competences.includes(competence)) {
      const updatedCompetance  = [...competences, competence];
      setCompetences(updatedCompetance );
      setDataForm({...dataform,Competances: updatedCompetance });
      setCompetence('');
    }
  };

  const handleRemoveCompetence = (item) => {
    const updatedCompetance = competences.filter((c) => c !== item);
    setCompetences(updatedCompetance );
    setDataForm({...dataform,Competances:updatedCompetance })
  };

  const handleCvChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setCvFile(file);
    } else {
      alert("Veuillez sélectionner un fichier PDF uniquement.");
    }
  };

  const handleCvRemove = () => {
    setCvFile(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDataForm({
      ...dataform,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Ajouter les champs texte
      Object.keys(dataform).forEach((key) => {
        if (key === "Competances") {
          dataform.Competances.forEach((comp) => {
            formDataToSend.append("Competances", comp);
          });
        } else {
          formDataToSend.append(key, dataform[key]);
        }
      });

      // Ajouter le fichier PDF
      if (cvFile) {
        formDataToSend.append("CvFile", cvFile);
      }
      if (dataform.id) {
        await updateProfil(dataform.id, formDataToSend);
        alert("✅ Profil mis à jour !");
      } else {
      await createProfil(formDataToSend);
      alert("✅ Profil créé !");
      }
      console.log("FormData envoyé :", dataform);
      } catch (error) {
        console.error("❌ Erreur lors de la sauvegarde du profil :", error);
  
      };
  }

  return (
    <div className="modifier-profil-container-student15">
      <h2>Modifier mon profil</h2>
      <p className="subtitle-modifier-profil-student15">Mettez à jour vos informations personnelles et professionnelles</p>

      <form className="form-profil-modifier-profil-student15" onSubmit={handleSubmit}>
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
                <input type="text" name='Prenom' value={dataform.Prenom} onChange={handleChange} placeholder="Prénom" defaultValue="Jean" />
            </div>
            <div className='input-group-student15'>
                <label>Nom</label>
                <input type="text" name='Nom' value={dataform.Nom} onChange={handleChange} placeholder="Nom" defaultValue="Dupont" />
            </div>
        </div>
        <div className="input-row-student15">
          <div className="input-group-student15">
             <label>Email</label>
              <input type="email" name='Email' value={dataform.Email} onChange={handleChange} placeholder="Email" defaultValue="jean.dupont@email.com" />
          </div>
           <div className="input-group-student15">
              <label>Téléphone</label>
              <input type="text" name='Telephone' value={dataform.Telephone} onChange={handleChange} placeholder="Téléphone" defaultValue="+212 6XX XXX XXX" />
           </div>
       </div>
       <div className="input-row-student15">
          <div className="input-group-student15">
              <label>Ville</label>
              <select name='Ville' value={dataform.Ville} onChange={handleChange}>
                   <option value="">Sélectionnez une ville</option>
                   <option>Casablanca</option>
                   <option>Rabat</option>
                   <option>Marrakech</option>
               </select>
           </div>
           <div className="input-group-student15">
               <label>Âge</label>
               <input type="number" name='Age' value={dataform.Age} onChange={handleChange} placeholder="Âge" defaultValue="22" />
            </div>
       </div>
        <textarea
          name='Biographie'
          value={dataform.Biographie}
          onChange={handleChange}
          className="bio-textarea-student15"
          rows="4"
          placeholder="Étudiant en informatique passionné par le développement web et mobile. À la recherche d'un stage pour mettre en pratique mes compétences et contribuer à des projets innovants."
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
                <select defaultValue="Master 2" name='NiveauEtudes'value={dataform.NiveauEtudes} onChange={handleChange}>
                  <option value="Licence">Licence</option>
                  <option value="Master1">Master 1</option>
                  <option value="Master2">Master 2</option>
               </select>
            </div>
            <div className='input-group-student15'  >
                <label>Domaine d'études</label>
                <select defaultValue="Informatique" name='Domain' value={dataform.Domain} onChange={handleChange}>
                   <option value="Data">Data</option>
                   <option value="Informatique">Informatique</option>
                   <option value="Mathematiques">Mathématiques</option>
                   <option value="Physique">Physique</option>
               </select>
            </div>
        </div>
        <div className='input-row-student15'>
            <div className='input-group-student15'>
                <label>École/Université</label>
                <input type="text" name='Ecole' value={dataform.Ecole} onChange={handleChange} placeholder="École/Université" defaultValue="École Nationale Supérieure d'Informatique" />
            </div>
            <div className='input-group-student15'>
                <label>Année d'obtention</label>
                <input type="text" name='AnneObtion' value={dataform.AnneObtion} onChange={handleChange} placeholder="Année d'obtention" defaultValue="2024" />
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

         {/* Nouvelle section pour le CV */}
         <h3>Ajouter votre CV</h3>
         <div className="cv-upload-container-student15">
           <label className="cv-label-student15">Télécharger un fichier PDF</label>
           <div className="cv-upload-wrapper-student15">
             <input
               type="file"
               id="cvInput"
               accept="application/pdf"
               onChange={handleCvChange}
               className="cv-input-hidden-student15"
              />
              <label
                htmlFor="cvInput"
                className="btn-upload-cv-student15"
              >
               {cvFile ? "Changer de fichier" : "Choisir un fichier"}
             </label>

             {cvFile && (
               <div className="cv-file-info-student15">
                  <span className="cv-file-name-student15">📄 {cvFile.name}</span>
                  <button
                   type="button"
                   className="btn-remove-cv-student15"
                   onClick={handleCvRemove}
                  >
                    Supprimer
                 </button>
               </div>
              )}
            </div>
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
