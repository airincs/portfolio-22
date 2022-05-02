import React, { FC } from "react";
import BodyHeader from "./BodyHeader";
import Model from "./Model";
import About from "./About";
import Skills from "./Skills";

const Body: FC = () => {
  return (
    <React.Fragment>
      <BodyHeader />
      <Model />
      <About />
      <Skills />
    </React.Fragment>
  );
};

export default Body;
