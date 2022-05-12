import React, { FC } from "react";
import HomeHeader from "./HomeHeader";
import HomeModel from "./HomeModel";
import About from "./About";
import Skills from "./Skills";
import ProfessionalExperience from "./ProfessionalExperience";

const Body: FC = () => {
  return (
    <div className="flex flex-col justify-center gap-y-8">
      <HomeHeader />
      <HomeModel />
      <About />
      <Skills />
      <ProfessionalExperience />
    </div>
  );
};

export default Body;
