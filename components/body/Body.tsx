import React, { FC } from "react";
import BodyHeader from "./BodyHeader";
import Model from "./Model";
import About from "./About";

const Body: FC = () => {
  return (
    <div>
      <BodyHeader />
      <Model />
      <About />
    </div>
  );
};

export default Body;
