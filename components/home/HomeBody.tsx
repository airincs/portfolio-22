import React, { FC } from "react";
import HomeHeader from "./HomeHeader";
import HomeModel from "./HomeModel";
import About from "./About";
import Skills from "./Skills";
import ProfessionalExperience from "./ProfessionalExperience";
import TextBlock from "../general/TextBlock";

const Body: FC = () => {
  return (
    <div className="flex flex-col justify-center gap-y-8">
      <HomeModel />
      <HomeHeader />
      <TextBlock
        title={"About"}
        text={
          "During University I studied Statistics with a Data Science focus. One day I had started learning how to web scrape with Python..."
        }
      />
      <Skills />
      <ProfessionalExperience />
    </div>
  );
};

export default Body;
