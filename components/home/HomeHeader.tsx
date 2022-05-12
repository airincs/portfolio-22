import React, { FC } from "react";

const BodyHeader: FC = () => {
  return (
    <div className="flex flex-col items-center p-4 mt-8 antialiased tracking-wide shadow-inner shadow-black rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50">
      <p className="font-custom3 text-4xl">Noah Fisher</p>
      <p className="font-custom1 text-base">Front-End Developer</p>
    </div>
  );
};

export default BodyHeader;
