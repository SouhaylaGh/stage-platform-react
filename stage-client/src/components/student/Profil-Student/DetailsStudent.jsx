import React from 'react';
import '../../../assets/styles/DetailsStudent.css'; 
import {FaAward,FaBuilding,FaFileAlt } from 'react-icons/fa';
import SidebarProfile from './SidebarInfo';

const DetailsStudent = () => {
  return (
    <div className="profile-container-Details-student11">
      <div className="profile-details-Details-student11">

      {/* Compétences techniques */}
      <section className="section-card-Details-student11">
        <h3><span className="icon-details-student11"><FaAward  /></span> Compétences techniques</h3>
        <div className="tags-Details-student11">
          {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'MongoDB', 'TypeScript'].map((tech) => (
            <span key={tech} className="tag-Details-student11">{tech}</span>
          ))}
        </div>
      </section>

      {/* Expérience */}
      <section className="section-card2-Details-student11">
        <h3><span className="icon-details2-student11"><FaBuilding /></span> Expérience</h3>
        <div className="experience-item-Details-student11">
          <h4>Stage Développement Web</h4>
          <p className="company">TechStart</p>
          <p className="duration">3 mois • 2023</p>
          <p className="desc">Développement d'une application web avec React et Node.js</p>
        </div>
        <div className="experience-item-Details-student11">
          <h4>Projet Personnel</h4>
          <p className="company">E-commerce Platform</p>
          <p className="duration">6 mois • 2023</p>
          <p className="desc">Création d'une plateforme e-commerce complète</p>
        </div>
      </section>

      {/* Projets */}
      <section className="section-card3-Details-student11">
        <h3><span className="icon-details2"><FaFileAlt  /></span> Projets</h3>

        <div className="project-item-Details-student11">
          <div>
            <h4>Application de Gestion de Tâches</h4>
            <p>Application web pour la gestion de projets et tâches</p>
            <div className="tags-Details-student11">
              <span className="tag-Details-student11">React</span>
              <span className="tag-Details-student11">Node.js</span>
              <span className="tag-Details-student11">MongoDB</span>
            </div>
          </div>
          
        </div>

        <div className="project-item-Details-student11">
          <div>
            <h4>Site Web Portfolio</h4>
            <p>Portfolio personnel responsive</p>
            <div className="tags-Details-student11">
              <span className="tag-Details-student11">Next.js</span>
              <span className="tag-Details-student11">Tailwind CSS</span>
            </div>
          </div>
          
        </div>
        
      </section>
      
      

      </div>
      <SidebarProfile />
    </div>
  );
};

export default DetailsStudent;
