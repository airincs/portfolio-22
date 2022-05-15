import React, { FC } from "react";

const ProfessionalExperience: FC = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      <p className="font-custom3 text-xl">Professional Experience</p>
      <p className="font-custom2 text-lg pt-4 underline decoration-1 underline-offset-4 font-black">
        Statistical Consulting
      </p>
      <p className="font-custom1 pt-4 bg-gradient-to-r from-slate-200 to-slate-300 mt-4 p-4 rounded-2xl shadow-xl shadow-black/25 border-black">
        During University I studied Statistics with a Data Science focus. One
        day I had started learning how to web scrape with Python...
      </p>
      <p className="font-custom2 text-lg pt-4 underline decoration-1 underline-offset-4 font-black">
        Pharmacy Work
      </p>
      <p className="font-custom1 pt-4 bg-gradient-to-r from-slate-200 to-slate-300 mt-4 p-4 rounded-2xl shadow-xl shadow-black/25 border-black">
        During University I studied Statistics with a Data Science focus. One
        day I had started learning how to web scrape with Python...
      </p>
    </div>
  );
};

export default ProfessionalExperience;
