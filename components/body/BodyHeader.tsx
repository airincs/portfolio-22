import React, { FC } from "react";

const BodyHeader: FC = () => {
  return (
    <div className="flex flex-col items-center antialiased tracking-wide shadow-xl rounded-2xl">
      <p className="mt-4 font-custom3 text-4xl">Noah Fisher</p>
      <p className="mb-4 font-custom1 text-base">Front-End Developer</p>
    </div>
  );
};

export default BodyHeader;
