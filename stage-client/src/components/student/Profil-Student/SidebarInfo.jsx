import {
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  BadgeCheck,
  Download,
} from 'lucide-react';
import '../../../assets/styles/SidebarInfo.css';
import {getLastProfil, getLastCv} from "../../../Services/api";
import React, { useEffect, useState } from "react";

const SidebarProfile = () => {
  const [profil, setProfil] = useState(null);

   useEffect(() => {
    (async () => {
      try {
        const data = await getLastProfil();
        setProfil(data);
      } catch (e) {
        console.error("❌ Erreur profil :", e);
      }
    })();
  }, []);

  const handleDownloadCv = async () => {
    try {
      const blob = await getLastCv();
      const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = "cv.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (e) {
      console.error("❌ Erreur téléchargement CV :", e);
    }
  };

  if (!profil) return <aside className="sidebar-student13"><p>Chargement...</p></aside>;

  const cvName = profil.cvPath ? profil.cvPath.split(/[/\\]/).pop() : null;

  return (
    <aside className="sidebar-student13">
      {/* Contact */}
      <div className="sidebar-section-student13">
        <h3><Mail className="icon1-student13" /> Contact</h3>
        <p><Mail className="icon-sidebar-student13" />{profil.email || "-"}</p>
        <p><Phone className="icon-sidebar-student13" />{profil.telephone || "-"}</p>
        <p><MapPin className="icon-sidebar-student13" />{profil.ville || "-"}</p>
      </div>

      {/* Langues */}
      <div className="sidebar-section-student13">
        <h3><Globe className="icon1-student13" /> Langues</h3>
        <ul className="languages-student13">
          <li>Français <span className="badge-student13">Natif</span></li>
          <li>Anglais <span className="badge-student13">Courant</span></li>
          <li>Arabe <span className="badge-student13">Natif</span></li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="sidebar-section-student13">
        <h3><BadgeCheck className="icon1-student13" /> Certifications</h3>
        <div className="cert-student13">
          <p>JavaScript Algorithms and Data Structures</p>
          <span className="source">freeCodeCamp • 2023</span>
        </div>
        <div className="cert-student13">
          <p>React Developer Certification</p>
          <span className="source">Meta • 2023</span>
        </div>
      </div>

      {/* Mon CV */}
      {/* Mon CV */}
<div className="sidebar-section-student13">
  <h3><FileText className="icon1-student13" /> Mon CV</h3>
  {profil.cvPath ? (
    <>
      <div className="cv-box-student13">
        <div className="cv-info-student13">
          <p className="cv-name-student13">{cvName}</p>
        </div>
      </div>

      {/* Voir en ligne (blob) */}
      <button
        className="btn-download-student13"
        style={{ marginBottom: 8 }}
        onClick={async () => {
          try {
            const blob = await getLastCv();
            const url = window.URL.createObjectURL(new Blob([blob], { type: "application/pdf" }));
            window.open(url, "_blank"); // ouvre dans un nouvel onglet
          } catch (e) {
            console.error("❌ Erreur ouverture CV :", e);
          }
        }}
      >
        Voir en ligne
      </button>

      {/* Télécharger (blob) */}
      <button className="btn-download-student13" onClick={handleDownloadCv}>
        <Download className="icon3-student13" size={16} />
        Télécharger
      </button>
    </>
  ) : (
    <p>❌ Aucun CV uploadé</p>
  )}
  </div>

    </aside>
  );
};

export default SidebarProfile;
