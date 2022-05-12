import React, { FC } from "react";

const About: FC = () => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      <p className="font-custom3 text-xl underline decoration-4 underline-offset-8">
        About Me
      </p>
      <div className="bg-gradient-to-r from-slate-100 to-slate-200 mt-4 p-4 rounded-2xl shadow-xl shadow-black/25 border-black">
        <p className="font-custom1">
          During University I studied Statistics with a Data Science focus. One
          day I had started learning how to web scrape with Python...
        </p>
      </div>
    </div>
  );
};

export default About;
