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

const SidebarProfile = () => {
  return (
    <aside className="sidebar-student13">
      {/* Contact */}
      <div className="sidebar-section-student13">
        <h3><Mail className="icon1-student13" /> Contact</h3>
        <p><Mail className="icon-sidebar-student13" /> jean.dupont@email.com</p>
        <p><Phone className="icon-sidebar-student13" /> +212 6XX XXX XXX</p>
        <p><MapPin className="icon-sidebar-student13" /> Casablanca</p>
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
      <div className="sidebar-section-student13">
        <h3><FileText className="icon1-student13" /> Mon CV</h3>
        <div className="cv-box-student13">
          <div className="cv-info-student13">
            <p className="cv-name-student13">jean_dupont_cv.pdf</p>
            <p className="cv-meta-student13">2.3 MB • 2024-01-15</p>
          </div>
        </div>
        <button className="btn-download-student13">
          <Download className="icon3-student13" size={16} />
          Télécharger
        </button>
      </div>
    </aside>
  );
};

export default SidebarProfile;
