import React, { FC } from "react";
import TextBlock from "../general/TextBlock";

const ProfessionalExperience: FC = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      <p className="font-custom3 text-xl">Professional Experience</p>
      <p className="font-custom2 text-lg pt-4 underline decoration-1 underline-offset-4 font-black">
        Statistical Consulting
      </p>
      <TextBlock
        text={
          "During University I studied Statistics with a Data Science focus."
        }
      />
      <p className="font-custom2 text-lg pt-4 underline decoration-1 underline-offset-4 font-black">
        Pharmacy Work
      </p>
      <TextBlock
        text={
          "During University I studied Statistics with a Data Science focus."
        }
      />
    </div>
  );
};

export default ProfessionalExperience;
