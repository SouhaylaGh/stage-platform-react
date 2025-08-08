import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../assets/styles/Filter.css';

const DropdownSelect = ({ label, options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Fermer le menu quand on clique à l’extérieur
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="filter-group-student1" ref={ref}>
      <label>{label}</label>
      <div
        className="custom-select-student1 "
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selected}</span>
        <ChevronDown size={16} />
      </div>
      {open && (
        <div className="dropdown-options-student1">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-option-student1 "
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
