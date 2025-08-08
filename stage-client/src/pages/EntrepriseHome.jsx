import React from "react";
import NavEntreprise from "../components/entreprise/NavEntreprise";
import DashboardEntreprise from "../components/entreprise/DashboardEntreprise";

const EntrepriseHome = ()=>{
    return(
       <>
         <NavEntreprise/>
         <DashboardEntreprise/>
       </>
    );
};
export default EntrepriseHome;