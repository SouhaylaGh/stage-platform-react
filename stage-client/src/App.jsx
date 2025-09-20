import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import StudentHome from './pages/StudentHome'
import OffresStage from './pages/OffresStage'
import Profil from './pages/Profil'
import ProfilContainer from './pages/ProfilContainer'
import NavEntreprise from './components/entreprise/NavEntreprise';
import DashboardEntreprise from './components/entreprise/DashboardEntreprise';
import StartStepsCard from './components/entreprise/StartStepsCard';
import EntrepriseHome from './pages/EntrepriseHome';
import OffreEntreprise from './components/entreprise/OffreEntreprise';
import InternshipForm from './components/entreprise/InternshipForm';
import DashboardPage from './pages/DashboardPage';
import DétailsOffre from './components/entreprise/DétailsOffre';
import DétailsOffrePage from './pages/DétailsOffrePage';
import OffresEntreprise from './pages/OffresEntreprise';
import Login from './pages/Login';
import Signup from './pages/signup';
import StudentRoute from './routes/StudentRoute'
import CompanyRoute from './routes/CompanyRoute';


function App() {

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        {/* Routes  ETUDIANT */}
        <Route path="/student-home" element={<StudentRoute> <StudentHome /> </StudentRoute> }/>
        <Route path="/offres" element={<OffresStage />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/ProfilContainer" element={<ProfilContainer />} />
        <Route path="/DétailsOffrePage" element={<DétailsOffrePage/>} />
        {/* Routes ENTREPRISE */}
        <Route path="/Entreprise" element={<EntrepriseHome/>} />
        <Route path="/create" element={<OffresEntreprise/>} />
        <Route path="/Dashboard" element={<DashboardPage/>} />
        <Route path="/company-home" element={<CompanyRoute> <EntrepriseHome /> </CompanyRoute>}/>
      </Routes>
   </Router>
  )
}

export default App
