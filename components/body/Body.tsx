import React, { FC } from "react";
import BodyHeader from "./BodyHeader";
import Model from "./Model";
import About from "./About";
import Skills from "./Skills";
import ProfessionalExperience from "./ProfessionalExperience";

const Body: FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <BodyHeader />
      <Model />
      <About />
      <Skills />
      <ProfessionalExperience />
    </div>
  );
};

export default Body;
