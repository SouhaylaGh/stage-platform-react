import React from "react";
import Filter from "../components/student/Filtres";
import NavStudent from "../components/student/NavStudent";
import Offres from "../components/student/Offres";
import StagesRecommandes from "../components/student/StagesRecommandes";

const OffresStage = () =>{
    return(
        <>
          <NavStudent/>
          <Filter/>
          <StagesRecommandes/>
          <Offres/>

        </>
    )
    
}
export default OffresStage;