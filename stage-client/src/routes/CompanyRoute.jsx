import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";

const CompanyRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAuthorized(false);
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const role = decoded.roleType || decoded.role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      setAuthorized(role?.toLowerCase() === "entreprise");
    } catch (error) {
      console.error("Erreur lors du décodage du token :", error);
      setAuthorized(false);
    }

    setLoading(false);
  }, []);

  // Pendant la vérification, on affiche un petit texte ou un spinner
  if (loading) return <div>Chargement...</div>;

  // Si pas autorisé, redirection vers login
  if (!authorized) return <Navigate to="/login" replace />;

  return children;
};

export default CompanyRoute;

