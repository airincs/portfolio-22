import React, { FC } from "react";

const Skills: FC = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      <p className="font-custom3 text-xl">Skills/Technologies</p>
      <div className="grid gap-4 grid-cols-4 grid-row-3 font-custom1 mt-4 bg-gradient-to-r from-slate-200 to-slate-300 p-4 rounded-2xl shadow-xl shadow-black/25 border-black">
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
      <p>
        I also have experience in the backend (mongoose node express) however I
        am not as proficcient as i am in the front end
      </p>
    </div>
  );
};

export default Skills;
