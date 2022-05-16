import React from "react";

type AppProps = {
  title: string;
  text: string;
};

const TextHeader = ({ title, text }: AppProps) => {
  return (
    <div className="flex flex-col items-center p-4 mt-8 antialiased tracking-wide shadow-inner shadow-black rounded-2xl bg-gradient-to-r from-slate-100 to-slate-50">
      <p className="font-custom3 text-4xl animate-bounce">{title}</p>
      <p className="font-custom1 text-base">{text}</p>
    </div>
  );
};

export default TextHeader;
