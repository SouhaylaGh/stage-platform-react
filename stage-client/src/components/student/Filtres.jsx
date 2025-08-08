import React, { useState } from 'react';
import { Search, Filter as FilterIcon } from 'lucide-react';
import '../../assets/styles/Filter.css';
import DropdownSelect from './DropdownSelect';

const Filter = () => {
  const [selectedDomaine, setSelectedDomaine] = useState('Tous les domaines');
  const [selectedVille, setSelectedVille] = useState('Toutes les villes');

  const domaines = ['Informatique', 'Marketing', 'Finance', 'Design'];
  const villes = ['Casablanca', 'Rabat', 'Fès', 'Marrakech'];

  return (
    <div className="filter-container-student1 ">
      <div className="filter-header-student1 ">
        <FilterIcon size={20} className="filter-icon-student1 " />
        <h2 className="filter-title-student1 ">Filtres</h2>
      </div>

      <div className="filter-group-student1 ">
        <label>Recherche</label>
        <div className="search-box-student1">
          <Search size={20} className="search-icon-student1" />
          <input
            type="text"
            placeholder="Mot-clé, entreprise..."
            className="search-input-student1"
          />
        </div>
      </div>

      <DropdownSelect
        label="Domaine"
        options={domaines}
        selected={selectedDomaine}
        onChange={setSelectedDomaine}
      />

      <DropdownSelect
        label="Ville"
        options={villes}
        selected={selectedVille}
        onChange={setSelectedVille}
      />

      <button className="reset-button-student1">Réinitialiser</button>
    </div>
  );
};

export default Filter;
