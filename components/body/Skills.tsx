import React, { FC } from "react";

const Skills: FC = () => {
  return (
    <div className="flex flex-col m-16">
      <p className="font-custom3 text-xl underline decoration-4 underline-offset-8">
        Skills/Technologies
      </p>
      <div className="grid gap-4 grid-cols-4 grid-row-3 font-custom1 mt-4">
        <span>React</span>
        <span>TypeScript</span>
        <span>CSS</span>
        <span>Git</span>
        <span>NextJS</span>
        <span>Javascript</span>
        <span>TailwindCSS</span>
        <span>ThreeJS</span>
        <span>Redux</span>
        <span>Python</span>
        <span>Chakra UI</span>
        <span>HTML5</span>
      </div>
    </div>
  );
};

export default Skills;
