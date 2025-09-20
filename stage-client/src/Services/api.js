// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7040/api", 
  headers: {
    "Content-Type": "application/json",
  },
  
});

// Inscription étudiant
export const signupStudent = (data) => API.post("/Auth/signup/student", data);

// Inscription entreprise
export const signupEntreprise = (data) => API.post("/Auth/signup/entreprise", data);

// Connexion
export const loginStudent = (data) => API.post("/Auth/login/student", data);

// Connexion entreprise
export const loginCompany = (data) => API.post("/Auth/login/company", data);

// Créer une offre
export const createOffer = (data) => API.post("/InternshipOffers/create", data);

// Récupérer toutes les offres
export const getOffers = () => API.get("/InternshipOffers/all");

// Récupérer une offre par ID
export const getOfferById = (id) => API.get(`/InternshipOffers/${id}`);


// Création de profil + upload CV
export const createProfil = (formData) =>
  API.post("/Profil/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Obligatoire pour envoyer un fichier PDF
    },
  });

  // Mettre à jour un profil (PUT)
export const updateProfil = (id, formData) =>
  API.put(`/Profil/update/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data", // Toujours multipart pour gérer le CV
    },
  });

  // Récupérer le dernier profil
export const getLastProfil = async () => {
  const res = await API.get("/Profil/last");
  return res.data; // Retourne directement l'objet profil
};

// Télécharger le CV du dernier profil
export const getLastCv = async () => {
  const res = await API.get("/Profil/last/cv", {
    responseType: "blob", // Indique qu'on attend un fichier binaire (PDF)
  });
  return res.data;
};


export default API;

