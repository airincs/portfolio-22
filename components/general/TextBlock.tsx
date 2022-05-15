import React from "react";

type AppProps = {
  title?: String;
  text: String;
};

const TextBlock = ({ title, text }: AppProps) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-slate-100 to-slate-50 p-8 rounded-2xl shadow-inner shadow-black">
      <p className="font-custom3 text-xl">{title}</p>
      <div className="bg-gradient-to-r from-slate-200 to-slate-300 mt-4 p-4 rounded-2xl shadow-xl shadow-black/25 border-black">
        <p className="font-custom1">{text}</p>
      </div>
    </div>
  );
};

export default TextBlock;
